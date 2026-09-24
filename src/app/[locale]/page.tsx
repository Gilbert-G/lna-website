import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/landing/Hero";
import { BenefitBands } from "@/components/landing/BenefitBands";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { UseCases } from "@/components/landing/UseCases";
import { TrustSection } from "@/components/landing/TrustSection";
import { FinalCta } from "@/components/landing/FinalCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <BenefitBands />
      <HowItWorks />
      <UseCases />
      <TrustSection />
      <FinalCta />
    </>
  );
}
