import Image from "@/components/Img";

/**
 * LuluShowcase — device showcase band. Clones the RitvaaShowcase pattern
 * (no pre-composited laptop+phone photo export exists for Lulu & Daisy, so
 * this is a CSS-built device mockup) showing the real hero-editorial image
 * from the live homepage (lulu-hero.jpg) on a laptop with a phone beside it.
 */
function DeviceMockup() {
  const screen = "/figma/lulu-hero.jpg";
  const alt = "The Lulu & Daisy homepage hero — a golden retriever with a bowl of fresh dog food";

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-[#ececec] to-[#dbdbdb]">
      <div className="relative w-[64%]">
        <div className="overflow-hidden rounded-t-[8px] border-[10px] border-b-0 border-[#1c1c1c] bg-[#1c1c1c] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
            <Image
              src={screen}
              alt={alt}
              fill
              sizes="(min-width: 1200px) 720px, 60vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="h-[10px] w-full rounded-b-[3px] bg-gradient-to-b from-[#3a3a3a] to-[#161616]" />
        <div className="mx-auto h-[4px] w-[28%] rounded-b-[6px] bg-[#0c0c0c]" />
      </div>

      <div className="absolute bottom-[8%] right-[13%] w-[13%]">
        <div className="overflow-hidden rounded-[18%] border-[5px] border-[#1c1c1c] bg-[#1c1c1c] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.4)]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-white">
            <Image src={screen} alt="" fill sizes="140px" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LuluShowcase() {
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
