import Image from "@/components/Img";

/**
 * NilProject — "The Project" band for the Nilambar case study
 * (clone of RitvaaProject; identical design/structure/classes, Nilambar
 * content per .figma-to-website/nilambar-case-study/spec.md).
 *
 * A two-column band on a subtle dotted paper background:
 *   LEFT  — "● ABOUT THE PROJECT" eyebrow pill (gold dot) at the top, and a
 *           rounded photo card at the bottom. Photo is nil-person.jpg — a
 *           smiling businesswoman in a grey blazer pointing to the side in a
 *           bright office. NOTE: this image is REUSED from the hero's right
 *           slot (the live site exposes only 3 photos) — flagged per spec.
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
    lead: "One firm, many ventures.",
    body: "Nilambar builds homes, navigates regulation, manages assets and invests in startups. The website had to hold all of that together without feeling scattered — and read as a firm you'd trust with big decisions.",
  },
  {
    lead: "Proof over promises.",
    body: "Real estate is bought on credibility. We foregrounded the project portfolio — Renaissance, Vista, Elite, Meadows — and the startup investments as living evidence of a track record.",
  },
  {
    lead: "Built to start conversations.",
    body: "A service-aware inquiry form routes each visitor — buyer, partner or founder — to the right team, turning a broad audience into qualified leads.",
  },
];

export default function NilProject() {
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
          {/* LEFT — eyebrow pill (top) + photo card (bottom) */}
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
                src="/figma/nil-person.jpg"
                alt="Smiling businesswoman in a grey blazer pointing to the side in a bright office"
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
