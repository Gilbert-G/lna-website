import type { MetadataRoute } from "next";
import { SITE_URL, PRELAUNCH } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Pre-launch: block all crawlers. Flip PRELAUNCH to false on launch day.
      ...(PRELAUNCH ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
