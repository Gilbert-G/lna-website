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

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LNA — AI Document Processing & PDF to Excel Automation",
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
    images: [{ url: "/brand/og-default.svg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
