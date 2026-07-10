import Image from "@/components/Img";

/**
 * BvcHero — hero for the BVC Logistics case-study page. Clones the
 * AmoradaHero design 1:1 (same structure, classes, animations); only the
 * content differs. Replaces the old bespoke CaseHero so the page matches the
 * amorada-family visual language.
 *
 * Big uppercase "SECURE LOGISTICS FOR THE WORLD'S MOST PRECIOUS CARGO"
 * heading → "— Case Study — Website Strategy & Design —" subhead → a row of
 * three BVC Logistics photos (the center one framed with violet corner
 * brackets, per the amorada design) → intro paragraph → navy "View Live
 * Website" pill button with a circular arrow badge.
 *
 * Mirrors the amorada/Ritvaa CaseHero patterns; mobile-first, no artboard px
 * positions.
 */

/** Violet of the corner-bracket frame from the amorada design (kept as-is). No project token matches. */
const BRACKET = "#5132f0";

type HeroImage = {
  src: string;
  alt: string;
  accent?: boolean;
};

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

/** Chevron glyph inside the button badge (matches Figma's primary-btn arrow). */
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

export default function BvcHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* Heading */}
        <h1 className="text-center font-semibold uppercase text-[#080d0d] text-[40px] leading-[0.95] tracking-[-2px] sm:text-[56px] sm:tracking-[-2.8px] lg:text-[76px] lg:leading-[83.6px] lg:tracking-[-3.8px]">
          Secure Logistics For The World&apos;s Most Precious Cargo
        </h1>

        {/* Subhead */}
        <p className="mt-4 text-center font-normal text-muted-2 text-[16px] leading-[1.4] tracking-[-0.6px] sm:text-[20px] lg:text-[24px] lg:tracking-[-1.14px]">
          — Case Study — Website Strategy &amp; Design —
        </p>

        {/* Three hero photos — center framed with violet corner brackets */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-center sm:gap-4 lg:mt-14 lg:gap-6">
          {HERO_IMAGES.map((img) =>
            img.accent ? (
              <div key={img.src} className="relative">
                {/* Corner brackets */}
                <span
                  className="pointer-events-none absolute -left-2 -top-2 size-6 rounded-tl-md border-l-2 border-t-2 sm:-left-2.5 sm:-top-2.5 sm:size-8"
                  style={{ borderColor: BRACKET }}
                />
                <span
                  className="pointer-events-none absolute -right-2 -top-2 size-6 rounded-tr-md border-r-2 border-t-2 sm:-right-2.5 sm:-top-2.5 sm:size-8"
                  style={{ borderColor: BRACKET }}
                />
                <span
                  className="pointer-events-none absolute -bottom-2 -left-2 size-6 rounded-bl-md border-b-2 border-l-2 sm:-bottom-2.5 sm:-left-2.5 sm:size-8"
                  style={{ borderColor: BRACKET }}
                />
                <span
                  className="pointer-events-none absolute -bottom-2 -right-2 size-6 rounded-br-md border-b-2 border-r-2 sm:-bottom-2.5 sm:-right-2.5 sm:size-8"
                  style={{ borderColor: BRACKET }}
                />
                <div className="relative aspect-[500/348] w-full overflow-hidden rounded-2xl shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.22)]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div
                key={img.src}
                className="relative aspect-[500/348] w-full overflow-hidden rounded-2xl border border-line sm:aspect-[503/351]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ),
          )}
        </div>

        {/* Intro paragraph */}
        <p className="mx-auto mt-10 max-w-[641px] text-center text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[rgba(33,33,33,0.7)] lg:mt-14">
          BVC Logistics needed a modern digital presence that reflected its leadership in secure
          logistics for luxury goods. We led the digital strategy, website planning, content
          architecture, SEO strategy, and user journey to transform a traditional corporate
          website into a premium lead-generation platform.
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
