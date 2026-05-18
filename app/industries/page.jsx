import Link from "next/link";
import { industries } from "@/lib/industries";

export const metadata = {
  title: "Industries",
  description: "AI receptionists tailored for cleaning, dental, salons, real estate, and HVAC.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-balance text-5xl text-ink lg:text-6xl">
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
            {industries.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="card card-hover group grid items-center gap-6 p-7 lg:grid-cols-[1fr_auto] lg:gap-10"
              >
                <div>
                  <h3 className="font-display text-2xl text-ink lg:text-3xl">
                    {i.name}
                  </h3>
                  <p className="mt-2 text-pretty text-ink-muted">{i.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {i.channels.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-bg-borderHi bg-bg-elevated/60 px-3 py-1 text-xs text-ink-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-cyan-glow transition-transform group-hover:translate-x-1">
                  Read more →
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-ink-muted">
              Don't see your industry?{" "}
              <Link
                href="/contact"
                className="text-cyan-glow underline-offset-4 hover:underline"
              >
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
