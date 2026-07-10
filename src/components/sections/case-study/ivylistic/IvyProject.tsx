import Image from "@/components/Img";

/**
 * IvyProject — "The Project" band for the Ivylistic case study
 * (clone of RitvaaProject; identical design/structure/classes, Ivylistic
 * content per .figma-to-website/ivylistic-case-study/spec.md).
 *
 * A two-column band on a subtle dotted paper background:
 *   LEFT  — "● ABOUT THE PROJECT" eyebrow pill (gold dot) at the top, and a
 *           rounded photo card at the bottom. The photo is ivy-2.jpg, a
 *           professional headshot from the client site's uploads: a smiling
 *           consultant in a navy blazer in a bright modern office.
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
    lead: "A high-stakes decision needs a confident guide.",
    body: "Applying to a top business school is one of the biggest bets a candidate makes. The website had to feel like a mentor who has sat where they sit — reassuring, credible, and clear.",
  },
  {
    lead: "Strategy is the product.",
    body: "Ivylistic's edge is proprietary thinking — the Candidate Canvas™ and 5C positioning framework. We built the site to make that methodology visible, so the value is felt before a single call.",
  },
  {
    lead: "Designed to convert quietly.",
    body: "A frictionless free profile evaluation, an interactive global admits map, and lifetime-community messaging turn interest into a first conversation.",
  },
];

export default function IvyProject() {
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
          {/* LEFT — eyebrow pill (top) + consultant photo card (bottom) */}
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
                src="/figma/ivy-2.jpg"
                alt="Smiling Ivylistic consultant in a navy blazer and white shirt, photographed in a bright modern office"
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
