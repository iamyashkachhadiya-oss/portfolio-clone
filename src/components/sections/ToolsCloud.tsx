"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

import { DAILY_TOOLS } from "@/lib/socialProof";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: [0.16, 1, 0.3, 1] },
  },
};

function accentShadow(accent: "teal" | "blue" | "purple") {
  if (accent === "teal") return "0 0 0 1px rgba(45, 212, 191, 0.35), 0 0 28px rgba(45, 212, 191, 0.22)";
  if (accent === "blue") return "0 0 0 1px rgba(59, 130, 246, 0.35), 0 0 28px rgba(59, 130, 246, 0.22)";
  return "0 0 0 1px rgba(147, 51, 234, 0.35), 0 0 28px rgba(147, 51, 234, 0.22)";
}

export function ToolsCloud() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-[0.22em] text-zinc-500">
            DAILY BASIS
          </p>
          <h3 className="text-lg font-semibold text-white">Tools I use</h3>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {DAILY_TOOLS.map((t) => {
            const Icon = t.icon;

            return (
              <motion.div
                key={t.id}
                variants={item}
                whileHover={{ scale: 1.1, boxShadow: accentShadow(t.accent) }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="group flex h-[60px] w-[60px] items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
                title={t.name}
                aria-label={t.name}
              >
                <Icon size={20} className="text-white/80 transition-colors group-hover:text-white" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
