import Image from "@/components/Img";

/**
 * NilShowcase — single wide image band for the Nilambar case study. Clones
 * the RitvaaShowcase design 1:1 (same rounded frame, shadow, container and
 * vertical padding); only the content differs.
 *
 * Shows the Nilambar skyline hero shot — glass high-rise towers at dusk
 * (nil-hero.jpg, 16:9). NOTE: this image is REUSED from the NilHero center
 * slot (and again as the NilCTA background) — the live site exposes only one
 * wide photo. The frame aspect stays the image's native 16:9, per the
 * rebuild spec; everything else matches the amorada band.
 */
export default function NilShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <Image
            src="/figma/nil-hero.jpg"
            alt="Skyline of high-rise towers — Nilambar real-estate development"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
