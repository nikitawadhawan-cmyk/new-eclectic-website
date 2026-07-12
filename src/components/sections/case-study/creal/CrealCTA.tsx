/**
 * CrealCTA — "Ready For Similar Results?" CTA. Clones the AmoradaCTA design
 * 1:1 (same generic agency-facing copy used across the whole clone family);
 * background is a real CREAL editorial portrait (creal-shop-him.jpg).
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

export default function CrealCTA() {
  return (
    <section className="w-full py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] lg:rounded-[47px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/figma/creal-shop-him.jpg")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
          />

          <div className="absolute inset-0 bg-navy/[0.84]" aria-hidden="true" />

          <div className="relative flex min-h-[460px] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[580px] lg:min-h-[720px] xl:min-h-[825px]">
            <p className="flex items-center gap-2 text-[12px] uppercase leading-[16.8px] tracking-[0.02em] text-[#bbbbbb] sm:text-[14px]">
              <Sparkle className="size-[12px] shrink-0 sm:size-[14px]" />
              Start Today
            </p>

            <h2 className="mt-6 max-w-[1020px] font-sans text-[44px] font-semibold leading-[1.1] text-white sm:text-[72px] lg:text-[104px] xl:text-[128px] xl:leading-[140.8px]">
              Ready For
              <br />
              Similar Results?
            </h2>

            <p className="mt-4 max-w-[820px] text-[18px] font-normal leading-[1.4] text-white sm:text-[24px] lg:text-[32px] xl:text-[40px]">
              Let&rsquo;s discuss how we can help grow your business.
            </p>

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
