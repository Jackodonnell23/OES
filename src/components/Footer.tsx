import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold">{site.shortName}</p>
            <p className="mt-2 text-sm text-white/70">{site.tagline}</p>
            <p className="mt-4 text-sm text-white/70">{site.location}</p>
            <a
              href={site.phoneHref}
              className="mt-1 block text-sm text-white/70 hover:text-accent"
            >
              {site.phone}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Explore
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Get in touch
            </p>
            <p className="mt-3 text-sm text-white/80">
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </p>
            <a
              href={site.consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary hover:bg-cream"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
