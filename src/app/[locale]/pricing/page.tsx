import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { PricingContent } from "./pricing-content";
import { pageAlternates } from "@/lib/seo";

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
    alternates: pageAlternates(locale, "/pricing"),
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
      <Section className="overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <Container className="text-center">
          <AnimateIn>
            <h1 className="text-hero text-foreground text-balance">
              {t("hero.heading")}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-lead mx-auto mt-4 max-w-2xl text-pretty">
              {t("hero.description")}
            </p>
          </AnimateIn>
        </Container>
      </Section>

      <PricingContent />
    </>
  );
}
