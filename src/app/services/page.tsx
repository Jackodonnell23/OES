import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "College counseling, independent school consulting, and gap-year advising.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Services"
        subtitle="Choose a service below to learn more about what we offer."
      />

      <section className="mx-auto max-w-6xl space-y-20 px-6 py-16">
        {services.map((service, i) => (
          <div
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 grid gap-10 md:grid-cols-2 md:items-center"
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-primary">
                {service.title}
              </h2>
              <p className="mt-3 text-foreground/70">{service.summary}</p>
              <div className="mt-6 space-y-6">
                {service.sections.map((section, idx) => (
                  <div key={idx}>
                    {section.heading && (
                      <h3 className="font-serif text-lg font-semibold text-primary">
                        {section.heading}
                      </h3>
                    )}
                    {section.list ? (
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-foreground/75">
                        {section.body.map((line, lineIdx) => (
                          <li key={lineIdx}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="mt-2 space-y-2 text-sm text-foreground/75">
                        {section.body.map((line, lineIdx) => (
                          <p key={lineIdx}>{line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <a
                href={site.consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
