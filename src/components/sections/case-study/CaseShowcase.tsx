import Image from "@/components/Img";

/**
 * CaseShowcase — Device showcase band (Figma node 86:5012, "Image (Projects
 * Main Image)"). A single full-bleed hero photo of the finished BVC Logistics
 * website shown on a laptop with a phone beside it, sitting on a neutral desk.
 *
 * The Figma node is one photo spanning nearly the full page width (1523.8 ×
 * 776, aspect ≈ 1.96:1) with an object-cover fill. Here it's centered within
 * the site content container and given a rounded frame to match the site's
 * card idiom, with generous vertical padding consistent with the other
 * case-study sections.
 */
export default function CaseShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[1524/776] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <Image
            src="/figma/cs-showcase.jpg"
            alt="The finished BVC Logistics website — Secure Global Logistics for Gems & Jewellery — shown on a laptop with the mobile site beside it on a phone."
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
