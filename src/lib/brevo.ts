/**
 * Brevo transactional email helper (shared by the contact + demo-request forms).
 *
 * Env:
 *   BREVO_API_KEY        — Brevo API key (v3). When unset, sending is skipped and
 *                          the caller falls back to a server-side log (dev/local).
 *   BREVO_SENDER_EMAIL   — verified sender address (default noreply@lnaflow.com)
 *   BREVO_SENDER_NAME    — sender display name (default "LNA")
 *   BREVO_CONTACT_INBOX  — where form notifications are delivered (default hello@lnaflow.com)
 */

const BREVO_SMTP_EMAIL_API = "https://api.brevo.com/v3/smtp/email";

export const BREVO_SENDER_EMAIL =
  process.env.BREVO_SENDER_EMAIL ?? "noreply@lnaflow.com";
export const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME ?? "LNA";
export const BREVO_CONTACT_INBOX =
  process.env.BREVO_CONTACT_INBOX ?? "hello@lnaflow.com";

export function brevoConfigured(): boolean {
  return Boolean(process.env.BREVO_API_KEY);
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

interface SendArgs {
  to?: string;
  replyTo?: { email: string; name?: string };
  subject: string;
  html: string;
}

export type SendResult =
  | { ok: true }
  | { ok: false; skipped: true }
  | { ok: false; skipped?: false; status: number };

export async function sendTransactionalEmail({
  to = BREVO_CONTACT_INBOX,
  replyTo,
  subject,
  html,
}: SendArgs): Promise<SendResult> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { ok: false, skipped: true };
  }

  const res = await fetch(BREVO_SMTP_EMAIL_API, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME },
      to: [{ email: to }],
      ...(replyTo ? { replyTo } : {}),
      subject,
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Brevo transactional email error:", res.status, detail);
    return { ok: false, status: res.status };
  }

  return { ok: true };
}
