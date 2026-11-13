import { Check, Download } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Bande 4 — le bas de l'étape 3 : la case de relecture, puis le bouton vert.
 * Product-mockup colours only (Excel green) — not marketing brand navy.
 */
export function ExportGate() {
  const t = useTranslations("home.bands.validation");
  return (
    <div className="bg-card border-border flex flex-col gap-4 rounded-none border p-4 shadow-none">
      <p className="text-muted-foreground font-mono text-[11px]">
        {t("stepLabel")}
      </p>
      <div className="flex items-start gap-2.5">
        <span
          className="bg-primary border-primary mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-none border text-white"
          aria-hidden="true"
        >
          <Check className="size-3" />
        </span>
        <span className="text-sm">{t("checkbox")}</span>
      </div>
      <div className="flex items-start gap-2.5">
        <span
          className="border-border mt-0.5 inline-flex size-4 shrink-0 rounded-none border"
          aria-hidden="true"
        />
        <span className="text-muted-foreground text-sm">
          {t("checkboxReview")}
        </span>
      </div>
      <div className="border-border flex flex-wrap items-center gap-3 border-t pt-4">
        <span className="bg-excel-green-dark inline-flex items-center gap-2 rounded-none px-7 py-3 text-sm font-semibold text-white">
          <Download className="size-4" aria-hidden="true" />
          {t("downloadButton")}
        </span>
        <span className="text-muted-foreground text-xs">{t("auditNote")}</span>
      </div>
    </div>
  );
}
