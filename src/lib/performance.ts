import type { NextWebVitalsMetric } from "next/app";

/**
 * Reports Web Vitals metrics. Wire up in app/layout.tsx or a client component.
 * Sends to analytics endpoint or logs in development.
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
  const { name, value, id } = metric;

  // Send to Google Analytics if available
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, {
      event_category: "Web Vitals",
      event_label: id,
      value: Math.round(name === "CLS" ? value * 1000 : value),
      non_interaction: true,
    });
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[Web Vitals] ${name}: ${value}`);
  }
}

/**
 * Creates an IntersectionObserver-based lazy loader.
 * Returns a function to observe an element and trigger a callback when visible.
 */
export function createViewportObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = { rootMargin: "200px" }
): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, options);
}
