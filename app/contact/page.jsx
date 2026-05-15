"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact-page" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip">[ CONTACT ]</span>
            <h1 className="mt-5 font-display text-balance text-5xl text-ink lg:text-6xl">
              Tell us about your business.
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              We'll get back within one business day with a setup plan and
              honest pricing. No fluff.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {status === "success" ? (
              <div className="card animate-fade-up overflow-hidden p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-glow/15 text-cyan-glow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="mt-5 font-display text-3xl text-ink">Got it.</h2>
                <p className="mt-3 text-ink-muted">
                  We've received your message and you'll hear back within one
                  business day. In the meantime, feel free to{" "}
                  <a href="/demo" className="text-cyan-glow underline-offset-4 hover:underline">
                    try the live demo
                  </a>
                  .
                </p>
                <div className="mx-auto mt-6 font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                  REF · #{Math.random().toString(36).slice(2, 8).toUpperCase()}
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="card p-8 lg:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Smith"
                  />
                  <Field
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@business.com"
                  />
                </div>
                <Field
                  label="Company / Business"
                  className="mt-6"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Sparkle Pro Cleaning"
                />
                <Field
                  label="What are you trying to solve?"
                  className="mt-6"
                  textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="We're missing 10-15 calls a week and customers are going to competitors. Need help with after-hours coverage and WhatsApp."
                />

                <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                    Responses within 1 business day · No spam ever
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    {status !== "sending" && <Arrow />}
                  </button>
                </div>
                {status === "error" && (
                  <p className="mt-4 font-mono text-xs text-danger">
                    {error || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            )}

            {/* Alternate contact methods */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <ContactBox
                title="Prefer WhatsApp?"
                desc="Message us directly — we usually reply within minutes."
                cta="Open WhatsApp"
                href="https://wa.me/0000000000"
              />
              <ContactBox
                title="On a tight timeline?"
                desc="Book a 20-min setup call. We'll have a plan for you by the end."
                cta="Book a call"
                href="/contact?plan=urgent"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, textarea, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-dim">
        {label}
        {props.required && <span className="ml-1 text-cyan-glow">*</span>}
      </span>
      {textarea ? (
        <textarea
          {...props}
          rows={4}
          className="mt-2 w-full rounded-xl border border-bg-border bg-bg-base/50 px-4 py-3 text-sm text-ink placeholder:text-ink-dim transition-colors focus:border-cyan-glow/40 focus:outline-none focus:ring-2 focus:ring-cyan-glow/20"
        />
      ) : (
        <input
          {...props}
          className="mt-2 w-full rounded-xl border border-bg-border bg-bg-base/50 px-4 py-3 text-sm text-ink placeholder:text-ink-dim transition-colors focus:border-cyan-glow/40 focus:outline-none focus:ring-2 focus:ring-cyan-glow/20"
        />
      )}
    </label>
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

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
