import { useTranslations, useLocale } from "next-intl";
import { ExcelGrid } from "@/components/landing/visuals/ExcelGrid";

/**
 * Bande 1 — le même fichier, vide puis rempli. En-têtes et structure identiques.
 *
 * Les libellés viennent du namespace `grid` et les nombres sont mis en forme selon
 * la locale : ils étaient auparavant codés en dur en français, donc la page
 * anglaise affichait « Garantie / Coût total » avec des décimales à la française.
 */
export function BeforeAfterExcel() {
  const t = useTranslations("home.bands.template");
  const g = useTranslations("grid");
  const locale = useLocale();

  const pct = (v: number) =>
    new Intl.NumberFormat(locale, {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(v / 100);
  const eur = (v: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
    }).format(v);

  const columns = [g("colGuarantee"), "Generali", "April"];
  const rows = [
    { label: g("rowRate"), values: [pct(0.34), pct(0.29)] },
    { label: g("rowTotalCost"), values: [eur(4218), eur(3640)] },
  ];

  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div className="min-w-0">
        <p className="text-muted-foreground mb-1.5 text-xs font-medium">
          {t("before")}
        </p>
        <ExcelGrid columns={columns} rows={rows} empty />
      </div>
      <div className="min-w-0">
        <p className="text-muted-foreground mb-1.5 text-xs font-medium">
          {t("after")}
        </p>
        <ExcelGrid columns={columns} rows={rows} />
      </div>
    </div>
  );
}
