import { useTranslations } from "next-intl";
import { ExcelGrid } from "@/components/landing/visuals/ExcelGrid";

const COLUMNS = ["Garantie", "Generali", "April"] as const;
const ROWS = [
  { label: "Taux", values: ["0,34 %", "0,29 %"] },
  { label: "Coût total", values: ["4 218,00 €", "3 640,00 €"] },
] as const;

/** Bande 1 — le même fichier, vide puis rempli. En-têtes et structure identiques. */
export function BeforeAfterExcel() {
  const t = useTranslations("home.bands.template");
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-muted-foreground mb-1.5 text-xs font-medium">
          {t("before")}
        </p>
        <ExcelGrid columns={COLUMNS} rows={ROWS} empty />
      </div>
      <div>
        <p className="text-muted-foreground mb-1.5 text-xs font-medium">
          {t("after")}
        </p>
        <ExcelGrid columns={COLUMNS} rows={ROWS} />
      </div>
    </div>
  );
}
