import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * French URLs for the legal pages.
 *
 * next-intl is configured (src/i18n/routing.ts) WITHOUT localized `pathnames`,
 * so every route ships an English slug in both locales and the natural French
 * URLs — /fr/mentions-legales, /fr/confidentialite, /fr/cgu — 404. For a French
 * launch that is a legal-discoverability problem: the mandatory *mentions
 * légales* must be reachable at the URL a French user (or a crawler) expects.
 *
 * Permanent redirects resolve those URLs without duplicating page components.
 * The locale-less variants are included as well so the redirect holds whether
 * or not the next-intl middleware has already prefixed the locale.
 */
const FR_LEGAL_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: "mentions-legales", to: "/fr/terms" },
  { from: "mentions-legales-cgu", to: "/fr/terms" },
  { from: "cgu", to: "/fr/terms" },
  { from: "conditions-utilisation", to: "/fr/terms" },
  { from: "confidentialite", to: "/fr/privacy" },
  { from: "politique-de-confidentialite", to: "/fr/privacy" },
  { from: "tarifs", to: "/fr/pricing" },
];

const nextConfig: NextConfig = {
  async redirects() {
    const rules: {
      source: string;
      destination: string;
      permanent: boolean;
    }[] = [];
    for (const { from, to } of FR_LEGAL_REDIRECTS) {
      rules.push({ source: `/${from}`, destination: to, permanent: true });
      rules.push({ source: `/fr/${from}`, destination: to, permanent: true });
    }
    return rules;
  },
};

export default withNextIntl(nextConfig);
