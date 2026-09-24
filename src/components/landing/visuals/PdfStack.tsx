import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PdfStackProps {
  /** Rôle classifié, affiché sous le nom de fichier */
  docs: ReadonlyArray<{ name: string; role?: string }>;
  className?: string;
}

/** Pile de vignettes PDF — les documents tels que l'utilisateur les dépose. */
export function PdfStack({ docs, className }: PdfStackProps) {
  return (
    <ul className={cn("flex flex-col gap-2", className)}>
      {docs.map((doc) => (
        <li
          key={doc.name}
          className="bg-card flex items-center gap-3 rounded-lg border px-3 py-2"
        >
          <FileText
            className="size-4 shrink-0 text-red-600 dark:text-red-400"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1">
            <span className="block truncate font-mono text-xs">{doc.name}</span>
            {doc.role ? (
              <span className="text-muted-foreground block truncate text-xs">
                {doc.role}
              </span>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
