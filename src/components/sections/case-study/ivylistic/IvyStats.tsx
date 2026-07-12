import Image from "@/components/Img";

/**
 * IvyStats — Ivylistic case study, two stacked bands. Clones the RitvaaStats /
 * AmoradaStats design 1:1 (same structure, classes, type scale); only the
 * content differs.
 *
 * (a) STATS BAND
 *   - Heading "Numbers that speak" — 48px / 57.6px, tracking -1.14px, black.
 *   - 4-up meta-facts row styled exactly like the amorada stat cells: thin top
 *     hairlines (#ddd, 0.8px), big value 52px bold black, small label 16px,
 *     tracking -0.16px. All four Ivylistic values are text (Client / Industry /
 *     Type / Goal) — NO gold "+" on any of them.
 *   - Responsive: 4-up desktop -> 2-up tablet -> 1-up mobile.
 *
 * (b) TESTIMONIAL BAND — CENTERED, same layout as amorada:
 *   - Centered gold quote mark, quote (40px / 56px, centered, #0a0a0a,
 *     tracking -0.6px), dashed hairline, then a centered 60px rounded avatar
 *     + "Nikita Wadhawan" (28px) / "Founder, Eclectic Agency" (16px, #a5a5a5).
 *
 * NOTES (carried over from the amorada source):
 *   - Quote-mark color #ffdb00 (Figma-exact); rendered at 96px/0.7 with a
 *     serif face to avoid descender clipping.
 *   - Project standard type is Inter (font-sans) — no font import.
 *   - Avatar reuses /figma/cs-testimonial-avatar.jpg (shared asset).
 *   - Section background: white, matching the amorada page.
 */

type Stat = {
  /** The value (without the trailing plus). */
  value: string;
  /** true when a gold "+" follows the value — no Ivylistic stat uses it. */
  plus?: boolean;
  label: string;
};

const STATS: Stat[] = [
  { value: "Ivylistic", label: "Client" },
  { value: "Higher-Ed Consulting", label: "Industry" },
  { value: "Brand Website", label: "Type" },
  { value: "Free Evaluations", label: "Goal" },
];

/** No numeric KPI among Ivylistic's facts — the giant background numeral is omitted. */
const NUMERAL: string | null = null;

export default function IvyStats() {
  return (
    <section aria-label="Numbers that speak" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* (a) NUMBERS THAT SPEAK — cascading editorial layout. Rows show
            Client / Type / Goal (Industry is skipped from the cascade, same
            as CREAL/Lulu, but still appears in the footer meta line). */}
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
                {STATS[2].value}
                {STATS[2].plus ? <span className="text-gold">+</span> : null}
              </h3>
              <span className="text-[15px] text-muted-2 sm:text-[16px]">{STATS[2].label}</span>
            </div>

            <div className="ml-[12px] mt-3 flex flex-wrap items-baseline gap-4 sm:ml-[28px] sm:mt-4 sm:gap-6 lg:ml-[44px]">
              <h3 className="m-0 text-[20px] font-semibold leading-[1.05] tracking-[-0.6px] text-black sm:text-[30px] sm:tracking-[-1px] lg:text-[40px] lg:tracking-[-1.2px]">
                {STATS[3].value}
                {STATS[3].plus ? <span className="text-gold">+</span> : null}
              </h3>
              <span className="text-[15px] text-muted-2 sm:text-[16px]">{STATS[3].label}</span>
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

        {/* (b) TESTIMONIAL QUOTE — centered, same as the amorada page */}
        <figure className="mt-20 flex w-full flex-col items-center gap-6 text-center lg:mt-32">
          <span
            aria-hidden
            className="block font-serif text-[96px] leading-[0.7] text-[#ffdb00]"
          >
            &ldquo;
          </span>

          <blockquote className="mx-auto w-full max-w-[1065px] text-[#0a0a0a] text-[26px] leading-[36px] tracking-[-0.4px] sm:text-[32px] sm:leading-[46px] lg:text-[40px] lg:leading-[56px] lg:tracking-[-0.6px]">
            A website that makes the strategy felt long before the first call.
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
