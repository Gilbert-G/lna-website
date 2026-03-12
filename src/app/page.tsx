import Link from "next/link";
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
  MessageSquareText,
  UserCog,
  MessagesSquare,
  UserRoundCog,
  ArrowRight,
  Star,
} from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/ui/animate-in";
import { DemoModalTrigger } from "@/components/forms/DemoModalTrigger";
import { VideoEmbed } from "@/components/media/VideoEmbed";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="noise-overlay gradient-mesh relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative flex flex-col items-center gap-8 text-center">
          <AnimateIn>
            <Badge variant="secondary" className="mb-4">
              AI Document Processing Platform
            </Badge>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-fluid-xl max-w-4xl font-extrabold">
              Turn Any PDF Into Perfect Excel —{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
                Automatically
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-muted-foreground text-fluid-base max-w-2xl">
              LNA uses AI to extract, structure, and export data from your
              documents in seconds — so your team stops copying and starts
              working.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <DemoModalTrigger className="px-6 text-base">
                Request a Demo
              </DemoModalTrigger>
              <LinkButton
                variant="outline"
                size="lg"
                className="px-6 text-base"
                href="#how-it-works"
              >
                See How It Works
              </LinkButton>
            </div>
            <p className="text-muted-foreground mt-3 text-sm">
              No credit card required. Up and running in minutes.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="mt-4 w-full max-w-4xl">
              <Image
                src="/illustrations/hero-mockup.svg"
                alt="LNA platform dashboard showing PDF to Excel conversion"
                width={960}
                height={540}
                className="shadow-layered rounded-2xl"
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
              {
                icon: Zap,
                headline: "10x Faster Processing",
                description:
                  "Replace hours of manual data entry with AI extraction that completes in seconds.",
              },
              {
                icon: ShieldCheck,
                headline: "99.5% Extraction Accuracy",
                description:
                  "Confidence scoring on every field ensures your data is reliable before it ever leaves the platform.",
              },
              {
                icon: MousePointerClick,
                headline: "Zero Manual Entry",
                description:
                  "From upload to export, the entire workflow is automated — your team never touches the raw data.",
              },
              {
                icon: Layers,
                headline: "Any Document, Any Format",
                description:
                  "Invoices, reports, forms, statements — LNA handles them all, including scanned PDFs.",
              },
            ].map((tile, i) => (
              <AnimateIn key={tile.headline} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <tile.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{tile.headline}</h3>
                  <p className="text-muted-foreground text-sm">
                    {tile.description}
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
                How It Works
              </p>
              <h2 className="text-fluid-lg font-bold">
                From Upload to Excel in Three Steps
              </h2>
              <p className="text-muted-foreground mt-3 text-lg">
                No configuration required. No templates to build. Just results.
              </p>
            </div>
          </AnimateIn>
          <div className="relative grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Upload,
                step: "01",
                label: "Upload",
                title: "Drop In Your Documents",
                description:
                  "Drag and drop single files or entire batches of PDFs directly into LNA. Bulk upload handles hundreds of documents at once. LNA auto-classifies each file so you stay organized from the start.",
              },
              {
                icon: ScanLine,
                step: "02",
                label: "Extract",
                title: "AI Does the Heavy Lifting",
                description:
                  "LNA's AI reads every page, identifies tables, entities, and data fields, and structures everything into clean rows and columns. Confidence scoring flags anything that needs a second look — so nothing slips through.",
              },
              {
                icon: FileSpreadsheet,
                step: "03",
                label: "Export",
                title: "Download Perfect Excel Files",
                description:
                  "Map extracted data to your own Excel template or download it as-is. Preview before you export. Every output includes a full audit trail, so your team always knows what was extracted and when.",
              },
            ].map((step, i) => (
              <AnimateIn key={step.step} delay={i * 0.15}>
                <div className="glass-card shadow-layered flex flex-col items-center rounded-2xl p-6 text-center">
                  <span className="text-primary mb-2 text-xs font-bold tracking-widest uppercase">
                    {step.step} — {step.label}
                  </span>
                  <div className="bg-primary/10 text-primary mb-4 rounded-xl p-4">
                    <step.icon className="size-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.3}>
            <div className="mt-12 flex justify-center">
              <Image
                src="/illustrations/workflow-diagram.svg"
                alt="Upload, Extract, Export workflow"
                width={800}
                height={200}
                className="w-full max-w-3xl"
              />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="mx-auto mt-12 max-w-4xl">
              <VideoEmbed src="dQw4w9WgXcQ" title="See LNA in action" />
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Feature Highlights */}
      <Section className="bg-surface">
        <Container>
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="text-primary mb-2 text-sm font-semibold tracking-wider uppercase">
                Features
              </p>
              <h2 className="text-fluid-lg font-bold">
                Everything Your Team Needs to Process Documents at Scale
              </h2>
              <p className="text-muted-foreground mt-3 text-lg">
                Six core capabilities built for finance teams, operations
                managers, and anyone who lives in spreadsheets.
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FolderOpen,
                title: "Organize Every Document in One Place",
                description:
                  "Upload, classify, search, and preview all your PDFs without leaving the platform. LNA automatically detects duplicates and keeps your library clean, with full-text search across your entire document archive.",
              },
              {
                icon: BrainCircuit,
                title: "AI That Reads Documents Like an Expert",
                description:
                  "Schema-free extraction means you don't need to configure anything before processing starts. LNA detects dates, amounts, names, addresses, and multi-page tables automatically — with a confidence score attached to every field.",
              },
              {
                icon: GitMerge,
                title: "Your Excel Format, Automatically Matched",
                description:
                  "Upload your existing Excel template and LNA proposes the field mappings for you. Fine-tune with a visual drag-and-drop editor, then save the configuration for every future batch — your templates, your way.",
              },
              {
                icon: Download,
                title: "Export With Confidence",
                description:
                  "Preview your output before downloading. Export to Excel in formats that preserve your layout and formulas. Every extraction is logged in a full audit trail, giving your team the traceability compliance requires.",
              },
              {
                icon: MessageSquareText,
                title: "Ask Your Documents Anything",
                description:
                  'Stop hunting through spreadsheets for answers. Ask LNA a plain-language question — "What was the total invoice amount from Vendor X in Q3?" — and get an accurate, sourced answer from your own data in seconds.',
              },
              {
                icon: UserCog,
                title: "An AI Assistant That Speaks Your Industry",
                description:
                  "Set a role — Financial Analyst, Compliance Officer, Operations Manager — and LNA's AI adapts its language, focus, and responses to match. It's not a generic chatbot. It's domain-aware intelligence built into your workflow.",
              },
            ].map((feature, i) => (
              <AnimateIn key={feature.title} delay={i * 0.1}>
                <div className="glass-card shadow-layered flex flex-col gap-4 rounded-2xl p-6">
                  <div className="bg-primary/10 text-primary w-fit rounded-xl p-3">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* AI Differentiators */}
      <Section className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
        <Container>
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold tracking-wider text-blue-300 uppercase">
                What Makes LNA Different
              </p>
              <h2 className="text-fluid-lg font-bold">
                Beyond Extraction: Document Intelligence That Thinks
              </h2>
              <p className="mt-3 text-lg text-slate-300">
                Most document tools stop at extraction. LNA keeps going — giving
                you the ability to question, analyze, and reason over your data
                using AI that understands your context.
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-8 md:grid-cols-2">
            <AnimateIn delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-blue-500/20 p-3">
                    <MessagesSquare className="size-7 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Ask Your Documents Anything
                  </h3>
                </div>
                <p className="mb-4 text-slate-300">
                  Connect your document library to a powerful language model and
                  query it in plain English. LNA grounds every answer in your
                  actual data — no hallucinations, no guesswork.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-400">&#x2713;</span>
                    Ask natural-language questions across hundreds of documents
                    at once
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-400">&#x2713;</span>
                    Get specific, sourced answers — not summaries or
                    approximations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-400">&#x2713;</span>
                    Instantly surface totals, comparisons, anomalies, and trends
                    without building a single formula
                  </li>
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-500/20 p-3">
                    <UserRoundCog className="size-7 text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-bold">
                    AI That Adapts to Your Role
                  </h3>
                </div>
                <p className="mb-4 text-slate-300">
                  Configure the AI to think and respond like an expert in your
                  field. Whether you need financial analysis, compliance review,
                  or operational oversight, LNA&apos;s context roles make every
                  conversation relevant and precise.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-400">&#x2713;</span>
                    Pre-built roles: Financial Analyst, Compliance Officer,
                    Operations Manager
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-400">&#x2713;</span>
                    The AI speaks your industry&apos;s language — not generic
                    output
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-400">&#x2713;</span>
                    Build and save custom roles tailored to your specific
                    workflows
                  </li>
                </ul>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section>
        <Container>
          <AnimateIn>
            <p className="text-primary mb-8 text-center text-sm font-semibold tracking-wider uppercase">
              Trusted by Teams Who Process Documents Every Day
            </p>
          </AnimateIn>
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500K+", label: "Documents processed" },
              { value: "120+", label: "Hours saved per team/month" },
              { value: "99.5%", label: "Average extraction accuracy" },
              { value: "200+", label: "Teams using LNA" },
            ].map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-primary text-3xl font-extrabold">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "LNA replaced our entire manual data entry workflow. What used to take our team 6 hours a day now happens in minutes — with better accuracy.",
                name: "Sarah Chen",
                title: "Finance Director",
                company: "Meridian Partners",
              },
              {
                quote:
                  "The accuracy improvement was immediate. We went from catching errors in every third export to near-perfect data on the first pass.",
                name: "James Okafor",
                title: "Operations Manager",
                company: "Apex Logistics",
              },
              {
                quote:
                  "The LLM Q&A feature changed everything. We can now ask questions across thousands of invoices instead of manually building pivot tables.",
                name: "Marie Dubois",
                title: "Head of Data",
                company: "Vectis Group",
              },
            ].map((testimonial, i) => (
              <AnimateIn key={testimonial.name} delay={i * 0.1}>
                <div className="glass-card shadow-layered flex flex-col gap-4 rounded-2xl p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white">
        <Container className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-fluid-lg font-bold">
              Stop Copying. Start Extracting.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              LNA automates the PDF-to-Excel workflows that are costing your
              team hours every week. See it in action with a personalized demo —
              we&apos;ll show you exactly how it works with your documents.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <LinkButton
                size="lg"
                className="bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-lg hover:bg-blue-50 hover:shadow-xl"
                href="/contact"
              >
                Request a Demo
              </LinkButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-100 hover:text-white"
              >
                Or explore pricing <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              No credit card required. Setup takes minutes. Cancel anytime.
            </p>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
