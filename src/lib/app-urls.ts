const APP_BASE =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://lna.manurevasolutions.com";

/** Liens vers l'app produit. Absolus : ils sortent du site vitrine et ne doivent pas
 *  passer par le Link localisé de next-intl, qui préfixerait la locale. */
export const appUrls = {
  register: APP_BASE + "/register",
  login: APP_BASE + "/login",
} as const;
