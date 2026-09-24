import { Check, Download } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Bande 4 — le bas de l'étape 3 : la case de relecture, puis le bouton vert.
 * Reproduction non interactive du bouton réel de l'app (bg-green-600,
 * libellé « Télécharger Excel » — « Vérifier & Télécharger » est le nom de l'étape).
 */
export function ExportGate() {
  const t = useTranslations("home.bands.validation");
  return (
    <div className="bg-card flex flex-col gap-4 rounded-lg border p-4">
      <p className="text-muted-foreground font-mono text-[11px]">
        {t("stepLabel")}
      </p>
      <div className="flex items-start gap-2.5">
        <span
          className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded border border-blue-600 bg-blue-600 text-white"
          aria-hidden="true"
        >
          <Check className="size-3" />
        </span>
        <span className="text-sm">{t("checkbox")}</span>
      </div>
      <div className="flex items-start gap-2.5">
        <span
          className="border-border mt-0.5 inline-flex size-4 shrink-0 rounded border"
          aria-hidden="true"
        />
        <span className="text-muted-foreground text-sm">
          {t("checkboxReview")}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3 border-t pt-4">
        <span className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-7 py-3 text-sm font-semibold text-white">
          <Download className="size-4" aria-hidden="true" />
          {t("downloadButton")}
        </span>
        <span className="text-muted-foreground text-xs">{t("auditNote")}</span>
      </div>
    </div>
  );
}
