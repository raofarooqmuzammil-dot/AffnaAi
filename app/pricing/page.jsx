import PricingCards from "@/components/PricingCards";
import Link from "next/link";

export const metadata = {
  title: "Pricing — Affnaai",
  description: "Three plans for service businesses. Starter, Growth, and Pro.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip">[ PRICING ]</span>
            <h1 className="mt-5 font-display text-balance text-5xl text-ink lg:text-6xl">
              Pay less than a single receptionist shift.
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              All plans include setup, training on your business, and ongoing
              tuning. Cancel anytime. Prices in USD.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <PricingCards />
          </div>
        </div>
      </section>

      <section className="border-t border-bg-border bg-bg-surface/30 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-balance text-ink lg:text-4xl">
              Not sure which plan fits?
            </h2>
            <p className="mt-4 text-pretty text-ink-muted">
              Most service businesses start on Growth — it covers the channels
              they actually need (WhatsApp, SMS, missed-call text-back). We'll
              tell you straight if Starter is enough for your volume.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Talk to a human
              </Link>
              <Link href="/demo" className="btn-secondary">
                Try the demo first
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
