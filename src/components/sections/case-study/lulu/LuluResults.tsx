"use client";

import { useState } from "react";

/**
 * LuluResults — "The Results" spotlight-split. Clones the AmoradaResults
 * design 1:1; content from the "Results" section of the client's brief
 * (100% Custom / Pixel-Perfect / Client-Editable cards).
 */

type Result = { kicker: string; title: string; desc: string };

const RESULTS: Result[] = [
  {
    kicker: "01 · HAND-CODED THEME",
    title: "100% Custom",
    desc: "Every section, snippet and template built from scratch in Liquid — no off-the-shelf theme anywhere in the build.",
  },
  {
    kicker: "02 · 1:1 FROM DESIGN",
    title: "Pixel-Perfect",
    desc: "The storefront matches the bespoke editorial design down to spacing and type, indistinguishable from the original mockup.",
  },
  {
    kicker: "03 · SCHEMA SECTIONS",
    title: "Client-Editable",
    desc: "Schema-driven blocks let the client edit copy, imagery and layout directly in the Shopify theme editor — no developer required.",
  },
];

export default function LuluResults() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#fbfbfe] py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-[clamp(40px,5vw,72px)] lg:px-10">
        <div className="flex flex-col gap-6 lg:sticky lg:top-[100px]">
          <span className="inline-flex w-fit items-center gap-[9px] rounded-full bg-[#f1f0f7] px-[22px] py-2.5">
            <span className="size-[9px] rounded-full bg-gold" />
            <span className="text-[14px] font-medium tracking-[0.4px] text-navy">
              THE RESULTS
            </span>
          </span>
          <h2 className="text-pretty font-semibold leading-[1.15] tracking-[-0.6px] text-[#0e1330] text-[32px] lg:text-[44px]">
            Three decisions that made the build worth it
          </h2>
          <p className="max-w-[36ch] text-pretty text-[16px] leading-[1.6] text-[#6b7086]">
            A bespoke design only pays off if the storefront actually looks
            like it — and the client can keep it that way.
          </p>
        </div>

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
