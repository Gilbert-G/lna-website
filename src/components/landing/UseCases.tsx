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
    <Section className="bg-gray-10 border-border border-t">
      <Container className="flex flex-col gap-10">
        <AnimateIn>
          <h2 className="text-h2 text-foreground max-w-[34rem] text-balance">
            {t("heading")}
          </h2>
        </AnimateIn>
        <ul className="grid gap-6 md:grid-cols-3">
          {CASES.map((useCase, i) => (
            <AnimateIn key={useCase} delay={i * 0.05}>
              <li className="border-border bg-background flex h-full flex-col gap-2 rounded-none border p-5 shadow-none">
                <h3 className="text-tile text-foreground text-balance">
                  {t(useCase + ".title")}
                </h3>
                <p className="text-body text-pretty">
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
