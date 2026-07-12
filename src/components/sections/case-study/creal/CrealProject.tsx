import Image from "@/components/Img";

/**
 * CrealProject — "The Project" band. Clones the AmoradaProject design 1:1
 * (dotted-paper background, two-column layout, hairline + lead-line
 * paragraphs); copy from the "Overview" section of the client's brief.
 *
 * The left photo card is a real CREAL "Everyday Elegance" homepage banner
 * with baked-in copy and a "Shop Daily Wear" button — same composited-image
 * treatment as amorada's am-project-bed.jpg.
 */

type Paragraph = { lead: string; body: string };

const PARAGRAPHS: Paragraph[] = [
  {
    lead: "A big catalogue, a considered purchase.",
    body: "With 500+ SKUs across rings, earrings, mangalsutra and men's pieces, CREAL's shoppers need to find the exact piece — and feel confident enough to buy fine jewellery online.",
  },
  {
    lead: "Findability is the feature.",
    body: "Category-led navigation and six-facet smart filtering — metal, colour, ring size, occasion and more — turn a large catalogue into a fast, guided path to the right product.",
  },
  {
    lead: "Confidence, then conversion.",
    body: "A PIN-code delivery estimator on the product page, offers and low-stock urgency give high-consideration buyers the reassurance to act.",
  },
];

export default function CrealProject() {
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
                src="/figma/creal-everyday.jpg"
                alt="CREAL 'Everyday Elegance' banner — a gold flower necklace, stud earrings and ring, with overlay copy reading 'Lightweight Designs for Your Daily Shine' and a 'Shop Daily Wear' button"
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
