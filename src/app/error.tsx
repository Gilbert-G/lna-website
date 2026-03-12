"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <AlertTriangle className="text-destructive/50 size-16" />
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
        Something Went Wrong
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md">
        An unexpected error occurred. Please try again, or contact support if
        the problem persists.
      </p>
      <div className="mt-8 flex gap-3">
        <Button onClick={reset}>Try Again</Button>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </Button>
      </div>
    </Container>
  );
}
