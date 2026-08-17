"use client";

import { useState } from "react";

/**
 * Faq — Figma node 4:8073 ("Section - FAQ").
 *
 * Layout: two-tone heading "Your questions answered." (black "Your questions",
 * grey #828282 "answered.") + a list of 5 accordion rows, each numbered 01–05
 * with an Inter Semi Bold question and a plus/minus toggle. Row 01 is expanded
 * by default and reveals its answer.
 *
 * The Figma's right-column "Book a Call" card (headshot, "Still not sure? /
 * Book a free discovery call.", WhatsApp CTA) was removed at client request
 * (2026-08-16) — booking now lives solely in the floating Book-a-call button
 * (FloatingBookCall.tsx), so this section renders single-column.
 *
 * DEVIATIONS (flagged loudly):
 *  - ANSWER TEXT: Only FAQ row 01 has answer copy in the Figma (the other rows
 *    are collapsed in the design and carry NO answer content). To keep the
 *    accordion functional for all rows, rows 02–05 use short placeholder answer
 *    copy. These are NOT from Figma — replace with real content when available.
 *  - Divider / border color is Figma-exact #dedede (differs from the brief's
 *    --color-line #e6e6e6).
 *  - Faded grey #828282 matches the brief's --color-muted-2 token.
 */

type FaqItem = {
  q: string;
  a: string;
  /** true when the answer text is real Figma content (row 01 only). */
  fromFigma?: boolean;
};

const ITEMS: FaqItem[] = [
  {
    q: "How long does a typical project take to complete?",
    a: "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
    fromFigma: true,
  },
  {
    q: "Can you work with my existing brand and designs?",
    a: "Absolutely. I can work within your existing brand guidelines and design system, or help evolve them as part of the project.",
  },
  {
    q: "What makes your design process unique?",
    a: "Every engagement starts with understanding your goals and users, so each design decision is grounded in solving a real problem rather than following trends.",
  },
  {
    q: "Do you offer ongoing support after the project is completed?",
    a: "Yes. Ongoing support and iteration options are available so your product keeps improving well after launch.",
  },
  {
    q: "How do you handle confidentiality and intellectual property rights?",
    a: "Your work stays confidential and all intellectual property rights transfer to you on completion. NDAs are welcome whenever needed.",
  },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="relative flex size-[28px] shrink-0 items-center justify-center"
    >
      {/* horizontal bar (always present) */}
      <span className="absolute h-[2px] w-[10px] rounded-full bg-black" />
      {/* vertical bar (hidden when open -> becomes a minus) */}
      <span
        className={`absolute h-[10px] w-[2px] rounded-full bg-black transition-transform duration-200 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full border-t border-t-[#dedede] bg-white py-16 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-6 lg:gap-16 lg:px-10">
        {/* heading + accordion (single column — Book a Call card removed) */}
        <div className="flex flex-col gap-8 lg:gap-16">
          <h2
            id="faq-heading"
            className="font-medium tracking-[-1.28px] text-black text-[44px] leading-[46px] lg:text-[62px] lg:leading-[64px] lg:tracking-[-1.92px]"
          >
            Your questions{" "}
            <span className="text-[#828282]">answered.</span>
          </h2>

          <div className="flex flex-col gap-4">
            {ITEMS.map((item, i) => {
              const open = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-btn-${i}`;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[16px] border border-[#dedede] bg-white"
                >
                  <h3 className="m-0">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center gap-4 px-4 py-3 text-left"
                    >
                      <span className="w-5 shrink-0 font-medium tracking-[-0.32px] text-black text-[16px] leading-[24px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-semibold tracking-[-0.32px] text-black text-[15px] leading-[24px]">
                        {item.q}
                      </span>
                      <ToggleIcon open={open} />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!open}
                    className="border-t border-t-[#dedede] px-4 pb-4 pt-[15.2px]"
                  >
                    <p className="max-w-[640px] font-medium tracking-[-0.14px] text-black text-[13.3px] leading-[22.4px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
