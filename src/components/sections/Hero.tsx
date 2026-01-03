"use client";

import { motion } from "framer-motion";

export function Hero({ name = "Your Name" }: { name?: string }) {
  return (
    <section id="home" className="relative scroll-mt-32">
      <div className="mx-auto w-full max-w-5xl px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Hey, I&apos;m Yash!
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tighter leading-[1.12] sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
              Next Product Manager turning complex data into intuitive, tech-driven solutions.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            University Topper in AI & ML with a foundation in Textile Engineering and E-commerce operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
