import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import { site } from "@/data/site";

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
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article>
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
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{block.text}</p>;
        })}

        <div className="rounded-2xl bg-cream p-8 text-center">
          <p className="text-foreground/75">
            Interested in working together? Schedule a free consultation.
          </p>
          <a
            href={site.consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </article>
  );
}
