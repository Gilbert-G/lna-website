import { NextResponse } from "next/server";
import { mailjetConfigured, addToContactList } from "@/lib/mailjet";

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

    if (!mailjetConfigured()) {
      console.log("Newsletter signup (Mailjet keys not set):", { email });
      return NextResponse.json({ success: true, delivered: false });
    }

    const result = await addToContactList(email);
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
