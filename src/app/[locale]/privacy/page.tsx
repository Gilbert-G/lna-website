import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.privacy" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

const sectionIds = [
  { id: "information-we-collect", key: "informationWeCollect" },
  { id: "how-we-use", key: "howWeUse" },
  { id: "data-processing", key: "dataProcessing" },
  { id: "data-storage", key: "dataStorage" },
  { id: "data-sharing", key: "dataSharing" },
  { id: "your-rights", key: "yourRights" },
  { id: "cookies", key: "cookies" },
  { id: "data-retention", key: "dataRetention" },
  { id: "changes", key: "changes" },
  { id: "contact", key: "contact" },
] as const;

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <>
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative max-w-4xl">
          <AnimateIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("heading")}
            </h1>
            <p className="text-muted-foreground mt-4">{t("updated")}</p>
          </AnimateIn>
        </Container>
      </Section>

      <Section className="pt-0 md:pt-0">
        <Container className="max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
            {/* Table of Contents */}
            <AnimateIn>
              <nav className="lg:sticky lg:top-24">
                <p className="mb-3 text-xs font-semibold tracking-widest uppercase">
                  {t("onThisPage")}
                </p>
                <ul className="space-y-1.5 text-sm">
                  {sectionIds.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {t(`sections.${s.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </AnimateIn>

            {/* Content */}
            <AnimateIn delay={0.1}>
              <div className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none text-sm leading-relaxed">
                <p>{t("intro")}</p>

                <h2 id="information-we-collect">{t("s1.heading")}</h2>
                <p>{t("s1.intro")}</p>
                <ul>
                  <li>
                    <strong>{t("s1.account")}</strong> {t("s1.accountDesc")}
                  </li>
                  <li>
                    <strong>{t("s1.document")}</strong> {t("s1.documentDesc")}
                  </li>
                  <li>
                    <strong>{t("s1.usage")}</strong> {t("s1.usageDesc")}
                  </li>
                  <li>
                    <strong>{t("s1.technical")}</strong> {t("s1.technicalDesc")}
                  </li>
                </ul>

                <h2 id="how-we-use">{t("s2.heading")}</h2>
                <p>{t("s2.intro")}</p>
                <ul>
                  <li>{t("s2.b1")}</li>
                  <li>{t("s2.b2")}</li>
                  <li>{t("s2.b3")}</li>
                  <li>{t("s2.b4")}</li>
                  <li>{t("s2.b5")}</li>
                  <li>{t("s2.b6")}</li>
                </ul>

                <h2 id="data-processing">{t("s3.heading")}</h2>
                <p>{t("s3.intro")}</p>
                <ul>
                  <li>
                    <strong>{t("s3.ownership")}</strong> {t("s3.ownershipDesc")}
                  </li>
                  <li>
                    <strong>{t("s3.noTraining")}</strong>{" "}
                    {t("s3.noTrainingDesc")}
                  </li>
                  <li>
                    <strong>{t("s3.isolation")}</strong> {t("s3.isolationDesc")}
                  </li>
                  <li>
                    <strong>{t("s3.encryption")}</strong>{" "}
                    {t("s3.encryptionDesc")}
                  </li>
                </ul>

                <h2 id="data-storage">{t("s4.heading")}</h2>
                <p>{t("s4.intro")}</p>
                <ul>
                  <li>{t("s4.b1")}</li>
                  <li>{t("s4.b2")}</li>
                  <li>{t("s4.b3")}</li>
                  <li>{t("s4.b4")}</li>
                  <li>{t("s4.b5")}</li>
                </ul>

                <h2 id="data-sharing">{t("s5.heading")}</h2>
                <p>{t("s5.intro")}</p>
                <ul>
                  <li>
                    <strong>{t("s5.serviceProviders")}</strong>{" "}
                    {t("s5.serviceProvidersDesc")}
                  </li>
                  <li>
                    <strong>{t("s5.legalRequirements")}</strong>{" "}
                    {t("s5.legalRequirementsDesc")}
                  </li>
                  <li>
                    <strong>{t("s5.businessTransfers")}</strong>{" "}
                    {t("s5.businessTransfersDesc")}
                  </li>
                </ul>

                <h2 id="your-rights">{t("s6.heading")}</h2>
                <p>{t("s6.intro")}</p>
                <ul>
                  <li>{t("s6.b1")}</li>
                  <li>{t("s6.b2")}</li>
                  <li>{t("s6.b3")}</li>
                  <li>{t("s6.b4")}</li>
                  <li>{t("s6.b5")}</li>
                  <li>{t("s6.b6")}</li>
                </ul>
                <p>
                  {t("s6.exerciseRights")}{" "}
                  <a href="mailto:privacy@getlna.com">privacy@getlna.com</a>.{" "}
                  {t("s6.gdpr")}
                </p>

                <h2 id="cookies">{t("s7.heading")}</h2>
                <p>{t("s7.intro")}</p>
                <ul>
                  <li>
                    <strong>{t("s7.essential")}</strong> {t("s7.essentialDesc")}
                  </li>
                  <li>
                    <strong>{t("s7.analytics")}</strong> {t("s7.analyticsDesc")}
                  </li>
                </ul>
                <p>{t("s7.manage")}</p>

                <h2 id="data-retention">{t("s8.heading")}</h2>
                <p>{t("s8.text")}</p>

                <h2 id="changes">{t("s9.heading")}</h2>
                <p>{t("s9.text")}</p>

                <h2 id="contact">{t("s10.heading")}</h2>
                <p>{t("s10.intro")}</p>
                <ul>
                  <li>
                    {t("s10.email")}{" "}
                    <a href="mailto:privacy@getlna.com">privacy@getlna.com</a>
                  </li>
                  <li>
                    {t("s10.generalInquiries")}{" "}
                    <a href="mailto:hello@getlna.com">hello@getlna.com</a>
                  </li>
                  <li>
                    {t("s10.orVisit")}{" "}
                    <Link
                      href="/contact"
                      className="text-primary hover:underline"
                    >
                      {t("s10.contactPage")}
                    </Link>
                  </li>
                </ul>
                <p>
                  {t("s10.company")}
                  <br />
                  {t("s10.locations")}
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
