import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import { Mail, Clock, Linkedin, Twitter, MapPin } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

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
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              {t("hero.description")}
            </p>
          </AnimateIn>
        </Container>
      </Section>

      {/* Form + Sidebar */}
      <Section className="pt-8 md:pt-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Demo Request Form */}
            <AnimateIn>
              <DemoRequestForm />
            </AnimateIn>

            {/* Sidebar */}
            <AnimateIn delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-lg font-bold">{t("sidebar.heading")}</h2>

                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Mail className="text-primary mt-0.5 size-5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{t("sidebar.emailLabel")}</p>
                      <a
                        href={`mailto:${t("sidebar.emailAddress")}`}
                        className="text-primary text-sm hover:underline"
                      >
                        {t("sidebar.emailAddress")}
                      </a>
                      <p className="text-muted-foreground mt-1 text-xs">
                        {t("sidebar.emailNote")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="text-primary mt-0.5 size-5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{t("sidebar.responseLabel")}</p>
                      <p className="text-muted-foreground text-sm">
                        {t("sidebar.responseText")}
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="mb-3 text-sm font-medium">{t("sidebar.socialLabel")}</p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={t("sidebar.linkedin")}
                      >
                        <Linkedin className="size-5" />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={t("sidebar.twitter")}
                      >
                        <Twitter className="size-5" />
                      </a>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="mb-3 text-sm font-medium">{t("sidebar.officesLabel")}</p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{t("sidebar.paris")}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">
                            {t("sidebar.pondicherry")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
