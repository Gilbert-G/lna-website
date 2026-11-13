"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { useTranslations } from "next-intl";
import { appUrls } from "@/lib/app-urls";
import { SOCIAL_LINKS } from "@/lib/site";

const socialLinks = [
  ...SOCIAL_LINKS.map((s) => ({
    href: s.href,
    label: s.key === "linkedin" ? "LinkedIn" : "X",
    icon: s.key === "linkedin" ? Linkedin : Twitter,
  })),
  { href: "mailto:hello@lnaflow.com", label: "Email", icon: Mail },
];

export function Footer() {
  const t = useTranslations("footer");

  const footerLinks = {
    [t("product")]: [
      { href: "/features", label: t("features") },
      { href: "/pricing", label: t("pricing") },
      { href: "/blog", label: t("blog") },
      { href: appUrls.login, label: t("signIn"), external: true },
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
    <footer className="text-gray-10 bg-gray-100">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo-white.svg"
                alt="LNA"
                width={100}
                height={32}
              />
            </Link>
            <p className="text-gray-30 mt-4 max-w-sm text-sm">
              {t("description")}
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">{t("stayUpdated")}</p>
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
                  className="text-gray-30 p-2 transition-colors hover:text-white"
                >
                  <link.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-sm font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-gray-30 text-sm transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-30 text-sm transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="bg-legal">
        <Container className="text-gray-30 flex flex-col items-center justify-between gap-4 py-4 text-sm md:flex-row">
          <p>{t("copyright")}</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              {t("privacy")}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              {t("terms")}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
