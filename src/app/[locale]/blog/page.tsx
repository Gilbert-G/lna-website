import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { getAllPosts } from "@/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.blog" });
  return { title: t("title"), description: t("description") };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });

  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative text-center">
          <AnimateIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("hero.heading")}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              {t("hero.description")}
            </p>
          </AnimateIn>
        </Container>
      </Section>

      {/* Post Grid */}
      <Section className="pt-8 md:pt-12">
        <Container>
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center">
              {t("emptyState")}
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <AnimateIn key={post.slug} delay={0.1 * i}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group bg-card flex flex-col overflow-hidden rounded-2xl border transition-shadow hover:shadow-lg"
                  >
                    {post.image && (
                      <div className="bg-muted relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                        {post.category}
                      </span>
                      <h2 className="group-hover:text-primary mt-2 text-lg leading-snug font-bold transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                        {post.description}
                      </p>
                      <div className="text-muted-foreground mt-auto flex items-center gap-4 pt-4 text-xs">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="size-3" />
                          {new Date(post.date).toLocaleDateString(
                            locale === "fr" ? "fr-FR" : "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* RSS Link */}
      <Section className="py-8 md:py-12">
        <Container className="text-center">
          <a
            href="/feed.xml"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"
          >
            {t("rssLink")}
            <ArrowRight className="size-3" />
          </a>
        </Container>
      </Section>
    </>
  );
}
