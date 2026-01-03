"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { FEATURED_CASE_STUDIES, VIBE_CODE_PROJECTS } from "@/lib/projects";

import { TiltCard } from "@/components/ui/tilt-card";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

function PlaceholderMockup({ title }: { title: string }) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.20),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.20),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
      <div className="relative flex h-full w-full items-center justify-center">
        <span className="text-sm font-medium text-white/70">{title}</span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-28 scroll-mt-32">
      <div className="space-y-14">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Projects</h2>
          <p className="max-w-2xl text-zinc-400">
            Featured case studies and a few smaller builds.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {FEATURED_CASE_STUDIES.map((cs) => (
            <motion.a
              key={cs.id}
              variants={item}
              href={cs.href ?? "#"}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/30"
            >
              <span className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.05)]" />
              <div className="space-y-3">
                <p className="text-xs font-medium tracking-[0.22em] text-zinc-500">
                  {cs.label}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {cs.title}
                </h3>
                {cs.description ? (
                  <p className="text-sm leading-6 text-zinc-400">{cs.description}</p>
                ) : null}
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.05)]">
                <TiltCard strength={10}>
                  <div className="relative aspect-[16/10] w-full transition-transform duration-500 ease-out group-hover:scale-105">
                    {cs.image?.src ? (
                      <Image
                        src={cs.image.src}
                        alt={cs.image.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <PlaceholderMockup title="Mockup" />
                    )}
                  </div>
                </TiltCard>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent-teal" />
            <h3 className="text-lg font-semibold text-white">I vibe code too</h3>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {VIBE_CODE_PROJECTS.map((p) => {
              const icon = p.github ? <Github size={16} /> : <ExternalLink size={16} />;
              const href = p.github ?? p.href ?? "#";

              return (
                <motion.a
                  key={p.id}
                  variants={item}
                  href={href}
                  className="group relative flex min-h-[168px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:border-white/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-white">{p.title}</h4>
                      {p.description ? (
                        <p className="text-sm leading-6 text-zinc-400">
                          {p.description}
                        </p>
                      ) : null}
                    </div>

                    <span className="rounded-md p-2 text-white/50 transition-colors group-hover:text-white/90">
                      {icon}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
