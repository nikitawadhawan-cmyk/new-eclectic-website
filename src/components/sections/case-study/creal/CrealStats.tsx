import Image from "@/components/Img";

/**
 * CrealStats — CREAL case study, two stacked bands. Clones the AmoradaStats
 * design 1:1 (centered testimonial); the 4 facts and pull quote are from the
 * client's "CREAL - Bold Editorial" HTML brief (meta strip + closing quote).
 */

type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: "CREAL", label: "Client" },
  { value: "Fine Jewellery", label: "Industry" },
  { value: "Shopify · 500+ SKUs", label: "Platform" },
  { value: "Full Storefront + Custom Dev", label: "Scope" },
];

/**
 * Numeric-style values ("200", "2 Months") get the full 52px Figma size. If any
 * fact on this page is a longer text value ("Custom Theme, Hand-Coded"), every
 * cell steps down to one shared medium size so the 4-up row stays uniform.
 */
const BIG_VALUES = STATS.every((s) => s.value.length <= 9);

export default function CrealStats() {
  return (
    <section aria-labelledby="creal-stats-heading" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* (a) NUMBERS THAT SPEAK — Figma 4-up stat grid (amorada 221-5847) */}
        <h2
          id="creal-stats-heading"
          className="text-black text-[32px] leading-[38px] tracking-[-0.76px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[57.6px] lg:tracking-[-1.14px]"
        >
          Numbers that speak
        </h2>

        <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t-[0.8px] border-[#ddd] pt-10 lg:pt-16">
              <dd
                className={
                  BIG_VALUES
                    ? "font-bold text-black text-[44px] leading-[44px] tracking-[-1.45px] lg:text-[52px] lg:leading-[52px] lg:tracking-[-1.716px]"
                    : "font-bold text-black text-[28px] leading-[34px] tracking-[-0.9px] lg:text-[34px] lg:leading-[40px] lg:tracking-[-1.1px]"
                }
              >
                {stat.value}
              </dd>
              <dt className="mt-1 text-black text-[16px] leading-[22.4px] tracking-[-0.16px]">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        <figure className="mt-20 flex w-full flex-col items-center gap-6 text-center lg:mt-32">
          <span
            aria-hidden
            className="block font-serif text-[96px] leading-[0.7] text-[#ffdb00]"
          >
            &ldquo;
          </span>

          <blockquote className="mx-auto w-full max-w-[1065px] text-[#0a0a0a] text-[26px] leading-[36px] tracking-[-0.4px] sm:text-[32px] sm:leading-[46px] lg:text-[40px] lg:leading-[56px] lg:tracking-[-0.6px]">
            Five hundred pieces, and every shopper still finds the one.
          </blockquote>

          <hr className="w-full border-0 border-t-[0.8px] border-dashed border-[#e6e6e6]" />

          <figcaption className="flex items-center justify-center gap-4">
            <span className="relative size-[60px] shrink-0 overflow-hidden rounded-[16px]">
              <Image
                src="/figma/cs-testimonial-avatar.jpg"
                alt="Nikita Wadhawan"
                fill
                sizes="60px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col items-start text-left">
              <span className="text-[#0a0a0a] text-[24px] leading-[34px] tracking-[-1.2px] lg:text-[28px] lg:leading-[42px] lg:tracking-[-1.4px]">
                Nikita Wadhawan
              </span>
              <span className="text-[#a5a5a5] text-[16px] leading-[24px]">
                Founder, Eclectic Agency
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
