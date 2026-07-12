import Image from "@/components/Img";

/**
 * AmoradaShowcase — Device showcase band (Figma node 210:2525, "Image
 * (Projects Main Image)"). A single full-bleed photo of the finished
 * AMMORADA bed-covers website — "Where Comfort Meets Craft" — shown on a
 * laptop with the mobile site on a phone beside it, on a concrete desk.
 *
 * The Figma node is one photo spanning nearly the full page width
 * (1524 × 776, aspect ≈ 1.96:1) with an object-cover fill. Mirrors the
 * sister BVC page's CaseShowcase: centered in the site content container,
 * rounded frame to match the card idiom, generous vertical padding.
 */
export default function AmoradaShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[1524/776] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <Image
            src="/figma/am-showcase.jpg"
            alt="The finished Amorada website — Where Comfort Meets Craft — shown on a laptop with the mobile site beside it on a phone."
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
