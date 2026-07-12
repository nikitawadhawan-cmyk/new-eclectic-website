"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CrealScope — "WHAT WE DID" keyline ledger. Clones the AmoradaScope design
 * 1:1 (auto-advancing spotlight ledger); rows from the "What We Did" steps
 * in the client's brief.
 */

type ScopeRow = { title: string; description: string };

const ROWS: ScopeRow[] = [
  {
    title: "Catalogue architecture",
    description:
      "Structured 500+ SKUs across rings, earrings, mangalsutra, men's and gifting for clean, scalable browsing.",
  },
  {
    title: "Category-led navigation",
    description:
      "Built intuitive, category-first menus so shoppers start in the right place every time.",
  },
  {
    title: "Smart filtering",
    description:
      "Implemented six facets — metal, colour, ring size, occasion and more — to narrow a big catalogue fast.",
  },
  {
    title: "Delivery estimator",
    description:
      "Added a PIN-code delivery ETA on the product page to answer the 'when will it arrive?' question upfront.",
  },
  {
    title: "Conversion features",
    description:
      "Layered in offers and low-stock urgency to nudge high-consideration buyers toward action.",
  },
  {
    title: "Storefront operations",
    description:
      "Run the ongoing Shopify storefront — catalogue, merchandising and conversion tuning.",
  },
];

const ADVANCE_MS = 2400;
const RESUME_MS = 4500;

export default function CrealScope() {
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
            500 SKUs, One Clear Path To Buy
          </h2>

          <p className="max-w-[864px] text-[16px] leading-[1.4] text-muted lg:leading-[22.4px]">
            From catalogue architecture and smart filtering to delivery
            estimation and ongoing storefront operations — the full build,
            end to end.
          </p>
        </div>

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
