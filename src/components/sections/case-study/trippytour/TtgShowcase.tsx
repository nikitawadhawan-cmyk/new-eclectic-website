import Image from "@/components/Img";

/**
 * TtgShowcase — single wide image band for the Trippy Tour Guide case study.
 * Clones the RitvaaShowcase / AmoradaShowcase design 1:1 (same rounded frame,
 * shadow, container and vertical padding); only the content differs.
 *
 * Shows the Auckland skyline at dusk (ttg-bundle-3.jpg) — one of the 50+
 * Trippy Tour Guide destinations. Keeps the 16:9 frame aspect used on the
 * Ritvaa band; everything else matches the amorada band.
 */
export default function TtgShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <Image
            src="/figma/ttg-bundle-3.jpg"
            alt="Auckland skyline — one of 50+ Trippy Tour Guide destinations"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
