import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import { Mail, Clock, Linkedin, Twitter, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact LNA — Get in Touch With Our Team",
  description:
    "Reach out to the LNA team for demos, sales inquiries, support, or partnerships. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="noise-overlay gradient-mesh relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative text-center">
          <AnimateIn>
            <h1 className="text-fluid-xl font-extrabold">Let&apos;s Talk</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Whether you&apos;re ready for a demo, have a question about
              pricing, or want to explore a partnership — we&apos;re here. We
              typically respond within 24 hours.
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
                <h2 className="text-lg font-bold">Other Ways to Reach Us</h2>

                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Mail className="text-primary mt-0.5 size-5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href="mailto:hello@getlna.com"
                        className="text-primary text-sm hover:underline"
                      >
                        hello@getlna.com
                      </a>
                      <p className="text-muted-foreground mt-1 text-xs">
                        We respond within 24 hours on business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="text-primary mt-0.5 size-5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Response Time</p>
                      <p className="text-muted-foreground text-sm">
                        We typically respond within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="mb-3 text-sm font-medium">Follow Us</p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Follow us on LinkedIn"
                      >
                        <Linkedin className="size-5" />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Follow us on X"
                      >
                        <Twitter className="size-5" />
                      </a>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="mb-3 text-sm font-medium">Office Locations</p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Paris, France</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">
                            Pondicherry, India
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
