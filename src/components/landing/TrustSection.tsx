import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

/**
 * Répond à la quatrième question du visiteur. N'affirme que ce qui est vrai
 * aujourd'hui : pas de badge, pas de certification non obtenue.
 * [[À FOURNIR : localisation d'hébergement, chiffrement au repos et en transit]]
 * [[À FOURNIR : certifications obtenues, le cas échéant]]
 */
const POINTS = ["isolation", "audit", "deletion"] as const;

export function TrustSection() {
  const t = useTranslations("home.trust");
  return (
    <Section className="border-t">
      <Container className="flex flex-col gap-6">
        <AnimateIn>
          <h2 className="max-w-[34rem] text-3xl font-semibold tracking-tight text-balance">
            {t("heading")}
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.05}>
          <ul className="flex max-w-[62ch] flex-col gap-3 border-t pt-6">
            {POINTS.map((point) => (
              <li key={point} className="text-muted-foreground text-pretty">
                {t(point)}
              </li>
            ))}
          </ul>
        </AnimateIn>
      </Container>
    </Section>
  );
}
