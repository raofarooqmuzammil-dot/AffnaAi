import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.metaTitle || post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <>
      <article className="pt-32 lg:pt-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="font-mono text-xs uppercase tracking-widest text-ink-dim hover:text-ink-muted"
            >
              ← All posts
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span className="chip">{post.category}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                {formatDate(post.date)} · {post.readTime}
              </span>
            </div>

            <h1 className="mt-5 font-display text-balance text-4xl text-ink lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-pretty text-xl text-ink-muted">
              {post.excerpt}
            </p>

            <div className="mt-12 h-px divider-glow opacity-50" />

            <div className="prose-custom mt-12 pb-24">
              {renderContent(post.content)}
            </div>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-bg-border bg-bg-surface/30 py-20">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              <h3 className="font-display text-2xl text-ink">Keep reading</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card card-hover group block p-5"
                  >
                    <span className="chip">{p.category}</span>
                    <h4 className="mt-3 font-display text-lg text-ink">
                      {p.title}
                    </h4>
                    <div className="mt-3 font-mono text-xs uppercase tracking-wider text-cyan-glow transition-transform group-hover:translate-x-1">
                      Read →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-bg-border py-20">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl text-balance text-ink lg:text-4xl">
            Stop reading. Start fixing.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-muted">
            Try the live AI receptionist demo — see exactly how it would handle
            your customers.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/demo" className="btn-primary">
              Try the demo
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .prose-custom { color: #B8BCC4; font-size: 18px; line-height: 1.75; }
        .prose-custom h2 { color: #F4F4F5; font-family: var(--font-display); font-size: 1.875rem; margin-top: 3rem; margin-bottom: 1rem; line-height: 1.2; letter-spacing: -0.02em; }
        .prose-custom h3 { color: #F4F4F5; font-family: var(--font-display); font-size: 1.375rem; margin-top: 2.25rem; margin-bottom: 0.75rem; }
        .prose-custom p { margin-bottom: 1.25rem; }
        .prose-custom strong { color: #F4F4F5; font-weight: 600; }
        .prose-custom ul, .prose-custom ol { margin: 1.25rem 0; padding-left: 1.25rem; }
        .prose-custom li { margin-bottom: 0.5rem; }
        .prose-custom ul li { list-style: none; position: relative; padding-left: 1.25rem; }
        .prose-custom ul li::before { content: "·"; color: #22D3EE; position: absolute; left: 0.25rem; top: -0.15rem; font-size: 1.5rem; line-height: 1; }
      `}</style>
    </>
  );
}

function renderContent(md) {
  const lines = md.trim().split("\n");
  const blocks = [];
  let listBuf = [];

  const flushList = (i) => {
    if (listBuf.length) {
      blocks.push(
        <ul key={`ul-${i}`}>
          {listBuf.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inline(item) }} />
          ))}
        </ul>
      );
      listBuf = [];
    }
  };

  lines.forEach((line, i) => {
    if (line.startsWith("## ")) {
      flushList(i);
      blocks.push(<h2 key={i}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      flushList(i);
      blocks.push(<h3 key={i}>{line.slice(4)}</h3>);
    } else if (/^- /.test(line)) {
      listBuf.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList(i);
    } else {
      flushList(i);
      blocks.push(
        <p key={i} dangerouslySetInnerHTML={{ __html: inline(line) }} />
      );
    }
  });
  flushList("end");
  return blocks;
}

function inline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
