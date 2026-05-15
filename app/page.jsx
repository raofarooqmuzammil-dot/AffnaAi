import Link from "next/link";
import { industries } from "@/lib/industries";
import BeforeAfter from "@/components/BeforeAfter";
import IntegrationsGrid from "@/components/IntegrationsGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <ProblemSolution />
      <DemoPreview />
      <BeforeAfterSection />
      <IndustriesPreview />
      <IntegrationsSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      <div className="absolute inset-0 radial-fade-top pointer-events-none" />
      <div className="glow-orb top-0 left-1/4 h-96 w-96 bg-cyan-glow/10" />
      <div className="glow-orb bottom-0 right-1/4 h-96 w-96 bg-cyan-deep/10" />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up">
            <span className="chip-glow">
              <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-glow" />
              Answering · 24 / 7
            </span>
          </div>

          <h1
            className="mt-7 font-display text-balance text-5xl text-ink sm:text-6xl lg:text-7xl xl:text-8xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            The AI receptionist that{" "}
            <span className="text-gradient-cyan">never misses</span> a customer.
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-pretty text-lg text-ink-muted animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Affnaai answers calls, WhatsApp, web chat, SMS, and Instagram DMs —
            books appointments, qualifies leads, and texts back missed calls.
            Live in 7 days.
          </p>

          <div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/demo" className="btn-primary">
              Try the live demo
              <Arrow />
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>

          {/* System status line */}
          <div
            className="mt-12 inline-flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-ink-dim animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
              Avg response · 12s
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:flex items-center gap-2">
              Bookings recovered · $2.7k/mo
            </span>
          </div>
        </div>

        {/* Floating channel chips */}
        <div className="mt-20 hidden lg:block">
          <div className="relative mx-auto h-32 max-w-4xl">
            <FloatingChip label="WhatsApp" icon="💬" style={{ left: "5%", top: "20%" }} delay="0.6s" />
            <FloatingChip label="Web chat" icon="🌐" style={{ left: "22%", top: "60%" }} delay="0.7s" />
            <FloatingChip label="Missed call → SMS" icon="📞" style={{ left: "40%", top: "10%" }} delay="0.8s" />
            <FloatingChip label="Instagram DM" icon="📸" style={{ left: "60%", top: "60%" }} delay="0.9s" />
            <FloatingChip label="Voice receptionist" icon="🎙️" style={{ left: "78%", top: "20%" }} delay="1s" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ label, icon, style, delay }) {
  return (
    <div
      className="absolute animate-fade-up"
      style={{ ...style, animationDelay: delay }}
    >
      <div className="flex items-center gap-2 rounded-full border border-bg-borderHi bg-bg-elevated/80 px-4 py-2 text-xs text-ink shadow-lg backdrop-blur-sm">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </div>
  );
}

