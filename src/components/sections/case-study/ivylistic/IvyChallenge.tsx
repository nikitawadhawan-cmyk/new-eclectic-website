"use client";

import { useState } from "react";
import { assetPath } from "@/components/Img";

/**
 * IvyChallenge — "WHY IVYLISTIC" section for the Ivylistic case study
 * (clone of RitvaaChallenge; identical design/structure/classes/animation,
 * Ivylistic content per .figma-to-website/ivylistic-case-study/spec.md):
 *
 * Two cards (The Challenge / The Solution) on the grey panel. ONE card is
 * spotlit at a time — brand navy bg, white text, gold-tinted icon chip, soft
 * navy shadow — and the spotlight FOLLOWS THE POINTER (hover / focus / tap),
 * with 0.4s ease transitions. Defaults to "The Solution" (white + gold
 * border kept as its idle state), matching the amorada reference.
 *
 * The heading "Strategy, Not Guesswork" is the client's real tagline from
 * their HTML (not glue). The subheading is verbatim from the client hero
 * copy. Card bodies are verbatim from the spec (curly quotes kept).
 *
 * Icons are the amorada gold-fill SVG exports, reused per spec:
 * /figma/am-challenge-puzzle.svg and /figma/am-challenge-solution.svg.
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
    body: "Convey a premium, strategy-driven consultancy and convert cautious, high-stakes applicants into free-evaluation leads — in a category crowded with generic “get admitted” promises.",
    icon: "/figma/am-challenge-puzzle.svg",
    iconSize: "size-7",
  },
  {
    title: "The Solution",
    body: "A clean, confident brand website that leads with “strategy, not guesswork,” makes the proprietary frameworks tangible, showcases an interactive global admits map, and offers a frictionless free profile evaluation.",
    icon: "/figma/am-challenge-solution.svg",
    iconSize: "size-8",
    solution: true,
  },
];

export default function IvyChallenge() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Heading block */}
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/[0.03] py-[7px] pl-3 pr-3.5">
            <span
              className="size-[7px] shrink-0 rounded-full bg-gold"
              aria-hidden="true"
            />
            <span className="text-[12px] font-medium uppercase leading-[22px] tracking-[-0.48px] text-[#1a1a1a]">
              Why Ivylistic
            </span>
          </span>

          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-1.6px] text-[#1a1a1a] sm:text-[46px] sm:tracking-[-2.2px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-3.6px]">
              Strategy, Not Guesswork
            </h2>
            <p className="max-w-[640px] text-[16px] font-normal leading-[1.5] tracking-[-0.4px] text-black/60 lg:text-[18px] lg:tracking-[-0.48px]">
              Ivylistic helps ambitious candidates into the world&apos;s top
              MBA, MiM and MS programs, with mentorship from alumni of leading
              business schools.
            </p>
          </div>
        </div>

        {/* Grey panel — spotlight follows the pointer between the two cards */}
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
