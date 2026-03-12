import { NextResponse } from "next/server";

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

    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.BREVO_LIST_ID;

    if (brevoApiKey && brevoListId) {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          listIds: [parseInt(brevoListId, 10)],
          updateEnabled: true,
          attributes: {
            DOUBLE_OPT_IN: true,
            OPT_IN_DATE: new Date().toISOString(),
          },
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));

        // Brevo returns "duplicate_parameter" for existing contacts
        if (errorData.code === "duplicate_parameter") {
          return NextResponse.json({ success: true, already_subscribed: true });
        }

        console.error("Brevo API error:", errorData);
        return NextResponse.json(
          { error: "Failed to subscribe. Please try again." },
          { status: 500 }
        );
      }
    } else {
      // Dev/testing fallback
      console.log("Newsletter signup (BREVO_API_KEY not set):", { email });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
