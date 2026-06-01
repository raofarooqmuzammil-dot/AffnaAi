import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-posts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://affnaai.com";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.metaTitle,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "Affnaai",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Affnaai",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Affnaai",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10 6H2M2 6l3-3M2 6l3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All posts
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-ink-dim">
              <span className="rounded-full border border-bg-borderHi px-2.5 py-0.5 text-ink-muted">
                {post.category}
              </span>
              <time>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-4 font-display text-balance text-4xl text-ink lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div
              className="prose-affnaai"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />
          </div>
        </div>
      </article>

      {/* CTA card */}
      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-bg-border bg-bg-surface/40 p-8 text-center lg:p-10">
              <h2 className="font-display text-2xl text-ink lg:text-3xl">
                Want this for your business?
              </h2>
              <p className="mt-3 text-pretty text-ink-muted">
                See Affnaai's AI receptionist in action — handle missed calls,
                WhatsApp, and bookings 24/7 from day one.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/demo"
                  className="rounded-full bg-cyan-glow px-5 py-2.5 text-sm font-medium text-bg-base transition-all hover:shadow-glow-sm"
                >
                  Try the live demo
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-bg-borderHi bg-bg-elevated/60 px-5 py-2.5 text-sm text-ink transition-all hover:border-cyan-glow/40"
                >
                  Book a setup call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markdown styles — scoped to .prose-affnaai */}
      <style>{`
        .prose-affnaai { color: #B8BCC4; font-size: 17px; line-height: 1.75; }
        .prose-affnaai h2 {
          color: #F4F4F5;
          font-family: var(--font-display), serif;
          font-size: 1.875rem;
          font-weight: 500;
          line-height: 1.2;
          margin-top: 3rem;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .prose-affnaai h3 {
          color: #F4F4F5;
          font-family: var(--font-display), serif;
          font-size: 1.375rem;
          font-weight: 500;
          line-height: 1.3;
          margin-top: 2.25rem;
          margin-bottom: 0.75rem;
        }
        .prose-affnaai p {
          margin-bottom: 1.25rem;
          color: #B8BCC4;
        }
        .prose-affnaai strong { color: #F4F4F5; font-weight: 600; }
        .prose-affnaai em { font-style: italic; color: #D4D4D8; }
        .prose-affnaai ul, .prose-affnaai ol {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
        }
        .prose-affnaai ul li {
          list-style: disc;
          margin-bottom: 0.5rem;
          color: #B8BCC4;
        }
        .prose-affnaai ol li {
          list-style: decimal;
          margin-bottom: 0.5rem;
          color: #B8BCC4;
        }
        .prose-affnaai ul li::marker, .prose-affnaai ol li::marker {
          color: #22D3EE;
        }
        .prose-affnaai a {
          color: #22D3EE;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(34, 211, 238, 0.4);
          transition: text-decoration-color 0.2s;
        }
        .prose-affnaai a:hover {
          text-decoration-color: #22D3EE;
        }
        .prose-affnaai code {
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.2);
          color: #22D3EE;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.875em;
          font-family: var(--font-mono), monospace;
        }
        .prose-affnaai pre {
          background: #0B0D12;
          border: 1px solid #1C2029;
          padding: 1rem;
          border-radius: 8px;
          margin: 1.5rem 0;
          overflow-x: auto;
        }
        .prose-affnaai pre code {
          background: transparent;
          border: none;
          color: #B8BCC4;
          padding: 0;
        }
        .prose-affnaai blockquote {
          border-left: 3px solid #22D3EE;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #D4D4D8;
        }
        .prose-affnaai hr {
          border: none;
          border-top: 1px solid #1C2029;
          margin: 3rem 0;
        }
        .prose-affnaai img {
          border-radius: 12px;
          margin: 1.5rem 0;
          max-width: 100%;
        }
      `}</style>
    </>
  );
}
