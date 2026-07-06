"use client";

import { useState } from "react";
import Image from "next/image";
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
          {/* Brand: headshot + name */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2"
            aria-label="Joseph Alexander — home"
          >
            <span className="relative size-8 overflow-hidden rounded-full">
              <Image
                src="/figma/headshot-joseph.png"
                alt="Joseph Alexander"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </span>
            <span className="whitespace-nowrap text-[14px] font-semibold tracking-[-0.14px] text-black">
              Joseph Alexander
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
