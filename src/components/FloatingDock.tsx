"use client";

import { motion } from "framer-motion";
import { Home, FileText, User, Briefcase } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Magnetic } from "@/components/ui/magnetic";

type DockItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
};

export function FloatingDock({ delay = 0.6 }: { delay?: number }) {
  const items: DockItem[] = useMemo(
    () => [
      { id: "home", label: "Home", href: "#home", icon: <Home size={16} /> },
      { id: "work", label: "Work", href: "#work", icon: <FileText size={16} /> },
      { id: "projects", label: "Projects", href: "#projects", icon: <Briefcase size={16} /> },
      { id: "resume", label: "Resume", href: "#resume", icon: <FileText size={16} /> },
      { id: "about", label: "About", href: "#about", icon: <User size={16} /> },
    ],
    [],
  );

  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // Also handle scroll-based detection for better responsiveness
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15, delay }}
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-6"
      aria-label="Primary"
    >
      <div className="relative flex items-center gap-0.5 rounded-2xl border border-white/12 bg-white/5 px-1.5 py-1.5 sm:gap-1 sm:px-2 sm:py-2 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.28),0_2px_8px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <Magnetic key={item.id} strength={0.15} radius={70}>
              <a
                href={item.href}
                onClick={() => setActiveId(item.id)}
                className="relative select-none"
              >
                {/* Active pill */}
                {isActive && (
                  <motion.span
                    layoutId="dock-active-pill"
                    className="absolute inset-0 rounded-xl bg-white/90"
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  />
                )}

                <span
                  className="relative flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-medium transition-all duration-250 ease-out sm:gap-2 sm:px-5 sm:py-2 sm:text-[12.5px]"
                  style={{
                    color: isActive ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.55)",
                  }}
                >
                  <span
                    className="transition-opacity duration-200"
                    style={{ opacity: isActive ? 0.9 : 0.6 }}
                  >
                    {item.icon}
                  </span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              </a>
            </Magnetic>
          );
        })}
      </div>
    </motion.nav>
  );
}