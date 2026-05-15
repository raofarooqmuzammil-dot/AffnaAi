"use client";

import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="card divide-y divide-bg-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bg-elevated/40"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-ink">{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                  isOpen
                    ? "border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow"
                    : "border-bg-borderHi text-ink-muted"
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-pretty text-sm leading-relaxed text-ink-muted">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
