import { FileQuestion } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <FileQuestion className="text-muted-foreground/50 size-16" />
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
        Page Not Found
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-3">
        <LinkButton href="/">Go Home</LinkButton>
        <LinkButton variant="outline" href="/contact">
          Contact Support
        </LinkButton>
      </div>
    </Container>
  );
}
