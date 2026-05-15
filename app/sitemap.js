import { blogPosts } from "@/lib/blog-posts";
import { industries } from "@/lib/industries";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://affnaai.com";

  const staticPages = [
    { path: "", priority: 1.0, change: "weekly" },
    { path: "/how-it-works", priority: 0.9, change: "monthly" },
    { path: "/demo", priority: 0.9, change: "monthly" },
    { path: "/pricing", priority: 0.9, change: "monthly" },
    { path: "/industries", priority: 0.8, change: "monthly" },
    { path: "/integrations", priority: 0.7, change: "monthly" },
    { path: "/about", priority: 0.6, change: "yearly" },
    { path: "/contact", priority: 0.8, change: "monthly" },
    { path: "/faq", priority: 0.7, change: "monthly" },
    { path: "/blog", priority: 0.7, change: "weekly" },
  ].map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.change,
    priority: p.priority,
  }));

  const industryPages = industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...industryPages, ...blogPages];
}
