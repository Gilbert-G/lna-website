"use client";

import { useTranslations } from "next-intl";

export function SkipToContent() {
  const t = useTranslations("common");

  return (
    <a
      href="#main-content"
      className="bg-primary text-primary-foreground fixed top-0 left-1/2 z-[100] -translate-x-1/2 -translate-y-full rounded-b-lg px-4 py-2 text-sm font-medium transition-transform focus:translate-y-0"
    >
      {t("skipToContent")}
    </a>
  );
}
