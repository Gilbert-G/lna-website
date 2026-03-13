import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { CrispChat } from "@/components/integrations/CrispChat";
import { CookieConsent } from "@/components/integrations/CookieConsent";
import { ToastProvider } from "@/components/ui/toast";
import { DemoRequestModal } from "@/components/forms/DemoRequestModal";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/metadata";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lna.ai"),
  title: {
    default: "LNA — AI-Powered Document Processing | PDF to Excel Automation",
    template: "%s | LNA",
  },
  description:
    "LNA extracts structured data from any PDF and exports it to Excel automatically. AI-powered document processing with 99.5% accuracy. Request a demo.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "LNA — AI-Powered Document Processing Platform",
    description:
      "Extract structured data from PDFs into Excel — automatically.",
    siteName: "LNA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LNA — AI-Powered Document Processing",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LNA — AI-Powered Document Processing Platform",
    description:
      "Extract structured data from PDFs into Excel — automatically.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://lna.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://client.crisp.chat" />
        <link
          rel="preconnect"
          href="https://client.crisp.chat"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://api.brevo.com" />
        <link
          rel="preconnect"
          href="https://api.brevo.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link
          rel="preconnect"
          href="https://www.youtube.com"
          crossOrigin="anonymous"
        />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={softwareApplicationJsonLd} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}
