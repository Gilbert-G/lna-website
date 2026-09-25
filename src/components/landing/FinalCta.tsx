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
    <Section className="bg-muted/30 relative overflow-hidden border-t">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(37,99,235,0.10),transparent_70%)]" />
      </div>
      <Container className="flex flex-col items-start gap-6">
        <AnimateIn>
          <h2 className="max-w-[30rem] text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
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
            className="h-11 bg-gradient-to-b from-blue-500 to-blue-600 px-6 text-base text-white shadow-md shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
          >
            {t("cta")}
          </LinkButton>
        </AnimateIn>
      </Container>
    </Section>
  );
}
