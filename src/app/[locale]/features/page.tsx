import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  FolderOpen,
  ScanLine,
  GitMerge,
  Download,
  MessagesSquare,
  UserRoundCog,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/ui/animate-in";
import { VideoEmbed } from "@/components/media/VideoEmbed";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.features" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

const featureKeys = [
  "documentManagement",
  "dataExtraction",
  "templateMapping",
  "exportAudit",
] as const;
type FeatureKey = (typeof featureKeys)[number];

const featureIcons: Record<FeatureKey, React.ElementType> = {
  documentManagement: FolderOpen,
  dataExtraction: ScanLine,
  templateMapping: GitMerge,
  exportAudit: Download,
};

const featureScreenshots: Record<FeatureKey, string> = {
  documentManagement: "/illustrations/screenshots/screenshot-dashboard.svg",
  dataExtraction: "/illustrations/screenshots/screenshot-extraction.svg",
  templateMapping: "/illustrations/screenshots/screenshot-mapping.svg",
  exportAudit: "/illustrations/screenshots/screenshot-export.svg",
};

const featureIds: Record<FeatureKey, string> = {
  documentManagement: "document-management",
  dataExtraction: "data-extraction",
  templateMapping: "template-mapping",
  exportAudit: "export-audit",
};

const featureBulletCounts: Record<FeatureKey, number> = {
  documentManagement: 5,
  dataExtraction: 6,
  templateMapping: 6,
  exportAudit: 4,
};

const aiFeatureKeys = ["llmQa", "chatContextRole"] as const;
type AiFeatureKey = (typeof aiFeatureKeys)[number];

const aiFeatureIcons: Record<AiFeatureKey, React.ElementType> = {
  llmQa: MessagesSquare,
  chatContextRole: UserRoundCog,
};

const aiFeatureIllustrations: Record<AiFeatureKey, string> = {
  llmQa: "/illustrations/llm-qa-illustration.svg",
  chatContextRole: "/illustrations/chat-context-illustration.svg",
};

const aiFeatureIds: Record<AiFeatureKey, string> = {
  llmQa: "llm-qa",
  chatContextRole: "chat-context-role",
};

const aiFeatureBulletCounts: Record<AiFeatureKey, number> = {
  llmQa: 5,
  chatContextRole: 5,
};

