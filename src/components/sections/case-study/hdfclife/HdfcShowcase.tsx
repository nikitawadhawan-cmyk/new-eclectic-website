import Image from "@/components/Img";

/**
 * HdfcShowcase — single wide image band for the HDFC Life case study. Clones
 * the RitvaaShowcase design 1:1 (same rounded frame, shadow, container and
 * vertical padding); only the content differs.
 *
 * Shows the HDFC Life "Click 2 Protect Supreme Plus" campaign banner —
 * "When life is unpredictable, protection should be certain" with the
 * Kolkata Knight Riders players (hdfc-banner-1.jpg, 1600 × 585). Following
 * the same rule the Ritvaa band applied, the frame aspect is set to the
 * image's native 1600/585 rather than a fixed ratio — the creative is
 * text-heavy, so showing it uncropped keeps the headline, plan lockup and
 * players all legible; everything else matches the Ritvaa band.
 */
export default function HdfcShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[1600/585] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <Image
            src="/figma/hdfc-banner-1.jpg"
            alt="HDFC Life Click 2 Protect Supreme Plus campaign banner — “When life is unpredictable, protection should be certain”, with three Kolkata Knight Riders cricketers"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
