"use client";

import { motion } from "framer-motion";

/**
 * "Everything Delivered For The BVC Website" — a centered big black heading and
 * supporting paragraph, followed by a full-width numbered list of deliverable
 * rows separated by hairlines.
 *
 * Figma: file Gf61npUa7cN0kaGb5RgSwe, node 117:10324.
 *
 * Each row = left number | (eyebrow "Key Deliverables" + large title) |
 * right-aligned "View Case Study →" pill. The Figma source numbered the rows
 * "02, 02, 03, 04" (a template typo — the first two share "02"); we renumber
 * sequentially 01–04 from the row index instead of trusting the source labels.
 */

type Deliverable = {
  /** Verbatim title from Figma. */
  title: string;
};

// Verbatim titles, in Figma top-to-bottom order. Numbering is derived from the
// array index (01, 02, 03, 04) to correct the source's "02, 02, 03, 04" typo.
const DELIVERABLES: Deliverable[] = [
  { title: "Website Strategy" },
  { title: "Content Strategy" },
  { title: "User Journey" },
  { title: "SEO & Launch" },
];

/** Horizontal right-arrow matching Figma's "→" glyph in the pill button. */
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
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
                <div className="group flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-6 lg:gap-10 lg:py-8">
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

                  {/* View Case Study pill */}
                  <a
                    href="#"
                    className="inline-flex h-[49px] w-fit shrink-0 items-center justify-center gap-1.5 rounded-[10px] border border-[#cfcfcf] bg-[#f0f0f0] px-[13px] text-[16px] font-semibold leading-[25.2px] text-black transition-colors hover:bg-[#e6e6e6] lg:text-[18px]"
                  >
                    View Case Study
                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
