/**
 * CaseCTA — Figma node 117:10127 ("Let's Create Your Brand" CTA)
 *
 * Full-width band: a collage of BVC logistics photos (planes, trucks,
 * containers, warehouse, vault, globe, etc.) overlaid with a navy tint
 * (rgba(42,49,95,0.8) === bg-navy/80) so the giant centred white heading
 * "Let's Create Your Brand" reads clearly.
 *
 *   ✦ START TODAY   (small DM-Mono-style label, faded #bbb, uppercase)
 *   Let's Create Your Brand   (128px Creato/Semi-Bold in Figma → font-sans
 *                              semibold here, scaled responsively)
 *   [ GET IN TOUCH ✦ ]        (white pill button → links to #contact)
 *
 * ASSET APPROACH: the background is a single collage raster. Per the brief we
 * export the whole collage as ONE background image
 * (public/figma/cs-cta-collage.jpg, ~1600px, verified) and lay the navy tint +
 * centred content over it with an absolutely-positioned overlay. Photos use
 * object-cover.
 *
 * DEVIATIONS (flagged in report):
 *  - Figma font is "Creato Display"; project ships Inter (font-sans) per brief.
 *  - Heading 128px desktop scaled down mobile-first (Figma has no mobile frame).
 *  - "GET IN TOUCH" button target is a placeholder "#contact" anchor.
 *  - The rounded 47px card is kept; on mobile it relaxes to a smaller radius.
 */

import { assetPath } from "@/components/Img";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7 0c.35 2.9 1.1 4.65 2.55 5.45C10.85 6.15 12.5 6.65 14 7c-2.9.35-4.65 1.1-5.45 2.55C7.85 10.85 7.35 12.5 7 14c-.35-2.9-1.1-4.65-2.55-5.45C3.15 7.85 1.5 7.35 0 7c2.9-.35 4.65-1.1 5.45-2.55C6.15 3.15 6.65 1.5 7 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function CaseCTA() {
  return (
    <section className="w-full py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] lg:rounded-[47px]">
          {/* Background collage */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/figma/cs-cta-collage.jpg")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
          />

          {/* Navy tint overlay (rgba(42,49,95,0.8)) */}
          <div className="absolute inset-0 bg-navy/80" aria-hidden="true" />

          {/* Centred content */}
          <div className="relative flex min-h-[440px] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[560px] lg:min-h-[720px] xl:min-h-[825px]">
            {/* START TODAY label */}
            <p className="flex items-center gap-2 font-mono text-[12px] uppercase leading-[16.8px] tracking-[0.02em] text-[#bbbbbb] sm:text-[14px]">
              <Sparkle className="size-[12px] shrink-0 sm:size-[14px]" />
              Start Today
            </p>

            {/* Heading */}
            <h2 className="mt-8 max-w-[900px] font-sans text-[52px] font-semibold leading-[0.98] text-white sm:text-[80px] lg:text-[110px] xl:text-[128px] xl:leading-[140.8px]">
              Let&rsquo;s Create Your Brand
            </h2>

            {/* GET IN TOUCH button (placeholder → #contact) */}
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#fafafa] py-4 pl-8 pr-7 text-[16px] font-medium uppercase leading-[16px] tracking-[0.02em] text-[#181818] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97] sm:py-[22px] sm:pl-9 sm:pr-8"
            >
              Get in touch
              <Sparkle className="size-[16px] shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
