"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { useTranslations } from "next-intl";

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "mailto:hello@getlna.com", label: "Email", icon: Mail },
];

export function Footer() {
  const t = useTranslations("footer");

  const footerLinks = {
    [t("product")]: [
      { href: "/features", label: t("features") },
      { href: "/pricing", label: t("pricing") },
      { href: "/blog", label: t("blog") },
    ],
    [t("company")]: [
      { href: "/about", label: t("about") },
      { href: "/contact", label: t("contact") },
    ],
    [t("legal")]: [
      { href: "/privacy", label: t("privacyPolicy") },
      { href: "/terms", label: t("termsOfService") },
    ],
  };

  return (
    <footer className="bg-muted/30 border-t">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo.svg"
                alt="LNA"
                width={100}
                height={32}
                className="dark:hidden"
              />
              <Image
                src="/brand/logo-white.svg"
                alt="LNA"
                width={100}
                height={32}
                className="hidden dark:block"
              />
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm">
              {t("description")}
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">{t("stayUpdated")}</p>
              <NewsletterForm />
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-foreground rounded-lg p-2 transition-colors"
                >
                  <link.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-sm font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p>{t("copyright")}</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
