import Image from "@/components/Img";

/**
 * PmoProject — "The Project" band for the Peak Mode On case study
 * (clone of RitvaaProject / AmoradaProject; identical design/structure/
 * classes, Peak Mode On content per
 * .figma-to-website/peak-mode-on-case-study/spec.md).
 *
 * A two-column band on a subtle dotted paper background:
 *   LEFT  — "● ABOUT THE PROJECT" eyebrow pill (gold dot) at the top, and a
 *           rounded photo card at the bottom. Plain product photo:
 *           pmo-hero-3.jpg, a Peak Mode On supplement product shot.
 *   RIGHT — big "The Project" heading, a hairline rule, then three
 *           paragraphs, each opening with a bold lead sentence (verbatim
 *           from the spec).
 *
 * The dotted background is recreated as a pure-CSS diamond dot pattern (two
 * offset 1px radial-gradient layers) over a warm off-white — no image
 * shipped.
 */

type Paragraph = { lead: string; body: string };

const PARAGRAPHS: Paragraph[] = [
  {
    lead: "A brand rooted in tradition, built for the modern web.",
    body: "Peak Mode On blends authentic Ayurvedic formulations with a clean, contemporary shopping experience — so first-time buyers understand the philosophy and feel confident to purchase.",
  },
  {
    lead: "Education is the first step to conversion.",
    body: "Ayurveda asks buyers to know their Dosha before they know what to buy. We turned that into a guided quiz that recommends the right formulations, doubling as onboarding and merchandising.",
  },
  {
    lead: "Built end to end on Shopify.",
    body: "From catalogue architecture to custom sections, product photography direction, and a launch-ready storefront the team can run and grow themselves.",
  },
];

export default function PmoProject() {
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
          {/* LEFT — eyebrow pill (top) + product photo card (bottom) */}
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
                src="/figma/pmo-hero-3.jpg"
                alt="Peak Mode On Ayurvedic supplement product shot"
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
