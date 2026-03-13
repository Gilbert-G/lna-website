"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

export function AnimateIn({
  children,
  delay = 0,
  className,
  ...props
}: AnimateInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        prefersReducedMotion ? { duration: 0 } : { ...springTransition, delay }
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
