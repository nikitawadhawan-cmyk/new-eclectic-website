"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Subtle scroll reveal — fades + slides its children up as they enter the
 * viewport (once). Used to wrap the sections that don't have their own
 * bespoke scroll animation.
 *
 * `amount` is the fraction of the child's height that must intersect the
 * viewport before it fires — the 0.15 default assumes the child is no
 * taller than the viewport. For sections taller than that (e.g. OurWork,
 * whose stacked project blocks can run several viewport-heights tall) that
 * fraction of pixels may never be onscreen at once, so the section never
 * reveals — pass a much smaller amount (or "some") for those.
 */
export default function Reveal({
  children,
  amount = 0.15,
}: {
  children: ReactNode;
  amount?: "some" | "all" | number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
