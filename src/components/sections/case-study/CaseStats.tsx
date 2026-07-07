import Image from "@/components/Img";

/**
 * CaseStats — BVC case study, two stacked bands.
 * Figma nodes 84:1645 ("Numbers that speak" stats) + 89:5813 (testimonial quote).
 *
 * (a) STATS BAND (84:1645)
 *   - Heading "Numbers that speak" — Figma 48px / 57.6px, tracking -1.14px, black.
 *   - 4-up stat row, each with a thin top hairline (Figma #ddd, 0.8px). Numbers
 *     are 52px bold black; the trailing "+" is gold (#e8c700 = --color-gold).
 *     Labels 16px, tracking -0.16px. "2 Months" is fully bold (no "+").
 *   - Responsive: 4-up desktop -> 2-up tablet -> 1-up mobile.
 *
 * (b) TESTIMONIAL BAND (89:5813)
 *   - Centered gold quote mark, then the quote (Figma 40px / 56px, centered,
 *     #0a0a0a, tracking -0.6px), a dashed hairline, then a 60px rounded avatar +
 *     "Nikita Wadhawan" (28px) / "Founder, Eclectic Agency" (16px, #a5a5a5).
 *
 * DEVIATIONS (flagged):
 *   - Quote-mark color in Figma is #ffdb00; the "+" glyphs use #e8c700. Both are
 *     "gold" — the "+" maps to the --color-gold token (#e8c700); the quote mark
 *     is kept Figma-exact at #ffdb00.
 *   - Section background is the light surface (#f5f5f7 = --color-surface), matching
 *     the rendered Figma screenshot.
 *   - Figma uses "Stack Sans Headline" for the quote; the project standard is Inter
 *     (font-sans, per build brief) — no font import, uses the layout default.
 */

type Stat = {
  /** The numeric value (without the trailing plus). */
  value: string;
  /** true when a gold "+" follows the value (200+/18+/150+ but not "2 Months"). */
  plus?: boolean;
  label: string;
};

const STATS: Stat[] = [
  { value: "200", plus: true, label: "Website Pages Planned" },
  { value: "18", plus: true, label: "User Flows Created" },
  { value: "150", plus: true, label: "Content Sections Structured" },
  { value: "2 Months", label: "Project Duration" },
];

export default function CaseStats() {
  return (
    <section
      aria-labelledby="case-stats-heading"
      className="w-full bg-surface"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* (a) NUMBERS THAT SPEAK */}
        <h2
          id="case-stats-heading"
          className="text-black text-[32px] leading-[38px] tracking-[-0.76px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[57.6px] lg:tracking-[-1.14px]"
        >
          Numbers that speak
        </h2>

        <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t-[0.8px] border-[#ddd] pt-16">
              <dd className="font-bold text-black text-[44px] leading-[44px] tracking-[-1.45px] lg:text-[52px] lg:leading-[52px] lg:tracking-[-1.716px]">
                {stat.value}
                {stat.plus ? <span className="text-gold">+</span> : null}
              </dd>
              <dt className="mt-1 text-black text-[16px] leading-[22.4px] tracking-[-0.16px]">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* (b) TESTIMONIAL QUOTE */}
        <figure className="mx-auto mt-20 flex w-full max-w-[890px] flex-col items-center gap-6 px-2 text-center lg:mt-32 lg:px-[66px]">
          <span
            aria-hidden
            className="block font-serif text-[96px] leading-[0.7] text-[#ffdb00]"
          >
            &ldquo;
          </span>

          <blockquote className="text-[#0a0a0a] text-[26px] leading-[36px] tracking-[-0.4px] sm:text-[32px] sm:leading-[46px] lg:text-[40px] lg:leading-[56px] lg:tracking-[-0.6px]">
            I led the end-to-end digital strategy for BVC Logistics&mdash;from
            research and content planning to website structure, user experience,
            and launch.
          </blockquote>

          <hr className="w-full border-0 border-t-[0.8px] border-dashed border-[#e6e6e6]" />

          <figcaption className="flex items-center justify-center gap-4">
            <span className="relative size-[60px] shrink-0 overflow-hidden rounded-[16px]">
              <Image
                src="/figma/cs-testimonial-avatar.jpg"
                alt="Nikita Wadhawan"
                fill
                sizes="60px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col items-start text-left">
              <span className="text-[#0a0a0a] text-[24px] leading-[34px] tracking-[-1.2px] lg:text-[28px] lg:leading-[42px] lg:tracking-[-1.4px]">
                Nikita Wadhawan
              </span>
              <span className="text-[#a5a5a5] text-[16px] leading-[24px]">
                Founder, Eclectic Agency
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
