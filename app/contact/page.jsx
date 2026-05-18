"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL =
  "https://calendly.com/data_managing_services/affnaai-setup-call" +
  "?primary_color=22D3EE" +
  "&background_color=050507" +
  "&text_color=F4F4F5" +
  "&hide_landing_page_details=1" +
  "&hide_gdpr_banner=1";

export default function ContactPage() {
  const widgetRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const initWidget = () => {
      if (cancelled || !widgetRef.current) return;
      if (window.Calendly?.initInlineWidget) {
        // Clear any previous content first (prevents duplicates on re-renders)
        widgetRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: widgetRef.current,
        });
      }
    };

    // If Calendly is already loaded (e.g. user navigated back), init immediately
    if (window.Calendly) {
      initWidget();
      return () => {
        cancelled = true;
      };
    }

    // Otherwise inject the script and wait for it
    let script = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!script) {
      script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);

      // Also load the stylesheet
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    } else {
      script.addEventListener("load", initWidget);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-balance text-5xl text-ink lg:text-6xl">
              Pick a time. <br />
              <span className="text-ink-muted">We'll have a plan ready.</span>
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              20 minutes. We'll learn your business, walk you through the AI
              receptionist, and tell you straight whether we're a fit. No sales
              pitch.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            {/* Calendly embed wrapper */}
            <div className="card overflow-hidden">
              <div className="flex items-center justify-between border-b border-bg-border bg-bg-elevated/60 px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-glow/30 to-cyan-deep/30">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-cyan-glow"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink">
                      Book a setup call
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                      20 minutes · Google Meet
                    </div>
                  </div>
                </div>
                <span className="chip-glow">LIVE CALENDAR</span>
              </div>
              <div
                ref={widgetRef}
                className="bg-bg-base"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>

            {/* Alternate paths */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <ContactBox
                title="Prefer WhatsApp?"
                desc="Message us directly — we usually reply within minutes."
                cta="Open WhatsApp"
                href="https://wa.me/923334985948"
              />
              <ContactBox
                title="Not ready for a call?"
                desc="Try the AI live first. Talk to our demo receptionist."
                cta="Open the demo"
                href="/demo"
              />
            </div>

            <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-widest text-ink-dim">
              All bookings flow directly into our Google Calendar · You'll get a confirmation email
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactBox({ title, desc, cta, href }) {
  return (
    <a
      href={href}
      className="card card-hover group block p-6"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener"
    >
      <h3 className="font-display text-lg text-ink">{title}</h3>
      <p className="mt-1 text-sm text-ink-muted">{desc}</p>
      <div className="mt-4 font-mono text-xs uppercase tracking-wider text-cyan-glow transition-transform group-hover:translate-x-0.5">
        {cta} →
      </div>
    </a>
  );
}
