/** Canonical public origin of the marketing site. Override with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lnaflow.com";

/** Pre-launch: the site is publicly reachable but must NOT be indexed until launch day.
 *  Flip to `false` on launch — it drives both robots.txt and the per-page noindex meta. */
export const PRELAUNCH = true;
