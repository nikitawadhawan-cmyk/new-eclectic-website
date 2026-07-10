"use client";

import { useState } from "react";

/**
 * BvcResults — "The Results" spotlight-split. Clones the AmoradaResults
 * design 1:1 (sticky left intro + pointer-following spotlight cards on the
 * right); content drawn from the old bespoke CaseDeliverables descriptions,
 * condensed to three headline results.
 */

type Result = { kicker: string; title: string; desc: string };

const RESULTS: Result[] = [
  {
    kicker: "01 · WEBSITE STRATEGY",
    title: "Structured For Scale",
    desc: "A complete sitemap, navigation hierarchy and user journeys covering 200+ planned pages, so visitors can find the right service or industry page in seconds.",
  },
  {
    kicker: "02 · CONTENT STRATEGY",
    title: "Conversion-Focused",
    desc: "Every page was built around clear messaging, an SEO-first hierarchy and customer-first storytelling that moves visitors toward an enquiry.",
  },
  {
    kicker: "03 · SEO & LAUNCH",
    title: "Built To Be Found",
    desc: "Keyword mapping, metadata structure and analytics were planned in from day one, so performance could be measured the moment the site went live.",
  },
];

export default function BvcResults() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#fbfbfe] py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-[clamp(40px,5vw,72px)] lg:px-10">
        {/* LEFT — sticky intro */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-[100px]">
          <span className="inline-flex w-fit items-center gap-[9px] rounded-full bg-[#f1f0f7] px-[22px] py-2.5">
            <span className="size-[9px] rounded-full bg-gold" />
            <span className="text-[14px] font-medium tracking-[0.4px] text-navy">
              THE RESULTS
            </span>
          </span>
          <h2 className="text-pretty font-semibold leading-[1.15] tracking-[-0.6px] text-[#0e1330] text-[32px] lg:text-[44px]">
            Three decisions that turned a legacy site into a lead engine
          </h2>
          <p className="max-w-[36ch] text-pretty text-[16px] leading-[1.6] text-[#6b7086]">
            The rebuild wasn&rsquo;t a facelift &mdash; it rethought the
            sitemap, the content, and the path from visit to enquiry.
          </p>
        </div>

        {/* RIGHT — spotlight cards; the highlight follows the pointer */}
        <div className="flex flex-col gap-5">
          {RESULTS.map((r, i) => {
            const hot = i === active;
            return (
              <div
                key={r.title}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex cursor-default flex-col gap-3 rounded-[20px] border px-7 py-8 transition-[background-color,box-shadow,border-color] duration-[400ms] ease-out focus:outline-none sm:px-[38px] sm:py-9 ${
                  hot
                    ? "border-navy bg-navy shadow-[0_18px_44px_rgba(42,49,95,0.25)]"
                    : "border-[#e7e5f6] bg-white"
                }`}
              >
                <span
                  className={`text-[12px] font-semibold tracking-[1.6px] transition-colors duration-[400ms] ${
                    hot ? "text-gold" : "text-[#8a8fa8]"
                  }`}
                >
                  {r.kicker}
                </span>
                <h3
                  className={`text-[26px] font-semibold tracking-[-0.4px] transition-colors duration-[400ms] lg:text-[30px] ${
                    hot ? "text-white" : "text-[#0e1330]"
                  }`}
                >
                  {r.title}
                </h3>
                <p
                  className={`max-w-[64ch] text-pretty text-[15.5px] leading-[1.6] transition-colors duration-[400ms] ${
                    hot ? "text-white/75" : "text-[#6b7086]"
                  }`}
                >
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
