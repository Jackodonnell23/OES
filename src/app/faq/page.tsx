import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about working with OES.",
};

export default function FaqPage() {
  return (
    <div>
      <PageHero title="Frequently Asked Questions" />

      <section className="mx-auto max-w-3xl divide-y divide-border px-6 py-16">
        {faq.map((item) => (
          <div key={item.question} className="py-6">
            <h2 className="font-serif text-lg font-semibold text-primary">
              {item.question}
            </h2>
            <p className="mt-3 text-foreground/75">{item.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
