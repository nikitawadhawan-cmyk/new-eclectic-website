import Image from "@/components/Img";

type Logo = {
  name: string;
  src: string;
  /** Intrinsic pixel dimensions of the source asset (for next/image ratio). */
  width: number;
  height: number;
  /** Rendered height in px at desktop; each logo keeps its own aspect ratio. */
  displayHeight: number;
};

// Order matches Figma node 23:4117 left-to-right: BVC, Rippy Tour, Ivylistic, Ammorada.
// Exported so the "Trusted by many" marquee in Testimonials.tsx can reuse the
// same real client logos instead of Figma's placeholder wordmarks.
export const logos: Logo[] = [
  {
    name: "BVC",
    src: "/figma/clientlogo-bvc.png",
    width: 600,
    height: 261,
    displayHeight: 33,
  },
  {
    name: "Rippy Tour",
    src: "/figma/clientlogo-rippytour.png",
    width: 250,
    height: 150,
    displayHeight: 44,
  },
  {
    name: "Ivylistic",
    src: "/figma/clientlogo-ivylistic.svg",
    width: 146,
    height: 31,
    displayHeight: 31,
  },
  {
    name: "Ammorada Home Decor",
    src: "/figma/clientlogo-ammorada.png",
    width: 280,
    height: 70,
    displayHeight: 34,
  },
];

export default function ClientLogos() {
  // Track renders the logo list twice back-to-back so the -50% marquee loop
  // is seamless — see the `marquee` keyframes in globals.css. Same pattern
  // as the ClientLogosStrip marquee further down the page (Testimonials.tsx).
  const track = [...logos, ...logos];

  return (
    <section
      aria-label="Trusted by many"
      className="w-full border-t-[0.8px] border-[#dedede]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-8 lg:flex-row lg:gap-10 lg:px-10">
        {/* Caption */}
        <p className="shrink-0 text-[21px] leading-[30.8px] tracking-[-0.66px] text-[#545454]">
          <span className="font-medium">Trusted by </span>
          <span className="font-semibold text-black">many</span>
        </p>

        {/* Logo marquee */}
        <div
          className="w-full overflow-hidden lg:flex-1"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="marquee-track flex w-max items-center gap-16 opacity-70"
            style={{ animation: "marquee 24s linear infinite" }}
          >
            {track.map((logo, i) => (
              <Image
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto shrink-0 object-contain"
                style={{ height: logo.displayHeight }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
