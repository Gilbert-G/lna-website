import { getTranslations } from "next-intl/server";
import { FileQuestion } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default async function NotFound() {
  const t = await getTranslations("error");

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <FileQuestion className="text-muted-foreground/50 size-16" />
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
        {t("notFound.heading")}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md">
        {t("notFound.description")}
      </p>
      <div className="mt-8 flex gap-3">
        <LinkButton href="/">{t("notFound.goHome")}</LinkButton>
        <LinkButton variant="outline" href="/contact">
          {t("notFound.contactSupport")}
        </LinkButton>
      </div>
    </Container>
  );
}
