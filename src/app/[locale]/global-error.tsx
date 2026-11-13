"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <AlertTriangle className="text-destructive/50 size-16" />
          <h1 className="text-hero text-foreground mt-6 text-balance">
            Something Went Wrong
          </h1>
          <p className="text-body mt-3 max-w-md">
            A critical error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            className="bg-primary text-primary-foreground hover:bg-primary-hover mt-8 rounded-none px-6 py-2.5 text-sm font-normal transition-colors"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
