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
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <AlertTriangle className="size-16 text-red-500/50" />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
            Something Went Wrong
          </h1>
          <p className="mt-3 max-w-md text-gray-600 dark:text-gray-400">
            A critical error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            className="mt-8 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
