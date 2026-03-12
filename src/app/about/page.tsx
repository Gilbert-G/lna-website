import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "About LNA — Intelligent Document Processing by Manureva Solutions",
  description:
    "LNA is an AI-powered document processing platform built by Manureva Solutions. Learn about our mission, our team, and why we built LNA.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Accuracy First",
    description:
      "Data that can\u2019t be trusted is worse than no data at all. We build confidence scoring, audit trails, and verification mechanisms into everything LNA does \u2014 because your decisions depend on getting it right.",
  },
  {
    icon: Lightbulb,
    title: "AI with Purpose",
    description:
      "We don\u2019t add AI features because they\u2019re impressive. We add them because they solve a real problem. Every AI capability in LNA \u2014 from schema-free extraction to context roles \u2014 exists because it makes your work meaningfully better.",
  },
  {
    icon: Users,
    title: "Customer-Centric by Default",
    description:
      "Our customers are people who process documents for a living. We build for their actual workflows \u2014 the templates they\u2019ve already created, the formats their systems expect, the questions they need to ask of their data.",
  },
  {
    icon: Eye,
    title: "Transparency in Every Output",
    description:
      "LNA shows its work. Every extracted field carries a confidence score. Every export includes an audit trail. We believe that automation should be explainable \u2014 so you\u2019re never in the dark about what the AI did and why.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description:
      "The technology behind document AI is evolving fast, and so are the needs of the teams we serve. We\u2019re committed to releasing meaningful improvements consistently \u2014 not as marketing moments, but as genuine expansions of what LNA can do for you.",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative text-center">
          <AnimateIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built to End the Copy-Paste Era
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
              LNA exists because professionals deserve better than spending
              their day re-entering data by hand. We built an AI platform that
              processes documents the way a careful analyst would — accurately,
              automatically, and at scale.
            </p>
          </AnimateIn>
        </Container>
      </Section>

      {/* The Problem */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateIn>
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                  The Problem
                </span>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Millions of Hours Lost to a Spreadsheet That Should Fill
                  Itself
                </h2>
                <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
                  <p>
                    Every day, finance teams, operations managers, and data
                    analysts sit down to do the same thing: open a PDF, look at
                    the numbers, and type them into a spreadsheet. Invoice by
                    invoice. Row by row. Page by page.
                  </p>
                  <p>
                    It&apos;s slow. It&apos;s error-prone. And it scales with
                    headcount, not with ambition — the more documents you
                    process, the more people you need doing it.
                  </p>
                  <p>
                    Organizations lose thousands of hours annually to this
                    workflow. Errors compound — a misread digit on an invoice, a
                    missed row in a report, a field copied to the wrong column —
                    and the cost shows up in audits, reconciliations, and
                    decisions made on bad data.
                  </p>
                  <p>
                    LNA was built specifically to solve this. Not with a
                    workaround. Not with a complicated configuration process.
                    With genuine AI that reads documents the way you would — and
                    outputs structured, accurate, exportable data automatically.
                  </p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-muted/50 flex items-center justify-center rounded-2xl p-8">
                <Image
                  src="/illustrations/workflow-diagram.svg"
                  alt="Document processing workflow"
                  width={480}
                  height={360}
                  className="w-full"
                />
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-muted/30">
        <Container>
          <AnimateIn>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Mission &amp; Vision
            </span>
          </AnimateIn>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <AnimateIn delay={0.1}>
              <div className="bg-card rounded-2xl border p-8">
                <Target className="text-primary size-8" />
                <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  To eliminate manual document processing for every organization
                  that depends on data — by making intelligent, AI-powered
                  extraction accessible, accurate, and immediately usable.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-card rounded-2xl border p-8">
                <Eye className="text-primary size-8" />
                <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  A world where no professional loses productive time to data
                  entry — where documents are not just readable, but fully
                  queryable, analyzable, and actionable from the moment they
                  arrive.
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <AnimateIn>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              The Principles Behind Every Decision We Make
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={0.1 * i}>
                <div className="bg-card rounded-2xl border p-6">
                  <value.icon className="text-primary size-6" />
                  <h3 className="mt-3 text-lg font-bold">{value.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Built by Manureva */}
      <Section>
        <Container className="max-w-3xl">
          <AnimateIn>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              The Company
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Product by Manureva Solutions
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
              <p>
                LNA is developed and maintained by Manureva Solutions — a
                software company dedicated to building practical, AI-powered
                tools for professional workflows.
              </p>
              <p>
                Manureva Solutions operates from two locations: Paris, France and
                Pondicherry, India. Our team brings together expertise in AI
                engineering, enterprise software, and product design, with a
                shared focus on building tools that solve real operational
                problems.
              </p>
              <p>
                LNA is our flagship product — and a direct reflection of our
                belief that AI should reduce effort, not add complexity. Every
                feature we ship is designed to make the work of data-intensive
                professionals a little faster, a little more accurate, and a lot
                less frustrating.
              </p>
              <p>
                To learn more about Manureva Solutions or explore partnership
                opportunities, reach out to us at{" "}
                <a
                  href="mailto:hello@getlna.com"
                  className="text-primary hover:underline"
                >
                  hello@getlna.com
                </a>
                .
              </p>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-muted/30">
        <Container className="text-center">
          <AnimateIn>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Want to See What LNA Can Do?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
              Book a demo and we&apos;ll walk you through the platform live —
              using your document types, your templates, and your questions.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <LinkButton size="lg" href="/contact">
                Request a Demo
              </LinkButton>
              <LinkButton variant="outline" size="lg" href="/features">
                Explore Features
                <ArrowUpRight className="size-4" />
              </LinkButton>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
