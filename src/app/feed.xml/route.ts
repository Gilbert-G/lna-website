import RSS from "rss";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://getlna.com";

export async function GET() {
  const posts = getAllPosts();

  const feed = new RSS({
    title: "LNA Blog",
    description:
      "Insights on document AI, product updates, and best practices for teams automating their document workflows.",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
    language: "en",
    pubDate: posts[0]?.date ? new Date(posts[0].date) : new Date(),
  });

  for (const post of posts) {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      date: new Date(post.date),
      author: post.author,
      categories: [post.category],
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
