import Image from "@/components/Img";

/**
 * AmoradaStats — amorada case study, two stacked bands.
 * Figma: file Gf61npUa7cN0kaGb5RgSwe, nodes 203:1126 ("Numbers that speak"
 * stats) + testimonial block at the top of 203:1156 (nodes 203:1157–1168).
 * Same template family as the BVC CaseStats — layout idioms reused.
 *
 * (a) STATS BAND (203:1126)
 *   - Heading "Numbers that speak" — Figma 48px / 57.6px, tracking -1.14px, black.
 *   - 4-up stat row, thin top hairlines (#ddd, 0.8px). Numbers 52px bold black,
 *     trailing "+" gold (#e8c700 = --color-gold). Labels 16px, tracking -0.16px.
 *     "2 Months" fully bold, no "+".
 *   - Responsive: 4-up desktop -> 2-up tablet -> 1-up mobile.
 *
 * (b) TESTIMONIAL BAND (top of 203:1156) — CENTERED per the amorada Figma
 *     screenshot (unlike the sister BVC page, which was later left-aligned):
 *   - Centered gold quote mark, quote (Figma 40px / 56px, centered, #0a0a0a,
 *     tracking -0.6px) WITH trailing period, dashed hairline, then a centered
 *     60px rounded avatar + "Nikita Wadhawan" (28px) / "Founder, Eclectic
 *     Agency" (16px, #a5a5a5).
 *
 * DEVIATIONS (flagged):
 *   - Quote text: the Figma carried the BVC template quote with an "Amroda"
 *     spelling; replaced at client request (2026-07) with a bespoke amorada
 *     quote ("amorada needed more than a storefront…").
 *   - Quote-mark color in Figma is #ffdb00 (kept Figma-exact); the "+" glyphs
 *     are #e8c700 and map to the --color-gold token.
 *   - Figma quote-mark box is 120px type clipped to a 26px box; rendered at
 *     96px/0.7 with a serif face (same treatment as the sister CaseStats)
 *     to avoid descender clipping.
 *   - Figma uses "Stack Sans Headline" for the quote; project standard is
 *     Inter (font-sans, per build brief) — no font import.
 *   - Avatar asset from Figma is byte-identical to the BVC one, so
 *     /figma/cs-testimonial-avatar.jpg is reused (no am- duplicate written).
 *   - Section background: the rendered amorada screenshot shows white (the
 *     sister page used the light surface) — white used here.
 */

type Stat = {
  /** The numeric value (without the trailing plus). */
  value: string;
  /** true when a gold "+" follows the value (200+/18+/150+ but not "2 Months"). */
  plus?: boolean;
  label: string;
};

const STATS: Stat[] = [
  { value: "10", plus: true, label: "Website Pages Planned" },
  { value: "12", plus: true, label: "User Flows Created" },
  { value: "150", plus: true, label: "Content Sections Structured" },
  { value: "1 Month", label: "Project Duration" },
];

/** Giant faint background numeral — the headline KPI, or null to omit it. */
const NUMERAL = "10+";

export default function AmoradaStats() {
  return (
    <section aria-label="Numbers that speak" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* (a) NUMBERS THAT SPEAK — cascading editorial layout */}
        <div className="relative overflow-hidden">
          {NUMERAL && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 top-0 select-none text-[72px] font-semibold leading-none tracking-[-3px] text-navy/[0.05] sm:text-[130px] sm:tracking-[-6px] lg:top-2 lg:text-[200px] lg:tracking-[-8px]"
            >
              {NUMERAL}
            </span>
          )}

          <span className="relative mb-6 block font-mono text-[12px] uppercase tracking-[2.4px] text-navy sm:mb-8">
            Numbers That Speak
          </span>

          <div className="relative flex flex-col">
            <div className="flex flex-wrap items-baseline gap-4 sm:gap-6">
              <h3 className="m-0 text-[36px] font-semibold leading-[0.95] tracking-[-1.5px] text-black sm:text-[60px] sm:tracking-[-2.5px] lg:text-[84px] lg:tracking-[-3.5px]">
                {STATS[0].value}
                {STATS[0].plus ? <span className="text-gold">+</span> : null}
              </h3>
              <span className="text-[15px] text-muted-2 sm:text-[16px]">{STATS[0].label}</span>
            </div>

            <div className="ml-[24px] mt-3 flex flex-wrap items-baseline gap-4 sm:ml-[60px] sm:mt-4 sm:gap-6 lg:ml-[100px]">
              <h3 className="m-0 bg-gradient-to-r from-navy to-gold bg-clip-text text-[26px] font-semibold leading-none tracking-[-1px] text-transparent sm:text-[42px] sm:tracking-[-1.6px] lg:text-[58px] lg:tracking-[-2px]">
                {STATS[1].value}
                {STATS[1].plus ? <span className="text-gold">+</span> : null}
              </h3>
              <span className="text-[15px] text-muted-2 sm:text-[16px]">{STATS[1].label}</span>
            </div>

            <div className="ml-[12px] mt-3 flex flex-wrap items-baseline gap-4 sm:ml-[28px] sm:mt-4 sm:gap-6 lg:ml-[44px]">
              <h3 className="m-0 text-[20px] font-semibold leading-[1.05] tracking-[-0.6px] text-black sm:text-[30px] sm:tracking-[-1px] lg:text-[40px] lg:tracking-[-1.2px]">
                {STATS[2].value}
                {STATS[2].plus ? <span className="text-gold">+</span> : null}
              </h3>
              <span className="text-[15px] text-muted-2 sm:text-[16px]">{STATS[2].label}</span>
            </div>
          </div>

          <div className="relative mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-8 font-mono text-[11px] uppercase tracking-[1.6px] text-muted-2 sm:mt-16 sm:pt-[30px] sm:text-[12px]">
            {STATS.map((s) => (
              <span key={s.label}>
                {s.label} — {s.value}
                {s.plus ? "+" : ""}
              </span>
            ))}
          </div>
        </div>

        {/* (b) TESTIMONIAL QUOTE — centered per the amorada Figma */}
        <figure className="mt-20 flex w-full flex-col items-center gap-6 text-center lg:mt-32">
          <span
            aria-hidden
            className="block font-serif text-[96px] leading-[0.7] text-[#ffdb00]"
          >
            &ldquo;
          </span>

          <blockquote className="mx-auto w-full max-w-[1065px] text-[#0a0a0a] text-[26px] leading-[36px] tracking-[-0.4px] sm:text-[32px] sm:leading-[46px] lg:text-[40px] lg:leading-[56px] lg:tracking-[-0.6px]">
            Amorada needed more than a storefront&mdash;it needed a feeling. We
            designed a shopping experience where comfort and craft come through
            in every scroll.
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
