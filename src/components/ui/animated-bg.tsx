"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(147,51,234,0.18),transparent_55%)]" />
      <motion.div
        animate={{ scale: [1, 1.02, 1], rotate: [0, 1, -1, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-22%] top-[-22%] h-[620px] w-[620px] rounded-full bg-accent-blue/12 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.03, 1], rotate: [0, -1, 1, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-28%] right-[-28%] h-[760px] w-[760px] rounded-full bg-accent-purple/12 blur-[140px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_45%,rgba(0,0,0,0.88)_78%)]" />
    </div>
  );
}
