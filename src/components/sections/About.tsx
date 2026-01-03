"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-28 scroll-mt-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-medium tracking-[0.22em] text-zinc-500">
              ABOUT
            </p>
            <h2 className="text-xl font-semibold text-white">Beyond the Pixels</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-zinc-400 leading-relaxed">
              I value learning over comfort and listening before acting. I’ve experienced the high of a startup scaling and the quiet of a startup failing—both taught me to build with clarity rather than noise.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              My mission is to modernize the fashion and textile industry through technology-enabled solutions: AI-driven demand forecasting, personalized digital retail, and smarter supply chains.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              When I’m not building, you’ll find me playing piano, experimenting in the kitchen, or exploring how algorithms shape human behavior.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            <Image
              src="/profile.jpg"
              alt="Yash Kachhadiya"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
