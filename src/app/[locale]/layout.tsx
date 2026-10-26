import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { CrispChat } from "@/components/integrations/CrispChat";
import { CookieConsent } from "@/components/integrations/CookieConsent";
import { ToastProvider } from "@/components/ui/toast";
import { DemoRequestModal } from "@/components/forms/DemoRequestModal";
import { routing } from "@/i18n/routing";
import { SITE_URL, PRELAUNCH } from "@/lib/site";

const inter = Inter({
  // Must match `--font-sans: var(--font-inter)` in globals.css. It was
  // "--font-sans", the same name as the theme token it feeds, which made the
  // token circular and dropped the site back to Times.
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: "/favicon.svg",
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [{ url: "/brand/og-default.svg", width: 1200, height: 630 }],
    },
    metadataBase: new URL(SITE_URL),
    // Pre-launch: keep the site out of search indexes until launch day.
    robots: PRELAUNCH ? { index: false, follow: false } : undefined,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        fr: `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    /* The font variables MUST be on <html>: globals.css applies `font-sans` to
       the html element via @layer base. Defining them on <body> left html
       resolving an undefined var, which is invalid at computed-value time and
       fell back to the browser default (Times) — with the webfonts downloaded
       but never used. */
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider>
          <SkipToContent />
          <Header />
          <main id="main-content" className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <CrispChat />
          <CookieConsent />
          <ToastProvider />
          <DemoRequestModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
