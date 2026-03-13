import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.about" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  const valueIcons = [ShieldCheck, Lightbulb, Users, Eye, Sparkles];
  const valueKeys = ["accuracyFirst", "aiPurpose", "customerCentric", "transparency", "innovation"] as const;

  const teamPhotos = [
    "/illustrations/team/placeholder-1.svg",
    "/illustrations/team/placeholder-2.svg",
    "/illustrations/team/placeholder-3.svg",
    "/illustrations/team/placeholder-4.svg",
  ];
  const teamMemberKeys = ["member1", "member2", "member3", "member4"] as const;

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative text-center">
          <AnimateIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("hero.heading")}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
              {t("hero.description")}
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
                  {t("problem.label")}
                </span>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  {t("problem.heading")}
                </h2>
                <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
                  <p>{t("problem.p1")}</p>
                  <p>{t("problem.p2")}</p>
                  <p>{t("problem.p3")}</p>
                  <p>{t("problem.p4")}</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-muted/50 flex items-center justify-center rounded-2xl p-8">
                <Image
                  src="/illustrations/workflow-diagram.svg"
                  alt={t("problem.imageAlt")}
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
              {t("missionVision.label")}
            </span>
          </AnimateIn>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <AnimateIn delay={0.1}>
              <div className="bg-card rounded-2xl border p-8">
                <Target className="text-primary size-8" />
                <h3 className="mt-4 text-xl font-bold">{t("missionVision.mission.title")}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {t("missionVision.mission.description")}
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-card rounded-2xl border p-8">
                <Eye className="text-primary size-8" />
                <h3 className="mt-4 text-xl font-bold">{t("missionVision.vision.title")}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {t("missionVision.vision.description")}
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
              {t("values.label")}
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t("values.heading")}
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i];
              return (
                <AnimateIn key={key} delay={0.1 * i}>
                  <div className="bg-card rounded-2xl border p-6">
                    <Icon className="text-primary size-6" />
                    <h3 className="mt-3 text-lg font-bold">{t(`values.${key}.title`)}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {t(`values.${key}.description`)}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="bg-muted/30">
        <Container>
          <AnimateIn>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              {t("team.label")}
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t("team.heading")}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              {t("team.description")}
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMemberKeys.map((key, i) => (
              <AnimateIn key={key} delay={0.1 * i}>
                <div className="bg-card overflow-hidden rounded-2xl border text-center">
                  <div className="bg-muted flex aspect-square items-center justify-center p-8">
                    <Image
                      src={teamPhotos[i]}
                      alt={t(`team.${key}.name`)}
                      width={200}
                      height={200}
                      className="size-32"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{t(`team.${key}.name`)}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`team.${key}.role`)}
                    </p>
                  </div>
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
              {t("company.label")}
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t("company.heading")}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
              <p>{t("company.p1")}</p>
              <p>{t("company.p2")}</p>
              <p>{t("company.p3")}</p>
              <p>
                {t("company.p4")}{" "}
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
              <LinkButton size="lg" href="/contact">
                {t("cta.ctaDemo")}
              </LinkButton>
              <LinkButton variant="outline" size="lg" href="/features">
                {t("cta.ctaFeatures")}
                <ArrowUpRight className="size-4" />
              </LinkButton>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
