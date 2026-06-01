import Link from "next/link";
import { getAllPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog",
  description:
    "Insights on AI receptionists, missed call recovery, WhatsApp automation, and growing service businesses.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-balance text-5xl text-ink lg:text-6xl">
              Notes on AI, service businesses, and missed-call economics.
            </h1>
            <p className="mt-6 text-pretty text-lg text-ink-muted">
              Practical writing for owners and operators of service businesses
              looking to automate intelligently.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            {posts.length === 0 ? (
              <div className="text-center text-ink-muted">
                <p>No posts yet. Check back soon.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-2xl border border-bg-border bg-bg-surface/40 p-6 transition-all hover:border-bg-borderHi hover:bg-bg-surface/60 lg:p-8"
                  >
                    <div className="flex items-center gap-3 text-xs text-ink-dim">
                      <span className="rounded-full border border-bg-borderHi px-2.5 py-0.5 text-ink-muted">
                        {post.category}
                      </span>
                      <time>{formatDate(post.date)}</time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl text-ink transition-colors group-hover:text-cyan-glow lg:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-pretty text-ink-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-cyan-glow">
                      Read article
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6h8M10 6L7 3M10 6L7 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
