import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <Section className="flex min-h-screen items-center">
      <Container className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to <span className="text-primary">LNA</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          A modern full-stack SaaS platform for streamlined business operations.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </Container>
    </Section>
  );
}
