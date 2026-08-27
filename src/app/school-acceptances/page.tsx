import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SchoolAcceptancesMarquee from "@/components/SchoolAcceptancesMarquee";
import { schoolAcceptances } from "@/data/schoolAcceptances";

export const metadata: Metadata = {
  title: "School Acceptances",
  description: "Colleges and universities our students have been accepted to.",
};

export default function SchoolAcceptancesPage() {
  return (
    <div>
      <PageHero title="School Acceptances" />

      <section className="py-16 sm:py-20">
        <SchoolAcceptancesMarquee schools={schoolAcceptances} />
      </section>
    </div>
  );
}
