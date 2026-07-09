import { assetPath } from "@/components/Img";

/**
 * ShowreelVideo — a full-width video slot between Latest Projects and
 * Featured Work.
 *
 * To wire the real video: drop the file at `public/showreel.mp4` (and an
 * optional poster at `public/showreel-poster.jpg`) and set HAS_VIDEO = true.
 * Until then it renders a branded placeholder panel with a play mark, sized
 * exactly like the final player (16:9, rounded card), so the layout is real.
 */

const HAS_VIDEO = false;

export default function ShowreelVideo() {
  return (
    <section aria-label="Showreel" className="w-full bg-white py-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="relative aspect-video w-full overflow-hidden rounded-[28px] bg-navy">
          {HAS_VIDEO ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={assetPath("/showreel.mp4")}
              poster={assetPath("/showreel-poster.jpg")}
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              {/* soft brand glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
                style={{ background: "radial-gradient(closest-side, #e8c700, transparent)" }}
              />
              <span className="relative flex size-20 items-center justify-center rounded-full bg-gold shadow-[0_18px_50px_-12px_rgba(0,0,0,0.45)]">
                <svg viewBox="0 0 24 24" className="ml-1 size-8" fill="none" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5L8 5.5Z" fill="#2a315f" />
                </svg>
              </span>
              <p className="relative text-[15px] font-medium tracking-[-0.14px] text-white/70">
                Showreel coming soon
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
