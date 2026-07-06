"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Subtle scroll reveal — fades + slides its children up as they enter the
 * viewport (once). Used to wrap the sections that don't have their own
 * bespoke scroll animation.
 */
export default function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
