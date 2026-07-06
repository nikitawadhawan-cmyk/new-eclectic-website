"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full pt-4">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-8 rounded-[32px] border border-[#dedede] bg-white/50 p-3 backdrop-blur-md"
        >
          {/* Brand: eclectic digital logo */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2"
            aria-label="eclectic digital — home"
          >
            <svg
              viewBox="0 0 40 40"
              className="size-8 shrink-0"
              role="img"
              aria-hidden="true"
            >
              {/* speech bubble */}
              <path
                d="M7 3h26a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H14l-5.5 6.5V26H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z"
                fill="none"
                stroke="#2a315f"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              {/* hashtag: navy verticals, gold horizontals */}
              <rect x="14.6" y="7.5" width="2.8" height="14.5" rx="1.4" fill="#2a315f" />
              <rect x="21.6" y="7.5" width="2.8" height="14.5" rx="1.4" fill="#2a315f" />
              <rect x="9.5" y="11.6" width="20" height="2.8" rx="1.4" fill="#e8c700" />
              <rect x="9.5" y="16.6" width="20" height="2.8" rx="1.4" fill="#e8c700" />
            </svg>
            <span className="whitespace-nowrap text-[19px] font-extrabold lowercase tracking-[-0.5px] leading-none">
              <span className="text-navy">eclectic</span>
              <span className="text-gold">digital</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[14px] font-semibold tracking-[-0.14px] text-black transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-[24px] border-[0.8px] border-[#dedede] bg-[#fafafa] px-3 py-2 text-[14px] font-semibold tracking-[-0.14px] text-black shadow-[0px_0.597px_0.597px_-0.938px_rgba(0,0,0,0.07),0px_1.811px_1.811px_-1.875px_rgba(0,0,0,0.07),0px_4.787px_4.787px_-2.813px_rgba(0,0,0,0.06),0px_15px_15px_-3.75px_rgba(0,0,0,0.03)] transition-colors hover:bg-white"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center rounded-full text-black md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile menu panel */}
        {open && (
          <div
            id="mobile-nav"
            className="mt-2 flex flex-col gap-1 rounded-[24px] border border-[#dedede] bg-white/90 p-3 backdrop-blur-md md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-[14px] font-semibold tracking-[-0.14px] text-black transition-colors hover:bg-black/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-[24px] border-[0.8px] border-[#dedede] bg-[#fafafa] px-3 py-2 text-center text-[14px] font-semibold tracking-[-0.14px] text-black"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
