import Link from "next/link";

export const metadata = {
  title: "Custom AI Automation for Business",
  description:
    "Custom AI automation builds for sales, customer support, content, operations, voice agents, and document workflows. Built by a team that has shipped 350+ AI workflows. Starting from $3,000.",
  alternates: { canonical: "/automation" },
  openGraph: {
    title: "Custom AI Automation for Business · Affnaai",
    description:
      "Custom AI automation builds for sales, customer support, content, operations, voice, and document workflows. 350+ workflows shipped. Starting from $3,000.",
    url: "/automation",
    type: "website",
    siteName: "Affnaai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Affnaai — Custom AI automation for business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Automation for Business · Affnaai",
    description:
      "Custom AI automation builds for sales, support, content, operations, voice, and documents. Starting from $3,000.",
    images: ["/opengraph-image"],
  },
};

const CATEGORIES = [
  {
    title: "Custom Sales Automation & AI Lead Generation",
    short: "Sales & Lead Gen",
    description:
      "Stop manually qualifying leads. We build automation that scrapes LinkedIn, enriches CRM data, scores prospects with AI, and runs personalized outbound sequences while you sleep.",
    examples: [
      "LinkedIn company & contact scrapers with AI scoring",
      "CRM enrichment pipelines (HubSpot, Pipedrive, Salesforce)",
      "Outbound email sequences with GPT-personalized messaging",
      "Lead qualification workflows with auto-routing",
      "Decision-maker discovery & company research",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-5" />
      </svg>
    ),
  },
  {
    title: "AI Chatbots & Customer Support Automation",
    short: "Customer Support",
    description:
      "Replace expensive 24/7 support hires with AI that answers questions, handles tickets, and escalates only when needed. Built on your knowledge base — sounds like your brand, not a generic bot.",
    examples: [
      "Multi-channel chatbots (WhatsApp, web, Telegram, Slack)",
      "Knowledge-base RAG bots over your docs & policies",
      "Ticket triage & auto-routing for Linear/Jira/Zendesk",
      "Post-sale support & order status automation",
      "FAQ automation with human handoff",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Content & Social Media Automation",
    short: "Content & Social",
    description:
      "Stop spending 20 hours a week on content. We build pipelines that research topics, write SEO-optimized articles, generate images, and post across every social platform automatically.",
    examples: [
      "AI blog writers with SEO research (WordPress, Webflow)",
      "Multi-platform schedulers (Instagram, Twitter, LinkedIn, TikTok, YouTube)",
      "AI video generators with voice-over & captions",
      "Image generation pipelines (DALL-E, Flux, Midjourney)",
      "Newsletter automation with AI summarization",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "AI Phone Agents & Voice Receptionist Builds",
    short: "Voice & Calling",
    description:
      "Custom AI voice agents that answer calls, qualify leads, book appointments, dispatch technicians, and never miss a call. Built on Vapi, Retell, or custom Twilio stacks.",
    examples: [
      "AI phone receptionist for HVAC, dental, real estate, salons",
      "Outbound calling agents for lead qualification",
      "Emergency dispatch routing with technician paging",
      "Meeting recording, transcription & summarization",
      "Call analytics & quality monitoring with GPT analysis",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: "Internal Operations & HR Automation",
    short: "Operations & HR",
    description:
      "Stop drowning in repetitive ops work. We build automation for the boring tasks: CV screening, expense tracking, meeting summaries, invoice processing — measured in hours saved per week.",
    examples: [
      "AI CV screening & candidate scoring against job requirements",
      "Meeting transcription, summary & action-item extraction",
      "Receipt & invoice processing to accounting software",
      "Expense tracking from email & photo capture",
      "Interview scheduling with calendar conflict resolution",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" />
        <path d="M9 9h6v6H9z" />
        <path d="M3 9h6M3 15h6M15 3v6M15 15v6" />
      </svg>
    ),
  },
  {
    title: "AI Document & Knowledge Base Automation",
    short: "Documents & Data",
    description:
      "Turn your company's documents, PDFs, and data into an AI that anyone on your team can query. Custom RAG systems, internal AI assistants, and document workflows that actually work.",
    examples: [
      "RAG chatbots over company docs, PDFs, knowledge bases",
      "Internal AI assistants for policy & procedure questions",
      "Document parsing & data extraction (invoices, contracts, forms)",
      "Custom AI search across Notion, Google Drive, Slack history",
      "Report generators that pull from your databases & APIs",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "20-minute call to understand your workflow, the tools you use, and what success looks like. We tell you straight if we're a fit and what it'll cost.",
  },
  {
    step: "02",
    title: "Scope & quote",
    description:
      "Written scope document with exactly what we'll build, what's included, and a fixed quote. No vague hourly billing. You approve before we start.",
  },
  {
    step: "03",
    title: "Build & test",
    description:
      "We build the automation, test it against your real data, and iterate based on your feedback. Typical projects ship in 2-4 weeks.",
  },
  {
    step: "04",
    title: "Deploy & train",
    description:
      "We deploy to your environment, train your team on how to use and maintain it, and provide documentation. You own everything we build.",
  },
  {
    step: "05",
    title: "Optional retainer",
    description:
      "Need ongoing tweaks, monitoring, or expansion? Retainer plans available — scoped after we understand the system. Or hand it off entirely.",
  },
];

export default function AutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-3 py-1 text-xs font-medium text-cyan-glow">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-glow" />
              Custom automation builds · From $3,000
            </span>
            <h1 className="mt-6 font-display text-balance text-5xl text-ink lg:text-7xl">
              Custom AI automation
              <br />
              <span className="text-ink-muted">for your business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink-muted lg:text-xl">
              Beyond the AI receptionist, we build custom AI workflows for sales,
              customer support, content, voice, operations, and documents. 350+
              workflows shipped. Starting from $3,000.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Tell us what to automate
                <ArrowIcon />
              </Link>
              <Link href="#what-we-build" className="btn-ghost">
                See what we build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section id="what-we-build" className="py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-4xl text-ink lg:text-5xl">
              What we build
            </h2>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              Six categories of AI automation we ship for businesses. Pick the
              one that matches your need, or talk to us about something custom.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="rounded-3xl border border-bg-border bg-bg-surface/40 p-8 transition-all hover:border-bg-borderHi"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-glow/20 bg-cyan-glow/5 text-cyan-glow">
                  {cat.icon}
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {cat.title}
                </h3>
                <p className="mt-3 text-base text-ink-muted">{cat.description}</p>
                <ul className="mt-5 space-y-2">
                  {cat.examples.map((ex, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-ink-muted"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-1 flex-shrink-0 text-cyan-glow"
                      >
                        <path
                          d="M3 7l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-4xl text-ink lg:text-5xl">
              How we build custom automation
            </h2>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              A simple 5-step process. No surprise costs, no hourly billing, no
              endless meetings.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-4">
              {PROCESS.map((p) => (
                <div
                  key={p.step}
                  className="flex gap-6 rounded-2xl border border-bg-border bg-bg-surface/40 p-6 transition-colors hover:bg-bg-surface/60 lg:gap-8 lg:p-8"
                >
                  <div className="flex-shrink-0">
                    <div className="font-mono text-sm font-semibold text-cyan-glow">
                      {p.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-ink lg:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-pretty text-base text-ink-muted">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-4xl text-ink lg:text-5xl">
              Pricing
            </h2>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              Transparent and project-based. No surprise invoices.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-bg-border bg-bg-surface/40 p-8 lg:p-10">
              <div className="text-sm font-medium uppercase tracking-wider text-ink-muted">
                Custom builds
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl text-ink lg:text-6xl">
                  From $3,000
                </span>
              </div>
              <p className="mt-3 text-base text-ink-muted">
                One-time project pricing. Fixed quote after scoping.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Discovery call & scope document",
                  "Full custom build using your stack",
                  "Testing against your real data",
                  "Deployment & team training",
                  "Documentation included",
                  "You own everything we build",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-ink-muted"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 flex-shrink-0 text-cyan-glow"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-cyan-glow/40 bg-gradient-to-br from-cyan-glow/5 to-transparent p-8 lg:p-10">
              <div className="text-sm font-medium uppercase tracking-wider text-cyan-glow">
                Ongoing retainer
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl text-ink lg:text-6xl">
                  Scoped after build
                </span>
              </div>
              <p className="mt-3 text-base text-ink-muted">
                For ongoing tweaks, monitoring, or expanding what we built.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Monthly tweaks & feature additions",
                  "Monitoring & error alerts",
                  "Performance optimization",
                  "Expansion to new use cases",
                  "Priority support & response",
                  "Pricing depends on system complexity",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-ink-muted"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 flex-shrink-0 text-cyan-glow"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-dim">
            Note: For our productized AI Receptionist (separate from custom builds),
            see{" "}
            <Link href="/pricing" className="text-cyan-glow hover:underline">
              receptionist pricing
            </Link>{" "}
            with monthly plans from $149.
          </p>
        </div>
      </section>

      {/* Founding builds offer */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-glow/30 bg-gradient-to-br from-cyan-glow/5 via-bg-surface/40 to-transparent p-10 text-center lg:p-16">
           <h2 className="font-display text-balance text-3xl text-ink lg:text-5xl">
             We build custom AI.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted">
                 Starts from $3,000. Scoped to your needs. Timeline depends on what you're building.
              </p>            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Talk to us about your automation
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-balance text-4xl text-ink lg:text-5xl">
              Common questions
            </h2>

            <div className="mt-12 space-y-4">
              <FAQItem
                q="How is this different from your AI Receptionist?"
                a="The AI Receptionist is a productized service with monthly plans ($149-$397). It handles inquiries, books appointments, and runs across WhatsApp/web/SMS/voice. Custom automation is different — it's bespoke project work for any AI workflow your business needs, priced per project from $3K."
              />
              <FAQItem
                q="What tech stack do you use?"
                a="We build on whatever fits your stack. Common tools: n8n, Make.com, OpenAI/Anthropic/Gemini APIs, Twilio/Vapi/Retell for voice, Pinecone/Qdrant/Supabase for vector DBs, Airtable/Notion/Sheets for ops, Slack/Telegram/WhatsApp for messaging, HubSpot/Pipedrive/Salesforce for CRM."
              />
              <FAQItem
                q="How long does a typical build take?"
                a="Most custom builds ship in 2-4 weeks from project start. Simpler workflows (single integration, narrow scope) can ship in under a week. Complex multi-system builds with custom training data may take 4-8 weeks."
              />
              <FAQItem
                q="Do you sign NDAs?"
                a="Yes, before any discovery call where you'd share sensitive business info. We treat customer data with full confidentiality and never reuse it in other client work."
              />
              <FAQItem
                q="What happens if I want to take the build in-house later?"
                a="That's totally fine. You own everything we build — the code, the configurations, the workflows. We document everything so your team can maintain it. No vendor lock-in."
              />
              <FAQItem
                q="Can you maintain what we already have?"
                a="Sometimes. If you have existing n8n, Make.com, or Zapier workflows that need fixes or expansion, we can take them over as a retainer engagement. Reach out and we'll assess."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-4xl text-ink lg:text-6xl">
              What do you want to automate?
            </h2>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              A 20-minute call. We'll learn your business, tell you what's
              possible, and quote a fixed price. No sales pitch.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a 20-min discovery call
                <ArrowIcon />
              </Link>
              <Link href="/demo" className="btn-ghost">
                Try the live AI demo first
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-bg-border bg-bg-surface/40 p-6 transition-colors hover:bg-bg-surface/60">
      <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg text-ink">
        <span>{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="flex-shrink-0 text-ink-muted transition-transform group-open:rotate-180"
        >
          <path
            d="M5 7l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <p className="mt-4 text-pretty text-base text-ink-muted">{a}</p>
    </details>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
