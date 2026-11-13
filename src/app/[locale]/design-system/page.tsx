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
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Design System — LNA",
  description: "LNA Website v4 design tokens and component showcase",
};

export default function DesignSystemPage() {
  return (
    <main>
      <Section className="bg-gray-10 border-border border-b py-12 md:py-16">
        <Container>
          <h1 className="text-hero text-foreground">LNA Design System v4</h1>
          <p className="text-lead text-muted-foreground mt-4">
            IBM Plex, LNA navy #14366F, Carbon greys, 0px radius, 16/8/4 grid.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-h2 mb-6">Colors</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            <ColorSwatch name="Primary #14366F" className="bg-primary" />
            <ColorSwatch name="Primary hover" className="bg-primary-hover" />
            <ColorSwatch name="Gray 100 #161616" className="bg-gray-100" />
            <ColorSwatch name="Gray 70 #525252" className="bg-gray-70" />
            <ColorSwatch name="Gray 30" className="bg-gray-30" />
            <ColorSwatch name="Gray 20" className="bg-gray-20" />
            <ColorSwatch name="Gray 10" className="bg-gray-10" />
            <ColorSwatch name="Status high" className="bg-status-high" />
            <ColorSwatch name="Status medium" className="bg-status-medium" />
            <ColorSwatch name="Status low" className="bg-status-low" />
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-10">
        <Container>
          <h2 className="text-h2 mb-6">Typography</h2>
          <div className="space-y-4">
            <p className="text-hero">Hero — Plex Sans 300 · 54/64</p>
            <p className="text-h2">H2 — Plex Sans 300 · 42/50</p>
            <p className="text-h3">H3 — Plex Sans 400 · 28/36</p>
            <p className="text-tile">Tile / step — 20/28</p>
            <p className="text-lead">Lead — 20/28</p>
            <p className="text-body">Body — 16/24 Gray 70</p>
            <p className="font-semibold">
              Semibold 600 — headers / wordmark only
            </p>
            <p className="font-mono text-sm">Mono — IBM Plex Mono</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-h2 mb-6">Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button>
              Primary
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-10">
        <Container>
          <h2 className="text-h2 mb-6">Badges · Inputs · Cards</h2>
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div className="mb-8 grid max-w-md gap-4">
            <Input placeholder="Default input" />
            <Input type="email" placeholder="Email input" />
            <Input disabled placeholder="Disabled input" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>0px radius, no shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body">Standard card layout.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-h2 mb-6">Layout</h2>
          <p className="text-body mb-4">
            Container max-width 1584px · 32px gutters · .lna-grid 16/8/4
          </p>
          <div className="lna-grid border-primary border border-dashed p-4">
            {Array.from({ length: 16 }, (_, i) => (
              <div
                key={i}
                className="bg-primary/10 text-primary col-span-1 flex h-10 items-center justify-center text-xs"
              >
                {i + 1}
              </div>
            ))}
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
        className={`border-border h-16 w-full rounded-none border ${className}`}
      />
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
}
