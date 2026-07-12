import Image from "@/components/Img";

/**
 * LuluProject — "The Project" band. Clones the AmoradaProject design 1:1
 * (dotted-paper background, two-column layout, hairline + lead-line
 * paragraphs); copy from the "Overview" section of the client's brief.
 *
 * Left photo: a real "First Bowl Experience" lifestyle shot (a golden
 * retriever beside a pot of slow-simmered bone broth) from the live site.
 */

type Paragraph = { lead: string; body: string };

const PARAGRAPHS: Paragraph[] = [
  {
    lead: "A bespoke design deserves a bespoke build.",
    body: "Lulu & Daisy had an editorial React design that no Shopify template could do justice. So we didn't use one — we hand-coded the entire Online Store 2.0 theme in Liquid from scratch.",
  },
  {
    lead: "Pixel-perfect, 1:1.",
    body: "Every section, snippet and template was ported to match the design down to spacing and type — the storefront is indistinguishable from the mockup.",
  },
  {
    lead: "Fast, and fully editable.",
    body: "Critical CSS and lean markup keep loads quick, while schema-driven sections let the client edit everything directly in the Shopify theme editor — no developer required.",
  },
];

export default function LuluProject() {
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
                src="/figma/lulu-benefit-3.jpg"
                alt="A golden retriever waiting beside a pot of Lulu & Daisy slow-simmered bone broth being ladled into a cup, with dog treats alongside"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

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
