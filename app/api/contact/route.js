export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, firstQuestion, source } = body;

    if (!email) {
      return Response.json({ error: "Email is required." }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const leadQuestion = firstQuestion || message || "—";

    // Always log to console (Vercel function logs)
    console.log("[AFFNAAI LEAD]", {
      receivedAt: timestamp,
      source: source || "contact-form",
      name,
      email,
      phone,
      firstQuestion: leadQuestion,
    });

    // ─────────────────────────────────────────────
    // 1. RESEND — email notification to ai@affnaai.com
    //    Setup: https://resend.com
    //    → Sign up → Add domain affnaai.com → Get API key
    //    → Add RESEND_API_KEY to Vercel env vars
    // ─────────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Affnaai Leads <leads@affnaai.com>",
            to: ["ai@affnaai.com"],
            subject: `New lead: ${name || "Unknown"} — ${source || "website"}`,
            html: `
              <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
                <h2 style="color: #0891B2; margin-bottom: 4px;">New lead from Affnaai</h2>
                <p style="color: #888; font-size: 13px; margin-top: 0;">Captured via ${source || "website"}</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; color: #666; font-size: 14px; width: 140px;">Name</td>
                    <td style="padding: 10px 0; font-size: 14px; font-weight: 600;">${name || "—"}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; color: #666; font-size: 14px;">Email</td>
                    <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #0891B2;">${email}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; color: #666; font-size: 14px;">Phone</td>
                    <td style="padding: 10px 0; font-size: 14px;">${phone || "—"}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; color: #666; font-size: 14px;">First question</td>
                    <td style="padding: 10px 0; font-size: 14px; font-style: italic;">${leadQuestion}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #666; font-size: 14px;">Time</td>
                    <td style="padding: 10px 0; font-size: 14px;">${new Date(timestamp).toLocaleString("en-GB", { timeZone: "Asia/Karachi" })} PKT</td>
                  </tr>
                </table>
                <div style="margin-top: 24px; padding: 12px 16px; background: #f0fdf4; border-radius: 8px; border-left: 3px solid #22c55e;">
                  <p style="margin: 0; font-size: 13px; color: #166534;">
                    💡 Follow up within 5 minutes for best conversion. 
                    <a href="https://wa.me/${phone ? phone.replace(/\D/g, "") : ""}" style="color: #0891B2;">WhatsApp them</a> or 
                    <a href="mailto:${email}" style="color: #0891B2;">email them</a>.
                  </p>
                </div>
              </div>
            `,
          }),
        });

        if (!emailRes.ok) {
          const err = await emailRes.text();
          console.error("Resend error:", err);
        }
      } catch (e) {
        console.error("Resend request failed:", e.message);
      }
    } else {
      console.warn(
        "[AFFNAAI] RESEND_API_KEY not set — email notification skipped. Add it to Vercel env vars."
      );
    }

    // ─────────────────────────────────────────────
    // 2. ZAPIER WEBHOOK — logs lead to Google Sheets
    //    Setup: https://zapier.com
    //    → New Zap → Trigger: "Webhooks by Zapier (Catch Hook)"
    //    → Action: "Google Sheets (Create Spreadsheet Row)"
    //    → Copy the webhook URL → add as ZAPIER_WEBHOOK_URL in Vercel env vars
    // ─────────────────────────────────────────────
    if (process.env.ZAPIER_WEBHOOK_URL) {
      try {
        const zapRes = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name || "",
            email: email || "",
            phone: phone || "",
            source: source || "website",
            first_question: leadQuestion,
            timestamp,
          }),
        });

        if (!zapRes.ok) {
          console.error("Zapier webhook error:", zapRes.status);
        }
      } catch (e) {
        console.error("Zapier request failed:", e.message);
      }
    } else {
      console.warn(
        "[AFFNAAI] ZAPIER_WEBHOOK_URL not set — Google Sheets logging skipped. Add it to Vercel env vars."
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
