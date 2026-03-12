"use client";

import { Button } from "@/components/ui/button";
import { openDemoModal } from "./DemoRequestModal";

interface DemoModalTriggerProps {
  className?: string;
  children: React.ReactNode;
}

export function DemoModalTrigger({
  className,
  children,
}: DemoModalTriggerProps) {
  return (
    <Button size="lg" className={className} onClick={openDemoModal}>
      {children}
    </Button>
  );
}
