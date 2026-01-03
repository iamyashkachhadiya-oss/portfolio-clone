"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

import { TESTIMONIALS } from "@/lib/socialProof";

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RecommendationsMasonry() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-[0.22em] text-zinc-500">
            RECOMMENDATIONS
          </p>
          <h3 className="text-lg font-semibold text-white">Social proof</h3>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-max"
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.article
              key={t.id}
              variants={card}
              transition={{ delay: idx * 0.01 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <header className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
                  {t.avatarText}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{t.name}</p>
                  <p className="truncate text-xs text-zinc-400">{t.title}</p>
                </div>
              </header>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{t.quote}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
