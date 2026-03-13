import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except:
    // - API routes (/api/...)
    // - Next.js internals (/_next/...)
    // - Static files with extensions (.svg, .ico, etc.)
    "/((?!api|_next|.*\\..*).*)",
  ],
};
