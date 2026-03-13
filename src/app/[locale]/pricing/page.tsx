import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { PricingContent } from "./pricing-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.pricing" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pricing" });

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative text-center">
          <AnimateIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("hero.heading")}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              {t("hero.description")}
            </p>
          </AnimateIn>
        </Container>
      </Section>

      <PricingContent />
    </>
  );
}
