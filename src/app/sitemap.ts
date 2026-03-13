import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://lna.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;

  const staticRoutes = [
    "",
    "/features",
    "/pricing",
    "/about",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
  ];

  const posts = getAllPosts();

  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${route}`])
          ),
        },
      });
    }
  }

  for (const post of posts) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/blog/${post.slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
