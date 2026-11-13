import { cn } from "@/lib/utils";

export interface ExcelGridProps {
  /** En-têtes de colonnes. La première est la colonne des garanties. */
  columns: readonly string[];
  rows: ReadonlyArray<{ label: string; values: readonly string[] }>;
  /** Masque toutes les valeurs : état « avant remplissage ». */
  empty?: boolean;
  /** Nombre de cellules déjà révélées, pour le remplissage progressif. */
  revealed?: number;
  className?: string;
  /** Nom de fichier affiché dans la barre de titre. */
  caption?: string;
}

/** Aperçu d'une feuille Excel : les émetteurs sont les colonnes, les garanties les lignes. */
export function ExcelGrid({
  columns,
  rows,
  empty = false,
  revealed,
  className,
  caption,
}: ExcelGridProps) {
  return (
    <div
      className={cn(
        "bg-card border-border overflow-hidden rounded-none border shadow-none",
        className
      )}
    >
      <div className="bg-excel-green px-3 py-1.5 font-mono text-[11px] text-white">
        {caption ?? "comparatif-adp.xlsx"}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs tabular-nums">
          <thead>
            <tr className="bg-sheet-header">
              {columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    "border-b border-white/20 px-3 py-2 font-semibold text-white",
                    i > 0 && "border-l border-white/20 text-right"
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={row.label}>
                <th
                  scope="row"
                  className="text-foreground border-border border-b px-3 py-2 font-semibold"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => {
                  const cellIndex = rowIdx * row.values.length + i;
                  const hidden =
                    empty ||
                    (typeof revealed === "number" && cellIndex >= revealed);
                  return (
                    <td
                      key={row.label + "-" + i}
                      className="border-border border-b border-l px-3 py-2 text-right"
                    >
                      <span
                        className={cn(
                          "inline-block transition-opacity duration-200",
                          hidden ? "opacity-0" : "opacity-100"
                        )}
                      >
                        {value}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
