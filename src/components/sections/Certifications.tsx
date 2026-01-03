"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { CERTIFICATIONS } from "@/lib/constants";

export function Certifications() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400; // Adjusted for smaller logos
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        
        // If we've reached the end, reset to start
        if (scrollLeft >= scrollWidth - clientWidth - 1) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll to next set of logos
          sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <section
      id="certifications"
      className="mx-auto w-full max-w-6xl px-6 py-28 scroll-mt-32"
    >
      <div className="space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-[0.22em] text-zinc-500">
            CREDENTIALS
          </p>
          <h3 className="text-lg font-semibold text-white">Certifications</h3>
          <p className="max-w-2xl text-zinc-400">
            Professional certifications from prestigious institutions
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Logo Slider */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.01, duration: 0.1 }}
                  className="flex-shrink-0"
                >
                  <div className="relative group">
                    {/* Logo Container */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Logo */}
                      <Image
                        src={cert.logoUrl}
                        alt={`${cert.institution} logo`}
                        width={160}
                        height={160}
                        className="relative w-28 h-28 md:w-32 md:h-32 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    {/* Institution Name */}
                    <p className="text-center mt-3 text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                      {cert.institution.split(" ")[0]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(CERTIFICATIONS.length / 5) }).map((_, index) => (
              <div
                key={index}
                className="w-8 h-1 rounded-full bg-white/10"
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-white/60">
            {CERTIFICATIONS.length}+ professional certifications
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
