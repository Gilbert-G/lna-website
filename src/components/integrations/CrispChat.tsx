"use client";

import { useEffect } from "react";
import { hasFullConsent } from "./CookieConsent";

const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

function loadCrisp() {
  if (!CRISP_WEBSITE_ID) return;
  if (document.getElementById("crisp-script")) return;

  window.$crisp = [];
  window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

  const script = document.createElement("script");
  script.id = "crisp-script";
  script.src = "https://client.crisp.chat/l.js";
  script.async = true;
  document.head.appendChild(script);
}

export function CrispChat() {
  useEffect(() => {
    if (!CRISP_WEBSITE_ID) return;

    // Only load if user has given full consent
    if (hasFullConsent()) {
      loadCrisp();
    }

    // Listen for consent changes
    function onConsentChange(e: Event) {
      const detail = (e as CustomEvent).detail;
      if (detail === "all") loadCrisp();
    }
    window.addEventListener("cookie-consent-change", onConsentChange);
    return () =>
      window.removeEventListener("cookie-consent-change", onConsentChange);
  }, []);

  return null;
}
