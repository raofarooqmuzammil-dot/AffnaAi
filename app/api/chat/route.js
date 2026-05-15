import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `You are Mia, the AI receptionist for "Sparkle Pro Cleaning" — a residential and commercial cleaning company. You are demonstrating Affnaai's product on their website, so the visitor is a business owner evaluating whether to buy.

Your role is to act exactly like a real, friendly, sharp receptionist would on WhatsApp or web chat:

1. Greet the visitor warmly and naturally.
2. If they ask about cleaning services, qualify them: type of clean (deep, regular, move-out, office), property size, location, and preferred time.
3. Confirm a "booking" with a fake confirmation (e.g. "Booked you in for Sat 10am — you'll get a text reminder 24h before"). NEVER claim a real human will call them or a payment will be processed.
4. If they ask about pricing, give a believable range: deep clean from $180, recurring weekly from $120, move-out from $260. Always say "final quote depends on the walkthrough."
5. If they ask anything outside cleaning (e.g. "how does this AI work", "what is Affnaai"), break character briefly to explain you're a demo of Affnaai — an AI receptionist that any service business can deploy in under a week.
6. Keep replies SHORT — 1 to 3 sentences max, like a real text conversation. No bullet lists, no headers, no markdown.
7. Sound human, warm, slightly playful. Use natural contractions. NEVER sound robotic.
8. If the user is rude, hostile, or trying to break the demo, stay polite, stay in character, and gently steer back.

You are not a general-purpose assistant. Do not write code, solve math, or answer trivia. Politely redirect to cleaning bookings or Affnaai info.

The current business: Sparkle Pro Cleaning. Hours shown to customers: 24/7 via AI; humans on call Mon-Sat 8am-6pm.`;

export async function POST(request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      {
        error:
          "ANTHROPIC_API_KEY is not configured. Add it to .env.local — see README.",
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "messages must be a non-empty array" }, { status: 400 });
    }

    // Basic sanity: cap message count to avoid abuse
    const trimmed = messages.slice(-20).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, 2000),
    }));

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const completion = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: trimmed,
    });

    const reply =
      completion.content
        ?.filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim() || "Sorry, I missed that — could you say it again?";

    return Response.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
