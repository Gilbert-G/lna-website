// The product app lives on the product domain. This used to fall back to the
// legacy `lna.manurevasolutions.com`, which meant the vitrine's register/login
// links sent visitors to the host we are retiring (LAUNCH-01 blocker B1).
// Keep this in step with the app's own APP_URL.
const APP_BASE = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.lnaflow.com";

/** Liens vers l'app produit. Absolus : ils sortent du site vitrine et ne doivent pas
 *  passer par le Link localisé de next-intl, qui préfixerait la locale. */
export const appUrls = {
  register: APP_BASE + "/register",
  login: APP_BASE + "/login",
} as const;
