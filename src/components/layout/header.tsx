"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { usePathname } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { Menu, User, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { appUrls } from "@/lib/app-urls";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  const navLinks = [
    { href: "/features", label: t("features") },
    { href: "/pricing", label: t("pricing") },
    { href: "/about", label: t("about") },
    { href: "/blog", label: t("blog") },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the panel if the viewport grows into the desktop masthead (≥1056px).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1056px)");
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header className="border-gray-20 bg-background fixed top-0 right-0 left-0 z-50 h-12 border-b">
        <Container className="flex h-full items-center gap-3">
          {/* Mobile (<1056): hamburger on the left */}
          <button
            type="button"
            className="text-foreground hidden shrink-0 max-[1055px]:inline-flex"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>

          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/brand/logo.svg"
              alt="LNA"
              width={88}
              height={28}
              className="dark:hidden"
              priority
            />
            <Image
              src="/brand/logo-white.svg"
              alt="LNA"
              width={88}
              height={28}
              className="hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop (≥1056): divider + text nav beside the mark */}
          <div
            className="bg-gray-20 hidden h-5 w-px shrink-0 min-[1056px]:block"
            aria-hidden="true"
          />

          <nav
            className="hidden items-center gap-1 min-[1056px]:flex"
            aria-label={t("mainNavigation")}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-none px-3 py-1.5 text-sm leading-none transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-foreground bg-gray-10 font-normal"
                    : "text-muted-foreground hover:bg-gray-10 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={appUrls.login}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              <User
                className="size-4 shrink-0"
                aria-hidden="true"
                strokeWidth={1.75}
              />
              {t("signIn")}
            </a>
          </div>
        </Container>
      </header>

      {/*
        Mobile nav panel lives outside <header> so fixed inset-0 covers the
        viewport (LNA-255). Opaque background — never transparent over the hero.
      */}
      <div
        id="mobile-nav-panel"
        aria-hidden={!mobileOpen}
        className={cn(
          "bg-background fixed inset-0 z-40 hidden flex-col overflow-y-auto transition-opacity duration-200 max-[1055px]:flex",
          mobileOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        )}
      >
        <nav
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-8 pt-16 pb-8"
          aria-label={t("mobileNavigation")}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-none px-4 py-3 text-base font-normal transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-foreground bg-gray-10"
                  : "text-muted-foreground hover:bg-gray-10 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
