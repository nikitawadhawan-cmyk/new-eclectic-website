import Image from "@/components/Img";

/**
 * CaseHero — hero for the BVC Logistics case-study page (Figma node 84:3497).
 *
 * Eyebrow pill → big "ABOUT THE PROJECT" heading → subhead → a row of three
 * hero photos (the center one accented with corner brackets) → intro paragraph
 * → navy "View Live Website" pill button with a circular arrow badge.
 *
 * Built mobile-first / responsive; no artboard pixel positions are hard-coded.
 */

type HeroImage = { src: string; alt: string; accent?: boolean };

const HERO_IMAGES: HeroImage[] = [
  {
    src: "/figma/cs-hero-1.jpg",
    alt: "BVC Logistics global network — branded truck, cargo boxes and a world map of shipping routes into India",
  },
  {
    src: "/figma/cs-hero-2.jpg",
    alt: "BVC Logistics container truck at a port at dusk with a cargo plane overhead",
    accent: true,
  },
  {
    src: "/figma/cs-hero-3.jpg",
    alt: "BVC Logistics worldwide presence — a connected globe over iconic world landmarks with a branded truck and boxes",
  },
];

/** Circular-arrow glyph inside the button badge (two chevron strokes, matching Figma). */
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 14" fill="none" aria-hidden="true" className={className}>
      <path
        d="M1.5 1.5L7 7L1.5 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CaseHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* Heading */}
        <h1 className="text-center font-semibold uppercase text-[#080d0d] text-[40px] leading-[0.95] tracking-[-2px] sm:text-[56px] sm:tracking-[-2.8px] lg:text-[76px] lg:leading-[83.6px] lg:tracking-[-3.8px]">
          About the Project
        </h1>

        {/* Subhead */}
        <p className="mt-4 text-center font-normal uppercase text-muted-2 text-[16px] leading-[1.4] tracking-[-0.6px] sm:text-[20px] lg:text-[24px] lg:tracking-[-1.14px]">
          — BVC Logistics Website Case Study —
        </p>

        {/* Three hero images — center accented with corner brackets */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-center sm:gap-4 lg:mt-14 lg:gap-6">
          {HERO_IMAGES.map((img) =>
            img.accent ? (
              <div key={img.src} className="relative">
                {/* Corner brackets */}
                <span className="pointer-events-none absolute -left-2 -top-2 size-6 rounded-tl-md border-l-2 border-t-2 border-navy sm:-left-2.5 sm:-top-2.5 sm:size-8" />
                <span className="pointer-events-none absolute -right-2 -top-2 size-6 rounded-tr-md border-r-2 border-t-2 border-navy sm:-right-2.5 sm:-top-2.5 sm:size-8" />
                <span className="pointer-events-none absolute -bottom-2 -left-2 size-6 rounded-bl-md border-b-2 border-l-2 border-navy sm:-bottom-2.5 sm:-left-2.5 sm:size-8" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 size-6 rounded-br-md border-b-2 border-r-2 border-navy sm:-bottom-2.5 sm:-right-2.5 sm:size-8" />
                <div className="relative aspect-[476/348] w-full overflow-hidden rounded-2xl shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.28)]">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" priority />
                </div>
              </div>
            ) : (
              <div
                key={img.src}
                className="relative aspect-[476/348] w-full overflow-hidden rounded-2xl sm:aspect-[503/331]"
              >
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
            ),
          )}
        </div>

        {/* Intro paragraph */}
        <p className="mx-auto mt-10 max-w-[641px] text-center text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[rgba(33,33,33,0.7)] lg:mt-14">
          BVC Logistics needed a modern digital presence that reflected its leadership in secure
          logistics for luxury goods. I led the digital marketing strategy, website planning, content
          architecture, SEO strategy, and user journey to transform a traditional corporate website
          into a premium lead-generation platform.
        </p>

        {/* View Live Website button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.bvclogistics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-full border-[0.8px] border-navy bg-navy py-[7px] pl-6 pr-[7px] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span className="text-[16px] font-medium capitalize leading-6 tracking-[-0.32px] text-white">
              View Live Website →
            </span>
            <span className="flex size-9 items-center justify-center rounded-full border-[0.8px] border-navy bg-white">
              <ArrowRight className="h-3.5 w-[9px] text-navy" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
