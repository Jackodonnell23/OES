"use client";

import Image from "next/image";
import type { SchoolAcceptance } from "@/data/schoolAcceptances";

export default function SchoolAcceptancesMarquee({
  schools,
}: {
  schools: SchoolAcceptance[];
}) {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
        />

        <div className="animate-marquee flex w-max items-center gap-16 py-4">
          {[...schools, ...schools].map((school, i) => (
            <div
              key={`${school.name}-${i}`}
              className="flex shrink-0 items-center justify-center"
              title={school.name}
            >
              <Image
                src={school.logo}
                alt={school.name}
                width={160}
                height={64}
                className="h-14 w-auto max-w-[140px] object-contain sm:h-16 sm:max-w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full list kept for accessibility and search engines */}
      <ul className="sr-only">
        {schools.map((s) => (
          <li key={s.name}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
