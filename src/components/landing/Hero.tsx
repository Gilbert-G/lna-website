import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { TransformationVisual } from "@/components/landing/visuals/TransformationVisual";
import { appUrls } from "@/lib/app-urls";

/** Répond à la première question du visiteur : « ça remplit mon tableau ? » */
export function Hero() {
  const t = useTranslations("home.hero");
  return (
    <Section className="overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex max-w-[38rem] flex-col gap-6">
            <AnimateIn>
              <h1 className="text-hero text-foreground text-balance">
                {t("heading")}{" "}
                <span className="text-primary">{t("headingHighlight")}</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <p className="text-body max-w-[42ch] text-pretty">
                {t("description")}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="flex flex-col items-start gap-3">
                <LinkButton size="lg" href={appUrls.register}>
                  {t("ctaPrimary")}
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </LinkButton>
                <p className="text-muted-foreground text-sm">{t("ctaNote")}</p>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.15} className="w-full min-w-0">
            <div className="border-border bg-gray-10 rounded-none border p-2 sm:p-3">
              <TransformationVisual />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </Section>
  );
}
