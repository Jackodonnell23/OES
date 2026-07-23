import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with OES to schedule a free consultation.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Interested in working together? Reach out and we will be in touch shortly. We can't wait to hear from you!"
      />

      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-foreground/75">
          The fastest way to reach {site.shortName} is by email. Tell us a bit about
          your student and what you&apos;re looking for, and we&apos;ll follow up to
          schedule your free consultation.
        </p>
        <a
          href={`mailto:${site.email}?subject=Free%20Consultation%20Request`}
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
        >
          Email {site.email}
        </a>
        <p className="mt-4 text-sm text-foreground/60">{site.location}</p>
      </section>
    </div>
  );
}
