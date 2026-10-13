/**
 * Mailjet helper (shared by the contact / demo-request forms + the newsletter).
 *
 * Env:
 *   MJ_APIKEY_PUBLIC    — Mailjet API Key (public; also used as the SMTP username)
 *   MJ_APIKEY_PRIVATE   — Mailjet Secret Key (private; also the SMTP password)
 *   MAILJET_SENDER_EMAIL  — verified sender (default noreply@lnaflow.com)
 *   MAILJET_SENDER_NAME   — sender display name (default "LNA")
 *   MAILJET_CONTACT_INBOX — where form notifications are delivered (default hello@lnaflow.com)
 *   MAILJET_LIST_ID       — contact-list id for newsletter signups
 *
 * When the keys are unset, sending is skipped and the caller logs a warning (dev/local).
 */

const MAILJET_SEND_API = "https://api.mailjet.com/v3.1/send";
const MAILJET_REST = "https://api.mailjet.com/v3/REST";

export const MAILJET_SENDER_EMAIL =
  process.env.MAILJET_SENDER_EMAIL ?? "noreply@lnaflow.com";
export const MAILJET_SENDER_NAME = process.env.MAILJET_SENDER_NAME ?? "LNA";
export const MAILJET_CONTACT_INBOX =
  process.env.MAILJET_CONTACT_INBOX ?? "hello@lnaflow.com";

/** HTTP Basic auth from the API key pair, or null when unconfigured. */
function authHeader(): string | null {
  const pub = process.env.MJ_APIKEY_PUBLIC;
  const priv = process.env.MJ_APIKEY_PRIVATE;
  if (!pub || !priv) return null;
  return "Basic " + Buffer.from(`${pub}:${priv}`).toString("base64");
}

export function mailjetConfigured(): boolean {
  return authHeader() !== null;
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
  to = MAILJET_CONTACT_INBOX,
  replyTo,
  subject,
  html,
}: SendArgs): Promise<SendResult> {
  const auth = authHeader();
  if (!auth) return { ok: false, skipped: true };

  const message: Record<string, unknown> = {
    From: { Email: MAILJET_SENDER_EMAIL, Name: MAILJET_SENDER_NAME },
    To: [{ Email: to }],
    Subject: subject,
    HTMLPart: html,
  };
  if (replyTo)
    message.ReplyTo = { Email: replyTo.email, Name: replyTo.name ?? "" };

  const res = await fetch(MAILJET_SEND_API, {
    method: "POST",
    headers: { Authorization: auth, "Content-Type": "application/json" },
    body: JSON.stringify({ Messages: [message] }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Mailjet send error:", res.status, detail);
    return { ok: false, status: res.status };
  }

  // HTTP 200 still carries a per-message status — surface non-successes.
  const data = await res.json().catch(() => null);
  const status = data?.Messages?.[0]?.Status;
  if (status && status !== "success") {
    console.error("Mailjet message not delivered:", JSON.stringify(data));
    return { ok: false, status: 200 };
  }

  return { ok: true };
}

/** Subscribe an email to a Mailjet contact list. `addnoforce` is idempotent-friendly:
 *  existing contacts are accepted rather than erroring. */
export async function addToContactList(email: string): Promise<SendResult> {
  const auth = authHeader();
  const listId = process.env.MAILJET_LIST_ID;
  if (!auth || !listId) return { ok: false, skipped: true };

  const res = await fetch(
    `${MAILJET_REST}/contactslist/${listId}/managecontact`,
    {
      method: "POST",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({ Email: email, Action: "addnoforce" }),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Mailjet contact-list error:", res.status, detail);
    return { ok: false, status: res.status };
  }
  return { ok: true };
}
