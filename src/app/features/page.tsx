import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "LNA Features — AI Document Processing & Intelligent Data Extraction",
  description:
    "Explore LNA's full feature set: AI data extraction, PDF to Excel export, LLM-powered Q&A, and context-aware AI roles. See what sets LNA apart.",
};

const features = [
  {
    id: "document-management",
    icon: FolderOpen,
    label: "Document Management",
    headline: "One Place for Every Document Your Team Processes",
    description:
      "Managing hundreds of PDFs across shared drives and email threads creates confusion. LNA gives your team a centralized document workspace where every file is organized, searchable, and accessible — from upload to archive.",
    bullets: [
      "Drag-and-drop multi-file upload, including bulk batches of hundreds of documents",
      "Automatic document classification — LNA distinguishes invoices, reports, forms, and statements without setup",
      "Built-in OCR processes scanned and image-based PDFs as accurately as digital-native files",
      "Intelligent duplicate detection prevents redundant processing and keeps your library clean",
      "Full-text search across your entire document archive so nothing gets buried",
    ],
    screenshot: "/illustrations/screenshots/screenshot-dashboard.svg",
  },
  {
    id: "data-extraction",
    icon: ScanLine,
    label: "Data Extraction",
    headline: "AI Extraction That Gets It Right the First Time",
    description:
      "Traditional OCR tools copy text. LNA understands structure. Its AI reads each document the way an analyst would — identifying tables, recognizing entities, and structuring output into clean, usable data rows without any manual configuration required.",
    bullets: [
      "Schema-free extraction: no templates or field mapping needed to start processing",
      "Automatically detects entities — dates, monetary amounts, vendor names, addresses, and more",
      "Multi-page table extraction handles complex financial and operational reports accurately",
      "Confidence scoring on every extracted field so you know exactly what to trust and what to verify",
      "Batch processing handles hundreds of documents in a single run, with error recovery and retry on failure",
      "Structured output is ready to map and export immediately — no cleanup, no reformatting",
    ],
    screenshot: "/illustrations/screenshots/screenshot-extraction.svg",
  },
  {
    id: "template-mapping",
    icon: GitMerge,
    label: "Template & Mapping",
    headline: "Your Excel Template. LNA's AI Does the Matching.",
    description:
      "You've already built your reporting templates. LNA respects that. Upload your existing Excel file, and the AI analyzes its structure and proposes how extracted fields should map to your columns — automatically. Tweak it once, save it forever.",
    bullets: [
      "Upload any .xlsx template as your target output format",
      "AI-powered structure analysis reads your template and understands column intent",
      "Auto-mapping proposals suggest field-to-column matches — accept them in one click",
      "Visual drag-and-drop mapping editor for manual corrections without code",
      "Save mapping configurations as reusable templates for recurring document types",
      "Template library lets your team standardize workflows across departments and projects",
    ],
    screenshot: "/illustrations/screenshots/screenshot-mapping.svg",
  },
  {
    id: "export-audit",
    icon: Download,
    label: "Export & Audit",
    headline: "Export Data You Can Trust — With a Paper Trail to Prove It",
    description:
      "An extraction is only valuable if the output is reliable. LNA gives you a full preview of every export before you download it, delivers format-preserving Excel files that fit directly into your existing workflows, and logs every action for traceability.",
    bullets: [
      "Format-preserving Excel export maintains your template layout, column widths, and structure",
      "Export preview lets you review output before it leaves the platform",
      "Batch export processes and downloads multiple documents simultaneously",
      "Full audit trail captures what was extracted, what was mapped, by whom, and when — supporting compliance and review processes",
    ],
    screenshot: "/illustrations/screenshots/screenshot-export.svg",
  },
];

