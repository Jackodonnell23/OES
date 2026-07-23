import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { resourceLinks, schoolVisits, webinar } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "OES-curated resources designed to simplify the college admissions process.",
};

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        title="Resources"
        subtitle="Explore OES-curated resources designed to simplify the college admissions process."
      />

      <section className="mx-auto max-w-4xl space-y-14 px-6 py-16">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary">
            College Resources
          </h2>
          <ul className="mt-4 space-y-3">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {link.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary">
            School Visits
          </h2>
          <p className="mt-3 text-foreground/75">{schoolVisits.note}</p>
          <a
            href={schoolVisits.listHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-medium text-primary hover:underline"
          >
            See the full list →
          </a>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary">
            {webinar.title}
          </h2>
          <p className="mt-3 text-foreground/75">{webinar.segment}</p>
        </div>

        <div className="rounded-2xl bg-cream p-8 text-center">
          <p className="text-foreground/75">
            Looking for something specific? Reach out and we&apos;ll point you in the
            right direction.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
