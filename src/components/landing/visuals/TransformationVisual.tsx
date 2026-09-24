"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { PdfStack } from "@/components/landing/visuals/PdfStack";
import { ExcelGrid } from "@/components/landing/visuals/ExcelGrid";

const COLUMNS = ["Garantie", "Generali", "April", "MetLife"] as const;

const ROWS = [
  { label: "Taux", values: ["0,34 %", "0,29 %", "0,41 %"] },
  { label: "Coût total", values: ["4 218,00 €", "3 640,00 €", "5 102,00 €"] },
  { label: "Quotité", values: ["100 %", "50 %", "100 %"] },
] as const;

const CELL_COUNT = 9;
/** 9 cellules x 120 ms = 1,08 s — sous la limite de 1,2 s du brief. */
const STEP_MS = 120;

/**
 * L'unique animation signature de la page : les valeurs apparaissent dans les
 * cellules Excel à l'entrée dans le viewport, une seule fois, sans boucle.
 * prefers-reduced-motion : grille pleine dès le premier rendu.
 */
export function TransformationVisual() {
  const t = useTranslations("home.hero.visual");
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduce) return; // grille pleine via `shown` ci-dessous, pas d'animation

    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        timer = setInterval(() => {
          setRevealed((n) => {
            const next = n + 1;
            if (next >= CELL_COUNT && timer) clearInterval(timer);
            return next;
          });
        }, STEP_MS);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [reduce]);

  const shown = reduce ? CELL_COUNT : revealed;

  const docs = [
    { name: "devis-generali-2026.pdf", role: t("roleAdp") },
    { name: "devis-april-2026.pdf", role: t("roleAdp") },
    { name: "amortissement-pret.pdf", role: t("roleAmortization") },
    { name: "devis-sante-malakoff.pdf", role: t("roleHealth") },
  ];

  return (
    <div
      ref={ref}
      className="grid w-full items-center gap-4 sm:grid-cols-[minmax(0,0.8fr)_auto_minmax(0,1.2fr)]"
    >
      <PdfStack docs={docs} />
      <ArrowRight
        className="text-muted-foreground mx-auto size-5 rotate-90 sm:rotate-0"
        aria-hidden="true"
      />
      <ExcelGrid columns={COLUMNS} rows={ROWS} revealed={shown} />
      <p className="sr-only sm:col-span-3">{t("description")}</p>
    </div>
  );
}
