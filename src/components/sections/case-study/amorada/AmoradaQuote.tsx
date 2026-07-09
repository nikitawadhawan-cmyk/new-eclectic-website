/**
 * AmoradaQuote — navy pull-quote band on the amorada case-study page.
 * Figma: file Gf61npUa7cN0kaGb5RgSwe, node 215:4463 (band rect 215:4462 +
 * centered content frame 215:4460, artboard band 1521x314).
 *
 * Full-width dark navy strip (#2a315f = --color-navy token) with a centered
 * gold opening quote mark, a single-line white quote (Figma 40px / 56px,
 * tracking -0.6px, centered), and a muted attribution line (#c2c2c2,
 * 28px / 42px, tracking -1.4px).
 *
 * DEVIATIONS (flagged):
 *   - Quote-mark color in Figma is #ffdb00, not the #e8c700 gold token —
 *     kept Figma-exact (same as the AmoradaStats quote mark).
 *   - Figma sets the mark at 120px type clipped into a 26px box (96px
 *     line-height) in "Stack Sans Headline"; rendered at 96px / 0.7 with the
 *     serif fallback — the exact treatment already used by AmoradaStats /
 *     CaseStats — to avoid descender clipping. Quote + attribution use the
 *     project-standard Inter (font-sans) per the build brief.
 */
export default function AmoradaQuote() {
  return (
    <section aria-label="Amorada project quote" className="w-full bg-navy">
      <figure className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-5 px-6 py-14 text-center lg:px-10 lg:py-[54px]">
        <span
          aria-hidden
          className="block font-serif text-[72px] leading-[0.7] text-[#ffdb00] lg:text-[96px]"
        >
          &ldquo;
        </span>

        <blockquote className="w-full max-w-[1065px] text-white text-[26px] leading-[36px] tracking-[-0.4px] sm:text-[32px] sm:leading-[44px] lg:text-[40px] lg:leading-[56px] lg:tracking-[-0.6px]">
          A store as warm and considered as the linens it sells.
        </blockquote>

        <figcaption className="text-[#c2c2c2] text-[20px] leading-[30px] tracking-[-1px] lg:text-[28px] lg:leading-[42px] lg:tracking-[-1.4px]">
          Eclectic Digital &middot; Amorada
        </figcaption>
      </figure>
    </section>
  );
}
