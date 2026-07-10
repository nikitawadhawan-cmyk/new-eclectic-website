"use client";

import Image from "@/components/Img";
import { useState } from "react";

/**
 * Faq — Figma node 4:8073 ("Section - FAQ").
 *
 * Layout (desktop, 2-column grid ~1.5fr / 1fr):
 *  - Left column: two-tone heading "Your questions answered." (black
 *    "Your questions", grey #828282 "answered.") + a list of 5 accordion rows,
 *    each numbered 01–05 with an Inter Semi Bold question and a plus/minus
 *    toggle. Row 01 is expanded by default and reveals its answer.
 *  - Right column: a white "Book a Call" card with headshot, two-tone heading
 *    ("Still not sure?" grey / "Book a free discovery call." black), supporting
 *    copy, a navy "Schedule Now" pill button and the Cal.com logo. Sticky on
 *    desktop.
 *
 * DEVIATIONS (flagged loudly):
 *  - ANSWER TEXT: Only FAQ row 01 has answer copy in the Figma (the other rows
 *    are collapsed in the design and carry NO answer content). To keep the
 *    accordion functional for all rows, rows 02–05 use short placeholder answer
 *    copy. These are NOT from Figma — replace with real content when available.
 *  - Divider / border color is Figma-exact #dedede (differs from the brief's
 *    --color-line #e6e6e6).
 *  - Faded grey #828282 matches the brief's --color-muted-2 token.
 *  - The Cal.com logo + "Schedule Now" pill are decorative here (no live link).
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

/** WhatsApp glyph (official brand mark, single path). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.02-9.84Zm0 18.15h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.27-4.42c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.87 5.88 2.44a8.24 8.24 0 0 1 2.43 5.87c0 4.58-3.74 8.29-8.33 8.29Zm4.56-6.21c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.24-.86.85-.86 2.06 0 1.22.88 2.4 1 2.56.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

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
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 lg:px-10">
        {/* LEFT: heading + accordion */}
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

        {/* RIGHT: Book a Call card */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <div className="flex flex-col gap-8 rounded-[16px] border border-[#dedede] bg-white p-8 shadow-[0px_0.597px_0.597px_-0.938px_rgba(0,0,0,0.07),0px_1.811px_1.811px_-1.875px_rgba(0,0,0,0.07),0px_4.787px_4.787px_-2.813px_rgba(0,0,0,0.06),0px_15px_15px_-3.75px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col gap-6">
              <div className="relative size-16 overflow-hidden rounded-full">
                <Image
                  src="/figma/about-portrait.png"
                  alt="Nikita Wadhawan, Founder of Eclectic Agency"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="font-medium tracking-[-0.96px] text-[28px] leading-[36.8px]">
                  <span className="text-[#828282]">Still not sure?</span>
                  <br />
                  <span className="text-black">
                    Book a free discovery call.
                  </span>
                </h3>
                <p className="font-medium tracking-[-0.14px] text-black text-[13px] leading-[22.4px]">
                  Learn more about how I work and how I can help you and your
                  business take the next step.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA — placeholder "#contact" link until a real
                wa.me/<number> is provided (no contact number exists in the
                codebase yet, see HANDOVER.md §8). */}
            <a
              href="#contact"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-[24px] border border-[#25d366] bg-[#25d366] px-4 shadow-[0px_0.741px_0.741px_-0.75px_rgba(0,0,0,0.33),0px_2.018px_2.018px_-1.5px_rgba(0,0,0,0.32),0px_4.431px_4.431px_-2.25px_rgba(0,0,0,0.3),0px_9.835px_9.835px_-3px_rgba(0,0,0,0.25),0px_25px_25px_-3.75px_rgba(0,0,0,0.11)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <WhatsAppIcon className="size-[18px] shrink-0 text-white" />
              <span className="px-1.5 font-semibold tracking-[-0.14px] text-white text-[13.6px] leading-[15.68px]">
                Chat on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
