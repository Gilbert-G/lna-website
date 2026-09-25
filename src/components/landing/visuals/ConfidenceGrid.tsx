import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

/** Bandes visuelles de la grille d'étape 3 de l'app. */
const HIGH = 0.8;
const MEDIUM = 0.5;
/** Seuil de relecture de l'export : sous ce score, la cellule part en [REVIEW]. */
const REVIEW_THRESHOLD = 0.6;

type Level = "high" | "medium" | "low";

function levelOf(score: number): Level {
  if (score >= HIGH) return "high";
  if (score >= MEDIUM) return "medium";
  return "low";
}

const LEVEL_CLASS: Record<Level, { cell: string; dot: string }> = {
  high: {
    cell: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
    dot: "bg-green-500",
  },
  medium: {
    cell: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
    dot: "bg-yellow-500",
  },
  low: {
    cell: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
    dot: "bg-red-500",
  },
};

interface Cell {
  value: string;
  score: number;
}

interface Row {
  rowKey: string;
  confidence: number;
  cells: readonly Cell[];
}

const COLUMNS = ["Generali", "April", "MetLife"] as const;

const ROWS: readonly Row[] = [
  {
    rowKey: "Taux",
    confidence: 0.91,
    cells: [
      { value: "0,34 %", score: 0.93 },
      { value: "0,29 %", score: 0.71 },
      { value: "0,41 %", score: 0.42 },
    ],
  },
  {
    rowKey: "Coût total",
    confidence: 0.86,
    cells: [
      { value: "4 218,00 €", score: 0.91 },
      { value: "3 640,00 €", score: 0.82 },
      { value: "5 102,00 €", score: 0.88 },
    ],
  },
  {
    rowKey: "Quotité",
    confidence: 0.64,
    cells: [
      { value: "100 %", score: 0.88 },
      { value: "50 %", score: 0.48 },
      { value: "100 %", score: 0.86 },
    ],
  },
];

/**
 * Bande 3 — la grille de vérification réelle : colonnes #, Row Key, Conf.,
 * puis un émetteur par colonne. Le niveau est toujours doublé d'un libellé texte
 * (lisible par lecteur d'écran, et rappelé dans la légende sous la grille).
 */
export function ConfidenceGrid() {
  const t = useTranslations("home.bands.confidence");
  const levelLabel: Record<Level, string> = {
    high: t("levelHigh"),
    medium: t("levelMedium"),
    low: t("levelLow"),
  };

  return (
    <div className="bg-card overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse text-left text-xs tabular-nums">
        <caption className="sr-only">{t("tableCaption")}</caption>
        <thead>
          <tr className="text-muted-foreground">
            <th scope="col" className="border-b px-2 py-2 font-semibold">
              #
            </th>
            <th scope="col" className="border-b px-3 py-2 font-semibold">
              Row Key
            </th>
            <th scope="col" className="border-b px-3 py-2 font-semibold">
              Conf.
            </th>
            {COLUMNS.map((col) => (
              <th
                key={col}
                scope="col"
                className="border-b px-3 py-2 font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={row.rowKey}>
              <td className="text-muted-foreground border-b px-2 py-2 font-mono">
                {i + 1}
              </td>
              <th
                scope="row"
                className="text-foreground border-b px-3 py-2 font-medium"
              >
                {row.rowKey}
              </th>
              <td className="border-b px-3 py-2">
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <span
                    className={cn(
                      "size-2 shrink-0 rounded-full",
                      LEVEL_CLASS[levelOf(row.confidence)].dot
                    )}
                    aria-hidden="true"
                  />
                  {Math.round(row.confidence * 100)} %
                </span>
              </td>
              {row.cells.map((cell, j) => {
                const level = levelOf(cell.score);
                return (
                  <td key={row.rowKey + "-" + j} className="border-b px-3 py-2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded border px-1.5 py-0.5",
                        LEVEL_CLASS[level].cell,
                        cell.score < REVIEW_THRESHOLD &&
                          "ring-1 ring-red-400/60"
                      )}
                    >
                      <span
                        className={cn(
                          "size-2 shrink-0 rounded-full",
                          LEVEL_CLASS[level].dot
                        )}
                        aria-hidden="true"
                      />
                      {cell.value}
                      <span className="sr-only"> — {levelLabel[level]}</span>
                      {cell.score < REVIEW_THRESHOLD ? (
                        <span className="font-mono text-[10px] text-red-700 dark:text-red-300">
                          [REVIEW]
                        </span>
                      ) : null}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t px-3 py-2 text-xs">
        {(["high", "medium", "low"] as const).map((level) => (
          <li key={level} className="inline-flex items-center gap-1.5">
            <span
              className={cn("size-2 rounded-full", LEVEL_CLASS[level].dot)}
              aria-hidden="true"
            />
            {levelLabel[level]}
          </li>
        ))}
        <li className="font-mono">{t("reviewLegend")}</li>
      </ul>
    </div>
  );
}
