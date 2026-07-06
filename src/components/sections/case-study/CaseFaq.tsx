"use client";

import { useState } from "react";

/**
 * CaseFaq — Figma node 89:5504 ("Section - Questions & Answers").
 *
 * Layout (desktop, 2-column, heading LEFT / rows RIGHT):
 *  - Left column: a big black heading "Questions & Answers" (Inter Semi Bold,
 *    80px / 80px, tracking -4px) that stacks on two lines.
 *  - Right column: a vertical list of 5 accordion rows, each a white rounded
 *    card (border #cfcfcf 0.8px, radius 10px) with the question (Inter Semi
 *    Bold, 24px / 26.4px, tracking -0.48px) and a "+"/"−" toggle on the right.
 *
 * DEVIATIONS (flagged loudly):
 *  - EXPANDED QUESTIONS: rows 3 & 4 are TRUNCATED in the Figma ("...as well as
 *    established", "...maintenance after"). They are expanded here to full,
 *    sensible questions. These expansions are NOT verbatim Figma text:
 *      3. "Do you work with startups as well as established businesses?"
 *      4. "Can you help with website maintenance after launch?"
 *  - ANSWER COPY: the Figma shows every row COLLAPSED with no answer bodies.
 *    All 5 answer strings below are on-brand BVC placeholder copy authored for
 *    this build — NONE are from Figma. Replace with real content when available.
 *  - Row 1 defaults open so the accordion reads as interactive on load (Figma
 *    shows all collapsed).
 *  - Border color #cfcfcf and section bg #fafafa are Figma-exact (no matching
 *    design token in the brief).
 */

type FaqItem = {
  q: string;
  a: string;
  /** true when the question text is verbatim from Figma (rows 3 & 4 expanded). */
  qFromFigma: boolean;
};

// NOTE: every `a` (answer) below is placeholder copy — NOT from Figma.
const ITEMS: FaqItem[] = [
  {
    q: "How long does a typical project take?",
    a: "Most projects run 4 to 10 weeks end to end, depending on scope. After a short discovery call we scope the work and share a clear timeline with milestones so you always know what's shipping and when.",
    qFromFigma: true,
  },
  {
    q: "What services do you offer?",
    a: "Brand and web design, front-end build, and ongoing iteration — from a single landing page to a full multi-page site. We handle strategy, design, and production so the finished product is ready to ship.",
    qFromFigma: true,
  },
  {
    // EXPANDED from truncated Figma label "Do you work with startups as well as established"
    q: "Do you work with startups as well as established businesses?",
    a: "Yes — from early-stage startups finding their footing to established brands levelling up. We tailor the process to your stage, budget, and pace, so the engagement fits where your business is today.",
    qFromFigma: false,
  },
  {
    // EXPANDED from truncated Figma label "Can you help with website maintenance after"
    q: "Can you help with website maintenance after launch?",
    a: "Absolutely. Launch is the start, not the finish. We offer ongoing support and retainer options for updates, fixes, and improvements so your site keeps performing well after it goes live.",
    qFromFigma: false,
  },
  {
    q: "How do we get started working together?",
    a: "Reach out with a few lines about your project and we'll set up a quick call. From there we scope the work, agree on a timeline, and get moving — usually within a week of that first conversation.",
    qFromFigma: true,
  },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="relative flex size-6 shrink-0 items-center justify-center"
    >
      {/* horizontal bar (always present) */}
      <span className="absolute h-[2px] w-4 rounded-full bg-black" />
      {/* vertical bar (hidden when open -> becomes a minus) */}
      <span
        className={`absolute h-4 w-[2px] rounded-full bg-black transition-transform duration-200 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

export default function CaseFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="case-faq-heading"
      className="w-full bg-[#fafafa] py-16 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-6 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16 lg:px-10">
        {/* LEFT: heading */}
        <div className="lg:pt-2">
          <h2
            id="case-faq-heading"
            className="font-semibold text-black text-[44px] leading-[44px] tracking-[-2px] sm:text-[56px] sm:leading-[56px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px]"
          >
            Questions
            <br />
            &amp; Answers
          </h2>
        </div>

        {/* RIGHT: accordion */}
        <div className="flex flex-col gap-[10px]">
          {ITEMS.map((item, i) => {
            const open = openIndex === i;
            const panelId = `case-faq-panel-${i}`;
            const btnId = `case-faq-btn-${i}`;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[10px] border-[0.8px] border-[#cfcfcf] bg-white"
              >
                <h3 className="m-0">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left lg:px-10 lg:py-8"
                  >
                    <span className="font-semibold text-black text-[19px] leading-[24px] tracking-[-0.4px] lg:text-[24px] lg:leading-[26.4px] lg:tracking-[-0.48px]">
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
                  className="px-6 pb-6 lg:px-10 lg:pb-8"
                >
                  <p className="max-w-[680px] text-[#545454] text-[15px] leading-[24px] tracking-[-0.14px] lg:text-[16px] lg:leading-[26px]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
