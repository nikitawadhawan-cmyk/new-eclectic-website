import Image from "@/components/Img";

/**
 * CaseContribution — BVC case study, "Everything Behind The BVC Website".
 * Figma node 88:5434 ("MY CONTRIBUTION" 4-icon strip).
 *
 * Layout:
 *   - Centered navy eyebrow "MY CONTRIBUTION" (Figma 14px / 16.8px, Inter
 *     ExtraBold, tracking 3.08px, uppercase, #2a315f = --color-navy).
 *   - Centered black heading (Figma 36px / 39.6px, semibold, tracking -0.3px).
 *   - 4-up row of items, each a small line-icon (40px) above a 24px semibold
 *     label, with thin vertical dividers between them.
 *
 * Responsive (mobile-first):
 *   - 1-up on mobile, 2-up on sm, 4-up on lg. Vertical dividers only render at
 *     the lg (4-up) breakpoint per the brief; dropped on stacked layouts.
 *
 * Icons: the four Figma line icons export as clean single-icon SVGs, so they
 *   are used directly (downloaded to public/figma/, prefixed cs-contrib-*).
 *   They match the item meaning: magnifier/insights (research), gear/optimization
 *   (strategy), writing hand (content), growth arrow-up (marketing). Figma fill
 *   #919191 is baked into each SVG so the <img> renders the exact design grey.
 *
 * DEVIATIONS (flagged):
 *   - Figma section background is #f0f0f0; mapped to the project's light surface
 *     token (bg-surface = #f5f5f7) per the build brief (near-identical light grey).
 *   - Figma dividers are #d1d1d1; kept Figma-exact (no matching token — --color-line
 *     is #e6e6e6, a touch lighter).
 *   - Figma renders all four labels on one line (whitespace-nowrap). On narrow
 *     stacked layouts labels are allowed to wrap so short viewports don't clip;
 *     at the 4-up desktop layout they sit centered under each icon as designed.
 */

type Item = {
  icon: string;
  /** width in px of the icon glyph (icons are ~40px tall; research is 40w×45h). */
  iconWidth: number;
  iconHeight: number;
  label: string;
  alt: string;
};

const ITEMS: Item[] = [
  {
    icon: "/figma/cs-contrib-research.svg",
    iconWidth: 40,
    iconHeight: 45,
    label: "Research & Insights",
    alt: "Qualitative research magnifier icon",
  },
  {
    icon: "/figma/cs-contrib-strategy.svg",
    iconWidth: 40,
    iconHeight: 40,
    label: "Website Strategy",
    alt: "Optimization gear icon",
  },
  {
    icon: "/figma/cs-contrib-content.svg",
    iconWidth: 40,
    iconHeight: 40,
    label: "Content Planning",
    alt: "Writing hand icon",
  },
  {
    icon: "/figma/cs-contrib-growth.svg",
    iconWidth: 40,
    iconHeight: 40,
    label: "Growth Marketing",
    alt: "Growth arrow-up icon",
  },
];

export default function CaseContribution() {
  return (
    <section
      aria-labelledby="case-contribution-heading"
      className="w-full bg-surface"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-extrabold uppercase text-navy text-[14px] leading-[16.8px] tracking-[3.08px]">
            MY CONTRIBUTION
          </p>
          <h2
            id="case-contribution-heading"
            className="max-w-[754px] font-semibold text-black text-[28px] leading-[1.1] tracking-[-0.3px] sm:text-[32px] lg:text-[36px] lg:leading-[39.6px]"
          >
            Everything Behind The BVC Website
          </h2>
        </div>

        {/* Items row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={[
                "flex flex-col items-center gap-4 px-6 py-4 text-center",
                // Vertical dividers only on the 4-up desktop layout, between items.
                i > 0 ? "lg:border-l lg:border-[#d1d1d1]" : "",
              ].join(" ")}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={item.iconWidth}
                height={item.iconHeight}
                className="h-[45px] w-auto shrink-0 object-contain"
              />
              <p className="font-semibold text-black text-[20px] leading-[1.2] sm:text-[22px] lg:text-[24px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
