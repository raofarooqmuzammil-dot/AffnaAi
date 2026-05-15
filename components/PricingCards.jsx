"use client";

import { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$149",
    period: "/mo",
    setup: "$299",
    description: "For small businesses getting started with AI automation.",
    features: [
      "AI Website Chat",
      "Lead Capture",
      "FAQ Automation",
      "Booking Request Handling",
      "Email Notifications",
      "Google Calendar Integration",
      "24/7 Automated Responses",
      "Up to 500 conversations / month",
    ],
    overage: "$0.99 per additional conversation",
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Plus",
    price: "$249",
    period: "/mo",
    setup: "$399",
    description: "For service businesses that live on WhatsApp.",
    features: [
      "Everything in Starter",
      "WhatsApp AI Assistant",
      "Missed Call Text-Back",
      "Web Chat Widget",
      "Up to 1,000 conversations / month",
    ],
    overage: "$0.79 per additional conversation",
    cta: "Choose Plus",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$397",
    period: "/mo",
    setup: "$499",
    description: "Most service businesses end up here.",
    features: [
      "Everything in Plus",
      "SMS Reminders",
      "Booking + Rescheduling",
      "Lead Qualification",
      "CRM Integration",
      "Up to 2,000 conversations / month",
      "100 voice minutes for testing",
    ],
    overage: "$0.49 per additional conversation",
    cta: "Choose Growth",
    highlight: true,
  },
  {
    name: "Pro",
    price: "Custom",
    period: "",
    setup: "From $3,000",
    description: "For high-volume & multi-location teams.",
    features: [
      "Everything in Growth",
      "AI Voice Receptionist",
      "Omnichannel Inbox",
      "AI Call Handling",
      "Instagram DM Automation",
      "Advanced Workflow Automation",
      "Multi-Location Support",
      "Priority Support",
      "Analytics Dashboard",
      "Custom Integrations",
      "Dedicated Onboarding",
    ],
    overage: "Custom conversation & voice allocation",
    cta: "Talk to us",
    highlight: false,
  },
];

const addOns = [
  { name: "AI Review Request System", price: "$79/mo" },
  { name: "Multilingual AI Support", price: "$99/mo" },
  { name: "AI Outbound Follow-Up", price: "$149/mo" },
  { name: "Extra AI Voice Minutes", price: "$0.12–$0.35/min" },
  { name: "Additional SMS Usage", price: "Pay-as-you-go" },
  { name: "Additional Conversations", price: "Tiered upgrades" },
];

export default function PricingCards() {
  const [foundingOpen, setFoundingOpen] = useState(false);

  return (
    <div className="space-y-12">
      {/* Free trial banner */}
      <div className="card relative overflow-hidden border-cyan-glow/30 bg-gradient-to-br from-cyan-glow/[0.04] to-transparent p-6 lg:p-8">
        <div className="absolute inset-0 grid-bg-fine pointer-events-none opacity-30" />
        <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip-glow">
                <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow" />
                FREE TRIAL
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                No credit card required
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl text-balance text-ink lg:text-3xl">
              Try the AI chat widget free for{" "}
              <span className="text-gradient-cyan">7 days.</span>
            </h3>
            <p className="mt-2 max-w-xl text-pretty text-sm text-ink-muted">
              Install our AI web chat widget on your site in under 5 minutes.
              See it qualify leads, answer FAQs, and book appointments — before
              you pay a cent. Cancel anytime during the trial.
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:items-end">
            <Link
              href="/contact?plan=trial"
              className="btn-primary whitespace-nowrap"
            >
              Start free trial
              <Arrow />
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
              5-minute setup
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <Tier key={tier.name} tier={tier} />
        ))}
      </div>

      <p className="text-center font-mono text-[10px] uppercase tracking-widest text-ink-dim">
        All prices in USD · Cancel anytime · Setup fees are one-time
      </p>

      {/* Add-ons */}
      <div className="card p-7">
        <div className="mb-5 flex items-baseline justify-between">
          <h3 className="font-display text-xl text-ink">Add-ons & usage</h3>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
            Optional
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {addOns.map((a) => (
            <div
              key={a.name}
              className="flex items-baseline justify-between border-b border-bg-border pb-3 last:border-0"
            >
              <span className="text-sm text-ink">{a.name}</span>
              <span className="font-mono text-xs text-cyan-glow">{a.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Founding offer — subtle reveal */}
      <div className="card overflow-hidden">
        <button
          onClick={() => setFoundingOpen(!foundingOpen)}
          className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-bg-elevated/40"
        >
          <div className="flex items-center gap-3">
            <span className="chip-glow">FOUNDING 10</span>
            <span className="text-sm text-ink">
              Growth-tier features at Plus pricing
            </span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`text-ink-muted transition-transform ${
              foundingOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {foundingOpen && (
          <div className="animate-fade-up border-t border-bg-border p-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-glow">
                  Founding 10 · Locked 12 months
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-ink">$249</span>
                  <span className="text-ink-muted">/mo</span>
                  <span className="ml-2 font-mono text-xs text-ink-dim line-through">
                    $397
                  </span>
                </div>
                <div className="mt-1 text-sm text-ink-muted">
                  + $299 setup{" "}
                  <span className="font-mono text-xs text-ink-dim line-through">
                    ($499)
                  </span>
                </div>
                <p className="mt-4 text-sm text-ink-muted">
                  We're onboarding 10 founding clients to refine the product.
                  In exchange for case-study participation and a monthly 30-min
                  feedback call, you get every Growth-tier feature at Plus-tier
                  pricing — locked for 12 months.
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                  What's included
                </div>
                <ul className="mt-3 space-y-2 text-sm text-ink">
                  {[
                    "Everything in Growth",
                    "WhatsApp + Web chat + SMS",
                    "Missed call text-back",
                    "Booking + rescheduling",
                    "Lead qualification + CRM",
                    "2,000 conversations / month",
                    "100 voice minutes for testing",
                    "12-month price lock",
                    "Priority Slack support",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?plan=founding"
                  className="btn-primary mt-5 w-full"
                >
                  Apply for founding pricing
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Tier({ tier }) {
  return (
    <div
      className={`card relative flex flex-col p-6 ${
        tier.highlight
          ? "border-cyan-glow/40 shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_0_60px_0_rgba(34,211,238,0.08)]"
          : ""
      }`}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-6 chip-glow">MOST POPULAR</span>
      )}
      <div>
        <h3 className="font-display text-2xl text-ink">{tier.name}</h3>
        <p className="mt-1 text-sm text-ink-muted">{tier.description}</p>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-4xl text-ink">{tier.price}</span>
          {tier.period && (
            <span className="text-ink-muted">{tier.period}</span>
          )}
        </div>
        <div className="mt-3 font-mono text-[11px] text-ink-dim">
          Setup: <span className="text-ink-muted">{tier.setup}</span>
        </div>
      </div>

      <ul className="mt-6 space-y-2.5 text-sm">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-ink">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {tier.overage && (
        <div className="mt-5 rounded-lg border border-bg-border bg-bg-base/40 p-3">
          <div className="font-mono text-[9px] uppercase tracking-widest text-ink-dim">
            Overage
          </div>
          <div className="mt-1 font-mono text-[11px] text-cyan-glow">
            {tier.overage}
          </div>
        </div>
      )}

      <Link
        href={`/contact?plan=${tier.name.toLowerCase()}`}
        className={`mt-6 w-full ${tier.highlight ? "btn-primary" : "btn-secondary"}`}
      >
        {tier.cta}
      </Link>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 shrink-0 text-cyan-glow"
      aria-hidden
    >
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
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
