import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /** When true, children sit on the 16/8/4 column grid with 32px gutters. */
  grid?: boolean;
}

/**
 * Content column: max-width 1584px, 32px side gutters.
 * At 1440px this is a 16-col grid with 32px gutters (use `grid` or `.lna-grid`).
 */
export function Container({
  className,
  as: Comp = "div",
  grid = false,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-[1584px] px-8",
        grid && "lna-grid",
        className
      )}
      {...props}
    />
  );
}
