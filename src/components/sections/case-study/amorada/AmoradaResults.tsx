"use client";

import { useState } from "react";

/**
 * AmoradaResults — "The Results" spotlight-split (from the supplied
 * "Results 2c" standalone HTML; replaces the earlier Figma 3-card strip),
 * recolored into the brand palette:
 *
 *  - LEFT (sticky on desktop): "THE RESULTS" pill (gold dot, #f1f0f7 bg),
 *    heading "Three decisions that did the heavy lifting", supporting line.
 *  - RIGHT: three stacked cards (kicker / title / description). ONE card is
 *    spotlit at a time — navy bg, white title, gold kicker, soft navy shadow —
 *    and the spotlight FOLLOWS THE POINTER (mouseenter/focus/tap set active),
 *    with 0.4s ease transitions, exactly like the reference animation.
 *
 * Palette mapping from the HTML: #23285A → brand navy #2a315f (bg-navy),
 * #F2C21B accent → brand gold #e8c700. Copy is verbatim from the HTML.
 */

type Result = { kicker: string; title: string; desc: string };

const RESULTS: Result[] = [
  {
    kicker: "01 · PRODUCT STORY",
    title: "Craft-Led",
    desc: "Every product page opens with the making — the raw materials, the technique, and the artisan behind it — so shoppers connect with the story before they ever reach the price.",
  },
  {
    kicker: "02 · COLLECTIONS",
    title: "Color-Organised",
    desc: "The catalogue is arranged by palette, not just category — shoppers browse the shades they love and discover pieces that pair naturally.",
  },
  {
    kicker: "03 · PREPAID & COD CHECKOUT",
    title: "Seamless",
    desc: "One streamlined checkout supporting both prepaid and cash-on-delivery — the stretch from cart to confirmation is friction-free on every device.",
  },
];

export default function AmoradaResults() {
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
            Three decisions that did the heavy lifting
          </h2>
          <p className="max-w-[36ch] text-pretty text-[16px] leading-[1.6] text-[#6b7086]">
            The rebuild wasn&rsquo;t a facelift &mdash; it re-thought how the
            story is told, how the catalogue is browsed, and how the sale is
            closed.
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
