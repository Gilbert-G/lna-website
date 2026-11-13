import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

/**
 * Répond à la quatrième question du visiteur. N'affirme que ce qui est vrai
 * aujourd'hui : pas de badge, pas de certification non obtenue.
 */
const POINTS = ["isolation", "audit", "deletion"] as const;

export function TrustSection() {
  const t = useTranslations("home.trust");
  return (
    <Section className="border-border border-t">
      <Container className="flex flex-col gap-6">
        <AnimateIn>
          <h2 className="text-h2 text-foreground max-w-[34rem] text-balance">
            {t("heading")}
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.05}>
          <ul className="border-border flex max-w-[62ch] flex-col gap-4 border-t pt-6">
            {POINTS.map((point) => (
              <li
                key={point}
                className="text-body flex items-start gap-3 text-pretty"
              >
                <Check
                  className="text-primary mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                />
                <span>{t(point)}</span>
              </li>
            ))}
          </ul>
        </AnimateIn>
      </Container>
    </Section>
  );
}
