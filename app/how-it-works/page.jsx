import Link from "next/link";

export const metadata = {
  title: "How it works — Affnaai",
  description: "From sign-up to going live in 7 days. Here's exactly what happens.",
};

const steps = [
  {
    n: "01",
    title: "Tell us about your business",
    desc: "A 20-minute call. We learn your services, prices, scheduling rules, common questions, and tone of voice. Bring screenshots of past customer messages if you have them.",
    duration: "Day 1",
  },
  {
    n: "02",
    title: "We build and train your AI",
    desc: "We train Affnaai on your specific business — your FAQs, your booking rules, your handoff conditions. You get a private demo link to chat with it before it goes live.",
    duration: "Day 2–5",
  },
  {
    n: "03",
    title: "Connect your channels",
    desc: "WhatsApp Business, your calendar, your CRM, your website chat widget, your phone number's missed-call text-back. We do the integrations — you just approve.",
    duration: "Day 5–6",
  },
  {
    n: "04",
    title: "Go live",
    desc: "We flip the switch. The AI starts answering inquiries 24/7. You see every conversation in your dashboard. We tune in real-time for the first two weeks.",
    duration: "Day 7",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip-glow">[ HOW IT WORKS ]</span>
            <h1 className="mt-5 font-display text-balance text-5xl text-ink lg:text-6xl">
              From signup to live in <span className="text-gradient-cyan">7 days.</span>
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              No agencies, no 3-month onboarding, no $10k setup fees. Here's
              exactly what happens.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <ol className="relative space-y-5 before:absolute before:left-7 before:top-8 before:bottom-8 before:w-px before:bg-bg-border lg:before:left-10">
              {steps.map((s, i) => (
                <li key={s.n} className="relative">
                  <div className="card relative p-6 pl-20 lg:pl-28">
                    <div className="absolute left-3 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-glow/30 bg-bg-base font-mono text-xs text-cyan-glow lg:left-5 lg:h-12 lg:w-12">
                      {s.n}
                    </div>
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                      <h2 className="font-display text-2xl text-ink lg:text-3xl">
                        {s.title}
                      </h2>
                      <span className="chip">{s.duration}</span>
                    </div>
                    <p className="mt-3 text-pretty text-ink-muted">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-bg-border bg-bg-surface/30 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="chip">[ THE PROMISES ]</span>
              <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
                Things we won't make you do.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                { t: "No long contracts", d: "Month-to-month. Cancel anytime." },
                { t: "No setup nightmares", d: "We do the integrations. You just approve." },
                { t: "No black box", d: "Read every conversation in your dashboard." },
                { t: "No bait & switch pricing", d: "What you see is what you pay." },
              ].map((p) => (
                <div key={p.t} className="card p-5">
                  <h3 className="font-display text-lg text-ink">{p.t}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-bg-border py-24">
        <div className="absolute inset-0 radial-fade-bottom pointer-events-none" />
        <div className="container-x relative text-center">
          <h2 className="font-display text-4xl text-balance text-ink lg:text-5xl">
            Ready to start the 7 days?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a setup call
            </Link>
            <Link href="/demo" className="btn-secondary">
              Try the demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
