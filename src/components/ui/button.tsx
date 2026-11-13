"use client";

import { Link } from "@/i18n/navigation";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * v4 buttons: 0 radius, no shadow, 48px default.
 * Spec padding 13/64/13/16 applies when a trailing icon is present
 * (`data-icon="inline-end"`). Without an icon, use balanced 16px sides so
 * full-width and compact header CTAs are not clipped.
 */
const buttonVariants = cva(
  "group/button inline-flex items-center justify-center rounded-none border border-transparent text-sm font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed",
        outline:
          "border-border bg-background text-foreground hover:bg-gray-10 aria-expanded:bg-gray-10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-gray-20 aria-expanded:bg-gray-20",
        ghost: "text-primary hover:bg-gray-10 aria-expanded:bg-gray-10",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-12 gap-4 px-4 py-[13px] has-data-[icon=inline-end]:justify-between has-data-[icon=inline-end]:pr-16 has-data-[icon=inline-end]:pl-4 has-data-[icon=inline-start]:pl-4 has-data-[icon=inline-start]:pr-4",
        xs: "h-8 gap-2 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-3 px-4 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-4 px-4 py-[13px] text-sm has-data-[icon=inline-end]:justify-between has-data-[icon=inline-end]:pr-16 has-data-[icon=inline-end]:pl-4 has-data-[icon=inline-start]:pl-4 has-data-[icon=inline-start]:pr-4",
        icon: "size-12 shrink-0 justify-center p-0",
        "icon-xs":
          "size-8 shrink-0 justify-center p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10 shrink-0 justify-center p-0",
        "icon-lg": "size-12 shrink-0 justify-center p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  nativeButton,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      nativeButton={nativeButton ?? (props.render ? false : undefined)}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

/** Button rendered as a Next.js Link — safe to use from server components. */
function LinkButton({
  href,
  className,
  variant = "default",
  size = "default",
  children,
  nativeButton = false,
  ...props
}: Omit<ButtonPrimitive.Props, "render"> &
  VariantProps<typeof buttonVariants> & { href: string }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      nativeButton={nativeButton}
      className={cn(buttonVariants({ variant, size, className }))}
      render={<Link href={href} />}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  );
}

export { Button, LinkButton, buttonVariants };
