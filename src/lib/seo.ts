import { SITE_URL } from "@/lib/site";

/**
 * Self-referential canonical + hreflang for a single route.
 *
 * Why this exists: the locale layout cannot know the current path, so it emitted
 * `canonical: ${SITE_URL}/${locale}` for EVERY page. That told Google that
 * /fr/pricing, /fr/features and /fr/about were all duplicates of /fr, which
 * collapses every subpage into the home page and makes the sitemap entries
 * pointless. Each page must therefore declare its own alternates.
 *
 * `x-default` points at the primary locale (fr) so Google has an explicit
 * fallback for unmatched languages.
 */
export function pageAlternates(locale: string, path = "") {
  const suffix = path === "/" ? "" : path;
  const url = (l: string) => `${SITE_URL}/${l}${suffix}`;
  return {
    canonical: url(locale),
    languages: {
      fr: url("fr"),
      en: url("en"),
      "x-default": url("fr"),
    },
  };
}
