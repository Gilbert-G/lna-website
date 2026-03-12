"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

export function AnimateIn({
  children,
  delay = 0,
  className,
  ...props
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
