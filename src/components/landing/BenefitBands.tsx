import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { BeforeAfterExcel } from "@/components/landing/visuals/BeforeAfterExcel";
import { RoleClassification } from "@/components/landing/visuals/RoleClassification";
import { ConfidenceGrid } from "@/components/landing/visuals/ConfidenceGrid";
import { ExportGate } from "@/components/landing/visuals/ExportGate";

interface BandProps {
  heading: string;
  body: string;
  visual: ReactNode;
  /** true : le visuel passe à gauche sur grand écran (alternance) */
  reversed?: boolean;
}

function Band({ heading, body, visual, reversed = false }: BandProps) {
  return (
    <AnimateIn>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          className={
            reversed ? "flex flex-col gap-3 lg:order-2" : "flex flex-col gap-3"
          }
        >
          <h3 className="text-2xl font-semibold tracking-tight text-balance">
            {heading}
          </h3>
          <p className="text-muted-foreground max-w-[62ch] text-pretty">
            {body}
          </p>
        </div>
        <div className={reversed ? "lg:order-1" : undefined}>{visual}</div>
      </div>
    </AnimateIn>
  );
}

/** Le cœur de la page : quatre bénéfices, un par bande, chacun avec sa preuve visuelle. */
export function BenefitBands() {
  const t = useTranslations("home.bands");
  return (
    <Section className="border-t">
      <Container className="flex flex-col gap-20 md:gap-28">
        <AnimateIn>
          <h2 className="max-w-[34rem] text-3xl font-semibold tracking-tight text-balance">
            {t("heading")}
          </h2>
        </AnimateIn>
        <Band
          heading={t("template.heading")}
          body={t("template.body")}
          visual={<BeforeAfterExcel />}
        />
        <Band
          heading={t("mixed.heading")}
          body={t("mixed.body")}
          visual={<RoleClassification />}
          reversed
        />
        <Band
          heading={t("confidence.heading")}
          body={t("confidence.body")}
          visual={<ConfidenceGrid />}
        />
        <Band
          heading={t("validation.heading")}
          body={t("validation.body")}
          visual={<ExportGate />}
          reversed
        />
      </Container>
    </Section>
  );
}