function Trust() {
  return (
    <section className="border-y border-bg-border bg-bg-surface/40 py-10">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
            Built for service businesses everywhere
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-ink-muted">
            {["Cleaning", "Dental", "Salons", "Real Estate", "HVAC", "Med Spas", "Law Firms", "Gyms"].map(
              (t) => (
                <span key={t} className="font-display text-lg">
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="chip">[ THE PROBLEM ]</span>
            <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
              You're losing customers <br />
              <span className="text-ink-muted">while you sleep.</span>
            </h2>
            <ul className="mt-8 space-y-5 text-pretty text-base text-ink-muted">
              <li className="flex gap-4">
                <span className="font-mono text-xs text-danger">01</span>
                <span>
                  62% of new inquiries now arrive outside 9–5. Voicemails get
                  ignored.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-danger">02</span>
                <span>
                  WhatsApp and Instagram DMs sit unanswered for hours while
                  staff are with customers.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-danger">03</span>
                <span>
                  By the time you reply, the lead has already booked your
                  competitor.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <span className="chip-glow">[ THE FIX ]</span>
            <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
              An AI receptionist that{" "}
              <span className="text-gradient-cyan">answers everything.</span>
            </h2>
            <ul className="mt-8 space-y-5 text-pretty text-base text-ink-muted">
              <li className="flex gap-4">
                <span className="font-mono text-xs text-cyan-glow">01</span>
                <span>
                  Replies in seconds on WhatsApp, web chat, SMS, Instagram, and
                  voice — 24/7.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-cyan-glow">02</span>
                <span>
                  Qualifies leads, books appointments straight into your
                  calendar, and sends reminders.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-cyan-glow">03</span>
                <span>
                  Hands off to your team for anything complex. Never sounds
                  robotic. Never has a bad day.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoPreview() {
  const demos = [
    {
      title: "Web chat",
      tag: "LIVE AI",
      desc: "Real Claude-powered chat. Talk to Mia, our demo receptionist for a cleaning company.",
      href: "/demo#chat",
      accent: "Try it live →",
    },
    {
      title: "WhatsApp",
      tag: "SIMULATED",
      desc: "Watch a real customer conversation play out — from inquiry to confirmed booking.",
      href: "/demo#whatsapp",
      accent: "Watch →",
    },
    {
      title: "Voice receptionist",
      tag: "SAMPLE CALL",
      desc: "Listen to an inbound emergency call get triaged, priced, and dispatched in 34 seconds.",
      href: "/demo#voice",
      accent: "Play →",
    },
  ];
  return (
    <section className="relative border-y border-bg-border bg-bg-surface/30 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine pointer-events-none opacity-40" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip-glow">[ SEE IT WORK ]</span>
          <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
            Three demos. <br />Pick your channel.
          </h2>
          <p className="mt-5 text-pretty text-ink-muted">
            Don't take our word for it. Open a real chat, watch a booking happen,
            listen to a call.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {demos.map((d) => (
            <Link
              key={d.title}
              href={d.href}
              className="card card-hover group relative overflow-hidden p-7"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-ink">{d.title}</h3>
                <span className="chip-glow">{d.tag}</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">{d.desc}</p>
              <div className="mt-12 font-mono text-xs uppercase tracking-wider text-cyan-glow transition-transform group-hover:translate-x-1">
                {d.accent}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">[ A NORMAL DAY ]</span>
          <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
            Before Affnaai. After Affnaai.
          </h2>
        </div>
        <div className="mt-14">
          <BeforeAfter />
        </div>
      </div>
    </section>
  );
}

function IndustriesPreview() {
  return (
    <section className="border-t border-bg-border bg-bg-surface/30 py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="chip">[ BUILT FOR ]</span>
            <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
              Service businesses with phones that won't stop ringing.
            </h2>
          </div>
          <Link href="/industries" className="btn-ghost shrink-0">
            All industries →
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="card card-hover group p-5"
            >
              <div className="text-2xl">{i.icon}</div>
              <h3 className="mt-3 font-display text-lg text-ink">{i.short}</h3>
              <p className="mt-1 text-sm text-ink-muted">{i.tagline}</p>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-wider text-cyan-glow transition-transform group-hover:translate-x-0.5">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">[ PLUGS INTO ]</span>
          <h2 className="mt-5 font-display text-4xl text-balance text-ink lg:text-5xl">
            The tools you already use.
          </h2>
          <p className="mt-5 text-pretty text-ink-muted">
            WhatsApp Business, Google Calendar, your CRM, your phone system. We
            slot in — you don't change a thing.
          </p>
        </div>
        <div className="mt-14">
          <IntegrationsGrid compact />
        </div>
        <div className="mt-8 text-center">
          <Link href="/integrations" className="btn-ghost">
            See all integrations →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-bg-border py-24 lg:py-32">
      <div className="absolute inset-0 radial-fade-bottom pointer-events-none" />
      <div className="glow-orb left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-glow/10" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-balance text-5xl text-ink lg:text-6xl">
            Stop missing calls. <br />
            <span className="text-gradient-cyan">Start booking everything.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-ink-muted">
            Live in 7 days. Cancel anytime. We'll set the whole thing up for you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/demo" className="btn-primary">
              Try the live demo
              <Arrow />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a setup call
            </Link>
          </div>
        </div>
      </div>
    </section>
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
