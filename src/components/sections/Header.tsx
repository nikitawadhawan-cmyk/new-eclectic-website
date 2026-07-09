"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image, { assetPath } from "@/components/Img";

// "/"-prefixed hrefs are wrapped in assetPath() at render so they carry the
// GitHub Pages basePath and work from any page (e.g. the case study).
const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

function Logo() {
  return (
    <a href="#top" className="flex shrink-0 items-center" aria-label="eclectic digital — home">
      {/* Real brand logo (public/eclectic-logo-nav.png, 474x74) */}
      <Image
        src="/eclectic-logo-nav.png"
        alt="eclectic digital"
        width={474}
        height={74}
        priority
        className="h-8 w-auto"
      />
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When the bar collapses, the inline desktop links give way to a menu button.
  const showInlineLinks = !scrolled;

  return (
    <header className="sticky top-0 z-[100] w-full pt-4">
      <motion.nav
        aria-label="Primary"
        layout
        transition={{ type: "spring", duration: 0.5, bounce: 0.18 }}
        className={`mx-auto flex items-center gap-6 rounded-[32px] border border-[#dedede] bg-white/60 p-3 backdrop-blur-md ${
          scrolled ? "max-w-[440px] justify-between px-4" : "max-w-[1200px] justify-between"
        }`}
        style={{ width: "calc(100% - 3rem)" }}
      >
        <Logo />

        {/* Desktop inline links — only when expanded */}
        {showInlineLinks && (
          <div className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={assetPath(link.href)}
                className="whitespace-nowrap text-[14px] font-semibold tracking-[-0.14px] text-black transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-[24px] border-[0.8px] border-[#dedede] bg-[#fafafa] px-3 py-2 text-[14px] font-semibold tracking-[-0.14px] text-black shadow-[0px_4.787px_4.787px_-2.813px_rgba(0,0,0,0.06),0px_15px_15px_-3.75px_rgba(0,0,0,0.03)] transition-colors hover:bg-white active:scale-[0.97]"
            >
              Contact
            </a>
          </div>
        )}

        {/* Menu toggle — always on mobile; on desktop only once collapsed */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex size-9 items-center justify-center rounded-full text-black transition-transform active:scale-90 ${
            scrolled ? "flex" : "md:hidden"
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </motion.nav>

      {/* Dropdown panel (mobile always; desktop when collapsed) */}
      {open && (
        <motion.div
          id="site-menu"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformOrigin: "top center", width: "calc(100% - 3rem)" }}
          className={`mx-auto mt-2 flex max-w-[440px] flex-col gap-1 rounded-[24px] border border-[#dedede] bg-white/90 p-3 backdrop-blur-md ${
            scrolled ? "" : "md:hidden"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={assetPath(link.href)}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-2 text-[14px] font-semibold tracking-[-0.14px] text-black transition-colors hover:bg-black/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-[24px] border-[0.8px] border-[#dedede] bg-[#fafafa] px-3 py-2 text-center text-[14px] font-semibold tracking-[-0.14px] text-black active:scale-[0.98]"
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
}
