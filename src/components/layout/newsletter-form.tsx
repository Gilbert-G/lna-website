"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        type="email"
        placeholder="your@email.com"
        className="max-w-xs"
        aria-label="Email for newsletter"
      />
      <Button type="submit" size="lg">
        Subscribe
      </Button>
    </form>
  );
}
