import Image from "@/components/Img";

/**
 * NilShowcase — single wide image band for the Nilambar case study.
 * Clones the RitvaaShowcase device mockup 1:1: a CSS laptop frame showing a
 * client-supplied 2x screenshot of the live homepage (nil-web-laptop.jpg,
 * cropped to 16:10 so it fills the screen) plus the client's 3D iPhone
 * mockup (nil-phone.png — mobile screenshot composited via
 * scripts/phone_composite.py). Same rounded frame / shadow / aspect-[1524/776]
 * as the other showcases.
 */
function DeviceMockup() {
  return (
    <div className="relative flex h-full w-full items-center bg-gradient-to-b from-[#ececec] to-[#dbdbdb]">
      <div className="relative ml-[5%] w-[70%]">
        <div className="overflow-hidden rounded-t-[8px] border-[10px] border-b-0 border-[#1c1c1c] bg-[#1c1c1c] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
            <Image
              src="/figma/nil-web-laptop.jpg"
              alt="The Nilambar homepage — From First Steps to Forever Plans"
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
      <div className="absolute bottom-[5%] right-[7%] w-[19%] drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]">
        <Image
          src="/figma/nil-phone.png"
          alt="The Nilambar mobile homepage on an iPhone"
          width={1000}
          height={2189}
          sizes="(min-width: 1200px) 290px, 24vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export default function NilShowcase() {
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
