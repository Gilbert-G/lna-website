import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

/**
 * Trois cas seulement : ce sont les trois verticales réellement implémentées.
 * Les factures fournisseurs sont classées « autre » par le produit — ne pas les ajouter.
 */
const CASES = ["adp", "health", "condo"] as const;

export function UseCases() {
  const t = useTranslations("home.useCases");
  return (
    <Section className="bg-muted/30 border-t">
      <Container className="flex flex-col gap-10">
        <AnimateIn>
          <h2 className="max-w-[34rem] text-3xl font-semibold tracking-tight text-balance">
            {t("heading")}
          </h2>
        </AnimateIn>
        <ul className="grid gap-6 md:grid-cols-3">
          {CASES.map((useCase, i) => (
            <AnimateIn key={useCase} delay={i * 0.05}>
              <li className="bg-card flex h-full flex-col gap-2 rounded-lg border p-5">
                <h3 className="font-semibold text-balance">
                  {t(useCase + ".title")}
                </h3>
                <p className="text-muted-foreground text-sm text-pretty">
                  {t(useCase + ".description")}
                </p>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
