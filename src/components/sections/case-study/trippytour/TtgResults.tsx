"use client";

import { useState } from "react";

/**
 * TtgResults — "The Results" spotlight-split for the Trippy Tour Guide case
 * study (clone of RitvaaResults; identical design/structure/classes/animation,
 * TTG content per .figma-to-website/trippy-tour-case-study/spec.md):
 *
 *  - LEFT (sticky on desktop): "THE RESULTS" pill (gold dot, #f1f0f7 bg),
 *    heading, supporting line. NOTE: the heading ("What the new site
 *    delivers") and supporting line ("Discovery, downloads, and bundles —
 *    one journey.") are GLUE text not present in the client's source HTML —
 *    needs client review.
 *  - RIGHT: three stacked cards (kicker / title / description). ONE card is
 *    spotlit at a time — navy bg, white title, gold kicker, soft navy shadow —
 *    and the spotlight FOLLOWS THE POINTER (mouseenter/focus/tap set active),
 *    with 0.4s ease transitions, exactly like the amorada reference.
 *
 * Palette: brand navy #2a315f (bg-navy), brand gold #e8c700. Card
 * descriptions reuse real sentences from the client HTML's scope/services
 * copy.
 */

type Result = { kicker: string; title: string; desc: string };

const RESULTS: Result[] = [
  {
    kicker: "01 · TOUR CATALOGUE",
    title: "Discovery-Led",
    desc: "Structured 120+ tours across 50+ cities so browsing by place or theme feels effortless.",
  },
  {
    kicker: "02 · IOS & ANDROID",
    title: "App-First",
    desc: "Drove iOS and Android installs with prominent, well-placed calls to action.",
  },
  {
    kicker: "03 · UP TO 45% OFF",
    title: "Bundle-Driven",
    desc: "Surfaced multi-tour bundles and up-to-45%-off savings as a clear reason to buy more.",
  },
];

export default function TtgResults() {
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
            What the new site delivers
          </h2>
          <p className="max-w-[36ch] text-pretty text-[16px] leading-[1.6] text-[#6b7086]">
            Discovery, downloads, and bundles &mdash; one journey.
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
