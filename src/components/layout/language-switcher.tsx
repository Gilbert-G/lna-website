"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { Globe } from "lucide-react";

const localeLabels: Record<string, string> = {
  fr: "FR",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Current locale first: EN | FR on English pages, FR | EN on French pages.
  const orderedLocales = [
    locale,
    ...routing.locales.filter((loc) => loc !== locale),
  ];

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      className={cn(
        "text-muted-foreground inline-flex items-center gap-1.5 text-sm",
        isPending && "pointer-events-none opacity-60"
      )}
      role="radiogroup"
      aria-label="Language"
    >
      <Globe
        className="size-4 shrink-0"
        aria-hidden="true"
        strokeWidth={1.75}
      />
      <div className="inline-flex items-center gap-1">
        {orderedLocales.map((loc, index) => (
          <span key={loc} className="inline-flex items-center gap-1">
            {index > 0 && (
              <span className="text-gray-30" aria-hidden="true">
                |
              </span>
            )}
            <button
              type="button"
              role="radio"
              aria-checked={loc === locale}
              onClick={() => switchLocale(loc)}
              className={cn(
                "hover:text-foreground rounded-none px-0.5 transition-colors",
                loc === locale
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground font-normal"
              )}
            >
              {localeLabels[loc]}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
