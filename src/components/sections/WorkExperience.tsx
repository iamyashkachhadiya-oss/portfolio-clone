"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, Calendar, MapPin, TrendingUp } from "lucide-react";
import { useRef } from "react";

type Experience = {
  company: string;
  location: string;
  position: string;
  duration: string;
  achievements: string[];
  highlights?: string[];
};

const experiences: Experience[] = [
  {
    company: "Armaan Textile Group",
    location: "Surat, India",
    position: "Associate Manager – Operations & Data Analytics",
    duration: "Jan 2025 – Present",
    highlights: ["Primary client contact", "9% improved collections", "4 new leads"],
    achievements: [
      "Acted as primary client contact, coordinating production, quality, and order requirements for 7 clients",
      "Monitored and optimized payment cycles (3–4 months typical), improving on-time collections by 9%",
      "Conducted business development through cold calls, generating 4 new leads for factory expansion",
      "Maintained client and financial databases, presenting insights during strategy reviews that improved decision-making speed by 7%"
    ]
  },
  {
    company: "Armaan Textile Group",
    location: "Surat, India",
    position: "Business Operations & Data Reporting Associate",
    duration: "Aug 2023 – Dec 2024",
    highlights: ["20% efficiency increase", "6 process improvements", "4 departments coordination"],
    achievements: [
      "Managed ERP data entry, validation, and reporting across production, quality, and finance",
      "Delivered monthly KPI reports and presentations, identifying 6 process inefficiencies and implementing improvements that increased overall factory efficiency by 20%",
      "Coordinated with 4 departments to consolidate data for decision-making, improving reporting accuracy"
    ]
  },
  {
    company: "Patlun.Store",
    location: "Surat, India",
    position: "Product Management Associate",
    duration: "Jan 2023 – July 2023",
    highlights: ["9% sales growth", "12% repeat customers", "4 hours/week time saved"],
    achievements: [
      "Coordinated retail operations, including inventory, vendor relations, and promotions, supporting 9% sales growth",
      "Analyzed offline sales and customer feedback to optimize the product mix, resulting in a 12% increase in repeat customers",
      "Built structured reporting systems that reduced leadership decision-making time by 4 hours per week"
    ]
  },
  {
    company: "The Peter Field",
    location: "Ahmedabad, India",
    position: "Co-Founder",
    duration: "Sep 2020 – Oct 2022",
    highlights: ["₹3.5 Cr revenue", "100,000+ units", "15+ team led"],
    achievements: [
      "Founded and scaled a men's fashion e-commerce venture to ₹3.5 Cr in revenue, selling 100,000+ units across India",
      "Directed end-to-end supply chain, marketing, and technology adoption, enabling 20% faster order fulfillment",
      "Built and led a 15+ member team, implementing structured KPIs, weekly performance reviews, and clear process ownership",
      "Introduced digital tools for inventory and analytics, reducing stockouts by 25% and improving operational visibility"
    ]
  },
  {
    company: "Radhe Group",
    location: "Surat, India",
    position: "Part-time Student Intern",
    duration: "Aug 2021 – Jan 2022",
    highlights: ["20+ designs weekly", "10-12 reports", "5-7 clients supported"],
    achievements: [
      "Assisted in reviewing 20+ embroidery designs weekly and analyzed how stitch types and fabric selection affected production",
      "Prepared 10–12 basic technical reports summarizing design preferences, thread usage, and fabric compatibility",
      "Supported coordination between the production team and 5–7 regular clients, helping track sample status and design specifications"
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.15, delay: index * 0.02 }}
      className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
    >
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          {/* Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-white/20 transition-all duration-300">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1 sm:text-xl">{experience.position}</h3>
                  <div className="flex flex-col gap-1 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Building2 size={12} />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              {experience.highlights && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {experience.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              {/* Achievements */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <TrendingUp size={12} />
                  <span>Key Achievements</span>
                </div>
                <ul className="space-y-1.5">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-white/70 text-xs leading-relaxed flex items-start gap-2 sm:text-sm sm:leading-relaxed">
                      <span className="text-blue-400 mt-1 text-xs">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TimelineNode = ({ index, total }: { index: number; total: number }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.15, delay: index * 0.02 }}
    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white/20 shadow-lg shadow-blue-500/25"
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50"
    />
  </motion.div>
);

export function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative min-h-screen w-full max-w-7xl mx-auto px-4 py-16 scroll-mt-20 sm:px-6 sm:py-20 sm:scroll-m-32"
      style={{ opacity: opacity as any }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl" />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="relative z-10 text-center mb-12 sm:mb-20"
      >
        <p className="text-xs font-medium tracking-[0.22em] text-zinc-500 mb-2">
          WORK EXPERIENCE
        </p>
        <h2 className="text-2xl font-bold text-white mb-4 sm:text-3xl lg:text-4xl">
          Professional Journey
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          From operations leadership to founding ventures — a path of continuous growth and impact.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50" />
        
        {/* Experience cards */}
        <div className="space-y-16 relative">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              <TimelineNode index={index} total={experiences.length} />
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="relative z-10 text-center mt-20"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
          <span className="text-white/60 text-sm">5+ years of experience</span>
          <ArrowRight size={16} className="text-white/40" />
          <span className="text-blue-400 text-sm font-medium">Continuous growth</span>
        </div>
      </motion.div>
    </section>
  );
}