const aiFeatures = [
  {
    id: "llm-qa",
    icon: MessagesSquare,
    label: "LLM-Connected Data Q&A",
    headline: "Stop Searching. Start Asking.",
    description:
      "Spreadsheets are good at storing data. They're not good at answering questions. LNA's LLM-connected Q&A turns your document library into a conversational data source. Ask anything in plain English and get an accurate answer — grounded entirely in your own uploaded data, not generic AI knowledge.",
    whyItMatters:
      "Most document tools stop at extraction. They give you a spreadsheet and leave you to figure out the rest. LNA goes further — once your data is extracted, it stays live and queryable. Your documents become a database you can have a conversation with.",
    bullets: [
      "Ask natural-language questions across your entire document library",
      "Answers are grounded in your uploaded data — not the LLM's general training",
      "Get specific totals, comparisons, summaries, and anomaly flags without writing a single formula",
      "Ideal for: financial reconciliation, compliance checks, vendor analysis, operational reporting",
      "Powered by Gemini — a state-of-the-art language model built for accuracy at scale",
    ],
    illustration: "/illustrations/llm-qa-illustration.svg",
  },
  {
    id: "chat-context-role",
    icon: UserRoundCog,
    label: "Chat with Context Role",
    headline: "An AI That Thinks Like Your Team",
    description:
      "Generic AI gives generic answers. LNA's Chat with Context Role lets you configure the AI assistant's persona and domain focus — so it responds with the expertise your work actually requires.",
    whyItMatters:
      "Context roles don't just change the tone of responses — they change what the AI pays attention to. This is the difference between a general-purpose chatbot and a specialized AI partner that understands your industry.",
    bullets: [
      "Pre-built roles include Financial Analyst, Compliance Officer, and Operations Manager",
      "The AI adapts its language, focus areas, and interpretation to match the selected role",
      "Create and save custom roles tailored to your specific team, department, or use case",
      "Combine with LLM Q&A for end-to-end document intelligence: extract, query, and analyze in one platform",
      "Roles are organization-level — share them across your team for consistent AI behavior",
    ],
    illustration: "/illustrations/chat-context-illustration.svg",
  },
];

