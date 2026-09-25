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
    <Section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Fond : halo radial bleu + grille de points estompée */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(100,116,139,0.16)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] bg-[size:26px_26px]" />
      </div>

      <Container className="flex flex-col gap-12">
        <div className="flex max-w-[38rem] flex-col gap-6">
          <AnimateIn>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl lg:leading-[1.05]">
              {t("heading")}{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38bdf8] bg-clip-text text-transparent">
                {t("headingHighlight")}
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <p className="text-muted-foreground max-w-[42ch] text-lg text-pretty">
              {t("description")}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-col items-start gap-3">
              <LinkButton
                size="lg"
                href={appUrls.register}
                className="h-11 bg-gradient-to-b from-blue-500 to-blue-600 px-6 text-base text-white shadow-md shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
              >
                {t("ctaPrimary")}
              </LinkButton>
              <p className="text-muted-foreground text-sm">{t("ctaNote")}</p>
            </div>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.15} className="w-full">
          <div className="rounded-2xl border bg-white/60 p-2 shadow-xl shadow-slate-900/5 backdrop-blur-sm sm:p-3 dark:bg-white/5">
            <TransformationVisual />
          </div>
        </AnimateIn>
      </Container>
    </Section>
  );
}
