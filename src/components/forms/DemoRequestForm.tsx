"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, AlertCircle, X } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
}

interface DemoRequestFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

export function DemoRequestForm({ onClose, isModal }: DemoRequestFormProps) {
  const t = useTranslations("demoForm");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const roles = Object.values(t.raw("roles") as Record<string, string>);

  function validate(form: FormData): FormErrors {
    const errs: FormErrors = {};
    if (!form.get("name")) errs.name = t("errors.nameRequired");
    const email = form.get("email") as string;
    if (!email) {
      errs.email = t("errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = t("errors.emailInvalid");
    }
    if (!form.get("company")) errs.company = t("errors.companyRequired");
    if (!form.get("role")) errs.role = t("errors.roleRequired");
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Honeypot check — bots fill this in
    if (formData.get("website")) return;

    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          role: formData.get("role"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      window.gtag?.("event", "demo_request_submitted", {
        company: formData.get("company"),
        role: formData.get("role"),
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : t("errors.generic")
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center px-6 py-12 text-center">
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground absolute top-4 right-4 p-1"
            aria-label={t("success.close")}
          >
            <X className="size-5" />
          </button>
        )}
        <div className="relative">
          <CheckCircle2 className="text-primary size-16" />
          <span className="absolute -top-1 -right-1 text-2xl">🎉</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold">{t("success.heading")}</h3>
        <p className="text-muted-foreground mt-2 max-w-sm">
          {t("success.description")}
        </p>
        {onClose && (
          <Button onClick={onClose} className="mt-6">
            {t("success.close")}
          </Button>
        )}
      </div>
    );
  }

  const inputClassName =
    "border-input bg-background ring-ring/10 focus:ring-primary/30 w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow focus:ring-2";

  return (
    <div className="relative">
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground absolute top-0 right-0 p-1"
          aria-label={t("success.close")}
        >
          <X className="size-5" />
        </button>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold">{t("heading")}</h3>
        <p className="text-muted-foreground mt-1 text-sm">
          {t("description")}
        </p>
      </div>

      {status === "error" && (
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
          <AlertCircle className="size-4 shrink-0" />
          <span>
            {errorMessage || t("errors.generic")}
          </span>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4"
        noValidate
      >
        {/* Honeypot — hidden from real users */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label
            htmlFor="demo-name"
            className="mb-1.5 block text-sm font-medium"
          >
            {t("nameLabel")} <span className="text-destructive">{t("required")}</span>
          </label>
          <input
            id="demo-name"
            name="name"
            type="text"
            placeholder={t("namePlaceholder")}
            className={inputClassName}
          />
          {errors.name && (
            <p className="text-destructive mt-1 text-xs">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="demo-email"
            className="mb-1.5 block text-sm font-medium"
          >
            {t("emailLabel")} <span className="text-destructive">{t("required")}</span>
          </label>
          <input
            id="demo-email"
            name="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            className={inputClassName}
          />
          {errors.email && (
            <p className="text-destructive mt-1 text-xs">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="demo-company"
            className="mb-1.5 block text-sm font-medium"
          >
            {t("companyLabel")} <span className="text-destructive">{t("required")}</span>
          </label>
          <input
            id="demo-company"
            name="company"
            type="text"
            placeholder={t("companyPlaceholder")}
            className={inputClassName}
          />
          {errors.company && (
            <p className="text-destructive mt-1 text-xs">{errors.company}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="demo-role"
            className="mb-1.5 block text-sm font-medium"
          >
            {t("roleLabel")} <span className="text-destructive">{t("required")}</span>
          </label>
          <select
            id="demo-role"
            name="role"
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              {t("rolePlaceholder")}
            </option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="text-destructive mt-1 text-xs">{errors.role}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="demo-message"
            className="mb-1.5 block text-sm font-medium"
          >
            {t("messageLabel")} <span className="text-muted-foreground">{t("messageOptional")}</span>
          </label>
          <textarea
            id="demo-message"
            name="message"
            rows={3}
            placeholder={t("messagePlaceholder")}
            className={inputClassName}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              {t("submitting")}
            </>
          ) : status === "error" ? (
            t("tryAgain")
          ) : (
            t("submit")
          )}
        </Button>
      </form>
    </div>
  );
}
