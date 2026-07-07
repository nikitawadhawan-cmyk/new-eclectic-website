"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "@/components/Img";

/**
 * "Everything Delivered For The BVC Website" — a centered big black heading and
 * supporting paragraph, followed by a full-width numbered list of deliverable
 * rows separated by hairlines.
 *
 * Figma: file Gf61npUa7cN0kaGb5RgSwe, node 117:10324 (collapsed list); the four
 * expanded panels are nodes 99:6109 / 99:6132 / 99:6155 / 99:6174.
 *
 * Each row = left number | (eyebrow "Key Deliverables" + large title) |
 * right-aligned "View More" pill. The pill is a real toggle button: clicking it
 * expands a dropdown panel (mockup image on the LEFT, a description — plus a
 * "200+" stat for row 1 — on the RIGHT) and flips its label to "View Less".
 * Each row toggles INDEPENDENTLY, so multiple panels can be open at once.
 *
 * The Figma source numbered the rows "02, 02, 03, 04" (a template typo — the
 * first two share "02"); we renumber sequentially 01–04 from the row index
 * instead of trusting the source labels.
 */

type Deliverable = {
  /** Verbatim title from Figma. */
  title: string;
  /** Mockup image shown in the expanded panel (in /public). */
  image: string;
  /** Expanded-panel description paragraph. */
  description: string;
  /** Optional headline stat (only row 1 has one). */
  stat?: { value: string; label: string };
};

// Verbatim titles, in Figma top-to-bottom order. Numbering is derived from the
// array index (01, 02, 03, 04) to correct the source's "02, 02, 03, 04" typo.
const DELIVERABLES: Deliverable[] = [
  {
    title: "Website Strategy",
    image: "/figma/cs-deliv-1.jpg",
    stat: { value: "200", label: "Website Pages Planned" },
    description:
      "Built the complete website structure, sitemap, navigation hierarchy, and user journeys to ensure visitors could easily discover services, industries, resources, and company information.",
  },
  {
    title: "Content Strategy",
    image: "/figma/cs-deliv-2.jpg",
    description:
      "Structured content for every page with clear messaging, conversion-focused sections, SEO hierarchy, and customer-first storytelling.",
  },
  {
    title: "User Journey",
    image: "/figma/cs-deliv-3.jpg",
    description:
      "Planned page layouts, CTA placement, user flows, and section hierarchy to improve usability and increase enquiry conversions.",
  },
  {
    title: "SEO & Launch",
    image: "/figma/cs-deliv-4.jpg",
    description:
      "Defined keyword mapping, metadata structure, analytics setup, and launch checklist to maximize discoverability and measure website performance.",
  },
];

/** Horizontal right-arrow matching Figma's "→" glyph in the pill button. */
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3.75 10h12.5M11 4.75 16.25 10 11 15.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CaseDeliverables() {
  // Independent per-row toggle: a set of open row indices (multiple allowed).
  const [openRows, setOpenRows] = useState<Set<number>>(() => new Set());

  const toggle = (i: number) =>
    setOpenRows((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Heading + supporting paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="max-w-[848px] text-balance font-semibold tracking-[-0.03em] text-black text-[40px] leading-[1.05] sm:text-[56px] lg:text-[76px] lg:leading-[1.1] lg:tracking-[-3.8px]">
            Everything Delivered For The BVC Website
          </h2>
          <p className="mt-5 max-w-[864px] text-[16px] leading-[1.4] text-muted lg:leading-[22.4px]">
            From strategy and information architecture to content planning and
            launch, every deliverable was designed to create a premium digital
            experience.
          </p>
        </motion.div>

        {/* Numbered deliverables list */}
        <ul className="mt-12 lg:mt-16 border-t border-[rgba(8,13,13,0.1)]">
          {DELIVERABLES.map((item, i) => {
            const number = String(i + 1).padStart(2, "0");
            const open = openRows.has(i);
            const panelId = `deliverable-panel-${i}`;
            const buttonId = `deliverable-button-${i}`;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4, margin: "0px 0px -8% 0px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="border-b border-[rgba(8,13,13,0.1)]"
              >
                {/* Row header */}
                <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-6 lg:gap-10 lg:py-8">
                  {/* Number */}
                  <span className="shrink-0 text-[18px] font-semibold leading-[25.2px] text-black sm:w-10">
                    {number}
                  </span>

                  {/* Eyebrow + title */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[16px] leading-[25.2px] text-muted lg:text-[18px]">
                      Key Deliverables
                    </p>
                    <p className="mt-1 truncate text-[26px] font-medium tracking-[-0.34px] text-[#080d0d] sm:text-[30px] lg:text-[34px] lg:leading-[44.2px]">
                      {item.title}
                    </p>
                  </div>

                  {/* View More / View Less toggle pill */}
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => toggle(i)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="inline-flex h-[49px] w-fit shrink-0 items-center justify-center gap-1.5 rounded-[10px] border border-[#cfcfcf] bg-[#f0f0f0] px-[13px] text-[16px] font-semibold leading-[25.2px] text-black transition-colors hover:bg-[#e6e6e6] lg:text-[18px]"
                  >
                    {open ? "View Less" : "View More"}
                    <ArrowRight
                      className={`h-[18px] w-[18px] transition-transform duration-300 ${
                        open ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Expanded dropdown panel */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-6 pb-8 sm:flex-row sm:items-center sm:gap-8 lg:gap-12 lg:pb-10">
                        {/* Mockup image (LEFT) */}
                        <div className="w-full shrink-0 overflow-hidden rounded-2xl bg-[#f0f0f0] sm:w-[340px] lg:w-[373px]">
                          <Image
                            src={item.image}
                            alt={`${item.title} deliverable mockup`}
                            width={900}
                            height={600}
                            sizes="(max-width: 640px) 100vw, 373px"
                            className="h-auto w-full object-contain"
                          />
                        </div>

                        {/* Stat + description (RIGHT) */}
                        <div className="flex flex-1 flex-col gap-4">
                          {item.stat && (
                            <div className="flex items-end gap-[15px]">
                              <p className="font-semibold tracking-[-3.8px] text-black text-[56px] leading-[0.9] lg:text-[76px] lg:leading-[83.6px]">
                                {item.stat.value}
                                <span className="text-gold">+</span>
                              </p>
                              <p className="mb-2 max-w-[110px] text-[16px] font-medium leading-[22.4px] text-muted">
                                {item.stat.label}
                              </p>
                            </div>
                          )}
                          <p className="max-w-[645px] text-[16px] leading-[25.2px] text-muted lg:text-[18px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
