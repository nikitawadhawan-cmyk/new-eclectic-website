"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Flip reveal — the section flips up into place (3D rotateX, hinged at the top)
 * as it scrolls into view (once). Used on the sections the user asked to flip in.
 */
export default function FlipReveal({ children }: { children: ReactNode }) {
  return (
    <div style={{ perspective: 1400 }}>
      <motion.div
        style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, rotateX: -32, y: 24 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -12% 0px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
