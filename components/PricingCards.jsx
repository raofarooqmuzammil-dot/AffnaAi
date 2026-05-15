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
      "Basic Booking Requests",
      "Email Notifications",
      "Google Calendar Integration",
      "Up to 500 conversations / mo",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$397",
    period: "/mo",
    setup: "$499",
    description: "Most service businesses end up here.",
    features: [
      "Everything in Starter",
      "WhatsApp AI Assistant",
      "SMS Reminders",
      "Booking + Rescheduling",
      "Missed Call Text-Back",
      "Instagram DM Automation",
      "Lead Qualification",
      "CRM Integration",
      "Up to 2,000 conversations / mo",
      "100 voice minutes for testing",
    ],
    cta: "Choose Growth",
    highlight: true,
  },
  {
    name: "Pro",
    price: "Custom",
    period: "",
    setup: "From $1,500",
    description: "For high-volume businesses & multi-location teams.",
    features: [
      "Everything in Growth",
      "AI Voice Receptionist",
      "Omnichannel Inbox",
      "AI Call Handling",
      "Advanced Workflow Automation",
      "Multi-Location Support",
      "Priority Support",
      "Analytics Dashboard",
      "Custom Integrations",
      "Dedicated Onboarding",
    ],
    cta: "Talk to us",
    highlight: false,
    priceNote: "Starting $997+/mo",
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
      <div className="grid gap-5 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Tier key={tier.name} tier={tier} />
        ))}
      </div>

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
            <span className="chip-glow">FOUNDING</span>
            <span className="text-sm text-ink">
              Founding client offer — limited spots
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
                  Founding pricing
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-ink">$297</span>
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
                  We're onboarding a small group of founding clients to refine
                  the product. In exchange for case-study participation, you
                  get most Growth-tier features at this price — locked for 12
                  months.
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                  What's included
                </div>
                <ul className="mt-3 space-y-2 text-sm text-ink">
                  {[
                    "WhatsApp + Web chat + SMS",
                    "Missed call text-back",
                    "Booking + rescheduling",
                    "Calendar integration",
                    "Priority Slack support",
                    "12-month price lock",
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
      className={`card relative flex flex-col p-7 ${
        tier.highlight
          ? "border-cyan-glow/40 shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_0_60px_0_rgba(34,211,238,0.08)]"
          : ""
      }`}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-7 chip-glow">MOST POPULAR</span>
      )}
      <div>
        <h3 className="font-display text-2xl text-ink">{tier.name}</h3>
        <p className="mt-1 text-sm text-ink-muted">{tier.description}</p>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-4xl text-ink">{tier.price}</span>
          {tier.period && (
            <span className="text-ink-muted">{tier.period}</span>
          )}
        </div>
        {tier.priceNote && (
          <div className="mt-1 font-mono text-[11px] text-ink-dim">
            {tier.priceNote}
          </div>
        )}
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

      <Link
        href={`/contact?plan=${tier.name.toLowerCase()}`}
        className={`mt-7 w-full ${tier.highlight ? "btn-primary" : "btn-secondary"}`}
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
