/**
 * CaseGallery — Figma node 117:10325 ("Gallery")
 *
 * A centered "Gallery" heading, then THREE stacked, rounded-[32px] showcase
 * panels. In Figma each panel is a flat rendered screenshot of the live BVC
 * website; here they are rebuilt as real, responsive markup so the copy stays
 * crisp — only the genuinely raster parts are shipped as images:
 *   - cs-gallery-truck.jpg  → the logistics / truck photo (panel a, right side)
 *   - cs-gallery-globe.png  → the 3D globe graphic          (panel b, left)
 *   - cs-gallery-map.png    → the dotted world-map graphic  (panel c, right)
 *
 * Panels:
 *   (a) Blue gradient banner — pill, big white/gold headline, supporting line,
 *       two buttons, truck photo filling the right.
 *   (b) White panel — globe left; eyebrow, heading, BVC · BRINKS lockup +
 *       paragraph, and 3 stat boxes (130 / 600+ / 60+).
 *   (c) Dark navy panel — eyebrow, heading, supporting line, dotted world map
 *       with location pins on the right, and 4 stat boxes.
 *
 * Deviation: the dotted world-map graphic (panel c) ships with its coloured
 * location pins baked into the raster (the Figma pins are part of the same
 * exported image); they are NOT separate SVG markers. See report.
 */

import Image from "@/components/Img";
import { Globe, MapPin, ShieldCheck } from "lucide-react";

const brinksStats = [
  { icon: Globe, value: "130", label: "Countries" },
  { icon: MapPin, value: "600+", label: "Cities" },
  { icon: ShieldCheck, value: "60+", label: "Secure vaults" },
];

const coverageStats = [
  { value: "12,000", plus: "+", label: "Indian pincodes in secure delivery network" },
  { value: "600", plus: "+", label: "Indian cities connected for logistics services" },
  { value: "130", plus: "+", label: "Countries supported through BVC’s global network" },
  { value: "1 Search", plus: "", label: "Find coverage, hubs, branches and pickup support" },
];

