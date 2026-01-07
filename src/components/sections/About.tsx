"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";

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

            {/* Know More Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <User className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white">Know More About Me</span>
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 via-zinc-800/30 to-zinc-900/50" />
        </motion.div>
      </div>
    </section>
  );
}
