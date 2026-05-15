import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Demo", href: "/demo" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Cleaning companies", href: "/industries/cleaning" },
      { label: "Dental clinics", href: "/industries/dental" },
      { label: "Salons & spas", href: "/industries/salons" },
      { label: "Real estate", href: "/industries/real-estate" },
      { label: "HVAC", href: "/industries/hvac" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-bg-border bg-bg-base">
      <div className="absolute inset-x-0 top-0 h-px divider-glow" aria-hidden />
      <div className="container-x py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-pretty text-sm text-ink-muted">
              AI receptionists that answer calls, reply on WhatsApp, and convert
              leads into bookings — for service businesses.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-ink-dim">
              <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
              <span>SYSTEM ONLINE · ANSWERING 24/7</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-dim">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-cyan-glow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bg-border pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-ink-dim">
            © {year} AFFNAAI · Built for businesses that hate missed calls.
          </p>
          <div className="flex items-center gap-6 font-mono text-xs text-ink-dim">
            <Link href="/contact" className="hover:text-ink-muted">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-ink-muted">
              Terms
            </Link>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-1 w-1 rounded-full bg-cyan-glow" />
              v0.1
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
