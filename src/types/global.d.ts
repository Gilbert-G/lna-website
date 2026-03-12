export {};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}
