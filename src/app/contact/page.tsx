import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
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
        subtitle="Interested in working together? Fill out the form below and we will be in touch shortly. We can't wait to hear from you!"
      />

      <section className="mx-auto max-w-xl px-6 py-16">
        <ContactForm />

        <p className="mt-8 text-center text-sm text-foreground/60">
          Prefer email? Reach us directly at{" "}
          <a
            href={`mailto:${site.email}?subject=Free%20Consultation%20Request`}
            className="font-medium text-primary hover:underline"
          >
            {site.email}
          </a>
          <br />
          {site.location}
        </p>
      </section>
    </div>
  );
}
