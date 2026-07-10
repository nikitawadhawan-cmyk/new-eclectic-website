import Image from "@/components/Img";

/**
 * IvyShowcase — single wide image band for the Ivylistic case study. Clones
 * the RitvaaShowcase / AmoradaShowcase design 1:1 (same rounded frame,
 * shadow, container, 16:9 aspect and vertical padding); only the content
 * differs.
 *
 * Shows ivy-team.jpg — the mentor-team photo from ivylistic.com/services —
 * in the wide frame. (The spec originally assigned ivy-booth.jpg, which
 * turned out to be a WhatsApp chat screenshot; swapped to the team photo,
 * whose ~16:9 ratio fits the band natively. Flagged.)
 */
export default function IvyShowcase() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.25)] lg:rounded-3xl">
          <Image
            src="/figma/ivy-team.jpg"
            alt="The Ivylistic mentor team — alumni of leading business schools"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
