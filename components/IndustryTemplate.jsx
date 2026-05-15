import Link from "next/link";
import { getIndustry, industries } from "@/lib/industries";
import ChatDemo from "@/components/ChatDemo";

export default function IndustryTemplate({ slug }) {
  const data = getIndustry(slug);
  if (!data) return null;

  const otherIndustries = industries.filter((i) => i.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/industries"
              className="font-mono text-xs uppercase tracking-widest text-ink-dim hover:text-ink-muted"
            >
              ← All industries
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-bg-borderHi bg-bg-elevated text-3xl">
                {data.icon}
              </div>
              <span className="chip-glow">{data.short.toUpperCase()}</span>
            </div>
            <h1 className="mt-7 font-display text-balance text-5xl text-ink lg:text-6xl xl:text-7xl">
              AI receptionist <br />
              <span className="text-ink-muted">for {data.name.toLowerCase()}.</span>
            </h1>
            <p className="mt-6 text-pretty text-xl text-cyan-glow lg:text-2xl">
              {data.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-y border-bg-border bg-bg-surface/30 py-20">
        <div className="container-x">
          <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="chip">[ THE PROBLEM ]</span>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-muted">
                {data.pain}
              </p>
            </div>
            <div>
              <span className="chip-glow">[ WHAT AFFNAAI DOES ]</span>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-ink">
                {data.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container-x">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <span className="chip">[ EXPECTED IMPACT ]</span>
              <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
                What changes in 30 days.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-ink-muted">
                Industry benchmarks. Your actual numbers depend on volume,
                channel mix, and how qualified your inquiries are.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {data.stats.map((s) => (
                <div key={s.label} className="card overflow-hidden p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                    {s.label}
                  </div>
                  <div className="mt-5">
                    <div className="font-mono text-xs text-ink-dim">Before</div>
                    <div className="mt-1 font-display text-2xl text-ink-muted line-through decoration-danger/40">
                      {s.before}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-mono text-xs text-cyan-glow">With Affnaai</div>
                    <div className="mt-1 font-display text-3xl text-gradient-cyan">
                      {s.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample prompts */}
      <section className="border-t border-bg-border bg-bg-surface/30 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="chip">[ WHAT YOUR CUSTOMERS ASK ]</span>
              <h2 className="mt-5 font-display text-3xl text-balance text-ink lg:text-4xl">
                Affnaai is trained on the exact questions your industry gets.
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {data.samplePrompts.map((p, i) => (
                <div
                  key={p}
                  className="card flex items-start gap-4 p-5"
                >
                  <span className="font-mono text-xs text-ink-dim">0{i + 1}</span>
                  <p className="text-pretty text-ink">"{p}"</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                Handles on:
              </span>
              {data.channels.map((c) => (
                <span key={c} className="chip-glow">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Try the demo */}
      <section className="py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip-glow">[ TRY IT NOW ]</span>
            <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
              Have a real conversation with the AI.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-ink-muted">
              The demo below is set up as a cleaning company receptionist, but
              the same engine handles your industry's questions just as
              fluently.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="border-t border-bg-border bg-bg-surface/30 py-16">
        <div className="container-x">
          <div className="mx-auto max-w-5xl">
            <h3 className="font-display text-2xl text-ink">Also built for</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {otherIndustries.map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="card card-hover group flex items-center gap-3 p-4"
                >
                  <span className="text-xl">{i.icon}</span>
                  <span className="text-sm text-ink">{i.short}</span>
                  <span className="ml-auto text-cyan-glow opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-bg-border py-24">
        <div className="absolute inset-0 radial-fade-bottom pointer-events-none" />
        <div className="container-x relative text-center">
          <h2 className="font-display text-4xl text-balance text-ink lg:text-5xl">
            Get an AI receptionist for your {data.short.toLowerCase()} business.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Setup in 7 days. Cancel anytime.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a setup call
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
