import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Why Affnaai exists, and what we believe about AI for small businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-balance text-5xl text-ink lg:text-6xl">
              We're building the front desk that never sleeps.
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-12 text-pretty text-lg leading-relaxed text-ink-muted">
            <p>
              Most small service businesses are losing money the same way every
              month — to missed calls, slow replies, and inquiries that arrive
              outside business hours.
            </p>
            <p>
              The traditional fix is hiring a receptionist or paying an
              answering service. Both work, both are expensive, and neither
              covers WhatsApp, Instagram DMs, or 2am inquiries.
            </p>
            <p>
              Affnaai is a third option: an AI receptionist that handles every
              channel, never has a bad day, and costs less than a single
              receptionist shift per month. It's not here to replace humans —
              it's here to handle the routine 80% so your team can focus on the
              20% that actually needs them.
            </p>

            <div className="rounded-2xl border-l-2 border-cyan-glow bg-bg-surface/50 p-6">
              <p className="font-display text-2xl text-ink">
                "AI employees for service businesses."
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                — How we think about what we build.
              </p>
            </div>

            <p>
              We started in 2026 with one simple bet: a well-tuned AI
              receptionist, plugged into the channels customers actually use
              (WhatsApp, web chat, missed-call text-back), can recover most of
              the revenue businesses are quietly losing every month.
            </p>
            <p>
              We're based across Pakistan, the UAE, and the UK, working with
              service businesses in markets where WhatsApp is the primary way
              customers reach out. We treat AI as a tool, not magic — we tell
              you straight when it's a fit, and when it isn't.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-bg-border bg-bg-surface/30 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-display text-4xl text-balance text-ink lg:text-5xl">
                A few things we hold to.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "AI should sound human",
                  d: "If your customers can tell it's a bot, we've failed. The best AI conversations feel like talking to a sharp, friendly receptionist who happens to never sleep.",
                },
                {
                  t: "Hand off when it matters",
                  d: "AI handles routine. Humans handle nuance. Every AI we deploy has clear handoff rules — emergencies, complaints, and complex sales go to your team immediately.",
                },
                {
                  t: "Show, don't tell",
                  d: "We don't sell promises. The demos on this site are real. Try them before you trust us with anything.",
                },
                {
                  t: "Pricing should be honest",
                  d: "Pricing is transparent setup fees, monthly costs, and per-conversation rates are all listed up front on the pricing page. No long contracts, cancel anytime.",
                },
              ].map((b) => (
                <div key={b.t} className="card p-6">
                  <h3 className="font-display text-xl text-ink">{b.t}</h3>
                  <p className="mt-2 text-pretty text-sm text-ink-muted">{b.d}</p>
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
            Want to work with us?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link href="/demo" className="btn-secondary">
              See the product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
