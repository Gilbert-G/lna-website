import { useTranslations } from "next-intl";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { appUrls } from "@/lib/app-urls";

/**
 * Reprend le CTA du hero mot pour mot. La phrase dessous dit ce qui se passe
 * après le clic — pas un slogan.
 * [[À FOURNIR : ce que le compte donne réellement — essai gratuit, limite de
 * documents, carte bancaire requise ou non]]
 */
export function FinalCta() {
  const t = useTranslations("home.finalCta");
  return (
    <Section className="bg-muted/30 border-t">
      <Container className="flex flex-col items-start gap-5">
        <AnimateIn>
          <h2 className="max-w-[30rem] text-3xl font-semibold tracking-tight text-balance">
            {t("heading")}
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.05}>
          <p className="text-muted-foreground max-w-[56ch] text-pretty">
            {t("reassurance")}
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <LinkButton
            size="lg"
            href={appUrls.register}
            className="h-11 px-5 text-base"
          >
            {t("cta")}
          </LinkButton>
        </AnimateIn>
      </Container>
    </Section>
  );
}
