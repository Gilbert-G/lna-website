import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Zap,
  ShieldCheck,
  MousePointerClick,
  Layers,
  Upload,
  ScanLine,
  FileSpreadsheet,
  FolderOpen,
  BrainCircuit,
  GitMerge,
  Download,
  Users,
  ArrowRight,
} from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/ui/animate-in";
import { DemoModalTrigger } from "@/components/forms/DemoModalTrigger";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative flex flex-col items-center gap-8 text-center">
          <AnimateIn>
            <Badge variant="secondary" className="mb-4">
              {t("hero.badge")}
            </Badge>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {t("hero.heading")}{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
                {t("hero.headingHighlight")}
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl text-lg md:text-xl">
              {t("hero.description")}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <DemoModalTrigger className="px-6 text-base">
                {t("hero.ctaDemo")}
              </DemoModalTrigger>
              <LinkButton
                variant="outline"
                size="lg"
                className="px-6 text-base"
                href="#how-it-works"
              >
                {t("hero.ctaHow")}
              </LinkButton>
            </div>
            <p className="text-muted-foreground mt-3 text-sm">
              {t("hero.noCard")}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="mt-4 w-full max-w-4xl">
              <Image
                src="/illustrations/hero-mockup.svg"
                alt={t("hero.imageAlt")}
                width={960}
                height={540}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Value Proposition Strip */}
      <Section className="border-y py-12 md:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, key: "speed" },
              { icon: ShieldCheck, key: "accuracy" },
              { icon: MousePointerClick, key: "zeroManual" },
              { icon: Layers, key: "anyFormat" },
            ].map((tile, i) => (
              <AnimateIn key={tile.key} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <tile.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {t(`valueProp.${tile.key}.headline`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`valueProp.${tile.key}.description`)}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works">
        <Container>
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="text-primary mb-2 text-sm font-semibold tracking-wider uppercase">
                {t("howItWorks.label")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("howItWorks.heading")}
              </h2>
              <p className="text-muted-foreground mt-3 text-lg">
                {t("howItWorks.subheading")}
              </p>
            </div>
          </AnimateIn>
          <div className="relative grid gap-8 md:grid-cols-3">
            {[
              { icon: Upload, key: "step1" },
              { icon: ScanLine, key: "step2" },
              { icon: FileSpreadsheet, key: "step3" },
            ].map((step, i) => (
              <AnimateIn key={step.key} delay={i * 0.15}>
                <div className="bg-card flex flex-col items-center rounded-2xl border p-6 text-center">
                  <span className="text-primary mb-2 text-xs font-bold tracking-widest uppercase">
                    {t(`howItWorks.${step.key}.step`)} —{" "}
                    {t(`howItWorks.${step.key}.label`)}
                  </span>
                  <div className="bg-primary/10 text-primary mb-4 rounded-xl p-4">
                    <step.icon className="size-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {t(`howItWorks.${step.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`howItWorks.${step.key}.description`)}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.3}>
            <div className="mt-12 flex justify-center">
              <Image
                src="/illustrations/workflow-diagram.svg"
                alt={t("howItWorks.workflowAlt")}
                width={800}
                height={200}
                className="w-full max-w-3xl"
              />
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Feature Highlights */}
      <Section className="bg-muted/30">
        <Container>
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="text-primary mb-2 text-sm font-semibold tracking-wider uppercase">
                {t("features.label")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("features.heading")}
              </h2>
              <p className="text-muted-foreground mt-3 text-lg">
                {t("features.subheading")}
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FolderOpen, key: "organize" },
              { icon: BrainCircuit, key: "aiExtraction" },
              { icon: GitMerge, key: "templateMatch" },
              { icon: Download, key: "export" },
              { icon: Users, key: "team" },
              { icon: Zap, key: "realtime" },
            ].map((feature, i) => (
              <AnimateIn key={feature.key} delay={i * 0.1}>
                <div className="bg-card flex flex-col gap-4 rounded-2xl border p-6">
                  <div className="bg-primary/10 text-primary w-fit rounded-xl p-3">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white">
        <Container className="text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("cta.heading")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              {t("cta.description")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <LinkButton
                size="lg"
                className="bg-white px-8 text-base text-blue-600 hover:bg-blue-50"
                href="/contact"
              >
                {t("cta.ctaDemo")}
              </LinkButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-100 hover:text-white"
              >
                {t("cta.ctaPricing")} <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-blue-200">{t("cta.microcopy")}</p>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
