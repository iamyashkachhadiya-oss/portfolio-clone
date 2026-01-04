"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-transparent to-black/50 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center space-y-8">
          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Gratitude</span>
              <Heart className="w-4 h-4 text-blue-400" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Thank You
              </span>
            </h2>

            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-semibold text-white">
                Mogembo Kush Huva
              </p>
              <p className="text-base sm:text-lg text-white/60">
                May you be blessed with peace and prosperity
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center gap-8 text-white/40"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-xs">Made with</span>
              <Heart className="w-3 h-3 text-red-400" />
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-xs">Crafted by</span>
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-medium">Yash Kachhadiya</span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="text-xs text-white/30">
              © 2024 Yash Kachhadiya. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
