import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL, CONTENT_UPDATED_AT } from "@/lib/site";

const BASE_URL = SITE_URL;

/**
 * Sitemap with fr/en alternates plus an explicit `x-default`.
 *
 * Two fixes against the previous version:
 *  - `lastModified` was `new Date()` for every static route, so every page claimed
 *    to have changed on every build. Google discounts that; it now uses a real
 *    content date maintained in `CONTENT_UPDATED_AT`.
 *  - no `x-default`, so there was no declared fallback for unmatched languages.
 */
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

  const languagesFor = (route: string) => ({
    ...Object.fromEntries(locales.map((l) => [l, `${BASE_URL}/${l}${route}`])),
    "x-default": `${BASE_URL}/${routing.defaultLocale}${route}`,
  });

  for (const route of staticRoutes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(CONTENT_UPDATED_AT),
        alternates: { languages: languagesFor(route) },
      });
    }
  }

  for (const post of posts) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        alternates: { languages: languagesFor(`/blog/${post.slug}`) },
      });
    }
  }

  return entries;
}
