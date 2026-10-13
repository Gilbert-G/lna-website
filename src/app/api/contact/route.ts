import { NextResponse } from "next/server";
import {
  mailjetConfigured,
  escapeHtml,
  sendTransactionalEmail,
  MAILJET_CONTACT_INBOX,
} from "@/lib/mailjet";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, reason, message } = body;

    if (!name || !email || !reason || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!mailjetConfigured()) {
      console.warn(
        "Contact form received but Mailjet keys are not set — email NOT sent:",
        { name, email, reason, message }
      );
      return NextResponse.json({ success: true, delivered: false });
    }

    const result = await sendTransactionalEmail({
      to: MAILJET_CONTACT_INBOX,
      replyTo: { email, name },
      subject: `Contact — ${name} (${reason})`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Motif:</strong> ${escapeHtml(reason)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: "Failed to send message" },
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
