"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const navItems = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "Demo", href: "/demo" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // iOS-compatible scroll lock when menu is open
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  // Close menu on route change or escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-bg-border bg-bg-base/95 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x">
          <nav className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Affnaai home"
              onClick={() => setOpen(false)}
            >
              <Logo />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <Link href="/contact" className="btn-ghost">
                Contact
              </Link>
              <Link href="/demo" className="btn-primary">
                Try the demo
                <ArrowIcon />
              </Link>
            </div>

            <button
              type="button"
              className="relative z-50 rounded-full border border-bg-borderHi p-2 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <div className="flex h-5 w-5 flex-col items-center justify-center gap-1">
                <span
                  className={`block h-px w-4 bg-ink transition-transform duration-300 ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-4 bg-ink transition-transform duration-300 ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu — sibling of header, NOT nested, so it escapes any stacking context */}
      <div
        className={`fixed inset-0 z-30 lg:hidden ${
          open ? "visible" : "invisible pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop — tap to close */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-bg-base/95 backdrop-blur-xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sheet content */}
        <div
          className={`absolute inset-x-0 top-16 bottom-0 overflow-y-auto transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="container-x py-8">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-bg-border py-4 font-display text-2xl text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-secondary w-full"
              >
                Contact
              </Link>
              <Link
                href="/demo"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Try the demo
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
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
