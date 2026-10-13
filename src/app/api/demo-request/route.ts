import { NextResponse } from "next/server";
import {
  mailjetConfigured,
  escapeHtml,
  sendTransactionalEmail,
  MAILJET_CONTACT_INBOX,
} from "@/lib/mailjet";

interface DemoRequestBody {
  name: string;
  email: string;
  company: string;
  role: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: DemoRequestBody = await request.json();
    const { name, email, company, role, message } = body;

    // Validate required fields
    if (!name || !email || !company || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!mailjetConfigured()) {
      console.warn(
        "Demo request received but Mailjet keys are not set — email NOT sent:",
        { name, email, company, role, message }
      );
      return NextResponse.json({ success: true, delivered: false });
    }

    const result = await sendTransactionalEmail({
      to: MAILJET_CONTACT_INBOX,
      replyTo: { email, name },
      subject: `Demande de démo — ${name} (${company})`,
      html: `
        <h2>Nouvelle demande de démo</h2>
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Société:</strong> ${escapeHtml(company)}</p>
        <p><strong>Fonction:</strong> ${escapeHtml(role)}</p>
        ${message ? `<p><strong>Message:</strong> ${escapeHtml(message)}</p>` : ""}
      `,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: "Failed to send notification" },
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
