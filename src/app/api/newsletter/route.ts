import { NextResponse } from "next/server";
import { mailConfigured, escapeHtml, sendMail } from "@/lib/mailer";

/**
 * Newsletter signup.
 *
 * The transactional relay (Google Workspace SMTP) can send mail but cannot hold
 * a contact list, and the previous provider's list API is not reachable. So for
 * launch, each signup is delivered to the contact inbox instead of being stored —
 * no signup is lost, and it can be imported into a real list provider later.
 *
 * The subscriber also receives a confirmation. Previously only the internal inbox
 * was notified, so a signup produced no acknowledgement for the person who signed
 * up and could not be double-opt-in verified (QA finding Pravin #6).
 */

const CONFIRMATION = {
  fr: {
    subject: "Votre inscription à la newsletter LNA",
    heading: "Merci — votre inscription est bien enregistrée.",
    body: "Vous recevrez les actualités produit de LNA et nos publications sur le traitement documentaire. Pour vous désinscrire, il suffit de répondre à cet email.",
    signoff: "L'équipe LNA",
  },
  en: {
    subject: "Your LNA newsletter subscription",
    heading: "Thank you — your subscription is confirmed.",
    body: "You will receive LNA product news and our writing on document processing. To unsubscribe, simply reply to this email.",
    signoff: "The LNA team",
  },
} as const;

type Locale = keyof typeof CONFIRMATION;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, locale } = body as { email?: string; locale?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!mailConfigured()) {
      console.log("Newsletter signup (SMTP_HOST not set):", { email });
      return NextResponse.json({ success: true, delivered: false });
    }

    // 1. Internal notification — this is the durable record of the signup.
    const result = await sendMail({
      replyTo: { email },
      subject: `Newsletter signup — ${email}`,
      html: `
        <h2>Nouvelle inscription à la newsletter</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p>À importer dans le vrai gestionnaire de liste (post-lancement).</p>
      `,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    // 2. Confirmation to the subscriber. A failure here must NOT fail the signup:
    //    the signup is already recorded by the notification above.
    const key: Locale = locale === "en" ? "en" : "fr";
    const copy = CONFIRMATION[key];
    const confirmed = await sendMail({
      to: email,
      replyTo: { email: "hello@lnaflow.com" },
      subject: copy.subject,
      html: `
        <h2>${copy.heading}</h2>
        <p>${copy.body}</p>
        <p>${copy.signoff}</p>
      `,
    });

    if (!confirmed.ok) {
      console.error("Newsletter confirmation failed", { confirmed });
    }

    return NextResponse.json({ success: true, confirmed: confirmed.ok });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
