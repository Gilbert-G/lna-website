/**
 * Mail helper (contact / demo-request / newsletter notifications).
 *
 * Sends via Google Workspace SMTP relay — NO provider account, NO API keys.
 * The relay authenticates by source IP, so no SMTP credentials are needed here.
 *
 * Env:
 *   SMTP_HOST          — relay host (default smtp-relay.gmail.com)
 *   SMTP_PORT          — default 587 (STARTTLS)
 *   SMTP_NAME          — EHLO/HELO greeting name; must be an FQDN (default lnaflow.com)
 *   SMTP_LOCAL_ADDRESS — bind outbound socket to a source IP (e.g. the allowlisted IPv4)
 *   SMTP_USER/PASS     — only if the relay requires SMTP AUTH (leave unset for IP auth)
 *   SMTP_FROM          — verified sender (default noreply@lnaflow.com)
 *   SMTP_FROM_NAME     — display name (default "LNA")
 *   CONTACT_INBOX      — where notifications are delivered (default hello@lnaflow.com)
 *
 * NOTE: `noreply@lnaflow.com` needs no mailbox — sending is authorised by the
 * relay setting, and replies are routed via Reply-To to the visitor.
 */

import nodemailer from "nodemailer";
import dns from "node:dns";

// This host has both IPv4 (137.74.172.61) and an IPv6 address. The Google Workspace
// SMTP relay allowlist is IPv4-only, so if Node resolves the relay to its AAAA record
// the source address is unauthorised and Google answers "421 4.7.0 Try again later"
// at EHLO. Prefer IPv4 for outbound lookups.
dns.setDefaultResultOrder("ipv4first");

function env(key: string, fallback: string): string {
  const v = process.env[key];
  return v && v.length > 0 ? v : fallback;
}

function smtpHost(): string {
  return env("SMTP_HOST", "smtp-relay.gmail.com");
}

export function mailConfigured(): boolean {
  // Gate on SMTP_HOST being explicitly set, so local/preview runs fall back
  // to logging instead of attempting a send that can't work.
  return Boolean(process.env.SMTP_HOST);
}

/** Escape user-controlled values before interpolating into an HTML email body.
 *  Never applied to the subject line (subjects are plain text, not HTML). */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Transporter = ReturnType<typeof nodemailer.createTransport>;

let cached: Transporter | null = null;

function transporter(): Transporter {
  if (cached) return cached;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  // Bind the outbound socket to a specific source address (the relay's IP allowlist
  // is IPv4-only). nodemailer has no `family` option; localAddress is the supported
  // way to guarantee the IPv4 source.
  const localAddress = process.env.SMTP_LOCAL_ADDRESS;

  cached = nodemailer.createTransport({
    host: smtpHost(),
    port: Number(env("SMTP_PORT", "587")),
    secure: false, // 587 = STARTTLS
    requireTLS: true,
    // Greeting name sent with EHLO/HELO. MUST be an FQDN: the default is the machine
    // hostname (e.g. "vps-bc2f4201"), which Google's relay rejects with 421 4.7.0.
    name: env("SMTP_NAME", "lnaflow.com"),
    ...(localAddress ? { localAddress } : {}),
    ...(user && pass ? { auth: { user, pass } } : {}),
    connectionTimeout: 15000,
    greetingTimeout: 15000,
  });

  return cached;
}

interface SendArgs {
  to?: string;
  replyTo?: { email: string; name?: string };
  subject: string;
  html: string;
}

export type SendResult =
  | { ok: true }
  | { ok: false; skipped: true }
  | { ok: false; skipped?: false; error: string };

export async function sendMail({
  to,
  replyTo,
  subject,
  html,
}: SendArgs): Promise<SendResult> {
  if (!mailConfigured()) return { ok: false, skipped: true };

  const fromAddress = env("SMTP_FROM", "noreply@lnaflow.com");
  const fromName = env("SMTP_FROM_NAME", "LNA");
  const inbox = env("CONTACT_INBOX", "hello@lnaflow.com");

  try {
    await transporter().sendMail({
      from: { name: fromName, address: fromAddress },
      to: to ?? inbox,
      replyTo: replyTo
        ? { name: replyTo.name ?? "", address: replyTo.email }
        : undefined,
      subject,
      html,
    });
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("SMTP send failed:", message);
    return { ok: false, error: message };
  }
}
