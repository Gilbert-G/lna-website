"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <AlertTriangle className="text-destructive/50 size-16" />
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
        {t("general.heading")}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md">
        {t("general.description")}
      </p>
      <div className="mt-8 flex gap-3">
        <Button onClick={reset}>{t("general.retry")}</Button>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/")}
        >
          {t("general.goHome")}
        </Button>
      </div>
    </Container>
  );
}
