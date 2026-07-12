"use client";

import { useState } from "react";
import { assetPath } from "@/components/Img";

/**
 * LuluChallenge — "WHY LULU & DAISY" section. Clones the AmoradaChallenge
 * design 1:1 (pointer-following spotlight, defaults to "The Solution");
 * copy from the "Challenge + Solution" section of the client's brief.
 *
 * Icons reuse the same generic amorada gold-fill SVG exports used across the
 * whole clone family: /figma/am-challenge-puzzle.svg and
 * /figma/am-challenge-solution.svg.
 */

type Card = {
  title: string;
  body: string;
  icon: string;
  iconSize: string;
  solution?: boolean;
};

const cards: Card[] = [
  {
    title: "The Challenge",
    body: "Match a bespoke editorial React design 1:1 inside Shopify — without resorting to an off-the-shelf template — while keeping every section editable by the client and the store fast.",
    icon: "/figma/am-challenge-puzzle.svg",
    iconSize: "size-7",
  },
  {
    title: "The Solution",
    body: "We hand-coded the entire Online Store 2.0 theme in Liquid from scratch: pixel-perfect, performance-first with critical CSS, and fully schema-driven so the client edits sections directly in the theme editor.",
    icon: "/figma/am-challenge-solution.svg",
    iconSize: "size-8",
    solution: true,
  },
];

export default function LuluChallenge() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/[0.03] py-[7px] pl-3 pr-3.5">
            <span
              className="size-[7px] shrink-0 rounded-full bg-gold"
              aria-hidden="true"
            />
            <span className="text-[12px] font-medium uppercase leading-[22px] tracking-[-0.48px] text-[#1a1a1a]">
              Why Lulu &amp; Daisy
            </span>
          </span>

          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-1.6px] text-[#1a1a1a] sm:text-[46px] sm:tracking-[-2.2px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-3.6px]">
              A Design File You Can Shop
            </h2>
            <p className="max-w-[640px] text-[16px] font-normal leading-[1.5] tracking-[-0.4px] text-black/60 lg:text-[18px] lg:tracking-[-0.48px]">
              Lulu &amp; Daisy serves fresh meals, slow-simmered broths and
              clean treats — the storefront needed to match their bespoke
              editorial design exactly.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[1040px] rounded-[32px] bg-[#f2f2f2] p-3 sm:p-6 lg:mt-16 lg:rounded-[53px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {cards.map((card, i) => {
              const hot = i === active;
              return (
                <article
                  key={card.title}
                  tabIndex={0}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex cursor-default flex-col gap-8 rounded-[24px] border p-7 transition-[background-color,border-color,box-shadow] duration-[400ms] ease-out focus:outline-none sm:p-10 lg:gap-10 lg:rounded-[56px] lg:p-12 ${
                    hot
                      ? "border-navy bg-navy shadow-[0_18px_44px_rgba(42,49,95,0.28)]"
                      : card.solution
                        ? "border-[rgba(232,199,0,0.44)] bg-white"
                        : "border-transparent bg-transparent"
                  }`}
                >
                  <div
                    className={`flex flex-col gap-6 border-b-[0.8px] pb-8 transition-colors duration-[400ms] lg:pb-10 ${
                      hot ? "border-white/15" : "border-black/10"
                    }`}
                  >
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-[16px] transition-colors duration-[400ms] ${
                        hot ? "bg-white/12" : "bg-navy"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={assetPath(card.icon)}
                        alt=""
                        aria-hidden="true"
                        className={card.iconSize}
                      />
                    </span>
                    <h3
                      className={`text-[22px] font-medium leading-[1.1] tracking-[-0.48px] transition-colors duration-[400ms] lg:text-[24px] lg:leading-[26.4px] ${
                        hot ? "text-white" : "text-[#1a1a1a]"
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  <p
                    className={`max-w-[380px] text-[17px] font-normal leading-[1.7] tracking-[-0.4px] transition-colors duration-[400ms] lg:text-[20px] lg:leading-[36px] lg:tracking-[-0.48px] ${
                      hot ? "text-white/85" : "text-[#1a1a1a]"
                    }`}
                  >
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
