/**
 * FloatingWhatsApp — persistent circular WhatsApp button, fixed bottom-right
 * on every page (mounted once in the root layout). Placeholder "#contact"
 * link — swap in the real wa.me/<number> URL once a WhatsApp number is
 * provided; no contact number exists in the codebase yet (see
 * HANDOVER.md §8, "All #contact ... links are dead placeholders").
 */

/** WhatsApp glyph (official brand mark, single path). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.02-9.84Zm0 18.15h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.27-4.42c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.87 5.88 2.44a8.24 8.24 0 0 1 2.43 5.87c0 4.58-3.74 8.29-8.33 8.29Zm4.56-6.21c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.24-.86.85-.86 2.06 0 1.22.88 2.4 1 2.56.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  return (
    <a
      href="#contact"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
