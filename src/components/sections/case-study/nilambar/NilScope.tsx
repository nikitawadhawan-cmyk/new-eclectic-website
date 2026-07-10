"use client";

import { useEffect, useRef, useState } from "react";

/**
 * NilScope — "WHAT WE DID" keyline ledger (cloned from RitvaaScope: row
 * styling + animation from the "Project Drivers 3c" standalone HTML,
 * recolored onto the site's white bg with the brand navy as the accent).
 *
 * Header (pill / heading / supporting line) is unchanged. The SIX rows render
 * as a keyline ledger — title | description, hairline-separated (numbers
 * removed at client request) — with an ANIMATED highlight: one row is "hot"
 * at a time and gets the SAME spotlight treatment as "The Results" cards
 * (solid brand-navy fill, white text, soft navy shadow, rounded card;
 * 0.5s ease transitions). The highlight AUTO-ADVANCES every 2.4s; hovering
 * (or focusing) a row takes the highlight and pauses autoplay, which resumes
 * 4.5s after the last interaction. Autoplay is disabled for reduced-motion
 * users (hover still works).
 *
 * ⚠ GLUE COPY: the supporting line under the heading is connective copy not
 * present in the client's approved HTML — needs client review. Row titles
 * and descriptions are verbatim from the spec (curly quotes kept exactly).
 */

type ScopeRow = { title: string; description: string };

const ROWS: ScopeRow[] = [
  {
    title: "Discovery & architecture",
    description:
      "Mapped every service — construction, liaisoning, asset management, advisory, investment — into a clear, navigable structure.",
  },
  {
    title: "Brand & positioning",
    description:
      "Built the “we're with you all the way” voice so a multi-service firm reads as one trustworthy partner.",
  },
  {
    title: "Services structure",
    description:
      "Gave each offering its own clear space, so buyers, partners and founders each find their path fast.",
  },
  {
    title: "Project portfolio",
    description:
      "Showcased Renaissance, Vista, Elite and Meadows as proof of a real, deliverable track record.",
  },
  {
    title: "Startup investments",
    description:
      "Presented the investment portfolio — from Happi Mynd to ACE Green Recycling — as evidence of reach.",
  },
  {
    title: "Inquiry flow & launch",
    description:
      "Built a service-aware inquiry form and a fast, responsive site, then launched with lead routing in place.",
  },
];

/** autoplay cadence + how long a hover pauses it (from the reference HTML) */
const ADVANCE_MS = 2400;
const RESUME_MS = 4500;

export default function NilScope() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const resumeT = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (paused.current) return;
      setActive((a) => (a + 1) % ROWS.length);
    }, ADVANCE_MS);
    const timers = resumeT;
    return () => {
      clearInterval(t);
      if (timers.current) clearTimeout(timers.current);
    };
  }, []);

  const take = (i: number) => {
    setActive(i);
    paused.current = true;
    if (resumeT.current) clearTimeout(resumeT.current);
    resumeT.current = setTimeout(() => {
      paused.current = false;
    }, RESUME_MS);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Pill + heading + supporting line */}
        <div className="flex flex-col items-center gap-5 text-center lg:gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/[0.03] py-[7px] pl-3 pr-3.5">
            <span
              className="size-[7px] shrink-0 rounded-full bg-gold"
              aria-hidden="true"
            />
            <span className="text-[12px] font-medium uppercase leading-[22px] tracking-[-0.48px] text-[#1a1a1a]">
              What We Did
            </span>
          </span>

          <h2 className="max-w-[848px] text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-black sm:text-[56px] lg:text-[76px] lg:leading-[83.6px] lg:tracking-[-3.8px]">
            Many Ventures, One Authority
          </h2>

          <p className="max-w-[864px] text-[16px] leading-[1.4] text-muted lg:leading-[22.4px]">
            From discovery and architecture to inquiry flow and launch — the
            full build, end to end.
          </p>
        </div>

        {/* Keyline ledger — animated highlight */}
        <div className="mt-12 lg:mt-16">
          {ROWS.map((row, i) => {
            const hot = i === active;
            return (
              <div
                key={row.title}
                tabIndex={0}
                onMouseEnter={() => take(i)}
                onFocus={() => take(i)}
                onClick={() => take(i)}
                className={`grid cursor-default grid-cols-1 items-baseline gap-2 border-t px-4 py-7 transition-[background-color,border-color,box-shadow,border-radius] duration-500 ease-out focus:outline-none sm:grid-cols-[minmax(240px,380px)_1fr] sm:gap-8 sm:px-6 ${
                  hot
                    ? "rounded-[18px] border-transparent bg-navy shadow-[0_18px_44px_rgba(42,49,95,0.25)]"
                    : "border-[rgba(8,13,13,0.1)] bg-transparent"
                }`}
              >
                <h3
                  className={`text-[22px] font-semibold tracking-[-0.2px] transition-colors duration-500 sm:text-[25px] ${
                    hot ? "text-white" : "text-[#080d0d]/85"
                  }`}
                >
                  {row.title}
                </h3>
                <p
                  className={`max-w-[64ch] text-pretty text-[15.5px] leading-[1.6] transition-colors duration-500 ${
                    hot ? "text-white/75" : "text-muted-2"
                  }`}
                >
                  {row.description}
                </p>
              </div>
            );
          })}
          <div className="h-px bg-[rgba(8,13,13,0.1)]" />
        </div>
      </div>
    </section>
  );
}
