import { useTranslations } from "next-intl";
import { PdfStack } from "@/components/landing/visuals/PdfStack";

/** Bande 2 — un paquet mélangé, chaque document porte le rôle qui lui a été attribué. */
export function RoleClassification() {
  const t = useTranslations("home.bands.mixed");
  const docs = [
    { name: "devis-generali-2026.pdf", role: t("roleAdp") },
    { name: "amortissement-pret.pdf", role: t("roleAmortization") },
    { name: "devis-sante-malakoff.pdf", role: t("roleHealth") },
    { name: "conditions-generales.pdf", role: t("roleContract") },
    { name: "releve-bancaire.pdf", role: t("roleOther") },
  ];
  return <PdfStack docs={docs} />;
}
