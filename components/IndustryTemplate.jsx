import Link from "next/link";
import { getIndustry, industries } from "@/lib/industries";
import ChatDemo from "@/components/ChatDemo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://affnaai.com";

export default function IndustryTemplate({ slug }) {
  const data = getIndustry(slug);
  if (!data) return null;

  const otherIndustries = industries.filter((i) => i.slug !== slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `AI Receptionist for ${data.name}`,
    name: `Affnaai ${data.name}`,
    description: data.solution,
    provider: {
      "@type": "Organization",
      name: "Affnaai",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: data.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "149",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceType: "https://schema.org/MinimumAdvertisedPrice",
      },
      url: `${SITE_URL}/pricing`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
      { "@type": "ListItem", position: 3, name: data.name, item: `${SITE_URL}/industries/${data.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/industries"
              className="text-sm text-ink-dim hover:text-ink-muted"
            >
              ← All industries
            </Link>
            <h1 className="mt-8 font-display text-balance text-5xl text-ink lg:text-6xl xl:text-7xl">
              AI receptionist <br />
              <span className="text-ink-muted">for {data.name.toLowerCase()}.</span>
            </h1>
            <p className="mt-6 text-pretty text-xl text-ink-muted lg:text-2xl">
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
              <h2 className="font-display text-2xl text-ink">The problem</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-muted">
                {data.pain}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink">What Affnaai does</h2>
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
              <h2 className="font-display text-4xl text-balance text-ink lg:text-5xl">
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
                  <div className="text-xs text-ink-dim">{s.label}</div>
                  <div className="mt-5">
                    <div className="text-xs text-ink-dim">Before</div>
                    <div className="mt-1 font-display text-2xl text-ink-muted line-through decoration-danger/40">
                      {s.before}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-xs text-cyan-glow">With Affnaai</div>
                    <div className="mt-1 font-display text-3xl text-ink">
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
              <h2 className="font-display text-3xl text-balance text-ink lg:text-4xl">
                Affnaai is trained on the exact questions your industry gets.
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {data.samplePrompts.map((p) => (
                <div key={p} className="card p-5">
                  <p className="text-pretty text-ink">"{p}"</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-ink-muted mr-2">Handles on:</span>
              {data.channels.map((c) => (
                <span key={c} className="rounded-full border border-cyan-glow/30 bg-cyan-glow/5 px-3 py-1 text-xs text-cyan-glow">
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
            <h2 className="font-display text-4xl text-balance text-ink lg:text-5xl">
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
                  className="card card-hover group flex items-center justify-between p-4"
                >
                  <span className="text-sm text-ink">{i.short}</span>
                  <span className="text-cyan-glow opacity-0 transition-opacity group-hover:opacity-100">
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
