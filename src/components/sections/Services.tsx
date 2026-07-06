/**
 * Services — Figma node 4:7157 ("Section - Services")
 *
 * Left: heading "Services that supercharge your business." where the first two
 * words ("Services that") are faded grey (#828282) and the rest is black.
 * Right: a vertical list of 7 service items, each = navy rounded icon badge
 * (gold designed glyph) + title. Icons are the exact designed Figma marks,
 * exported to /public/figma/service-*.svg (gold fill/stroke baked in).
 */

import { assetPath } from "@/components/Img";

const services = [
  { title: "Shopify Development", icon: "/figma/service-shopify.svg" },
  { title: "Wordpress Development", icon: "/figma/service-wordpress.svg" },
  { title: "React and Next.js Development", icon: "/figma/service-wordpress.svg" },
  { title: "Web Apps", icon: "/figma/service-webapps.svg" },
  { title: "Landing Pages", icon: "/figma/service-landing.svg" },
  { title: "3D Design", icon: "/figma/service-3d.svg" },
  { title: "UX / UI Consultation", icon: "/figma/service-uiux.svg" },
];

export default function Services() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Heading column */}
          <div className="lg:w-[493px] lg:shrink-0">
            <h2 className="text-[44px] font-medium leading-[46px] tracking-[-1.4px] lg:text-[63px] lg:leading-[64px] lg:tracking-[-1.92px]">
              <span className="text-muted-2">Services that </span>
              <span className="text-black">supercharge your business.</span>
            </h2>
          </div>

          {/* Services list column */}
          <ul className="flex flex-col gap-8 lg:gap-12">
            {services.map((service) => (
              <li key={service.title} className="flex items-center gap-3">
                <span className="relative flex size-10 shrink-0 items-center justify-center rounded-3xl border border-navy bg-navy p-2 shadow-[0px_0.741px_0.741px_-0.75px_rgba(0,0,0,0.33),0px_2.018px_2.018px_-1.5px_rgba(0,0,0,0.32),0px_4.431px_4.431px_-2.25px_rgba(0,0,0,0.3),0px_9.835px_9.835px_-3px_rgba(0,0,0,0.25),0px_25px_25px_-3.75px_rgba(0,0,0,0.11),0px_0px_0px_1px_#828282]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetPath(service.icon)}
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </span>
                <span className="text-[21.5px] font-medium leading-[30.8px] tracking-[-0.66px] text-black">
                  {service.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
