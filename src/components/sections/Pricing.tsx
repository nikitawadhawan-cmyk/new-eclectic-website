import Image from "@/components/Img";

/**
 * Pricing — Figma node 4:7536 ("Section - Pricing").
 *
 * Layout (top-to-bottom):
 *  - Heading row: "Simple pricing. Standout designs." (two-tone: grey top line,
 *    black bottom line) + right-aligned description block.
 *  - Pricing container (light grey #f0f0f0 pill) holding:
 *      Top row:
 *        - Left card (navy #2a315f) with a floating "Pause or cancel anytime"
 *          pill, a gold 3D lightning bolt render, gold/white marketing copy,
 *          then (below, white area) a "Slots available" pill + "Hire me today"
 *          heading + supporting copy.
 *        - Right white card: "Unlimited Design" plan — price $1,000 / month,
 *          6-item benefit grid, "Get Started" gold CTA + Stripe logo.
 *      Bottom band (navy #2a315f): "Single Project" plan — description,
 *      4-item benefit grid, "Get quote" gold CTA.
 *
 * COLOR NOTE: The Figma accent gold is #e8c700 (buttons, highlight text, pulse
 * dot). This differs from the build-brief `--color-gold` token (#f5c518), so
 * the exact Figma hex #e8c700 is used inline. Dark surface #2a315f matches the
 * `navy` token. Container grey #f0f0f0 and divider #dedede are Figma-exact.
 */

// Check icon — inlined (simple designed mark). Tinted via `currentColor`.
function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 11.3784 8.31416"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11.1847 1.12114L4.18473 8.12114C4.12376 8.18232 4.05132 8.23086 3.97155 8.26398C3.89178 8.29711 3.80626 8.31416 3.71989 8.31416C3.63352 8.31416 3.54799 8.29711 3.46823 8.26398C3.38846 8.23086 3.31601 8.18232 3.25504 8.12114L0.192545 5.05864C0.1315 4.99759 0.0830775 4.92512 0.0500407 4.84537C0.0170038 4.76561 0 4.68012 0 4.5938C0 4.50747 0.0170038 4.42198 0.0500407 4.34222C0.0830775 4.26247 0.1315 4.19 0.192545 4.12895C0.253589 4.06791 0.326059 4.01948 0.405817 3.98645C0.485575 3.95341 0.571059 3.93641 0.657388 3.93641C0.743718 3.93641 0.829202 3.95341 0.90896 3.98645C0.988718 4.01948 1.06119 4.06791 1.12223 4.12895L3.72044 6.72715L10.2561 0.192544C10.3794 0.0692602 10.5466 0 10.721 0C10.8953 0 11.0625 0.0692602 11.1858 0.192544C11.3091 0.315829 11.3784 0.483038 11.3784 0.657388C11.3784 0.831739 11.3091 0.998948 11.1858 1.12223L11.1847 1.12114Z"
        fill="currentColor"
      />
    </svg>
  );
}

const DARK_BENEFITS = [
  "No contracts or commitments",
  "Pause or cancel anytime",
  "Multiple Brands",
  "Unlimited requests",
  "Avg 48 hour turnaround",
  "Framer development",
];

const SINGLE_BENEFITS = [
  "Clearly defined scope",
  "Fixed timeline",
  "3 revision rounds",
  "Milestone updates",
];

