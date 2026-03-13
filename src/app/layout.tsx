import { ReactNode } from "react";

// Root layout — locale-specific layout is in [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
