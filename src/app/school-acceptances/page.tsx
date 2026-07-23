import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { schoolAcceptances } from "@/data/schoolAcceptances";

export const metadata: Metadata = {
  title: "School Acceptances",
  description: "Colleges and universities our students have been accepted to.",
};

export default function SchoolAcceptancesPage() {
  return (
    <div>
      <PageHero title="School Acceptances" />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 text-center">
          {schoolAcceptances.map((school, i) => (
            <span key={school} className="flex items-center gap-3">
              <span className="font-serif text-xl text-primary sm:text-2xl">
                {school}
              </span>
              {i < schoolAcceptances.length - 1 && (
                <span className="text-accent">〰️</span>
              )}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
