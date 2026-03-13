"use client";

import { useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "lna-cookie-consent";

export type ConsentValue = "all" | "essential" | null;

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentValue;
}

export function hasFullConsent(): boolean {
  return getConsent() === "all";
}

function subscribeNoop(_cb: () => void) {
  // No external subscription needed — consent only changes via user action
  return () => {};
}

function getConsentSnapshot() {
  return localStorage.getItem(CONSENT_KEY);
}

function getServerSnapshot() {
  return "unknown";
}

export function CookieConsent() {
  const t = useTranslations("common");
  const consent = useSyncExternalStore(
    subscribeNoop,
    getConsentSnapshot,
    getServerSnapshot
  );
  const [dismissed, setDismissed] = useState(false);
  const visible = !consent && !dismissed;

  function accept(value: "all" | "essential") {
    localStorage.setItem(CONSENT_KEY, value);
    setDismissed(true);
    // Notify other components that consent has changed
    window.dispatchEvent(
      new CustomEvent("cookie-consent-change", { detail: value })
    );
  }

  if (!visible) return null;

  return (
    <div className="bg-card fixed right-0 bottom-0 left-0 z-50 border-t p-4 shadow-lg sm:right-auto sm:bottom-4 sm:left-4 sm:max-w-sm sm:rounded-xl sm:border">
      <p className="text-sm font-medium">{t("cookieConsent.heading")}</p>
      <p className="text-muted-foreground mt-1 text-xs">
        {t("cookieConsent.description")}
      </p>
      <div className="mt-3 flex gap-2">
        <Button size="sm" onClick={() => accept("all")}>
          {t("cookieConsent.acceptAll")}
        </Button>
        <Button variant="outline" size="sm" onClick={() => accept("essential")}>
          {t("cookieConsent.essentialOnly")}
        </Button>
      </div>
    </div>
  );
}
