import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function Section({
  className,
  as: Comp = "section",
  ...props
}: SectionProps) {
  return <Comp className={cn("w-full py-16 md:py-24", className)} {...props} />;
}
