import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SchoolAcceptancesCarousel from "@/components/SchoolAcceptancesCarousel";
import { schoolAcceptances } from "@/data/schoolAcceptances";

export const metadata: Metadata = {
  title: "School Acceptances",
  description: "Colleges and universities our students have been accepted to.",
};

export default function SchoolAcceptancesPage() {
  return (
    <div>
      <PageHero title="School Acceptances" />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <SchoolAcceptancesCarousel schools={schoolAcceptances} />
      </section>
    </div>
  );
}
