import Image from "@/components/Img";

/**
 * RitvaaShowcase — single wide image band for the Ritvaa case study.
 *
 * Unlike BVC/amorada (each has a single pre-composited "laptop + phone"
 * photo export, cs-showcase.jpg / am-showcase.jpg), no such asset exists for
 * Ritvaa — so this is a CSS laptop frame showing a 2x screenshot of the real
 * Ritvaa homepage (rit-web.jpg, client-supplied 2026-08-17, cropped to 16:10)
 * plus a client-supplied 3D iPhone mockup (rit-phone.png) with the Vedika
 * photo composited into its screen, inside the same rounded frame / shadow /
 * aspect-[1524/776] used by the other two showcases.
 */
function DeviceMockup() {
  const screen = "/figma/rit-web.jpg";
  const alt = "The Ritvaa homepage — collection carousel";

  return (
    <div className="relative flex h-full w-full items-center bg-gradient-to-b from-[#ececec] to-[#dbdbdb]">
      {/* Laptop — screen is 16:10 and rit-web.jpg is pre-cropped to 16:10 (logo,
          nav and the fanned carousel, no cream margin) so it fills edge-to-edge. */}
      <div className="relative ml-[5%] w-[70%]">
        <div className="overflow-hidden rounded-t-[8px] border-[10px] border-b-0 border-[#1c1c1c] bg-[#1c1c1c] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
            <Image
              src={screen}
              alt={alt}
              fill
              sizes="(min-width: 1200px) 800px, 70vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="h-[10px] w-full rounded-b-[3px] bg-gradient-to-b from-[#3a3a3a] to-[#161616]" />
        <div className="mx-auto h-[4px] w-[28%] rounded-b-[6px] bg-[#0c0c0c]" />
      </div>

      {/* Phone — client-supplied 3D iPhone mockup (PSD "object" layer) with the
          Vedika campaign photo perspective-warped into its "display" layer and
          exported as one transparent PNG (public/figma/rit-phone.png, 1000x2189).
          Overlaps the laptop's right edge. */}
      <div className="absolute bottom-[5%] right-[7%] w-[19%] drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]">
        <Image
          src="/figma/rit-phone.png"
          alt="The Ritvaa mobile experience — Vedika by Ritvaa on an iPhone"
          width={1000}
          height={2189}
          sizes="(min-width: 1200px) 290px, 24vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export default function RitvaaShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[1524/776] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <DeviceMockup />
        </div>
      </div>
    </section>
  );
}
