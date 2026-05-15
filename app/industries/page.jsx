import Link from "next/link";
import { industries } from "@/lib/industries";

export const metadata = {
  title: "Industries — Affnaai",
  description: "AI receptionists tailored for cleaning, dental, salons, real estate, and HVAC.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip">[ INDUSTRIES ]</span>
            <h1 className="mt-5 font-display text-balance text-5xl text-ink lg:text-6xl">
              We speak your industry's language.
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              Affnaai is tuned to the patterns of each service business — the
              right qualifying questions, the right tone, the right handoffs.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-6xl space-y-5">
            {industries.map((i, idx) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="card card-hover group grid items-center gap-6 p-7 lg:grid-cols-[auto_1fr_auto] lg:gap-10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-bg-borderHi bg-bg-elevated text-3xl">
                  {i.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-ink-dim">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl text-ink lg:text-3xl">
                      {i.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-pretty text-ink-muted">{i.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {i.channels.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-cyan-glow transition-transform group-hover:translate-x-1">
                  Read more →
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-ink-muted">
              Don't see your industry?{" "}
              <Link href="/contact" className="text-cyan-glow underline-offset-4 hover:underline">
                Tell us about your business
              </Link>{" "}
              — we work with med spas, gyms, law firms, chiropractors, roofers, and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