export default function CaseGallery() {
  return (
    <section className="w-full bg-white pt-16 pb-16 lg:pt-[88px] lg:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Section heading */}
        <h2 className="text-center text-[38px] font-semibold capitalize leading-[1.02] tracking-[-0.4px] text-black sm:text-[46px] lg:text-[54px] lg:leading-[54px] lg:tracking-[-0.54px]">
          Gallery
        </h2>

        <div className="mt-10 flex flex-col gap-8 lg:mt-[46px] lg:gap-[46px]">
          {/* ─────────────── Panel (a) — Blue gradient banner ─────────────── */}
          <div className="relative overflow-hidden rounded-[24px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:rounded-[32px]">
            {/* Right-side logistics photo */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[62%]">
              <Image
                src="/figma/cs-gallery-truck.jpg"
                alt="BVC logistics truck at a secure warehouse loading dock"
                fill
                sizes="(max-width: 640px) 100vw, 62vw"
                className="object-cover object-center"
              />
            </div>
            {/* Blue gradient scrim over the photo (fades photo → deep blue on the left) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #1e2ec4 0%, #1e2ec4 34%, rgba(30,46,196,0.92) 48%, rgba(30,46,196,0.45) 66%, rgba(30,46,196,0.08) 82%, rgba(30,46,196,0) 100%)",
              }}
            />

            {/* Content */}
            <div className="relative flex flex-col gap-6 p-7 sm:p-10 lg:gap-8 lg:p-[52px] lg:pr-[45%]">
              <span className="inline-flex w-fit items-center rounded-full border border-white/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                Established 1960 · Mumbai, India
              </span>

              <h3 className="max-w-[620px] text-[34px] font-bold leading-[1.02] tracking-[-0.5px] text-white sm:text-[44px] lg:text-[56px] lg:leading-[56px]">
                Moving the world&apos;s most{" "}
                <span className="text-gold">precious goods</span> — since 1960.
              </h3>

              <p className="max-w-[520px] text-[15px] font-normal leading-[22px] text-white/80 lg:text-[16px] lg:leading-[24px]">
                Three generations. One discipline. India&apos;s largest secure
                logistics network for diamonds, jewellery and high-value cargo —
                now going global.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-white px-5 py-3 text-[14px] font-semibold text-navy transition-colors hover:bg-white/90"
                >
                  Explore BVC Universe
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-[10px] bg-navy px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-navy-deep"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          {/* ─────────────── Panel (b) — White global-presence panel ─────────────── */}
          <div className="rounded-[24px] bg-white p-7 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ring-1 ring-line sm:p-10 lg:rounded-[32px] lg:p-[52px]">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] lg:gap-12">
              {/* Globe */}
              <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                <Image
                  src="/figma/cs-gallery-globe.png"
                  alt="3D globe showing BVC's international shipment routes"
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-contain"
                />
              </div>

              {/* Copy + stats */}
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                  <span className="size-[7px] rounded-full bg-navy" aria-hidden="true" />
                  Global Presence
                </span>

                <h3 className="text-[30px] font-bold leading-[1.08] tracking-[-0.4px] text-black sm:text-[36px] lg:text-[42px] lg:leading-[46px]">
                  India Proved It. Now{" "}
                  <span className="text-navy">The Network Is Worldwide.</span>
                </h3>

                {/* BVC · BRINKS lockup + paragraph */}
                <div className="flex flex-col gap-5 rounded-[16px] border border-line p-5 sm:flex-row sm:items-start sm:gap-6 lg:p-6">
                  <div className="flex shrink-0 items-center gap-2 pt-1">
                    <span className="text-[17px] font-extrabold tracking-tight text-navy">
                      BVC
                    </span>
                    <span className="size-[9px] rounded-full bg-gold" aria-hidden="true" />
                    <span className="text-[17px] font-extrabold tracking-tight text-navy">
                      BRINKS
                    </span>
                  </div>
                  <p className="text-[15px] font-normal leading-[24px] text-[#545454] lg:text-[16px]">
                    Joint venture since 2013 with Brink&apos;s Inc. — the
                    American-listed, world&apos;s largest cash &amp; valuable-cargo
                    logistics firm — for international diamond &amp; jewellery
                    shipments.
                  </p>
                </div>

                {/* Stat boxes */}
                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  {brinksStats.map(({ icon: Icon, value, label }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-2 rounded-[14px] border border-line p-4"
                    >
                      <Icon className="size-4 text-navy" strokeWidth={1.75} aria-hidden="true" />
                      <span className="text-[22px] font-bold leading-none text-navy lg:text-[24px]">
                        {value}
                      </span>
                      <span className="text-[12px] font-normal leading-tight text-[#545454]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────── Panel (c) — Dark navy coverage panel ─────────────── */}
          <div className="rounded-[24px] bg-navy-deep p-7 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:p-10 lg:rounded-[32px] lg:p-[56px]">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-12">
              {/* Copy */}
              <div className="flex flex-col gap-5">
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-gold">
                  Coverage &amp; Hubs
                </span>
                <h3 className="text-[34px] font-bold leading-[1.04] tracking-[-0.5px] text-white sm:text-[42px] lg:text-[54px] lg:leading-[56px]">
                  Find BVC Service Access Faster.
                </h3>
                <p className="max-w-[460px] text-[15px] font-normal leading-[24px] text-white/55 lg:text-[16px] lg:leading-[26px]">
                  BVC Universe should include BVC coverage, hubs, delivery
                  pincodes and nearest branch access so customers can check
                  serviceability before planning a shipment.
                </p>
              </div>

              {/* Dotted world map (with baked location pins) */}
              <div className="relative aspect-[1250/520] w-full">
                <Image
                  src="/figma/cs-gallery-map.png"
                  alt="Dotted world map with BVC coverage hub location pins"
                  fill
                  sizes="(max-width: 1024px) 90vw, 54vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Stat boxes */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-4">
              {coverageStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-2 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 lg:p-6"
                >
                  <span className="text-[26px] font-bold leading-none text-white lg:text-[28px]">
                    {stat.value}
                    {stat.plus && <span className="text-gold">{stat.plus}</span>}
                  </span>
                  <span className="text-[13px] font-normal leading-[18px] text-white/55">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
