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
    <div className={cn("bg-card overflow-hidden rounded-lg border", className)}>
      <div className="bg-muted/60 text-muted-foreground border-b px-3 py-1.5 font-mono text-[11px]">
        {caption ?? "comparatif-adp.xlsx"}
      </div>
      <table className="w-full border-collapse text-left text-xs tabular-nums">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th
                key={col}
                scope="col"
                className={cn(
                  "text-muted-foreground border-b px-3 py-2 font-semibold",
                  i > 0 && "border-l text-right"
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
                className="text-foreground border-b px-3 py-2 font-medium"
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
                    className="border-b border-l px-3 py-2 text-right"
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
  );
}