const comparisonRows = [
  {
    feature: "Setup required",
    manual: "None (just time)",
    ocr: "Configuration needed",
    lna: "No — schema-free from day one",
  },
  {
    feature: "Accuracy",
    manual: "Human error rate",
    ocr: "Moderate",
    lna: "99.5% with confidence scoring",
  },
  {
    feature: "Speed",
    manual: "Hours per document",
    ocr: "Minutes per document",
    lna: "Seconds per document, in batches",
  },
  {
    feature: "Output format",
    manual: "Varies",
    ocr: "Generic CSV or text",
    lna: "Matches your exact Excel template",
  },
  {
    feature: "Scanned PDFs",
    manual: "Manual re-entry",
    ocr: "Limited",
    lna: "Full OCR support",
  },
  {
    feature: "Multi-page tables",
    manual: "Error-prone",
    ocr: "Often fails",
    lna: "Extracted accurately",
  },
  {
    feature: "AI Q&A",
    manual: "Not possible",
    ocr: "Not available",
    lna: "Ask your documents anything",
  },
  {
    feature: "Context roles",
    manual: "Not applicable",
    ocr: "Not available",
    lna: "Domain-specific AI intelligence",
  },
  {
    feature: "Audit trail",
    manual: "Non-existent",
    ocr: "None",
    lna: "Full extraction and export log",
  },
  {
    feature: "Scalability",
    manual: "Breaks at volume",
    ocr: "Limited batch support",
    lna: "Hundreds of documents at once",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative text-center">
          <AnimateIn>
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Every Tool You Need to Process Documents Without the Busywork
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
              LNA combines intelligent data extraction, automated Excel export,
              and AI-powered document analysis into one platform — so your team
              can focus on decisions, not data entry.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex justify-center gap-3">
              <LinkButton size="lg" className="px-6" href="/contact">
                Request a Demo
              </LinkButton>
              <LinkButton
                variant="outline"
                size="lg"
                className="px-6"
                href="/pricing"
              >
                See Pricing <ArrowRight className="ml-1 size-4" />
              </LinkButton>
            </div>
          </AnimateIn>
          {/* Anchor Nav */}
          <AnimateIn delay={0.3}>
            <nav
              className="mt-12 flex flex-wrap justify-center gap-2"
              aria-label="Feature sections"
            >
              {[
                ...features,
                ...aiFeatures,
                { id: "user-management", label: "User Management" },
              ].map((f) => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full border px-4 py-1.5 text-sm transition-colors"
                >
                  {f.label}
                </a>
              ))}
            </nav>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="mx-auto mt-12 max-w-4xl">
              <VideoEmbed src="dQw4w9WgXcQ" title="LNA platform overview" />
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Standard Features */}
      {features.map((feature, i) => (
        <Section
          key={feature.id}
          id={feature.id}
          className={i % 2 === 1 ? "bg-muted/30" : ""}
        >
          <Container>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <AnimateIn className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="bg-primary/10 text-primary mb-4 w-fit rounded-xl p-3">
                  <feature.icon className="size-7" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  {feature.headline}
                </h2>
                <p className="text-muted-foreground mt-4 text-lg">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm">
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
                  src={feature.screenshot}
                  alt={feature.headline}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </AnimateIn>
            </div>
          </Container>
        </Section>
      ))}

      {/* AI Features - Differentiators */}
      {aiFeatures.map((feature, i) => (
        <Section
          key={feature.id}
          id={feature.id}
          className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white"
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <AnimateIn className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Badge className="mb-4 border-blue-400/30 bg-blue-500/20 text-blue-200">
                  Key Differentiator
                </Badge>
                <div className="mb-4 w-fit rounded-xl bg-blue-500/20 p-3">
                  <feature.icon className="size-7 text-blue-300" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  {feature.headline}
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  {feature.description}
                </p>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="mb-1 text-sm font-semibold text-blue-200">
                    Why This Matters
                  </p>
                  <p className="text-sm text-slate-400">
                    {feature.whyItMatters}
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
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
                  src={feature.illustration}
                  alt={feature.headline}
                  width={600}
                  height={400}
                  className="rounded-2xl"
                />
              </AnimateIn>
            </div>
          </Container>
        </Section>
      ))}

      {/* User Management */}
      <Section id="user-management">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateIn>
              <div className="bg-primary/10 text-primary mb-4 w-fit rounded-xl p-3">
                <Users className="size-7" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Secure Access, Clear Roles, Full Control
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                LNA is built for teams. Organization-level accounts, role-based
                permissions, and JWT authentication ensure that the right people
                have access to the right documents — and the audit trail always
                knows who did what.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "JWT-based authentication for secure, token-managed access",
                  "Organization-level accounts keep your team's data fully separated from other customers",
                  "Role-based access control with Admin, Editor, and Viewer permission levels",
                  "Admins manage team members, permissions, and billing from a central dashboard",
                  "Enterprise tier supports SSO/SAML for single sign-on integration with your existing identity provider",
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm">
                    <Check className="text-primary mt-0.5 size-4 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <Image
                src="/illustrations/screenshots/screenshot-dashboard.svg"
                alt="User management dashboard"
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
                LNA vs. the Alternatives
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                There&apos;s a Better Way Than Copy-Paste
              </h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left font-semibold">Feature</th>
                    <th className="text-muted-foreground p-3 text-center font-medium">
                      Manual Process
                    </th>
                    <th className="text-muted-foreground p-3 text-center font-medium">
                      Basic OCR Tools
                    </th>
                    <th className="text-primary bg-primary/5 p-3 text-center font-semibold">
                      LNA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b">
                      <td className="p-3 font-medium">{row.feature}</td>
                      <td className="text-muted-foreground p-3 text-center">
                        {row.manual}
                      </td>
                      <td className="text-muted-foreground p-3 text-center">
                        {row.ocr}
                      </td>
                      <td className="bg-primary/5 p-3 text-center font-medium">
                        {row.lna}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-6 text-center text-sm">
              Manual processes don&apos;t scale. Basic OCR tools don&apos;t
              understand your data. LNA does both — and then gives you an AI
              layer on top that turns your documents into something you can
              actually reason over.
            </p>
          </AnimateIn>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white">
        <Container className="text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to See LNA in Action?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Book a 30-minute demo and we&apos;ll walk you through the platform
              using your document types. No slides. No scripts. Just a live
              demonstration of exactly what LNA can do for your team.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <LinkButton
                size="lg"
                className="bg-white px-8 text-base text-blue-600 hover:bg-blue-50"
                href="/contact"
              >
                Request a Demo
              </LinkButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-100 hover:text-white"
              >
                View Pricing <ArrowRight className="size-4" />
              </Link>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
