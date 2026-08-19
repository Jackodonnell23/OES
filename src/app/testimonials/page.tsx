import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What families say about working with OES.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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
              {t.image ? (
                <div className="relative aspect-[4/3]">
                  <Image src={t.image} alt="" fill className="object-cover" />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-cream">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-serif text-xl font-semibold text-white">
                    {initials(t.attribution)}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                {t.rating && (
                  <div
                    className="mb-2 text-amber-500"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                )}
                <blockquote className="flex-1 text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center justify-between">
                  <figcaption className="font-serif font-semibold text-primary">
                    {t.attribution}
                  </figcaption>
                  {t.source && (
                    <span className="text-xs font-medium text-foreground/50">
                      {t.source}
                    </span>
                  )}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
