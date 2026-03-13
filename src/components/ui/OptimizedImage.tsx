import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  /** Alt text is required for accessibility */
  alt: string;
};

/**
 * Wrapper around Next.js Image with sensible defaults:
 * - WebP auto-conversion via Next.js image optimizer
 * - Responsive sizes attribute
 * - Blur placeholder support
 * - Required alt text (TypeScript-enforced)
 */
export function OptimizedImage({
  alt,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  ...props
}: OptimizedImageProps) {
  return <Image alt={alt} sizes={sizes} quality={quality} {...props} />;
}
