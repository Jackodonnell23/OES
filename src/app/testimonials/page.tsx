import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What families say about working with OES.",
};

export default function TestimonialsPage() {
  return (
    <div>
      <PageHero title="Testimonials" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.attribution}
              className="flex flex-col overflow-hidden rounded-2xl border border-border"
            >
              <div className="relative aspect-[4/3]">
                <Image src={t.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <blockquote className="flex-1 text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-serif font-semibold text-primary">
                  {t.attribution}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
