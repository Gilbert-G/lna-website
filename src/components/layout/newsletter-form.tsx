"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { showToast } from "@/components/ui/toast";

export function NewsletterForm() {
  const t = useTranslations("newsletter");
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast(t("invalidEmail"), "error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to subscribe");
      }

      showToast(t("success"), "success");
      window.gtag?.("event", "newsletter_signup", { method: "footer" });
      form.reset();
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : t("invalidEmail"),
        "error"
      );
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit} noValidate>
      <Input
        type="email"
        name="email"
        placeholder={t("emailPlaceholder")}
        className="max-w-xs"
        aria-label={t("emailLabel")}
        required
      />
      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          t("subscribe")
        )}
      </Button>
    </form>
  );
}
