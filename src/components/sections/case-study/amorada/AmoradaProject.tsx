import Image from "@/components/Img";

/**
 * AmoradaProject — "The Project" band for the amorada case study
 * (Figma node 210:2575).
 *
 * A two-column band on a subtle dotted paper background:
 *   LEFT  — "● ABOUT THE PROJECT" eyebrow pill (gold dot) at the top, and a
 *           rounded photo card of a pink quilted bed at the bottom. The
 *           "Crafted to Comfort, Designed to Delight." overlay copy and the
 *           white "EXPLORE BED SPREADS" pill are baked into the exported
 *           photo (verified against the asset), so the card ships as a single
 *           composited image with descriptive alt text.
 *   RIGHT — big "The Project" heading, a hairline rule, then three
 *           paragraphs, each opening with a bold lead sentence.
 *
 * The Figma dotted background is a large raster at 69% opacity; it is
 * recreated here as a pure-CSS diamond dot pattern (two offset 1px
 * radial-gradient layers) over a warm off-white — no image shipped.
 *
 * Flagged deviations: Figma mixes Semi Bold (para 1) and Bold (paras 2–3)
 * for the lead lines — normalised to font-semibold for consistency. The
 * pill fill reads white over the cream background in the render, so it uses
 * bg-white/70 rather than the template's rgba(0,0,0,0.03).
 */

type Paragraph = { lead: string; body: string };

const PARAGRAPHS: Paragraph[] = [
  {
    lead: "Texture is the hardest thing to sell online.",
    body: "Home linens are bought by touch — the drape, the weave, the softness. The store had to make craftsmanship feel tangible through a screen.",
  },
  {
    lead: "A broad catalogue, made easy to shop.",
    body: "From bedding and table linens to bath, kitchen and cutlery, we organised everything by room and by colour palette — beige, grey, white — so browsing feels curated, not overwhelming.",
  },
  {
    lead: "Built to convert, end to end.",
    body: "Bestsellers, new arrivals and Luxe Linens up front; free-shipping and offer messaging where it counts; and a checkout with both prepaid and COD for Indian shoppers.",
  },
];

export default function AmoradaProject() {
  return (
    <section
      className="relative w-full bg-[#f7f6f2]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(26,26,26,0.10) 1px, transparent 1.6px), radial-gradient(circle, rgba(26,26,26,0.10) 1px, transparent 1.6px)",
        backgroundSize: "26px 26px, 26px 26px",
        backgroundPosition: "0 0, 13px 13px",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:pb-[104px] lg:pt-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,584px)] lg:justify-between lg:gap-x-14">
          {/* LEFT — eyebrow pill (top) + bed photo card (bottom) */}
          <div className="flex flex-col gap-8 lg:justify-between lg:gap-10">
            <span className="inline-flex w-fit items-center gap-[11px] rounded-full bg-white/70 px-3 py-[7px]">
              <span
                className="size-[7px] shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              <span className="text-[12px] font-medium uppercase leading-[22px] tracking-[-0.48px] text-[#1a1a1a]">
                About The Project
              </span>
            </span>

            <div className="relative aspect-[524/376] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/figma/am-project-bed.jpg"
                alt="Pink quilted amorada bed spread in a warm panelled bedroom, with overlay copy reading 'Crafted to Comfort, Designed to Delight — explore our handcrafted bed spreads made for timeless comfort' and an 'Explore bed spreads' button"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* RIGHT — heading, hairline, three lead-line paragraphs */}
          <div>
            <h2 className="text-[40px] font-semibold leading-[1.02] tracking-[-1.4px] text-black sm:text-[52px] sm:tracking-[-1.8px] lg:text-[64px] lg:leading-[65px] lg:tracking-[-2.2px]">
              The Project
            </h2>

            <div className="mt-8 flex flex-col gap-8 border-t-[0.8px] border-black/30 pt-8 lg:mt-10 lg:pt-9">
              {PARAGRAPHS.map((item) => (
                <p
                  key={item.lead}
                  className="text-[16px] font-normal leading-[26px] text-[#4d4d4d]"
                >
                  <strong className="font-semibold text-black">
                    {item.lead}
                  </strong>
                  <br aria-hidden="true" />
                  {item.body}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
