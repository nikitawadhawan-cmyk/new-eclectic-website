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
  return (
    <section
      aria-label="Trusted by many"
      className="w-full border-t-[0.8px] border-[#dedede]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-8 lg:px-10">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-10">
          {/* Caption */}
          <p className="shrink-0 text-[21px] leading-[30.8px] tracking-[-0.66px] text-[#545454]">
            <span className="font-medium">Trusted by </span>
            <span className="font-semibold text-black">many</span>
          </p>

          {/* Logo row — wraps to a grid on small screens */}
          <div className="grid w-full grid-cols-2 place-items-center gap-x-8 gap-y-8 opacity-70 sm:grid-cols-4 lg:flex lg:w-auto lg:items-center lg:justify-center lg:gap-x-16">
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto max-w-[70%] object-contain sm:max-w-full"
                style={{ height: logo.displayHeight }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
