"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AmoradaScope — "WHAT WE DID" keyline ledger (row styling + animation from
 * the supplied "Project Drivers 3c" standalone HTML, recolored from its dark
 * violet palette onto the site's white bg with the brand navy as the accent).
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
 * ⚠ DRAFT COPY: the Figma had no row descriptions (dead "View More" template
 * pills); these descriptions are drafted from the page's real amorada content
 * and need client review. Source "02,02,03…" numbering typo corrected.
 */

type ScopeRow = { title: string; description: string };

const ROWS: ScopeRow[] = [
  {
    title: "Discovery & merchandising",
    description:
      "Audited the range and mapped how shoppers browse — by room, by colour, by fabric — so the store structure mirrors the way people actually buy linens.",
  },
  {
    title: "Craft-led visual design",
    description:
      "A warm, editorial visual language with generous photography, soft colour, and calm typography that carries the feel of the fabric onto the screen.",
  },
  {
    title: "Catalogue & collections",
    description:
      "Colour-organised collections and clean, consistent product grids that make a broad catalogue easy to explore and simple to shop.",
  },
  {
    title: "Product storytelling",
    description:
      "Product pages built around texture and detail — photography-led layouts and considered copy that let every weave and finish speak for itself.",
  },
  {
    title: "Checkout & payments",
    description:
      "A streamlined Shopify checkout supporting both prepaid and COD payments, tuned to cut friction and drop-off at the final step.",
  },
  {
    title: "Launch & growth",
    description:
      "Store setup, QA, and go-live on Shopify, with analytics and SEO foundations in place so the store keeps growing after launch.",
  },
];

/** autoplay cadence + how long a hover pauses it (from the reference HTML) */
const ADVANCE_MS = 2400;
const RESUME_MS = 4500;

export default function AmoradaScope() {
  const [active, setActive] = useState(0);
  const pausedUntil = useRef(0);
  const resumeT = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (performance.now() < pausedUntil.current) return;
      setActive((a) => (a + 1) % ROWS.length);
    }, ADVANCE_MS);
    return () => {
      clearInterval(t);
      if (resumeT.current) clearTimeout(resumeT.current);
    };
  }, []);

  const take = (i: number) => {
    setActive(i);
    pausedUntil.current = performance.now() + RESUME_MS;
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
            Craft You Can Feel Through A Screen
          </h2>

          <p className="max-w-[864px] text-[16px] leading-[1.4] text-muted lg:leading-[22.4px]">
            From strategy and information architecture to content planning and
            launch, every deliverable was designed to create a premium digital
            experience
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
