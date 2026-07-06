import Image from "next/image";

/**
 * Hero section — "Design that delivers results".
 *
 * Left column: multi-weight headline (line 1 faded grey #828282, rest ink/black),
 * a mixed-color supporting paragraph, and a navy pill CTA with an avatar.
 * Right column: a fan of four overlapping, tilted browser-mockup cards, each
 * showing a real website screenshot (Figma node 32:3 "Group 19").
 *
 * Server Component — no interactivity.
 */

type Mockup = {
  src: string;
  alt: string;
  /** rotation in degrees (from Figma) */
  rotate: number;
  /** placement within the mockup stage, as % of the stage box */
  className: string;
  /** stacking order */
  z: number;
};

const MOCKUPS: Mockup[] = [
  {
    src: "/figma/hero-screen-2.png",
    alt: "Ammorada home decor website landing page",
    rotate: -5.35,
    // far back-left
    className: "left-0 top-[15%] w-[74%]",
    z: 10,
  },
  {
    src: "/figma/hero-screen-1.png",
    alt: "Ivylistic higher-education website landing page",
    rotate: 5.63,
    // center-left, behind
    className: "left-[16%] top-[20%] w-[74%]",
    z: 20,
  },
  {
    src: "/figma/hero-screen-3.png",
    alt: "Trippy Tour Guide audio-tours website landing page",
    rotate: 15.83,
    // upper-right
    className: "right-0 top-0 w-[76%]",
    z: 30,
  },
  {
    src: "/figma/hero-screen-4.png",
    alt: "BVC Logistics secure global logistics website landing page",
    rotate: 10.4,
    // front and center — the prominent one
    className: "left-[10%] top-[8%] w-[80%]",
    z: 40,
  },
];

function BrowserMockup({ mockup }: { mockup: Mockup }) {
  return (
    <div
      className={`absolute ${mockup.className}`}
      style={{ zIndex: mockup.z, transform: `rotate(${mockup.rotate}deg)` }}
    >
      {/* laptop lid / browser frame */}
      <div className="overflow-hidden rounded-[13.6px] bg-[#cfcfcf] p-[2.5%] shadow-[0px_34px_68px_0px_rgba(0,0,0,0.5)]">
        {/* camera dot */}
        <div className="mx-auto mb-[2%] h-[5px] w-[5px] rounded-full bg-[#a8a8a8]" />
        {/* screen */}
        <div className="overflow-hidden rounded-[9.35px] bg-white">
          <Image
            src={mockup.src}
            alt={mockup.alt}
            width={900}
            height={520}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </div>
      </div>
      {/* laptop base bar */}
      <div className="mx-auto mt-[1.5%] h-[9px] w-[104%] -translate-x-[2%] rounded-[13.6px] border-[0.85px] border-[rgba(168,168,168,0.25)] bg-[#595959]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="w-full overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
          {/* Left column: copy + CTA */}
          <div className="flex max-w-[496px] flex-col gap-6">
            <h1
              id="hero-heading"
              className="font-medium tracking-[-1.4px] text-[44px] leading-[42px] sm:text-[56px] sm:leading-[54px] lg:text-[72px] lg:leading-[68.4px] lg:tracking-[-2.16px]"
            >
              <span className="block text-[#828282]">Design that</span>
              <span className="block text-black">delivers results</span>
            </h1>

            <p className="max-w-[390px] text-[17px] leading-[25.2px] tracking-[-0.36px]">
              <span className="font-semibold text-black">
                Strategic design that drives growth, not just looks good .{" "}
              </span>
              <span className="font-normal text-muted">
                We create everything your brand needs to attract customers and
                turn them into sales.
              </span>
            </p>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-[10px] rounded-[24px] border border-navy bg-navy py-2 pl-2 pr-4 shadow-[0px_0.741px_0.741px_-0.75px_rgba(0,0,0,0.33),0px_2.018px_2.018px_-1.5px_rgba(0,0,0,0.32),0px_4.431px_4.431px_-2.25px_rgba(0,0,0,0.3),0px_9.835px_9.835px_-3px_rgba(0,0,0,0.25),0px_25px_25px_-3.75px_rgba(0,0,0,0.11),0px_0px_0px_1px_#545454] transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* avatar cluster: designer headshot + "You" chip */}
                <span className="relative flex h-[28px] items-center">
                  <span className="relative z-[1] flex h-[28px] w-[28px] items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-navy">
                    <span className="text-[12px] font-semibold leading-[13.44px] tracking-[-0.12px] text-navy">
                      You
                    </span>
                  </span>
                  <span className="relative -ml-2 z-[2] h-[28px] w-[28px] overflow-hidden rounded-full ring-2 ring-navy">
                    <Image
                      src="/figma/hero-avatar.png"
                      alt=""
                      width={28}
                      height={28}
                      className="h-full w-full object-cover"
                    />
                  </span>
                </span>
                <span className="text-[13.3px] font-semibold leading-[15.68px] tracking-[-0.14px] text-white">
                  Book a call with us
                </span>
              </a>
            </div>
          </div>

          {/* Right column: fan of tilted browser mockups */}
          <div className="relative w-full">
            <div className="relative mx-auto aspect-[591/433] w-full max-w-[591px]">
              {MOCKUPS.map((m) => (
                <BrowserMockup key={m.src} mockup={m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
