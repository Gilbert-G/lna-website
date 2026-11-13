import localFont from "next/font/local";

/**
 * IBM Plex — self-hosted woff2 (SIL OFL). Same-origin only; never load from
 * fonts.googleapis.com / fonts.gstatic.com (GDPR / Website v4).
 */
export const ibmPlexSans = localFont({
  src: [
    {
      path: "../fonts/IBMPlexSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/IBMPlexSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/IBMPlexSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const ibmPlexMono = localFont({
  src: [
    {
      path: "../fonts/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/IBMPlexMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  fallback: ["Menlo", "Consolas", "monospace"],
});