export default function Pricing() {
  return (
    <section className="w-full border-t border-t-[#dedede] py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Heading / Description row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h2 className="max-w-[653px] text-[40px] font-medium leading-[1.02] tracking-[-1.2px] sm:text-[52px] lg:text-[63px] lg:leading-[64px] lg:tracking-[-1.92px]">
            <span className="text-[#828282]">Simple pricing. </span>
            <span className="text-black">Standout designs.</span>
          </h2>
          <div className="max-w-[327px] shrink-0 text-[17px] leading-[25.2px] tracking-[-0.36px] lg:pb-1">
            <p className="font-semibold text-black">Clear costs, no hidden fees.</p>
            <p className="font-medium text-[#545454]">
              Select from monthly subscriptions or individual project rates.
            </p>
          </div>
        </div>

        {/* Pricing container */}
        <div className="mt-12 flex flex-col gap-1.5 rounded-2xl bg-[#f0f0f0] p-1.5 lg:mt-16">
          {/* Top row */}
          <div className="flex flex-col gap-1.5 lg:flex-row">
            {/* Left navy promo card */}
            <div className="relative flex flex-[0_0_auto] flex-col justify-end gap-6 overflow-hidden rounded-xl bg-white p-8 shadow-[0px_1.811px_1.811px_-1.875px_rgba(0,0,0,0.07),0px_4.787px_4.787px_-2.813px_rgba(0,0,0,0.06),0px_15px_15px_-3.75px_rgba(0,0,0,0.03)] lg:w-[402px]">
              {/* Floating navy card (marketing) */}
              <div className="relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-3xl border border-black bg-navy p-6 shadow-[0px_9.835px_9.835px_-3px_rgba(0,0,0,0.25),0px_25px_25px_-3.75px_rgba(0,0,0,0.11),0px_0px_0px_1px_#828282]">
                {/* Lightning bolt render */}
                <div className="pointer-events-none absolute -bottom-5 -right-12 h-[208px] w-[208px] rotate-[25deg]">
                  <Image
                    src="/figma/pricing-lightning.png"
                    alt=""
                    fill
                    sizes="208px"
                    className="object-contain"
                  />
                </div>
                {/* "Pause or cancel anytime" pill */}
                <div className="relative z-10 inline-flex w-fit items-center rounded-3xl border border-[#f0f0f0] bg-white/95 px-3 py-2 backdrop-blur-[2.5px]">
                  <span className="text-[11.6px] font-semibold leading-[13.44px] tracking-[-0.12px] text-black">
                    Pause or cancel anytime
                  </span>
                </div>
                {/* Marketing copy */}
                <p className="relative z-10 mt-8 max-w-[275px] text-[21px] font-medium leading-[30.8px] tracking-[-0.66px]">
                  <span className="text-[#e8c700]">Subscription design services </span>
                  <span className="text-white">for brands who move fast.</span>
                </p>
              </div>

              {/* "Slots available" pill */}
              <div className="inline-flex w-fit items-center gap-2 rounded-3xl border border-[#f0f0f0] bg-white py-3 pl-2 pr-4 shadow-[0px_2.289px_2.289px_-2.5px_rgba(0,0,0,0.16),0px_10px_10px_-3.75px_rgba(0,0,0,0.06)]">
                <span className="relative flex size-4 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#e8c700] opacity-25" />
                  <span className="size-2 rounded-full bg-[#e8c700]" />
                </span>
                <span className="text-[11.6px] font-semibold leading-[13.44px] tracking-[-0.12px] text-black">
                  Slots available
                </span>
              </div>

              {/* Heading & description */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[30.6px] font-medium leading-[36.8px] tracking-[-0.96px] text-black">
                  Hire me today
                </h3>
                <p className="text-[13.2px] font-medium leading-[22.4px] tracking-[-0.14px] text-black">
                  Skip the agency markup and work directly with an experienced
                  designer.
                </p>
              </div>
            </div>

            {/* Right white plan card — Unlimited Design */}
            <div className="flex flex-[1_1_0%] flex-col justify-between gap-8 rounded-xl bg-white p-8 shadow-[0px_1.811px_1.811px_-1.875px_rgba(0,0,0,0.07),0px_4.787px_4.787px_-2.813px_rgba(0,0,0,0.06),0px_15px_15px_-3.75px_rgba(0,0,0,0.03)]">
              <div className="flex flex-col gap-6">
                {/* Heading & description */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[30.9px] font-medium leading-[36.8px] tracking-[-0.96px] text-black">
                    Unlimited Design
                  </h3>
                  <p className="max-w-[400px] text-[13.3px] font-medium leading-[22.4px] tracking-[-0.14px]">
                    <span className="text-black">
                      One flat monthly rate for unlimited design requests.{" "}
                    </span>
                    <span className="text-[#545454]">
                      Ideal for ongoing design requirements.
                    </span>
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#dedede]" />

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-[38.6px] font-semibold leading-[48px] tracking-[-1.2px] text-black">
                    $1,000
                  </span>
                  <span className="text-[11.6px] font-semibold leading-[13.44px] tracking-[-0.12px] text-[#545454]">
                    / month
                  </span>
                </div>

                {/* Benefits grid */}
                <ul className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  {DARK_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-[5px]">
                      <Check className="size-[11px] shrink-0 text-[#171717]" />
                      <span className="text-[13.3px] font-semibold leading-[15.68px] tracking-[-0.14px] text-black">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA + Stripe logo */}
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center gap-1 rounded-3xl border border-[#e8c700] bg-[#e8c700] px-3 py-2 shadow-[0px_4.431px_4.431px_-2.25px_rgba(0,0,0,0.3),0px_9.835px_9.835px_-3px_rgba(0,0,0,0.25),0px_25px_25px_-3.75px_rgba(0,0,0,0.11)] transition-opacity hover:opacity-90"
                >
                  <span className="relative block size-[18px]">
                    <Image
                      src="/figma/pricing-btn-icon1.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </span>
                  <span className="px-1.5 text-[13.3px] font-semibold leading-[15.68px] tracking-[-0.14px] text-black">
                    Get Started
                  </span>
                </a>
                <span className="relative block h-[19px] w-[45px] shrink-0">
                  <Image
                    src="/figma/pricing-stripe.svg"
                    alt="Stripe"
                    fill
                    className="object-contain"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Bottom band — Single Project (navy) */}
          <div className="relative flex flex-col gap-4 rounded-xl border border-black bg-navy p-8">
            <h3 className="text-[30.6px] font-medium leading-[36.8px] tracking-[-0.96px] text-white">
              Single Project
            </h3>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-[400px] text-[13.2px] font-medium leading-[22.4px] tracking-[-0.14px]">
                <span className="text-white">
                  Comprehensive design services for any project scope.{" "}
                </span>
                <span className="text-[#b8b8b8]">
                  Ideal for one-time design needs or individual tasks.
                </span>
              </p>

              {/* Benefits grid */}
              <ul className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:flex-1 lg:max-w-[375px]">
                {SINGLE_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-[5px]">
                    <Check className="size-[11px] shrink-0 text-[#f0f0f0]" />
                    <span className="text-[13.2px] font-semibold leading-[15.68px] tracking-[-0.14px] text-white">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex h-11 w-fit items-center justify-center gap-1 rounded-3xl border border-[#dedede] bg-[#e8c700] px-3 py-2 shadow-[0px_4.787px_4.787px_-2.813px_rgba(0,0,0,0.06),0px_15px_15px_-3.75px_rgba(0,0,0,0.03)] transition-opacity hover:opacity-90"
              >
                <span className="relative block size-[18px]">
                  <Image
                    src="/figma/pricing-btn-icon2.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="px-1.5 text-[13.3px] font-semibold leading-[15.68px] tracking-[-0.14px] text-black">
                  Get quote
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
