import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { createPageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service — LNA",
  description:
    "Read the Terms of Service for LNA, the AI-powered document processing platform by Manureva Solutions.",
  path: "/terms",
});

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "description", title: "2. Description of Service" },
  { id: "accounts", title: "3. Accounts & Registration" },
  { id: "usage", title: "4. Acceptable Use" },
  { id: "data-ownership", title: "5. Data Ownership" },
  { id: "payment", title: "6. Payment & Billing" },
  { id: "cancellation", title: "7. Cancellation & Refunds" },
  { id: "ip", title: "8. Intellectual Property" },
  { id: "liability", title: "9. Limitation of Liability" },
  { id: "indemnification", title: "10. Indemnification" },
  { id: "changes", title: "11. Changes to Terms" },
  { id: "governing-law", title: "12. Governing Law" },
  { id: "contact", title: "13. Contact" },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Service", url: "/terms" }]} />
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative max-w-4xl">
          <AnimateIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mt-4">
              Last updated: March 1, 2026
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
                <p className="mb-3 text-xs font-semibold tracking-widest uppercase">
                  On this page
                </p>
                <ul className="space-y-1.5 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </AnimateIn>

            {/* Content */}
            <AnimateIn delay={0.1}>
              <div className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none text-sm leading-relaxed">
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your use of
                  the LNA platform (&quot;Service&quot;) provided by Manureva
                  Solutions (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;). By using LNA, you agree to these Terms.
                </p>

                <h2 id="acceptance">1. Acceptance of Terms</h2>
                <p>
                  By creating an account or using LNA, you agree to be bound by
                  these Terms. If you are using LNA on behalf of an
                  organization, you represent that you have the authority to
                  bind that organization to these Terms.
                </p>

                <h2 id="description">2. Description of Service</h2>
                <p>
                  LNA is an AI-powered document processing platform that
                  extracts structured data from PDF documents and exports it to
                  Excel format. The Service includes document upload, AI-powered
                  data extraction, template mapping, export capabilities, and
                  related features as described on our website.
                </p>

                <h2 id="accounts">3. Accounts &amp; Registration</h2>
                <p>To use LNA, you must:</p>
                <ul>
                  <li>
                    Provide accurate and complete registration information
                  </li>
                  <li>Maintain the security of your account credentials</li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                  <li>
                    Be at least 18 years old or have legal authority to enter
                    into these Terms
                  </li>
                </ul>
                <p>
                  You are responsible for all activity that occurs under your
                  account.
                </p>

                <h2 id="usage">4. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>
                    Use the Service for any unlawful purpose or in violation of
                    any applicable laws
                  </li>
                  <li>
                    Upload documents containing malware or malicious content
                  </li>
                  <li>
                    Attempt to gain unauthorized access to the Service or its
                    systems
                  </li>
                  <li>
                    Interfere with or disrupt the Service or its infrastructure
                  </li>
                  <li>
                    Reverse engineer, decompile, or disassemble any part of the
                    Service
                  </li>
                  <li>
                    Share your account credentials with unauthorized parties
                  </li>
                  <li>
                    Exceed the usage limits of your plan without upgrading
                  </li>
                </ul>

                <h2 id="data-ownership">5. Data Ownership</h2>
                <p>
                  <strong>Your data belongs to you.</strong> All documents you
                  upload and all data extracted by LNA remain your property. We
                  do not claim any ownership rights over your content.
                </p>
                <ul>
                  <li>We do not use your documents to train AI models</li>
                  <li>You can export or delete your data at any time</li>
                  <li>
                    Upon account termination, your data will be deleted within
                    30 days
                  </li>
                </ul>
                <p>
                  For details on how we handle your data, see our{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </p>

                <h2 id="payment">6. Payment &amp; Billing</h2>
                <ul>
                  <li>
                    Paid plans are billed monthly or annually, depending on your
                    selection
                  </li>
                  <li>
                    All prices are in USD and do not include applicable taxes
                  </li>
                  <li>
                    Annual plans are billed in full at the start of the annual
                    term
                  </li>
                  <li>
                    We reserve the right to change pricing with 30 days&apos;
                    notice
                  </li>
                  <li>
                    All paid plans include a 14-day free trial with no credit
                    card required
                  </li>
                </ul>

                <h2 id="cancellation">7. Cancellation &amp; Refunds</h2>
                <p>
                  You may cancel your subscription at any time from your account
                  settings:
                </p>
                <ul>
                  <li>
                    <strong>Monthly plans:</strong> Access continues until the
                    end of the current billing period
                  </li>
                  <li>
                    <strong>Annual plans:</strong> Access continues until the
                    end of the annual term. We do not offer pro-rata refunds on
                    annual billing
                  </li>
                  <li>
                    <strong>Downgrades:</strong> Take effect at the start of
                    your next billing period
                  </li>
                  <li>
                    <strong>Upgrades:</strong> Take effect immediately with
                    prorated billing
                  </li>
                </ul>

                <h2 id="ip">8. Intellectual Property</h2>
                <p>
                  The Service, including its software, design, documentation,
                  and branding, is the property of Manureva Solutions and is
                  protected by intellectual property laws. You may not copy,
                  modify, distribute, or create derivative works based on the
                  Service without our prior written consent.
                </p>

                <h2 id="liability">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Manureva Solutions
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your use of
                  the Service. Our total liability for any claim arising from
                  these Terms shall not exceed the amount paid by you to us in
                  the 12 months preceding the claim.
                </p>

                <h2 id="indemnification">10. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Manureva Solutions
                  from any claims, damages, or expenses arising from your use of
                  the Service, your violation of these Terms, or your violation
                  of any rights of a third party.
                </p>

                <h2 id="changes">11. Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. We will notify
                  you of material changes via email or through the platform at
                  least 30 days before they take effect. Your continued use of
                  the Service after changes constitutes acceptance of the
                  updated Terms.
                </p>

                <h2 id="governing-law">12. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of France. Any disputes
                  arising from these Terms shall be resolved in the courts of
                  Paris, France.
                </p>

                <h2 id="contact">13. Contact</h2>
                <p>For questions about these Terms, contact us at:</p>
                <ul>
                  <li>
                    Email:{" "}
                    <a href="mailto:legal@getlna.com">legal@getlna.com</a>
                  </li>
                  <li>
                    General inquiries:{" "}
                    <a href="mailto:hello@getlna.com">hello@getlna.com</a>
                  </li>
                  <li>
                    Or visit our{" "}
                    <Link
                      href="/contact"
                      className="text-primary hover:underline"
                    >
                      Contact page
                    </Link>
                  </li>
                </ul>
                <p>
                  Manureva Solutions
                  <br />
                  Paris, France &amp; Pondicherry, India
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
