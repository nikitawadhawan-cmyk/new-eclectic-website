import Image from "@/components/Img";

/**
 * BvcStats — BVC Logistics case study, two stacked bands. Clones the
 * AmoradaStats design 1:1 (same structure, classes, type scale, centered
 * testimonial); only the content differs. Replaces the old bespoke
 * CaseStats (which left-aligned the quote).
 *
 * (a) STATS BAND — same 4 facts as the original CaseStats: 200+ pages
 *     planned, 18+ user flows, 150+ content sections, 2 Months duration.
 * (b) TESTIMONIAL BAND — centered, reusing the original quote verbatim.
 */

type Stat = {
  /** The numeric value (without the trailing plus). */
  value: string;
  /** true when a gold "+" follows the value (200+/18+/150+ but not "2 Months"). */
  plus?: boolean;
  label: string;
};

const STATS: Stat[] = [
  { value: "200", plus: true, label: "Website Pages Planned" },
  { value: "18", plus: true, label: "User Flows Created" },
  { value: "150", plus: true, label: "Content Sections Structured" },
  { value: "2 Months", label: "Project Duration" },
];

export default function BvcStats() {
  return (
    <section
      aria-labelledby="bvc-stats-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        {/* (a) NUMBERS THAT SPEAK */}
        <h2
          id="bvc-stats-heading"
          className="text-black text-[32px] leading-[38px] tracking-[-0.76px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[57.6px] lg:tracking-[-1.14px]"
        >
          Numbers that speak
        </h2>

        <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t-[0.8px] border-[#ddd] pt-16">
              <dd className="font-bold text-black text-[44px] leading-[44px] tracking-[-1.45px] lg:text-[52px] lg:leading-[52px] lg:tracking-[-1.716px]">
                {stat.value}
                {stat.plus ? <span className="text-gold">+</span> : null}
              </dd>
              <dt className="mt-1 text-black text-[16px] leading-[22.4px] tracking-[-0.16px]">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* (b) TESTIMONIAL QUOTE — centered, matching the amorada layout */}
        <figure className="mt-20 flex w-full flex-col items-center gap-6 text-center lg:mt-32">
          <span
            aria-hidden
            className="block font-serif text-[96px] leading-[0.7] text-[#ffdb00]"
          >
            &ldquo;
          </span>

          <blockquote className="mx-auto w-full max-w-[1065px] text-[#0a0a0a] text-[26px] leading-[36px] tracking-[-0.4px] sm:text-[32px] sm:leading-[46px] lg:text-[40px] lg:leading-[56px] lg:tracking-[-0.6px]">
            I led the end-to-end digital strategy for BVC Logistics&mdash;from
            research and content planning to website structure, user experience,
            and launch.
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
