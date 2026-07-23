import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const homeServices = [
  {
    title: "College Counseling",
    subtitle: "Comprehensive & 4-session packages",
    href: "/services#college-counseling",
    bullets: [
      "Customized college list creation",
      "Expert essay support",
      "Scholarship guidance",
      "Personalized application strategy",
      "And more!",
    ],
  },
  {
    title: "Gap-Year Advising",
    subtitle: "Packages & hourly sessions",
    href: "/services#gap-year-advising",
    bullets: [
      "Advising on the benefits of taking a gap year and how it can fit with each student's goals",
      "Exploration of programs that promote personal growth, global experience, and professional development",
    ],
  },
  {
    title: "Boarding School Consulting",
    subtitle: "Comprehensive & targeted sessions",
    href: "/services#independent-school-consulting",
    bullets: [
      "Consulting services guide families through the intricate process of selecting and applying to boarding schools",
      "Personalized approaches, application strategies, and ongoing support to ensure each student finds the best environment to foster academic and personal growth",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <Image
          src="/images/unsplash-image-ljvKJ84BV3o.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {site.location}
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold sm:text-5xl md:text-6xl">
            College Counseling &amp; Educational Consulting
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">{site.description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105 hover:bg-cream"
          >
            Free Consultation
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl font-semibold text-primary">Our Services</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {homeServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col rounded-2xl border border-border p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-serif text-xl font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary/70">{service.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 text-sm font-semibold text-primary group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-20 text-white">
        <Image
          src="/images/unsplash-image-PGnqT0rXWLs.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Get Started</h2>
          <p className="mt-4 text-white/85">
            Schedule a consultation today and take the first step towards enhancing
            your educational journey. Our team is ready to provide personalized
            guidance tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105 hover:bg-cream"
          >
            Free Consultation
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/unsplash-image-kfwPJieZVwI.jpg"
            alt="Students collaborating"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-semibold text-primary">
            About Our Company
          </h2>
          <p className="mt-4 text-foreground/75">
            OES is dedicated to advancing educational opportunities for individuals
            while focusing on fit and environment. With a team of experts, we strive
            to empower students to achieve their full potential.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-semibold text-primary hover:underline"
          >
            Learn more →
          </Link>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary">Contact Us</h2>
          <p className="mt-4 text-foreground/75">
            Interested in working together? Fill out some info and we will be in
            touch shortly. We can&apos;t wait to hear from you!
          </p>
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
