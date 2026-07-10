import Image from "@/components/Img";

/**
 * BvcProject — "The Project" band. Clones the AmoradaProject design 1:1
 * (same dotted-paper background, two-column layout, hairline + lead-line
 * paragraphs); content condensed from the old bespoke CaseContribution /
 * CaseHighlights / CaseDeliverables sections into three lead-line paragraphs.
 *
 * Unlike amorada's am-project-bed.jpg, the BVC photo card is a plain,
 * uncomposited photo (no overlay copy baked in) — cs-hero-2.jpg, reused from
 * the hero row.
 */

type Paragraph = { lead: string; body: string };

const PARAGRAPHS: Paragraph[] = [
  {
    lead: "Every touchpoint had to earn trust before it earned an enquiry.",
    body: "BVC Logistics needed a modern digital presence that reflected its leadership in secure logistics for luxury goods — turning a traditional corporate website into a premium lead-generation platform.",
  },
  {
    lead: "A broad service offering, made easy to navigate.",
    body: "We designed a scalable sitemap and navigation system, organising services, industries, resources and company information into a clear structure spanning 200+ planned pages.",
  },
  {
    lead: "Built to convert enquiries into conversations.",
    body: "Page layouts, CTA placement and SEO hierarchy were planned around the user journey, with analytics and reporting in place to measure performance after launch.",
  },
];

export default function BvcProject() {
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
                src="/figma/cs-hero-2.jpg"
                alt="BVC Logistics container truck at a port at dusk with a cargo plane overhead"
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
