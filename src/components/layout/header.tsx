"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { usePathname } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      className={cn(
        "bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        scrolled ? "border-border py-2" : "border-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/brand/logo.svg"
            alt="LNA"
            width={100}
            height={32}
            className="dark:hidden"
            priority
          />
          <Image
            src="/brand/logo-white.svg"
            alt="LNA"
            width={100}
            height={32}
            className="hidden dark:block"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={t("mainNavigation")}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button size="lg" render={<Link href="/contact" />}>
            {t("cta")}
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile nav overlay */}
      <div
        className={cn(
          "bg-background fixed inset-0 top-0 z-40 flex flex-col transition-all duration-300 md:hidden",
          mobileOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        )}
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          <Link href="/" onClick={() => setMobileOpen(false)}>
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
          <button
            onClick={() => setMobileOpen(false)}
            aria-label={t("menuClose")}
            className="text-foreground"
          >
            <X className="size-6" />
          </button>
        </div>
        <nav
          className="flex flex-1 flex-col gap-1 p-4"
          aria-label={t("mobileNavigation")}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Button
              size="lg"
              className="w-full"
              render={
                <Link href="/contact" onClick={() => setMobileOpen(false)} />
              }
            >
              {t("cta")}
            </Button>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
