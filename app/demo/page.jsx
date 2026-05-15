import ChatDemo from "@/components/ChatDemo";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import VoiceDemo from "@/components/VoiceDemo";
import ROICalculator from "@/components/ROICalculator";
import Link from "next/link";

export const metadata = {
  title: "Live Demo — Affnaai",
  description: "Try the AI receptionist live. Web chat, WhatsApp, voice, and ROI calculator.",
};

export default function DemoPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip-glow">[ DEMO PLAYGROUND ]</span>
            <h1 className="mt-5 font-display text-balance text-5xl text-ink lg:text-6xl">
              Try Affnaai before you buy it.
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              These are real, working demos. Talk to the AI, watch a WhatsApp
              booking happen, listen to an inbound call, and run the math on
              your own business.
            </p>
          </div>
        </div>
      </section>

      {/* Live chat demo */}
      <section id="chat" className="scroll-mt-24 py-16">
        <div className="container-x">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <span className="chip-glow">01 · LIVE AI</span>
              <h2 className="mt-4 font-display text-3xl text-ink lg:text-4xl">
                Web chat
                <br />
                <span className="text-ink-muted">powered by Claude.</span>
              </h2>
              <p className="mt-4 text-pretty text-ink-muted">
                This isn't a script. It's a real AI agent connected live, set up
                as the receptionist for an imaginary cleaning company called
                Sparkle Pro. Ask anything — quotes, scheduling, what services
                they offer.
              </p>
              <div className="mt-6 space-y-2 font-mono text-xs text-ink-dim">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-cyan-glow" />
                  Model: Claude Haiku 4.5
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-cyan-glow" />
                  Avg latency: ~700ms
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-cyan-glow" />
                  Cost per conversation: &lt;$0.01
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* WhatsApp demo */}
      <section id="whatsapp" className="scroll-mt-24 py-16">
        <div className="container-x">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:sticky lg:top-28 lg:order-2">
              <span className="chip">02 · WHATSAPP</span>
              <h2 className="mt-4 font-display text-3xl text-ink lg:text-4xl">
                A booking, <br />
                <span className="text-ink-muted">from cold DM to confirmed.</span>
              </h2>
              <p className="mt-4 text-pretty text-ink-muted">
                Watch a real customer message come in on WhatsApp and end with a
                confirmed weekly cleaning booking — no human involved.
              </p>
              <p className="mt-4 font-mono text-xs text-ink-dim">
                Simulated for demo purposes. The deployed product runs through
                official WhatsApp Business API.
              </p>
            </div>
            <div className="lg:col-span-3 lg:order-1">
              <WhatsAppDemo />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Voice demo */}
      <section id="voice" className="scroll-mt-24 py-16">
        <div className="container-x">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <span className="chip">03 · VOICE</span>
              <h2 className="mt-4 font-display text-3xl text-ink lg:text-4xl">
                An emergency call, <br />
                <span className="text-ink-muted">handled in 34 seconds.</span>
              </h2>
              <p className="mt-4 text-pretty text-ink-muted">
                A panicked customer with a flooded kitchen. The AI receptionist
                triages, prices the visit, and dispatches a technician — without
                anyone touching the phone.
              </p>
              <p className="mt-4 font-mono text-xs text-ink-dim">
                Transcript shown synchronously. Voice audio is in production —
                contact us to hear it live.
              </p>
            </div>
            <div className="lg:col-span-3">
              <VoiceDemo />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ROI Calculator */}
      <section id="roi" className="scroll-mt-24 py-16 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="chip-glow">04 · THE NUMBERS</span>
              <h2 className="mt-4 font-display text-4xl text-balance text-ink lg:text-5xl">
                What is this costing your business right now?
              </h2>
            </div>
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-bg-border py-24">
        <div className="absolute inset-0 radial-fade-bottom pointer-events-none" />
        <div className="container-x relative text-center">
          <h2 className="font-display text-4xl text-balance text-ink lg:text-5xl">
            Like what you see?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            We can have this running on your business in under 7 days.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/pricing" className="btn-primary">
              See pricing
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a setup call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Divider() {
  return (
    <div className="container-x">
      <div className="mx-auto h-px max-w-6xl divider-glow opacity-50" />
    </div>
  );
}
