import Image from "@/components/Img";

/**
 * PmoShowcase — single wide image band for the Peak Mode On case study.
 * Clones the RitvaaShowcase design 1:1 (same rounded frame, shadow, container
 * and vertical padding); only the content differs.
 *
 * Shows the Peak Mode On storefront campaign banner — "Calmness"
 * (pmo-banner.jpg). The frame keeps the 16:9 aspect from the Ritvaa source
 * (itself adjusted from the amorada device-mock ratio per the rebuild spec);
 * everything else matches the amorada band.
 */
export default function PmoShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <Image
            src="/figma/pmo-banner.jpg"
            alt="Peak Mode On storefront campaign banner — Calmness"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
