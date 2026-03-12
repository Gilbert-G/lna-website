import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Privacy Policy — LNA by Manureva Solutions",
  description:
    "Learn how LNA collects, uses, and protects your data. Our privacy policy covers data processing, storage, and your rights.",
};

const sections = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use", title: "2. How We Use Your Information" },
  { id: "data-processing", title: "3. Document Data Processing" },
  { id: "data-storage", title: "4. Data Storage & Security" },
  { id: "data-sharing", title: "5. Data Sharing" },
  { id: "your-rights", title: "6. Your Rights" },
  { id: "cookies", title: "7. Cookies & Tracking" },
  { id: "data-retention", title: "8. Data Retention" },
  { id: "changes", title: "9. Changes to This Policy" },
  { id: "contact", title: "10. Contact Us" },
];

export default function PrivacyPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative max-w-4xl">
          <AnimateIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Privacy Policy
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
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest">
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
                  This Privacy Policy describes how Manureva Solutions
                  (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
                  uses, and protects information when you use LNA
                  (&quot;the Platform&quot;). We are committed to protecting
                  your privacy and handling your data responsibly.
                </p>

                <h2 id="information-we-collect">1. Information We Collect</h2>
                <p>We collect information in the following categories:</p>
                <ul>
                  <li>
                    <strong>Account Information:</strong> Name, email address,
                    company name, and role when you create an account or request
                    a demo.
                  </li>
                  <li>
                    <strong>Document Data:</strong> PDF files and documents you
                    upload for processing. See Section 3 for details on how we
                    handle document data.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you
                    interact with LNA, including pages visited, features used,
                    and session duration.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> Browser type, device
                    information, IP address, and operating system.
                  </li>
                </ul>

                <h2 id="how-we-use">2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                  <li>Provide and maintain the LNA platform</li>
                  <li>Process your documents and deliver extraction results</li>
                  <li>Send account-related communications</li>
                  <li>Improve our services and develop new features</li>
                  <li>Respond to your inquiries and provide support</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 id="data-processing">3. Document Data Processing</h2>
                <p>
                  Your documents are processed solely to provide extraction and
                  analysis services. We want to be clear about how we handle
                  your document data:
                </p>
                <ul>
                  <li>
                    <strong>Your Data, Your Ownership:</strong> All documents
                    you upload and all data extracted by LNA belong entirely to
                    you.
                  </li>
                  <li>
                    <strong>No AI Training:</strong> We do not use your documents
                    or extracted data to train AI models.
                  </li>
                  <li>
                    <strong>Isolation:</strong> Organization-level data isolation
                    ensures your data is never accessible to other customers.
                  </li>
                  <li>
                    <strong>Encryption:</strong> Documents are encrypted at rest
                    and in transit using industry-standard encryption protocols.
                  </li>
                </ul>

                <h2 id="data-storage">4. Data Storage &amp; Security</h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your data, including:
                </p>
                <ul>
                  <li>Encrypted storage for all documents and extracted data</li>
                  <li>Secure API connections with JWT-based authentication</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Role-based access control within the platform</li>
                  <li>
                    Organization-level data isolation for multi-tenant
                    environments
                  </li>
                </ul>

                <h2 id="data-sharing">5. Data Sharing</h2>
                <p>
                  We do not sell your personal information or document data. We
                  may share information with:
                </p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> Third-party services that
                    help us operate the platform (e.g., cloud infrastructure,
                    analytics).
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law,
                    regulation, or legal process.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets.
                  </li>
                </ul>

                <h2 id="your-rights">6. Your Rights</h2>
                <p>
                  Depending on your jurisdiction, you may have the following
                  rights:
                </p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data</li>
                  <li>Export your data in a portable format</li>
                  <li>Object to certain data processing activities</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <p>
                  To exercise any of these rights, contact us at{" "}
                  <a href="mailto:privacy@getlna.com">privacy@getlna.com</a>.
                  For GDPR-related requests, we offer a Data Processing
                  Agreement (DPA) for Enterprise customers.
                </p>

                <h2 id="cookies">7. Cookies &amp; Tracking</h2>
                <p>We use cookies and similar technologies for:</p>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for the platform
                    to function (e.g., authentication, session management).
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    the platform is used so we can improve it.
                  </li>
                </ul>
                <p>
                  You can manage cookie preferences through your browser
                  settings.
                </p>

                <h2 id="data-retention">8. Data Retention</h2>
                <p>
                  We retain your data for as long as your account is active or
                  as needed to provide services. Document data can be exported or
                  deleted at any time from your account settings. After account
                  deletion, we remove your data within 30 days, except where
                  retention is required by law.
                </p>

                <h2 id="changes">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of significant changes via email or through the
                  platform. Continued use of LNA after changes constitutes
                  acceptance of the updated policy.
                </p>

                <h2 id="contact">10. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data
                  practices, contact us at:
                </p>
                <ul>
                  <li>
                    Email:{" "}
                    <a href="mailto:privacy@getlna.com">privacy@getlna.com</a>
                  </li>
                  <li>
                    General inquiries:{" "}
                    <a href="mailto:hello@getlna.com">hello@getlna.com</a>
                  </li>
                  <li>
                    Or visit our{" "}
                    <Link href="/contact" className="text-primary hover:underline">
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
