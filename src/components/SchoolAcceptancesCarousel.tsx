"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SchoolAcceptance } from "@/data/schoolAcceptances";

const CYCLE_MS = 2600;

export default function SchoolAcceptancesCarousel({
  schools,
}: {
  schools: SchoolAcceptance[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % schools.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [schools.length]);

  const school = schools[index];

  return (
    <div>
      {/* Preload every logo up front so the rotation never has to wait on a fetch */}
      <div className="sr-only" aria-hidden="true">
        {schools.map((s) => (
          <Image key={s.logo} src={s.logo} alt="" width={80} height={80} />
        ))}
      </div>

      <div className="flex h-72 items-center justify-center">
        <div
          key={school.name}
          className="animate-school-fade flex flex-col items-center gap-5"
        >
          <Image
            src={school.logo}
            alt=""
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 object-contain"
          />
          <p className="text-center font-serif text-2xl font-semibold text-primary sm:text-3xl">
            {school.name}
          </p>
        </div>
      </div>

      <div
        className="mx-auto mt-2 flex max-w-sm flex-wrap justify-center gap-1.5"
        aria-hidden="true"
      >
        {schools.map((s, i) => (
          <span
            key={s.name}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
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
