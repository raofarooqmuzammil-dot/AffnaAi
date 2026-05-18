import Link from "next/link";
import IntegrationsGrid from "@/components/IntegrationsGrid";

export const metadata = {
  title: "Integrations",
  description: "Affnaai plugs into WhatsApp, Calendar, CRM, payments, and more.",
  alternates: { canonical: "/integrations" },
};

export default function IntegrationsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-balance text-5xl text-ink lg:text-6xl">
              Slots into the tools <br />
              <span className="text-ink-muted">you already use.</span>
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              We handle the technical setup. You keep your existing workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <IntegrationsGrid />

            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              <CategoryCard
                title="Messaging"
                items={[
                  "WhatsApp Business API",
                  "Instagram DM",
                  "SMS (Twilio, MessageBird)",
                  "Web chat widget",
                ]}
              />
              <CategoryCard
                title="Scheduling"
                items={[
                  "Google Calendar",
                  "Calendly",
                  "Acuity",
                  "Square Appointments",
                ]}
              />
              <CategoryCard
                title="CRM & Workflows"
                items={["HubSpot", "GoHighLevel", "Pipedrive", "Zapier", "Make"]}
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-ink-muted">
                Need an integration that's not listed?{" "}
                <Link
                  href="/contact"
                  className="text-cyan-glow underline-offset-4 hover:underline"
                >
                  Tell us
                </Link>
                . If it has an API, we can plug into it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryCard({ title, items }) {
  return (
    <div className="card p-6">
      <h3 className="font-display text-lg text-ink">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-ink-muted">
            <span className="inline-block h-1 w-1 rounded-full bg-cyan-glow" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
