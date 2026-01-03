"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { CAPABILITY_WORDS } from "@/lib/socialProof";

export function CapabilitiesReveal({ intervalMs = 1500 }: { intervalMs?: number }) {
  const words = useMemo(() => CAPABILITY_WORDS, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, words.length]);

  const current = words[index];

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="space-y-6">
        <p className="text-xs font-medium tracking-[0.22em] text-zinc-500">
          WHAT ALL I CAN DO
        </p>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            I can
          </span>

          <span className="relative inline-flex h-[46px] items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={current.id}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
                transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`text-3xl font-semibold tracking-tight sm:text-4xl ${current.className}`}
              >
                {current.word}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <p className="max-w-2xl text-zinc-400">
          A product-oriented approach to building, scaling, and leading technology-driven solutions.
        </p>
      </div>
    </section>
  );
}
