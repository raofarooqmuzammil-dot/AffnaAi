import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute inset-0 radial-fade-top pointer-events-none" />
      <div className="container-x relative">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">
            [ 404 · NO ANSWER ]
          </span>
          <h1 className="mt-6 font-display text-7xl text-ink lg:text-8xl">
            Missed it.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-pretty text-ink-muted">
            That page doesn't exist — but the demo on our home page does, and
            it's awake right now.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Go home
            </Link>
            <Link href="/demo" className="btn-secondary">
              Try the demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
