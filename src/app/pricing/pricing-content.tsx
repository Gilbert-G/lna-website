"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Minus,
  ChevronDown,
  Shield,
  CreditCard,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { cn } from "@/lib/utils";

/* ─── Tier data ──────────────────────────────────────────── */

const tiers = [
  {
    name: "Starter",
    tagline: "Everything you need to stop manual data entry.",
    monthlyPrice: 49,
    annualPrice: 39,
    annualSavings: 120,
    badge: null,
    cta: "Start Free Trial",
    ctaHref: "/contact",
    ctaMicrocopy: "14-day free trial · No credit card required",
    features: [
      "Up to 500 documents/month",
      "3 user seats",
      "5GB document storage",
      "AI-powered data extraction",
      "Schema-free extraction (no templates required)",
      "Confidence scoring per field",
      "OCR for scanned PDFs",
      "Excel export with audit trail",
      "Export preview before download",
      "Document management & full-text search",
      "Duplicate detection",
      "Email support",
    ],
  },
  {
    name: "Professional",
    tagline:
      "For growing teams that need AI intelligence, not just extraction.",
    monthlyPrice: 149,
    annualPrice: 119,
    annualSavings: 360,
    badge: "Most Popular",
    cta: "Start Free Trial",
    ctaHref: "/contact",
    ctaMicrocopy: "14-day free trial · No credit card required",
    features: [
      "Up to 5,000 documents/month",
      "15 user seats",
      "50GB document storage",
      "Everything in Starter, plus:",
      "LLM-Connected Data Q&A",
      "Chat with Context Role",
      "Template library — save and share configurations",
      "Batch export",
      "Priority email and chat support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Custom scale, dedicated support, and enterprise-grade security.",
    monthlyPrice: null,
    annualPrice: null,
    annualSavings: null,
    badge: null,
    cta: "Contact Sales",
    ctaHref: "/contact",
    ctaMicrocopy: "We'll respond within one business day.",
    features: [
      "Unlimited documents/month",
      "Unlimited user seats",
      "Custom storage allocation",
      "Everything in Professional, plus:",
      "SSO/SAML single sign-on",
      "Dedicated account manager",
      "Custom integrations and API access",
      "SLA guarantees (uptime and response time)",
      "On-premise deployment option",
      "Custom context roles",
      "Priority onboarding and training",
    ],
  },
] as const;

/* ─── Comparison table data ──────────────────────────────── */

type CellValue = string | boolean;

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
    category: "Documents & Storage",
    rows: [
      {
        feature: "Documents per month",
        starter: "500",
        professional: "5,000",
        enterprise: "Unlimited",
      },
      {
        feature: "Storage",
        starter: "5 GB",
        professional: "50 GB",
        enterprise: "Custom",
      },
      {
        feature: "User seats",
        starter: "3",
        professional: "15",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Document Management",
    rows: [
      {
        feature: "Multi-file upload (drag & drop)",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Auto-classification",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "OCR for scanned PDFs",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Duplicate detection",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Full-text search & archive",
        starter: true,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Data Extraction",
    rows: [
      {
        feature: "Schema-free AI extraction",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Entity detection (dates, amounts, names)",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Multi-page table extraction",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Confidence scoring per field",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Batch processing",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Error recovery & retry",
        starter: true,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Template & Mapping",
    rows: [
      {
        feature: "Excel template upload",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "AI-powered auto-mapping",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Visual mapping editor",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Template library (save & share)",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Export",
    rows: [
      {
        feature: "Format-preserving Excel export",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Export preview",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Audit trail",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Batch export",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "AI Intelligence",
    rows: [
      {
        feature: "LLM-Connected Data Q&A",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Chat with Context Role",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Custom context roles",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "User Management",
    rows: [
      {
        feature: "Role-based access control",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Organization-level accounts",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "SSO / SAML",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    rows: [
      {
        feature: "Email support",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Priority support",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Dedicated account manager",
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Onboarding & training",
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "SLA guarantee",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Deployment",
    rows: [
      {
        feature: "Cloud (hosted)",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "On-premise option",
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Custom integrations & API",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
];

/* ─── FAQ data ───────────────────────────────────────────── */

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. All paid plans include a 14-day free trial. No credit card is required to start. You get full access to all features in your chosen plan during the trial period — so you can evaluate everything before committing.",
  },
  {
    question: "How does billing work?",
    answer:
      "You can choose monthly or annual billing. Monthly billing is charged at the start of each billing cycle. Annual billing is charged once per year and saves you up to 20% compared to monthly rates. You'll receive an invoice by email for every payment.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes. You can cancel your subscription at any time from your account settings. If you cancel a monthly plan, you retain access until the end of the current billing period. If you cancel an annual plan, your access continues until the end of the annual term — we do not offer pro-rata refunds on annual billing.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely. You can upgrade at any time — the change takes effect immediately and you'll be billed a prorated amount for the remainder of your billing cycle. Downgrades take effect at the start of your next billing period.",
  },
  {
    question: "Who owns my data?",
    answer:
      "You do. All documents you upload and all data extracted by LNA belong entirely to you. We do not use your documents to train AI models. Your data is stored securely and can be exported or deleted at any time. For full details, please review our Privacy Policy and Data Processing Agreement.",
  },
  {
    question: "Is LNA secure and compliant?",
    answer:
      "LNA is built with security as a foundation. We use encrypted storage, secure API connections, and JWT-based authentication. Organization-level data isolation ensures your data is never accessible to other customers. Enterprise customers can request our full security documentation, and we offer a DPA for GDPR compliance requirements.",
  },
  {
    question: 'What counts as a "document"?',
    answer:
      "A document is one PDF file submitted for processing. Whether the PDF is 1 page or 100 pages, it counts as a single document. Re-processing the same file after corrections counts as a new document submission. Uploaded files that are stored but never processed do not count against your monthly limit.",
  },
  {
    question: "Does LNA have an API?",
    answer:
      "API access is available on the Enterprise plan. It allows you to integrate LNA's extraction, mapping, and export capabilities directly into your own systems and workflows. Contact our sales team for API documentation and integration scoping.",
  },
];

/* ─── Cell renderer ──────────────────────────────────────── */

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
                  Monthly
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
                  Annual
                </button>
              </div>
              {annual && (
                <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium">
                  <Sparkles className="size-3" />
                  Save up to 20%
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
              const isPro = tier.name === "Professional";
              return (
                <AnimateIn key={tier.name} delay={0.1 * i}>
                  <div
                    className={cn(
                      "glass-card relative flex flex-col rounded-2xl p-6 lg:p-8",
                      isPro
                        ? "border-primary shadow-primary/20 scale-[1.02] shadow-xl lg:scale-105"
                        : "shadow-layered"
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
                      {tier.monthlyPrice !== null ? (
                        <>
                          <span className="text-4xl font-extrabold tracking-tight">
                            ${annual ? tier.annualPrice : tier.monthlyPrice}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            /month
                          </span>
                          {annual && tier.annualSavings && (
                            <p className="text-primary mt-1 text-xs font-medium">
                              Save ${tier.annualSavings}/year
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          <span className="text-4xl font-extrabold tracking-tight">
                            Custom
                          </span>
                          <p className="text-muted-foreground mt-1 text-xs">
                            Tailored to your volume and requirements
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
            {[
              { icon: Clock, text: "14-day free trial on all plans" },
              { icon: CreditCard, text: "No credit card required" },
              { icon: Shield, text: "Cancel anytime" },
            ].map(({ icon: Icon, text }) => (
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
            <h2 className="text-fluid-lg mb-8 text-center font-bold">
              Compare Plans in Detail
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="px-4 py-3 text-left font-medium">Feature</th>
                    <th className="px-4 py-3 text-center font-medium">
                      Starter
                    </th>
                    <th className="border-primary/20 bg-primary/5 px-4 py-3 text-center font-medium">
                      Professional
                    </th>
                    <th className="px-4 py-3 text-center font-medium">
                      Enterprise
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
            <h2 className="text-fluid-lg mb-8 text-center font-bold">
              Frequently Asked Questions
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
      <Section className="bg-surface">
        <Container className="text-center">
          <AnimateIn>
            <h2 className="text-fluid-lg font-bold">
              Not Sure Which Plan Is Right for You?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
              Talk to our team. We&apos;ll help you figure out the right fit
              based on your document volume, team size, and workflow — no
              pressure, no sales script.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" render={<Link href="/contact" />}>
                Contact Sales
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<Link href="/contact" />}
              >
                Start a Free Trial →
              </Button>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
              {[
                "14-day free trial on all plans",
                "No credit card required",
                "Cancel anytime",
              ].map((s) => (
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
