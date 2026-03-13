"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  Check,
  Minus,
  ChevronDown,
  Shield,
  CreditCard,
  Clock,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { cn } from "@/lib/utils";

/* ─── Cell renderer ──────────────────────────────────────── */

type CellValue = string | boolean;

function CellContent({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <Check className="mx-auto size-5 text-green-600 dark:text-green-400" />
    );
  }
  if (value === false) {
    return <Minus className="text-muted-foreground/40 mx-auto size-5" />;
  }
  return <span className="text-sm font-medium">{value}</span>;
}

/* ─── Main component ─────────────────────────────────────── */

export function PricingContent() {
  const t = useTranslations("pricing");
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function toggleFaq(index: number) {
    setOpenFaq(openFaq === index ? null : index);
  }

  function handleFaqKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFaq(index);
    }
  }

  /* ─── Tier data ──────────────────────────────────────────── */

  const tierKeys = ["starter", "professional", "enterprise"] as const;

  const tiers = tierKeys.map((key) => {
    const isEnterprise = key === "enterprise";
    const featureObj = t.raw(`tiers.${key}.features`) as Record<string, string>;
    const features = Object.values(featureObj);
    return {
      key,
      name: t(`tiers.${key}.name`),
      tagline: t(`tiers.${key}.tagline`),
      monthlyPrice: isEnterprise ? null : t(`tiers.${key}.priceMonthly`),
      annualPrice: isEnterprise ? null : t(`tiers.${key}.priceAnnual`),
      annualSavings: isEnterprise ? null : t(`tiers.${key}.savings`),
      badge: key === "professional" ? t("tiers.professional.badge") : null,
      cta: t(`tiers.${key}.cta`),
      ctaHref: "/contact",
      ctaMicrocopy: t(`tiers.${key}.microcopy`),
      features,
      isEnterprise,
    };
  });

  /* ─── Trust signals ──────────────────────────────────────── */

  const trustIcons = [Clock, CreditCard, Shield];
  const trustKeys = ["t1", "t2", "t3"] as const;
  const trustSignals = trustKeys.map((key, i) => ({
    icon: trustIcons[i],
    text: t(`trust.${key}`),
  }));

  /* ─── Comparison table data ──────────────────────────────── */

  interface ComparisonRow {
    feature: string;
    starter: CellValue;
    professional: CellValue;
    enterprise: CellValue;
  }

  interface ComparisonCategory {
    category: string;
    rows: ComparisonRow[];
  }

  const comparisonData: ComparisonCategory[] = [
    {
      category: t("comparison.categories.documentsStorage"),
      rows: [
        {
          feature: t("comparison.rows.docsPerMonth"),
          starter: t("comparison.values.starter500"),
          professional: t("comparison.values.pro5000"),
          enterprise: t("comparison.values.unlimited"),
        },
        {
          feature: t("comparison.rows.storage"),
          starter: t("comparison.values.starter5gb"),
          professional: t("comparison.values.pro50gb"),
          enterprise: t("comparison.values.custom"),
        },
        {
          feature: t("comparison.rows.userSeats"),
          starter: t("comparison.values.starter3seats"),
          professional: t("comparison.values.pro15seats"),
          enterprise: t("comparison.values.unlimited"),
        },
      ],
    },
    {
      category: t("comparison.categories.documentManagement"),
      rows: [
        {
          feature: t("comparison.rows.multiFileUpload"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.autoClassification"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.ocrScanned"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.duplicateDetection"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.fullTextSearch"),
          starter: true,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: t("comparison.categories.dataExtraction"),
      rows: [
        {
          feature: t("comparison.rows.schemaFree"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.entityDetection"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.multiPageTable"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.confidenceScoring"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.batchProcessing"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.errorRecovery"),
          starter: true,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: t("comparison.categories.templateMapping"),
      rows: [
        {
          feature: t("comparison.rows.excelTemplate"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.autoMapping"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.visualEditor"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.templateLibrary"),
          starter: false,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: t("comparison.categories.export"),
      rows: [
        {
          feature: t("comparison.rows.formatPreserving"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.exportPreview"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.auditTrail"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.batchExport"),
          starter: false,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: t("comparison.categories.aiIntelligence"),
      rows: [
        {
          feature: t("comparison.rows.llmQa"),
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.chatContextRole"),
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.customRoles"),
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: t("comparison.categories.userManagement"),
      rows: [
        {
          feature: t("comparison.rows.rbac"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.orgAccounts"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.ssoSaml"),
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: t("comparison.categories.support"),
      rows: [
        {
          feature: t("comparison.rows.emailSupport"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.prioritySupport"),
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.dedicatedManager"),
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.onboarding"),
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.slaGuarantee"),
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: t("comparison.categories.deployment"),
      rows: [
        {
          feature: t("comparison.rows.cloudHosted"),
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.onPremise"),
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          feature: t("comparison.rows.customApi"),
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
  ];

  /* ─── FAQ data ───────────────────────────────────────────── */

  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;
  const faqs = faqKeys.map((key) => ({
    question: t(`faq.${key}.question`),
    answer: t(`faq.${key}.answer`),
  }));

  /* ─── CTA trust signals ──────────────────────────────────── */

  const ctaTrustSignals = trustKeys.map((key) => t(`trust.${key}`));

  return (
    <>
      {/* ── Billing Toggle ── */}
      <Section className="py-0 md:py-0">
        <Container>
          <AnimateIn delay={0.2}>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-muted inline-flex items-center gap-1 rounded-full p-1">
                <button
                  onClick={() => setAnnual(false)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                    !annual
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t("billing.monthly")}
                </button>
                <button
                  onClick={() => setAnnual(true)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                    annual
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t("billing.annual")}
                </button>
              </div>
              {annual && (
                <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium">
                  <Sparkles className="size-3" />
                  {t("billing.savings")}
                </span>
              )}
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* ── Tier Cards ── */}
      <Section className="pt-8 md:pt-12">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const isPro = tier.key === "professional";
              return (
                <AnimateIn key={tier.key} delay={0.1 * i}>
                  <div
                    className={cn(
                      "bg-card relative flex flex-col rounded-2xl border p-6 lg:p-8",
                      isPro
                        ? "border-primary shadow-primary/20 scale-[1.02] shadow-xl lg:scale-105"
                        : "shadow-sm"
                    )}
                  >
                    {tier.badge && (
                      <div className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold">
                        {tier.badge}
                      </div>
                    )}

                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {tier.tagline}
                    </p>

                    <div className="mt-6">
                      {!tier.isEnterprise ? (
                        <>
                          <span className="text-4xl font-extrabold tracking-tight">
                            {annual ? tier.annualPrice : tier.monthlyPrice}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {t("perMonth")}
                          </span>
                          {annual && tier.annualSavings && (
                            <p className="text-primary mt-1 text-xs font-medium">
                              {tier.annualSavings}
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          <span className="text-4xl font-extrabold tracking-tight">
                            {t("tiers.enterprise.price")}
                          </span>
                          <p className="text-muted-foreground mt-1 text-xs">
                            {t("tiers.enterprise.priceDescription")}
                          </p>
                        </>
                      )}
                    </div>

                    <Button
                      className={cn(
                        "mt-6 w-full",
                        isPro ? "h-10 text-base" : "h-9"
                      )}
                      variant={isPro ? "default" : "outline"}
                      render={<Link href={tier.ctaHref} />}
                    >
                      {tier.cta}
                    </Button>
                    <p className="text-muted-foreground mt-2 text-center text-xs">
                      {tier.ctaMicrocopy}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t pt-6">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-green-600 dark:text-green-400" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── Trust Signals ── */}
      <Section className="py-8 md:py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {trustSignals.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="text-muted-foreground inline-flex items-center gap-2"
              >
                <Icon className="size-4" />
                {text}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Comparison Table ── */}
      <Section>
        <Container>
          <AnimateIn>
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              {t("comparison.heading")}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="px-4 py-3 text-left font-medium">
                      {t("comparison.headerFeature")}
                    </th>
                    <th className="px-4 py-3 text-center font-medium">
                      {t("comparison.headerStarter")}
                    </th>
                    <th className="border-primary/20 bg-primary/5 px-4 py-3 text-center font-medium">
                      {t("comparison.headerProfessional")}
                    </th>
                    <th className="px-4 py-3 text-center font-medium">
                      {t("comparison.headerEnterprise")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((cat) => (
                    <>
                      <tr key={cat.category}>
                        <td
                          colSpan={4}
                          className="bg-muted/30 px-4 py-2 text-xs font-semibold tracking-wide uppercase"
                        >
                          {cat.category}
                        </td>
                      </tr>
                      {cat.rows.map((row) => (
                        <tr
                          key={row.feature}
                          className="border-b last:border-0"
                        >
                          <td className="px-4 py-2.5">{row.feature}</td>
                          <td className="px-4 py-2.5 text-center">
                            <CellContent value={row.starter} />
                          </td>
                          <td className="border-primary/10 bg-primary/[0.02] px-4 py-2.5 text-center">
                            <CellContent value={row.professional} />
                          </td>
                          <td className="px-4 py-2.5 text-center">
                            <CellContent value={row.enterprise} />
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* ── FAQ Accordion ── */}
      <Section>
        <Container className="max-w-3xl">
          <AnimateIn>
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              {t("faq.heading")}
            </h2>
          </AnimateIn>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={0.05 * i}>
                <div className="rounded-lg border">
                  <button
                    onClick={() => toggleFaq(i)}
                    onKeyDown={(e) => handleFaqKeyDown(e, i)}
                    aria-expanded={openFaq === i}
                    className="hover:bg-muted/50 flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 transition-transform duration-200",
                        openFaq === i && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-200",
                      openFaq === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section className="bg-muted/30">
        <Container className="text-center">
          <AnimateIn>
            <h2 className="text-2xl font-bold sm:text-3xl">
              {t("cta.heading")}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
              {t("cta.description")}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" render={<Link href="/contact" />}>
                {t("cta.buttonSales")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<Link href="/contact" />}
              >
                {t("cta.buttonTrial")}
              </Button>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
              {ctaTrustSignals.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-green-600 dark:text-green-400" />
                  {s}
                </span>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
