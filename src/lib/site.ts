/** Canonical public origin of the marketing site. Override with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lnaflow.com";

/** Real social profiles. Deliberately EMPTY until the accounts exist: the UI hides
 *  the icons rather than linking to a bare platform domain (or to "#"), which read
 *  as an unfinished site. Add entries here to switch them on. */
export const SOCIAL_LINKS: ReadonlyArray<{
  key: "linkedin" | "twitter";
  href: string;
}> = [];

/** Pre-launch: the site is publicly reachable but must NOT be indexed until launch day.
 *  Flip to `false` on launch — it drives both robots.txt and the per-page noindex meta. */
export const PRELAUNCH = true;

/** Last substantive content change to the static pages. Bump this when page copy
 *  changes so sitemap `lastModified` reflects reality instead of the build time. */
export const CONTENT_UPDATED_AT = "2026-10-30";
