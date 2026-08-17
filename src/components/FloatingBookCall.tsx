/**
 * FloatingBookCall — persistent "Book a call" pill, fixed bottom-right on
 * every page (mounted once in the root layout). Opens the same Cal.com
 * scheduling page the previous live site (eclecticdigital.co) used —
 * mirrored from its bundle: window.open("https://cal.com/...", "_blank").
 * Replaces the old FloatingWhatsApp button (client request, 2026-08-16 —
 * no WhatsApp number was ever provided).
 */

/** Shared Cal.com scheduling URL — also used by the hero's "Book a call with
 *  us" CTA (HeroShowcase.tsx). */
export const BOOKING_URL = "https://cal.com/tanmai-relwani-dwewhj/30min";

/** Minimal calendar glyph (strokes inherit currentColor). */
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function FloatingBookCall() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a call (opens Cal.com scheduling in a new tab)"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 items-center gap-2.5 rounded-full bg-navy px-6 text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <CalendarIcon className="size-5 shrink-0" />
      <span className="font-semibold tracking-[-0.14px] text-[15px] leading-none">
        Book a call
      </span>
    </a>
  );
}