const comparisonRowKeys = [
  "setup",
  "accuracy",
  "speed",
  "output",
  "scanned",
  "multiPage",
  "aiQa",
  "contextRoles",
  "auditTrail",
  "scalability",
] as const;
type ComparisonRowKey = (typeof comparisonRowKeys)[number];

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "features" });

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative text-center">
          <AnimateIn>
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("hero.heading")}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
              {t("hero.description")}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex justify-center gap-3">
              <LinkButton size="lg" className="px-6" href="/contact">
                {t("hero.ctaDemo")}
              </LinkButton>
              <LinkButton
                variant="outline"
                size="lg"
                className="px-6"
                href="/pricing"
              >
                {t("hero.ctaPricing")} <ArrowRight className="ml-1 size-4" />
              </LinkButton>
            </div>
          </AnimateIn>
          {/* Anchor Nav */}
          <AnimateIn delay={0.3}>
            <nav
              className="mt-12 flex flex-wrap justify-center gap-2"
              aria-label={t("navLabel")}
            >
              {featureKeys.map((key) => (
                <a
                  key={featureIds[key]}
                  href={`#${featureIds[key]}`}
                  className="text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full border px-4 py-1.5 text-sm transition-colors"
                >
                  {t(`${key}.label`)}
                </a>
              ))}
              {aiFeatureKeys.map((key) => (
                <a
                  key={aiFeatureIds[key]}
                  href={`#${aiFeatureIds[key]}`}
                  className="text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full border px-4 py-1.5 text-sm transition-colors"
                >
                  {t(`${key}.label`)}
                </a>
              ))}
              <a
                href="#user-management"
                className="text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full border px-4 py-1.5 text-sm transition-colors"
              >
                {t("userManagement.label")}
              </a>
            </nav>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="mx-auto mt-12 max-w-4xl">
              <VideoEmbed src="dQw4w9WgXcQ" title={t("videoTitle")} />
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Standard Features */}
      {featureKeys.map((key, i) => {
        const Icon = featureIcons[key];
        const bullets = Array.from(
          { length: featureBulletCounts[key] },
          (_, idx) => t(`${key}.bullet${idx + 1}`)
        );

        return (
          <Section
            key={key}
            id={featureIds[key]}
            className={i % 2 === 1 ? "bg-muted/30" : ""}
          >
            <Container>
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <AnimateIn className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-primary/10 text-primary mb-4 w-fit rounded-xl p-3">
                    <Icon className="size-7" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    {t(`${key}.headline`)}
                  </h2>
                  <p className="text-muted-foreground mt-4 text-lg">
                    {t(`${key}.description`)}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="text-primary mt-0.5 size-4 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
                <AnimateIn
                  delay={0.2}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <Image
                    src={featureScreenshots[key]}
                    alt={t(`${key}.headline`)}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </AnimateIn>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* AI Features - Differentiators */}
      {aiFeatureKeys.map((key, i) => {
        const Icon = aiFeatureIcons[key];
        const bullets = Array.from(
          { length: aiFeatureBulletCounts[key] },
          (_, idx) => t(`${key}.bullet${idx + 1}`)
        );

        return (
          <Section
            key={key}
            id={aiFeatureIds[key]}
            className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white"
          >
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <AnimateIn className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Badge className="mb-4 border-blue-400/30 bg-blue-500/20 text-blue-200">
                    Key Differentiator
                  </Badge>
                  <div className="mb-4 w-fit rounded-xl bg-blue-500/20 p-3">
                    <Icon className="size-7 text-blue-300" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    {t(`${key}.headline`)}
                  </h2>
                  <p className="mt-4 text-lg text-slate-300">
                    {t(`${key}.description`)}
                  </p>
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 text-sm font-semibold text-blue-200">
                      {t(`${key}.whyItMatters`)}
                    </p>
                    <p className="text-sm text-slate-400">
                      {t(`${key}.whyItMattersText`)}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
                <AnimateIn
                  delay={0.2}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <Image
                    src={aiFeatureIllustrations[key]}
                    alt={t(`${key}.headline`)}
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
                </AnimateIn>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* User Management */}
      <Section id="user-management">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateIn>
              <div className="bg-primary/10 text-primary mb-4 w-fit rounded-xl p-3">
                <Users className="size-7" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                {t("userManagement.headline")}
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                {t("userManagement.description")}
              </p>
              <ul className="mt-6 space-y-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n} className="flex items-start gap-3 text-sm">
                    <Check className="text-primary mt-0.5 size-4 shrink-0" />
                    <span>{t(`userManagement.bullet${n}`)}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <Image
                src="/illustrations/screenshots/screenshot-dashboard.svg"
                alt={t("userManagement.headline")}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-muted/30">
        <Container>
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="text-primary mb-2 text-sm font-semibold tracking-wider uppercase">
                {t("comparison.subheading")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("comparison.heading")}
              </h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left font-semibold">
                      {t("comparison.headerFeature")}
                    </th>
                    <th className="text-muted-foreground p-3 text-center font-medium">
                      {t("comparison.headerManual")}
                    </th>
                    <th className="text-muted-foreground p-3 text-center font-medium">
                      {t("comparison.headerOcr")}
                    </th>
                    <th className="text-primary bg-primary/5 p-3 text-center font-semibold">
                      {t("comparison.headerLna")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRowKeys.map((rowKey: ComparisonRowKey) => (
                    <tr key={rowKey} className="border-b">
                      <td className="p-3 font-medium">
                        {t(`comparison.rows.${rowKey}.feature`)}
                      </td>
                      <td className="text-muted-foreground p-3 text-center">
                        {t(`comparison.rows.${rowKey}.manual`)}
                      </td>
                      <td className="text-muted-foreground p-3 text-center">
                        {t(`comparison.rows.${rowKey}.ocr`)}
                      </td>
                      <td className="bg-primary/5 p-3 text-center font-medium">
                        {t(`comparison.rows.${rowKey}.lna`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-6 text-center text-sm">
              {t("comparison.footer")}
            </p>
          </AnimateIn>
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
                {t("cta.button")}
              </LinkButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-100 hover:text-white"
              >
                {t("hero.ctaPricing")} <ArrowRight className="size-4" />
              </Link>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
