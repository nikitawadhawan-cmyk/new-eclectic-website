import Image from "@/components/Img";

/**
 * IvyHero — hero for the Ivylistic case-study page. Clones the RitvaaHero /
 * AmoradaHero design 1:1 (same structure, classes, animations); only the
 * content differs.
 *
 * Big uppercase "HIGHER EDUCATION, SIMPLIFIED" heading → "— Case Study —
 * Website Design & Development —" subhead → a row of three Ivylistic images
 * (two candidate-success WhatsApp screenshots flanking the brand card, which
 * is framed with violet corner brackets, per the amorada design) → intro
 * paragraph (the "strategy, not guesswork" phrase italicised, per spec) →
 * navy "View Live Website" pill button with a circular arrow badge.
 *
 * NOTE: the spec lists ivy-oxford.jpg / ivy-booth.jpg as campus photos, but
 * the actual assets are WhatsApp chat screenshots of an Oxford admit and a
 * Chicago Booth interview invite — alts written to match the real content.
 *
 * Mirrors the BVC CaseHero patterns; mobile-first, no artboard px positions.
 */

/** Violet of the corner-bracket frame from the amorada design (kept as-is). No project token matches. */
const BRACKET = "#5132f0";

type HeroImage = {
  src: string;
  alt: string;
  accent?: boolean;
  /** Extra img classes (e.g. crop anchoring for the very wide third export). */
  imgClassName?: string;
};

const HERO_IMAGES: HeroImage[] = [
  {
    src: "/figma/ivy-oxford.jpg",
    alt: "WhatsApp chat of an Ivylistic candidate telling their mentor they got an admit to Oxford",
  },
  {
    src: "/figma/ivy-og.jpg",
    alt: "Ivylistic brand card — graduation-cap logo with the tagline Higher education, simplified, MBA Admissions Consulting",
    accent: true,
  },
  {
    src: "/figma/ivy-booth.jpg",
    alt: "WhatsApp chat of an Ivylistic candidate sharing an interview invite from Chicago Booth",
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

export default function IvyHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* Heading */}
        <h1 className="text-center font-semibold uppercase text-[#080d0d] text-[40px] leading-[0.95] tracking-[-2px] sm:text-[56px] sm:tracking-[-2.8px] lg:text-[76px] lg:leading-[83.6px] lg:tracking-[-3.8px]">
          Higher Education, Simplified
        </h1>

        {/* Subhead */}
        <p className="mt-4 text-center font-normal text-muted-2 text-[16px] leading-[1.4] tracking-[-0.6px] sm:text-[20px] lg:text-[24px] lg:tracking-[-1.14px]">
          — Case Study — Website Design &amp; Development —
        </p>

        {/* Three site images — center framed with violet corner brackets */}
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
                  className={`object-cover ${img.imgClassName ?? ""}`}
                />
              </div>
            ),
          )}
        </div>

        {/* Intro paragraph */}
        <p className="mx-auto mt-10 max-w-[641px] text-center text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[rgba(33,33,33,0.7)] lg:mt-14">
          Ivylistic helps ambitious candidates into the world&rsquo;s top MBA, MiM and MS programs,
          with mentorship from alumni of leading business schools. We built the brand website that
          turns <em>strategy, not guesswork</em> into an experience that earns trust and books
          evaluations.
        </p>

        {/* View Live Website button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://ivylistic.com/"
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
