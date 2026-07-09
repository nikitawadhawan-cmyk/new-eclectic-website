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
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8">
          {/* Quote */}
          <blockquote className="text-center text-[26px] font-medium leading-[1.45] tracking-[-0.6px] text-black sm:text-[32px] sm:tracking-[-0.9px] lg:text-[38px] lg:leading-[1.42] lg:tracking-[-1.1px]">
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
              className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-navy text-[19px] font-bold text-gold"
              aria-hidden="true"
            >
              S
            </span>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[17px] font-semibold leading-[1.15] tracking-[-0.14px] text-black">
                Soela
              </p>
              <p className="text-[14px] font-semibold leading-[1.2] tracking-[-0.12px] text-[#545454]">
                Founder of Spiritude
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
