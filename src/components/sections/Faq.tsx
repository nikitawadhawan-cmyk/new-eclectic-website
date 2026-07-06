"use client";

import Image from "next/image";
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
                  src="/figma/faq-headshot.png"
                  alt="Headshot of the designer"
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

            <div className="flex items-center gap-[18px]">
              <span className="inline-flex h-11 items-center gap-1 rounded-[24px] border border-[#2a315f] bg-[#2a315f] px-3 shadow-[0px_0.741px_0.741px_-0.75px_rgba(0,0,0,0.33),0px_2.018px_2.018px_-1.5px_rgba(0,0,0,0.32),0px_4.431px_4.431px_-2.25px_rgba(0,0,0,0.3),0px_9.835px_9.835px_-3px_rgba(0,0,0,0.25),0px_25px_25px_-3.75px_rgba(0,0,0,0.11)]">
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  className="size-[18px] shrink-0"
                  aria-hidden
                >
                  <path
                    d="M15.1875 6.1875H2.8125V3.375C2.8125 3.0645 3.0645 2.8125 3.375 2.8125H14.625C14.9355 2.8125 15.1875 3.0645 15.1875 3.375V6.1875Z"
                    fill="white"
                  />
                  <path
                    d="M3.375 15.1875C3.0645 15.1875 2.8125 14.9355 2.8125 14.625V3.375C2.8125 3.0645 3.0645 2.8125 3.375 2.8125H14.625C14.9355 2.8125 15.1875 3.0645 15.1875 3.375V14.625C15.1875 14.9355 14.9355 15.1875 14.625 15.1875H3.375Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.375 1.6875V3.9375"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.625 1.6875V3.9375"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.8125 6.1875H15.1875"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.46875 10.6875L8.15625 12.375L11.5312 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="px-1.5 font-semibold tracking-[-0.14px] text-white text-[13.6px] leading-[15.68px]">
                  Schedule Now
                </span>
              </span>

              <svg
                viewBox="0 0 61 13"
                className="h-[13px] w-[61px] shrink-0"
                fill="none"
                aria-label="Cal.com"
                role="img"
              >
                <path
                  d="M6.075 12.887C2.61 12.887 0 10.076 0 6.605C0 3.124 2.476 0.29 6.075 0.29C7.985 0.29 9.306 0.891 10.339 2.268L8.673 3.691C7.973 2.927 7.13 2.546 6.075 2.546C3.731 2.546 2.443 4.384 2.443 6.605C2.443 8.826 3.854 10.631 6.075 10.631C7.119 10.631 8.007 10.25 8.707 9.486L10.35 10.966C9.362 12.285 8.007 12.887 6.075 12.887ZM17.525 3.644H19.768V12.666H17.525V11.348C17.058 12.285 16.28 12.91 14.793 12.91C12.416 12.91 10.517 10.792 10.517 8.19C10.517 5.587 12.416 3.47 14.793 3.47C16.269 3.47 17.058 4.095 17.525 5.032V3.644ZM17.591 8.19C17.591 6.779 16.647 5.61 15.159 5.61C13.726 5.61 12.794 6.79 12.794 8.19C12.794 9.555 13.726 10.77 15.159 10.77C16.636 10.77 17.591 9.59 17.591 8.19ZM21.356 0H23.599V12.655H21.356V0ZM24.599 11.464C24.599 10.723 25.176 10.099 25.964 10.099C26.321 10.091 26.665 10.232 26.919 10.489C27.172 10.746 27.313 11.098 27.309 11.464C27.309 12.227 26.742 12.851 25.965 12.851C25.603 12.857 25.255 12.712 24.998 12.451C24.741 12.19 24.597 11.834 24.599 11.464ZM35.893 11.209C35.06 12.25 33.794 12.91 32.295 12.91C29.618 12.91 27.653 10.792 27.653 8.19C27.653 5.587 29.618 3.47 32.295 3.47C33.738 3.47 34.993 4.095 35.826 5.078L34.094 6.57C33.661 6.015 33.095 5.599 32.294 5.599C30.862 5.599 29.929 6.779 29.929 8.178C29.929 9.578 30.862 10.758 32.295 10.758C33.161 10.758 33.761 10.295 34.205 9.67L35.893 11.209ZM36.082 8.19C36.082 5.587 38.048 3.47 40.724 3.47C43.401 3.47 45.366 5.588 45.366 8.19C45.366 10.792 43.401 12.91 40.724 12.91C38.048 12.897 36.082 10.792 36.082 8.19ZM43.09 8.19C43.09 6.779 42.156 5.61 40.724 5.61C39.291 5.599 38.359 6.779 38.359 8.19C38.359 9.589 39.291 10.77 40.724 10.77C42.156 10.77 43.09 9.59 43.09 8.19ZM60.536 7.149V12.655H58.293V7.715C58.293 6.154 57.582 5.483 56.516 5.483C55.517 5.483 54.806 5.992 54.806 7.716V12.655H52.563V7.715C52.563 6.154 51.841 5.483 50.786 5.483C49.786 5.483 48.909 5.992 48.909 7.716V12.655H46.666V3.633H48.909V4.882C49.375 3.91 50.219 3.424 51.518 3.424C52.751 3.424 53.784 4.049 54.351 5.102C54.917 4.026 55.75 3.424 57.26 3.424C59.104 3.436 60.536 4.87 60.536 7.149Z"
                  fill="#B8B8B8"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
