import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { team } from "@/data/team";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the ${site.shortName} team.`,
};

export default function AboutPage() {
  return (
    <div>
      <PageHero title="Meet The Team" />

      <section className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        {team.map((member, i) => (
          <div
            key={member.name}
            className={`grid gap-8 md:grid-cols-3 md:items-start ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-primary">
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-primary/70">{member.role}</p>
              <div className="mt-4 space-y-4 text-foreground/75">
                {member.bio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary">Contact Us</h2>
          <p className="mt-4 text-foreground/75">
            Interested in working together? Fill out some info and we will be in
            touch shortly. We can&apos;t wait to hear from you!
          </p>
          <p className="mt-2 text-foreground/75">{site.email}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
