"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

const localeLabels: Record<string, string> = {
  fr: "FR",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      className={cn(
        "bg-muted/60 inline-flex items-center rounded-full p-0.5 text-xs font-medium backdrop-blur-sm",
        isPending && "pointer-events-none opacity-60"
      )}
      role="radiogroup"
      aria-label="Language"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          role="radio"
          aria-checked={loc === locale}
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded-full px-2.5 py-1 transition-all duration-200",
            loc === locale
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
