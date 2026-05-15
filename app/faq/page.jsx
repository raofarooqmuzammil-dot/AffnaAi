import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "FAQ — Affnaai",
  description: "Answers to common questions about Affnaai's AI receptionist.",
};

const faqs = [
  {
    q: "What if the AI says something wrong?",
    a: "Affnaai is trained on your business's specific FAQs, services, and pricing — and it's constrained to those topics. If a customer asks something outside its scope (like complex insurance questions, emergencies, or anything sensitive), it hands the conversation to your team immediately. You can also review every conversation in your dashboard and flag anything that needs adjustment.",
  },
  {
    q: "Can my customers tell it's an AI?",
    a: "Most don't. The AI uses natural language, contractions, and friendly tone — and we tune it to match how your business already speaks. That said, we never lie if a customer directly asks 'are you a robot?' — Affnaai will say it's an AI assistant, but offer to connect them to a human if they prefer.",
  },
  {
    q: "What channels does Affnaai support?",
    a: "WhatsApp Business, web chat, SMS (including missed-call text-back), Instagram DM, Facebook Messenger, email, and inbound phone calls (Pro tier). All flow into a single inbox so you don't have to check ten different places.",
  },
  {
    q: "How does it book appointments?",
    a: "We integrate with your calendar (Google Calendar, Calendly, Acuity, etc.). The AI checks real-time availability, books slots directly, and sends confirmation messages. It also handles reschedules and cancellations.",
  },
  {
    q: "What happens if the AI goes down?",
    a: "Affnaai runs on redundant infrastructure with 99.9% uptime. If something does break, we have automatic fallbacks: web chat shows a contact form, WhatsApp queues messages for retry, and missed-call text-back falls back to a generic 'we'll call you back' message. We monitor every deployment 24/7.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses go live in 7 days. Day 1 is a 20-minute discovery call. Days 2–5 we train and build. Days 5–6 we integrate your channels. Day 7 you go live. We tune in real-time for the first two weeks.",
  },
  {
    q: "How do I cancel?",
    a: "Email or message us. No questions, no cancellation fee. Your data is exported and deleted within 30 days. We bill month-to-month, so you only pay for what you've used.",
  },
  {
    q: "Where is my data stored?",
    a: "Conversations are encrypted in transit and at rest, stored on Vercel and Supabase infrastructure (US/EU regions, your choice). We never sell customer data or use your conversations to train shared models. You can request deletion at any time.",
  },
  {
    q: "Does it work in languages other than English?",
    a: "Yes — Affnaai supports English, Urdu, Arabic, Spanish, and French out of the box. Other languages are available as a $99/mo add-on. The AI can auto-detect the customer's language and respond in kind.",
  },
  {
    q: "How does Affnaai compare to hiring a receptionist?",
    a: "A full-time receptionist costs ~$3,000–$4,500/mo and covers ~40 hours per week. Affnaai costs $149–$997/mo, covers 24/7, handles every channel (not just phone), and never has a bad day. It won't replace humans for high-trust conversations — but for routine bookings, FAQ, and after-hours coverage, it's far cheaper and more available.",
  },
  {
    q: "Can I see a live AI conversation before signing up?",
    a: "Yes — the demo page has a real, working AI chat connected to Claude. Ask it anything. It's set up as a receptionist for a fictional cleaning company so you can see the qualifying questions, the booking flow, and the tone in action.",
  },
  {
    q: "What's the founding client offer?",
    a: "We're onboarding a small group of early clients at a discounted rate ($297/mo + $299 setup, vs $397 + $499) in exchange for case-study participation and product feedback. Pricing is locked for 12 months. Limited spots — check the pricing page to apply.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip">[ FAQ ]</span>
            <h1 className="mt-5 font-display text-balance text-5xl text-ink lg:text-6xl">
              Questions you're probably asking.
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              And honest answers. If we missed one,{" "}
              <Link href="/contact" className="text-cyan-glow underline-offset-4 hover:underline">
                ask us directly
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
