import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

function getRawPost(filename) {
  const slug = filename.replace(/\.md$/, "");
  const fileContent = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "",
    metaTitle: data.metaTitle || data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    readTime: data.readTime || "5 min read",
    category: data.category || "Article",
    rawContent: content,
  };
}

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map(getRawPost).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return posts;
}

export function getPostBySlug(slug) {
  try {
    const post = getRawPost(`${slug}.md`);
    return {
      ...post,
      htmlContent: marked.parse(post.rawContent),
    };
  } catch {
    return null;
  }
}

export function getAllSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
