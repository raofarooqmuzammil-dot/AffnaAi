export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message, source } = body;

    if (!email || !message) {
      return Response.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    // Lead capture stub. Replace this with your email / CRM integration:
    //  - Send to Resend / Postmark / SendGrid
    //  - POST to a webhook (Zapier, Make)
    //  - Insert into a database (Supabase, Neon, etc.)
    console.log("[AFFNAAI LEAD]", {
      receivedAt: new Date().toISOString(),
      source: source || "contact-form",
      name,
      email,
      company,
      message,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
