import { NextResponse } from "next/server";
import { mailConfigured, escapeHtml, sendMail } from "@/lib/mailer";

/**
 * Newsletter signup.
 *
 * The transactional relay (Google Workspace SMTP) can send mail but cannot hold
 * a contact list, and the previous provider's list API is not reachable. So for
 * launch, each signup is delivered to the contact inbox instead of being stored —
 * no signup is lost, and it can be imported into a real list provider later.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

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

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
