import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { appUrls } from "@/lib/app-urls";

/**
 * Reprend le CTA du hero mot pour mot. La phrase dessous dit ce qui se passe
 * après le clic — pas un slogan.
 */
export function FinalCta() {
  const t = useTranslations("home.finalCta");
  return (
    <Section className="bg-gray-10 border-border border-t">
      <Container className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[36rem] flex-col gap-3">
          <AnimateIn>
            <h2 className="text-h2 text-foreground text-balance">
              {t("heading")}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <p className="text-body text-pretty">{t("reassurance")}</p>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.1}>
          <LinkButton size="lg" href={appUrls.register}>
            {t("cta")}
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </LinkButton>
        </AnimateIn>
      </Container>
    </Section>
  );
}
