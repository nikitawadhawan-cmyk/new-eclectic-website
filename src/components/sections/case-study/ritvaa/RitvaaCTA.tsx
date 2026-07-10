/**
 * RitvaaCTA — "Ready For Similar Results?" CTA on the Ritvaa case-study
 * page. Clone of AmoradaCTA (Figma node 216:4845) with Ritvaa content.
 *
 * Full-width rounded band (47px radius): background photo under a navy tint
 * (rgba(42,49,95,0.84)), with centred white content:
 *
 *   ✦ START TODAY                       (14px Inter regular, #bbb, uppercase)
 *   Ready For / Similar Results?        (128px Inter semibold, two lines)
 *   Let's discuss how we can help
 *   grow your business.                 (40px Inter regular, white)
 *   [ GET IN TOUCH ]                    (white #fafafa pill, 16px semibold
 *                                        uppercase #181818 → #contact)
 *
 * ASSET APPROACH: background is the SINGLE lifestyle photo
 * public/figma/rit-banner-2.jpg (the "Monsoon Deals" banner — kept distinct
 * from the hero's rit-banner-1.jpg) laid as an absolutely-positioned <img>
 * with the navy tint + live text over it. Uses assetPath() for the raw
 * <img> (GitHub Pages basePath).
 *
 * DEVIATIONS (flagged in report):
 *  - No photo-grid collage asset exists for Ritvaa (amorada uses
 *    am-cta-collage.jpg); a single photo (rit-banner-2.jpg) sits under the
 *    same navy tint instead, per spec.
 *  - Heading 128px desktop scaled down mobile-first (no mobile frame in Figma).
 *  - "GET IN TOUCH" button target is a placeholder "#contact" anchor.
 *  - Navy tint uses exact rgba(42,49,95,0.84) via bg-navy/[0.84].
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

export default function RitvaaCTA() {
  return (
    <section className="w-full py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] lg:rounded-[47px]">
          {/* Background photo (single lifestyle banner — no collage asset for Ritvaa) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/figma/rit-banner-2.jpg")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
          />

          {/* Navy tint overlay (rgba(42,49,95,0.84)) */}
          <div className="absolute inset-0 bg-navy/[0.84]" aria-hidden="true" />

          {/* Centred content */}
          <div className="relative flex min-h-[460px] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[580px] lg:min-h-[720px] xl:min-h-[825px]">
            {/* START TODAY label */}
            <p className="flex items-center gap-2 text-[12px] uppercase leading-[16.8px] tracking-[0.02em] text-[#bbbbbb] sm:text-[14px]">
              <Sparkle className="size-[12px] shrink-0 sm:size-[14px]" />
              Start Today
            </p>

            {/* Heading — two lines */}
            <h2 className="mt-6 max-w-[1020px] font-sans text-[44px] font-semibold leading-[1.1] text-white sm:text-[72px] lg:text-[104px] xl:text-[128px] xl:leading-[140.8px]">
              Ready For
              <br />
              Similar Results?
            </h2>

            {/* Subline */}
            <p className="mt-4 max-w-[820px] text-[18px] font-normal leading-[1.4] text-white sm:text-[24px] lg:text-[32px] xl:text-[40px]">
              Let&rsquo;s discuss how we can help grow your business.
            </p>

            {/* GET IN TOUCH button (placeholder → #contact) */}
            <a
              href="#contact"
              className="mt-10 inline-flex h-[52px] items-center justify-center rounded-full bg-[#fafafa] px-9 text-[15px] font-semibold uppercase leading-[16px] tracking-[0.02em] text-[#181818] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97] sm:h-[60px] sm:px-10 sm:text-[16px]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
