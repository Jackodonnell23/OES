import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import { site } from "@/data/site";

// Supports simple [label](url) markdown links inside otherwise-plain block text.
function renderInlineText(text: string): ReactNode[] {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary-light"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `${site.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [site.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    url,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative h-[40vh] min-h-[320px]">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative mx-auto flex h-full max-w-3xl flex-col justify-end px-6 pb-10 text-white">
          <Link href="/blog" className="text-sm font-medium text-white/80 hover:underline">
            ← Back to Blog
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-accent">
            {post.displayDate}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-foreground/85">
        {post.content.map((block, i) => {
          if (block.type === "h3") {
            return (
              <h2 key={i} className="pt-4 font-serif text-xl font-semibold text-primary">
                {block.text}
              </h2>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={i} className="list-disc space-y-2 pl-5">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{renderInlineText(item)}</li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{renderInlineText(block.text)}</p>;
        })}

        <div className="rounded-2xl bg-cream p-8 text-center">
          <p className="text-foreground/75">
            Interested in working together? Schedule a free consultation.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Free Consultation
            </a>
            <Link
              href="/services"
              className="inline-block rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
