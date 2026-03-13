import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — LNA Blog`,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "LNA",
      images: post.image ? [{ url: post.image }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
        ]}
      />
      {/* Header */}
      <Section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="from-primary/5 via-secondary/5 to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />
        <Container className="relative max-w-3xl">
          <AnimateIn>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              Back to Blog
            </Link>
            <span className="text-primary mt-4 block text-xs font-semibold tracking-wide uppercase">
              {post.category}
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span>{post.author}</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="size-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" />
                {post.readingTime}
              </span>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="pt-0 md:pt-0">
        <Container className="max-w-3xl">
          <AnimateIn>
            <article className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none">
              <MDXRemote source={post.content} />
            </article>
          </AnimateIn>
        </Container>
      </Section>

      {/* Back link */}
      <Section className="py-8 md:py-12">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            Back to all posts
          </Link>
        </Container>
      </Section>
    </>
  );
}
