import Image from "@/components/Img";

/**
 * BvcShowcase — device showcase band. Clones the AmoradaShowcase design 1:1
 * (same structure, classes); reuses the same cs-showcase.jpg asset the old
 * bespoke CaseShowcase used — a single full-bleed photo of the finished BVC
 * Logistics website shown on a laptop with a phone beside it.
 */
export default function BvcShowcase() {
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
