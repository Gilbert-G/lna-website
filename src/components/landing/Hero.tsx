import { useTranslations } from "next-intl";
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
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-[34rem] flex-col gap-5">
          <AnimateIn>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {t("heading")}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <p className="text-muted-foreground max-w-[42ch] text-lg text-pretty">
              {t("description")}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-col items-start gap-2">
              <LinkButton
                size="lg"
                href={appUrls.register}
                className="h-11 px-5 text-base"
              >
                {t("ctaPrimary")}
              </LinkButton>
              <p className="text-muted-foreground text-sm">{t("ctaNote")}</p>
            </div>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.15} className="w-full">
          <TransformationVisual />
        </AnimateIn>
      </Container>
    </Section>
  );
}
