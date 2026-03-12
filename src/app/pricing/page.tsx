import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "LNA Pricing — Plans for Every Team Size",
  description:
    "Simple, transparent pricing for LNA's AI document processing platform. Starter from $49/mo. Free trial available on all plans. No credit card required.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative text-center">
          <AnimateIn>
            <h1 className="text-fluid-xl font-extrabold">
              Simple Pricing. Serious Results.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Every plan includes core AI extraction and Excel export. Upgrade
              when you need LLM Q&amp;A, context roles, and deeper team
              controls.
            </p>
          </AnimateIn>
        </Container>
      </Section>

      <PricingContent />
    </>
  );
}
