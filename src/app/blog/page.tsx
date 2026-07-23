import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, advice, and updates from OES.",
};

export default function BlogIndexPage() {
  return (
    <div>
      <PageHero title="Blog" subtitle="News, advice, and updates from OES." />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">
                  {post.displayDate}
                </p>
                <h2 className="mt-2 font-serif text-lg font-semibold text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-foreground/70">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
