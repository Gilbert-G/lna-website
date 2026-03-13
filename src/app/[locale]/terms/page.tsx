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
  const t = await getTranslations({ locale, namespace: "seo.terms" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

const sectionIds = [
  { id: "acceptance", key: "acceptance" },
  { id: "description", key: "description" },
  { id: "accounts", key: "accounts" },
  { id: "usage", key: "usage" },
  { id: "data-ownership", key: "dataOwnership" },
  { id: "payment", key: "payment" },
  { id: "cancellation", key: "cancellation" },
  { id: "ip", key: "ip" },
  { id: "liability", key: "liability" },
  { id: "indemnification", key: "indemnification" },
  { id: "changes", key: "changes" },
  { id: "governing-law", key: "governingLaw" },
  { id: "contact", key: "contact" },
] as const;

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "terms" });

  return (
    <>
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative max-w-4xl">
          <AnimateIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("heading")}
            </h1>
            <p className="text-muted-foreground mt-4">
              {t("updated")}
            </p>
          </AnimateIn>
        </Container>
      </Section>

      <Section className="pt-0 md:pt-0">
        <Container className="max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
            {/* Table of Contents */}
            <AnimateIn>
              <nav className="lg:sticky lg:top-24">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest">
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

                <h2 id="acceptance">{t("sections.acceptance")}</h2>
                <p>{t("s1.text")}</p>

                <h2 id="description">{t("sections.description")}</h2>
                <p>{t("s2.text")}</p>

                <h2 id="accounts">{t("sections.accounts")}</h2>
                <p>{t("s3.intro")}</p>
                <ul>
                  <li>{t("s3.b1")}</li>
                  <li>{t("s3.b2")}</li>
                  <li>{t("s3.b3")}</li>
                  <li>{t("s3.b4")}</li>
                </ul>
                <p>{t("s3.responsibility")}</p>

                <h2 id="usage">{t("sections.usage")}</h2>
                <p>{t("s4.intro")}</p>
                <ul>
                  <li>{t("s4.b1")}</li>
                  <li>{t("s4.b2")}</li>
                  <li>{t("s4.b3")}</li>
                  <li>{t("s4.b4")}</li>
                  <li>{t("s4.b5")}</li>
                  <li>{t("s4.b6")}</li>
                  <li>{t("s4.b7")}</li>
                </ul>

                <h2 id="data-ownership">{t("sections.dataOwnership")}</h2>
                <p>
                  <strong>{t("s5.intro")}</strong>
                </p>
                <ul>
                  <li>{t("s5.b1")}</li>
                  <li>{t("s5.b2")}</li>
                  <li>{t("s5.b3")}</li>
                </ul>
                <p>
                  {t("s5.footer")}{" "}
                  <Link href="/privacy">
                    {t("s5.privacyPolicy")}
                  </Link>
                  .
                </p>

                <h2 id="payment">{t("sections.payment")}</h2>
                <ul>
                  <li>{t("s6.b1")}</li>
                  <li>{t("s6.b2")}</li>
                  <li>{t("s6.b3")}</li>
                  <li>{t("s6.b4")}</li>
                  <li>{t("s6.b5")}</li>
                </ul>

                <h2 id="cancellation">{t("sections.cancellation")}</h2>
                <p>{t("s7.intro")}</p>
                <ul>
                  <li>
                    <strong>{t("s7.monthly")}</strong> {t("s7.monthlyDesc")}
                  </li>
                  <li>
                    <strong>{t("s7.annual")}</strong> {t("s7.annualDesc")}
                  </li>
                  <li>
                    <strong>{t("s7.downgrades")}</strong> {t("s7.downgradesDesc")}
                  </li>
                  <li>
                    <strong>{t("s7.upgrades")}</strong> {t("s7.upgradesDesc")}
                  </li>
                </ul>

                <h2 id="ip">{t("sections.ip")}</h2>
                <p>{t("s8.text")}</p>

                <h2 id="liability">{t("sections.liability")}</h2>
                <p>{t("s9.text")}</p>

                <h2 id="indemnification">{t("sections.indemnification")}</h2>
                <p>{t("s10.text")}</p>

                <h2 id="changes">{t("sections.changes")}</h2>
                <p>{t("s11.text")}</p>

                <h2 id="governing-law">{t("sections.governingLaw")}</h2>
                <p>{t("s12.text")}</p>

                <h2 id="contact">{t("sections.contact")}</h2>
                <p>{t("s13.intro")}</p>
                <ul>
                  <li>
                    {t("s13.email")}{" "}
                    <a href="mailto:legal@getlna.com">legal@getlna.com</a>
                  </li>
                  <li>
                    {t("s13.generalInquiries")}{" "}
                    <a href="mailto:hello@getlna.com">hello@getlna.com</a>
                  </li>
                  <li>
                    {t("s13.orVisit")}{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      {t("s13.contactPage")}
                    </Link>
                  </li>
                </ul>
                <p>
                  {t("s13.company")}
                  <br />
                  {t("s13.locations")}
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
