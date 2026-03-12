import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Design System — LNA",
  description: "LNA design system component showcase",
};

export default function DesignSystemPage() {
  return (
    <main>
      {/* Header */}
      <Section className="bg-muted/30 border-b py-12 md:py-16">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            LNA Design System
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Component library and design token reference.
          </p>
        </Container>
      </Section>

      {/* Colors */}
      <Section>
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Colors</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <ColorSwatch name="Primary" className="bg-primary" />
            <ColorSwatch name="Secondary" className="bg-secondary" />
            <ColorSwatch name="Destructive" className="bg-destructive" />
            <ColorSwatch name="Muted" className="bg-muted" />
            <ColorSwatch name="Accent" className="bg-accent" />
            <ColorSwatch name="Background" className="bg-background" />
            <ColorSwatch name="Foreground" className="bg-foreground" />
            <ColorSwatch name="Card" className="bg-card" />
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section className="bg-muted/30">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Typography</h2>
          <div className="space-y-4">
            <p className="text-4xl font-bold tracking-tight">
              Heading 1 — Inter Bold
            </p>
            <p className="text-3xl font-semibold tracking-tight">
              Heading 2 — Inter Semibold
            </p>
            <p className="text-2xl font-semibold">Heading 3 — Inter Semibold</p>
            <p className="text-xl font-medium">Heading 4 — Inter Medium</p>
            <p className="text-base">Body — Inter Regular (16px)</p>
            <p className="text-muted-foreground text-sm">
              Small text — Inter Regular (14px)
            </p>
            <p className="font-mono text-sm">Monospace — JetBrains Mono</p>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section>
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <h3 className="mt-8 mb-4 text-lg font-medium">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </Container>
      </Section>

      {/* Badges */}
      <Section className="bg-muted/30">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Badges</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </Container>
      </Section>

      {/* Inputs */}
      <Section>
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Inputs</h2>
          <div className="grid max-w-md gap-4">
            <Input placeholder="Default input" />
            <Input type="email" placeholder="Email input" />
            <Input type="password" placeholder="Password input" />
            <Input disabled placeholder="Disabled input" />
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section className="bg-muted/30">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Cards</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  A brief description of the card content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Card content goes here. This demonstrates the standard card
                  layout with header, content, and footer sections.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>With badges and actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>New</Badge>
                  <Badge variant="secondary">Feature</Badge>
                  <Badge variant="outline">v1.0</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Card</CardTitle>
                <CardDescription>With input fields</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <Input placeholder="Your name" />
                  <Input type="email" placeholder="Your email" />
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Container & Section Demo */}
      <Section>
        <Container>
          <h2 className="mb-6 text-2xl font-semibold">Layout Components</h2>
          <div className="space-y-4">
            <div className="border-primary/50 rounded-lg border border-dashed p-4">
              <p className="text-muted-foreground text-sm">
                <code className="font-mono">&lt;Container&gt;</code> — Max-width
                wrapper (max-w-7xl) with responsive horizontal padding.
              </p>
            </div>
            <div className="border-primary/50 rounded-lg border border-dashed p-4">
              <p className="text-muted-foreground text-sm">
                <code className="font-mono">&lt;Section&gt;</code> — Full-width
                section with vertical padding (py-16 md:py-24).
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

function ColorSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="space-y-2">
      <div
        className={`border-border h-16 w-full rounded-lg border ${className}`}
      />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}
