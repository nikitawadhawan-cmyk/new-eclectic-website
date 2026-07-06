/**
 * Big Quote Testimonial — Figma node 4:7136.
 *
 * NOTE: The build brief described this as a "dark band with light text", but the
 * Figma ground truth (node 4:7136) has NO dark background — it is the page's
 * default light/white surface with black quote text and a top hairline border
 * (#dedede). This component matches the Figma exactly. See report for details.
 */
export default function BigQuote() {
  return (
    <section className="w-full border-t border-t-[#dedede] py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="mx-auto flex max-w-[780px] flex-col items-center gap-6">
          {/* Quote */}
          <blockquote className="text-center text-[20px] font-medium leading-[1.46] tracking-[-0.6px] text-black sm:text-[24px] sm:tracking-[-0.72px] lg:text-[26.8px] lg:leading-[39.2px] lg:tracking-[-0.84px]">
            &ldquo;Working with Eclectic felt like having a seasoned design
            partner{" "}
            <span className="font-semibold">
              who truly understood our vision for Spiritude
            </span>{" "}
            and brought it to life in ways we hadn&rsquo;t even imagined.&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-3">
            <span
              className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-navy text-[16px] font-bold text-gold"
              aria-hidden="true"
            >
              S
            </span>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[13.8px] font-semibold leading-[15.68px] tracking-[-0.14px] text-black">
                Soela
              </p>
              <p className="text-[11.1px] font-semibold leading-[13.44px] tracking-[-0.12px] text-[#545454]">
                Founder of Spiritude
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
