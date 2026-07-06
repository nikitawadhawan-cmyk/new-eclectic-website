/**
 * CaseHighlights — Figma node 84:4685 ("What Drove This Project?")
 *
 * Centered eyebrow "PROJECT HIGHLIGHTS" + big black heading, then a
 * 3-col × 2-row checkerboard grid of 6 cards. Fill pattern (per Figma):
 *   row 1: white · navy · white
 *   row 2: navy  · white · navy
 * Each card = a small rounded-square icon chip (top-left) + title + full
 * description. White cards use ink title / muted body; navy (#2a315f) cards use
 * white text. The icon chip background adapts to the card fill (subtle grey on
 * white cards, translucent white on navy cards).
 *
 * Icons: the Figma glyphs are pure vector groups that don't export cleanly, so
 * they're rendered with the closest lucide-react equivalents (flagged in the
 * report). Type / spacing / radius / shadow match the Figma spec at desktop.
 */

import {
  Activity,
  ListTree,
  Map,
  Search,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
  dark: boolean;
};

const highlights: Highlight[] = [
  {
    title: "Website Audit",
    description:
      "Conducted a comprehensive audit of the existing website, identifying UX gaps, content issues, and opportunities to improve navigation, messaging, and overall user experience.",
    icon: ShieldCheck,
    dark: false,
  },
  {
    title: "Information Architecture",
    description:
      "Designed a scalable sitemap and navigation system, organizing services, industries, resources, and company information into a clear and intuitive structure.",
    icon: ListTree,
    dark: true,
  },
  {
    title: "Content Strategy",
    description:
      "Developed page-wise content frameworks, messaging hierarchy, and conversion-focused sections to improve clarity, engagement, and SEO performance.",
    icon: Sparkles,
    dark: false,
  },
  {
    title: "User Experience",
    description:
      "Optimized user journeys, page layouts, and call-to-action placement to create a seamless browsing experience across desktop and mobile devices.",
    icon: Map,
    dark: true,
  },
  {
    title: "SEO Planning",
    description:
      "Planned keyword hierarchy, metadata, internal linking, and page structure to improve discoverability and support long-term organic growth.",
    icon: Search,
    dark: false,
  },
  {
    title: "Performance Tracking",
    description:
      "Implemented analytics planning, performance monitoring, and reporting frameworks to measure engagement, user behavior, and website effectiveness after launch.",
    icon: Activity,
    dark: true,
  },
];

export default function CaseHighlights() {
  return (
    <section className="w-full bg-white pt-16 pb-14 lg:pt-[88px] lg:pb-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Heading block */}
        <div className="mx-auto flex max-w-[522px] flex-col items-center gap-4 text-center">
          <p className="text-[14px] font-medium leading-[19.6px] text-black">
            PROJECT HIGHLIGHTS
          </p>
          <h2 className="text-[38px] font-semibold capitalize leading-[1.02] tracking-[-0.4px] text-black sm:text-[46px] lg:text-[54px] lg:leading-[54px] lg:tracking-[-0.54px]">
            What Drove This Project?
          </h2>
        </div>

        {/* Card grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3 lg:gap-x-4 lg:gap-y-[40px]">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`flex flex-col gap-8 rounded-[16px] p-[30px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] lg:gap-[44px] ${
                  item.dark ? "bg-navy" : "bg-white"
                }`}
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-[12px] ${
                    item.dark
                      ? "bg-white/12 text-white"
                      : "bg-black/[0.04] text-navy"
                  }`}
                >
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>

                <div className="flex flex-col gap-4">
                  <h3
                    className={`text-[26px] font-normal leading-[1.2] tracking-[-0.32px] lg:text-[32px] lg:leading-[38.4px] ${
                      item.dark ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-[16px] font-normal leading-[22.4px] ${
                      item.dark ? "text-white" : "text-[#545454]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
