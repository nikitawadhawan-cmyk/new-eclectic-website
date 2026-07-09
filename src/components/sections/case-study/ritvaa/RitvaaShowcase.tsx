import Image from "@/components/Img";

/**
 * RitvaaShowcase — single wide image band for the Ritvaa case study. Clones
 * the AmoradaShowcase design 1:1 (same rounded frame, shadow, container and
 * vertical padding); only the content differs.
 *
 * Shows the Ritvaa storefront campaign banner — "Monsoon Deals LIVE"
 * (rit-banner-2.jpg, 1600 × 900). The frame aspect is set to the image's
 * native 16:9 rather than the amorada device-mock ratio (1524/776), per the
 * rebuild spec; everything else matches the amorada band.
 */
export default function RitvaaShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <Image
            src="/figma/rit-banner-2.jpg"
            alt="Ritvaa storefront campaign banner — Monsoon Deals"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
