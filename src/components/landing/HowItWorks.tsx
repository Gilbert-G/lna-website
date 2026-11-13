import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

/**
 * Les libellés des trois étapes sont ceux de l'app, mot pour mot
 * (RapprochementPage.tsx, objet i18n t.steps). Ne pas les reformuler.
 */
const STEPS = ["template", "documents", "review"] as const;

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");
  return (
    <Section id="how-it-works" className="border-border border-t">
      <Container className="flex flex-col gap-10">
        <AnimateIn>
          <h2 className="text-h2 text-foreground max-w-[34rem] text-balance">
            {t("heading")}
          </h2>
        </AnimateIn>
        <ol className="grid gap-8 md:grid-cols-3 md:gap-12">
          {STEPS.map((step, i) => (
            <AnimateIn key={step} delay={i * 0.05}>
              <li className="border-border flex flex-col gap-2 border-t pt-4">
                <span className="text-muted-foreground font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-tile text-foreground">
                  {t(step + ".label")}
                </h3>
                <p className="text-body max-w-[46ch] text-pretty">
                  {t(step + ".description")}
                </p>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
