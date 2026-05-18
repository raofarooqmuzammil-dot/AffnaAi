import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog",
  description: "Notes on AI receptionists, missed-call economics, and running service businesses.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute inset-0 radial-fade-top pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-balance text-5xl text-ink lg:text-6xl">
              Notes from the front desk.
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              Honest writing on AI receptionists, missed-call economics, and
              running service businesses in 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-5">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card card-hover group block p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-cyan-glow">{post.category}</span>
                  <span className="text-xs text-ink-dim">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl text-ink lg:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-pretty text-ink-muted">{post.excerpt}</p>
                <div className="mt-5 text-sm text-cyan-glow transition-transform group-hover:translate-x-1">
                  Read →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(d) {
  const date = new Date(d);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
