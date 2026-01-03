"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";
import { useRef, useState } from "react";

type WorkExperience = {
  id: string;
  role: string;
  company: string;
  impact: string;
  skills: string[];
  outcomes: string[];
  tools: string[];
  x: number;
  y: number;
};

const workExperiences: WorkExperience[] = [
  {
    id: "operations",
    role: "Operations Lead",
    company: "Patlun.Store",
    impact: "Scaled operations 3x while maintaining 99% fulfillment accuracy",
    skills: ["Operations", "Logistics"],
    outcomes: ["3x operational capacity", "99% fulfillment accuracy", "40% cost reduction"],
    tools: ["Shopify", "Analytics", "Inventory Systems"],
    x: 20,
    y: 30,
  },
  {
    id: "erp",
    role: "ERP Implementation Specialist",
    company: "Armaan Analytics",
    impact: "Deployed ERP solutions reducing manual processes by 70%",
    skills: ["ERP", "Process Optimization"],
    outcomes: ["70% manual process reduction", "5 implementation projects", "2.3x efficiency gain"],
    tools: ["SAP", "Oracle", "Custom Solutions"],
    x: 35,
    y: 45,
  },
  {
    id: "data",
    role: "Data Analyst",
    company: "The Peter Field",
    impact: "Built analytics systems driving 25% revenue growth",
    skills: ["Data", "Analytics"],
    outcomes: ["25% revenue growth", "15+ dashboards", "Real-time insights"],
    tools: ["Python", "SQL", "Tableau", "Power BI"],
    x: 50,
    y: 35,
  },
  {
    id: "product",
    role: "Product Analyst",
    company: "AI Forecasting",
    impact: "Launched AI-powered forecasting tool with 92% accuracy",
    skills: ["Product", "Data"],
    outcomes: ["92% forecast accuracy", "3 product launches", "50k+ users"],
    tools: ["React", "Python", "ML Models", "AWS"],
    x: 65,
    y: 50,
  },
  {
    id: "ai",
    role: "AI/ML Engineer",
    company: "GTU Event Lead",
    impact: "Developed ML systems improving event outcomes by 40%",
    skills: ["AI", "ML", "Leadership"],
    outcomes: ["40% outcome improvement", "500+ participants", "Industry recognition"],
    tools: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    x: 80,
    y: 35,
  },
];

const PathNode = ({ experience, isActive, onHover, index }: {
  experience: WorkExperience;
  isActive: boolean;
  onHover: (id: string | null) => void;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="absolute"
      style={{ left: `${experience.x}%`, top: `${experience.y}%` }}
      onMouseEnter={() => onHover(experience.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className={`relative cursor-pointer rounded-2xl border border-white/12 bg-white/4 backdrop-blur-xl p-6 transition-all duration-300 ${
          isActive ? "bg-white/8 border-white/20" : ""
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Connection point */}
        <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white/20 border border-white/40" />
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-white font-semibold text-lg mb-1">{experience.role}</h3>
          <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
            <Building2 size={14} />
            <span>{experience.company}</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-3">{experience.impact}</p>
          
          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded-lg bg-white/8 text-white/70 border border-white/12"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Expanded details */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/12 pt-3 mt-3 space-y-2"
            >
              <div>
                <div className="flex items-center gap-1 text-white/60 text-xs mb-1">
                  <TrendingUp size={12} />
                  <span>Key Outcomes</span>
                </div>
                <ul className="space-y-1">
                  {experience.outcomes.map((outcome) => (
                    <li key={outcome} className="text-white/80 text-xs flex items-start gap-1">
                      <span className="text-white/40 mt-0.5">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="text-white/60 text-xs mb-1">Tools</div>
                <div className="flex flex-wrap gap-1">
                  {experience.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-1.5 py-0.5 text-xs rounded bg-white/6 text-white/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ConnectionPath = ({ from, to, isActive }: {
  from: WorkExperience;
  to: WorkExperience;
  isActive: boolean;
}) => {
  const pathData = `M ${from.x}% ${from.y}% Q ${(from.x + to.x) / 2}% ${(from.y + to.y) / 2 - 10}% ${to.x}% ${to.y}%`;

  return (
    <motion.svg
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    >
      <motion.path
        d={pathData}
        fill="none"
        stroke={isActive ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"}
        strokeWidth={isActive ? 2 : 1}
        strokeDasharray={isActive ? "0" : "4 4"}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.svg>
  );
};

export function Work() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const pathOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative min-h-screen w-full max-w-7xl mx-auto px-6 py-28 scroll-mt-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl" />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <p className="text-xs font-medium tracking-[0.22em] text-zinc-500 mb-2">
          WORK JOURNEY
        </p>
        <h2 className="text-3xl font-bold text-white mb-4">
          Systems Thinking in Action
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          From operations to AI — each role builds on the last, creating connected impact across domains.
        </p>
      </motion.div>

      {/* Work journey visualization */}
      <motion.div 
        className="relative h-[600px] mx-auto max-w-5xl"
        style={{ opacity: pathOpacity }}
      >
        {/* Connection paths */}
        <svg className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }}>
          {workExperiences.map((exp, i) => {
            if (i === workExperiences.length - 1) return null;
            const next = workExperiences[i + 1];
            const isActive = hoveredNode === exp.id || hoveredNode === next.id;
            const pathData = `M ${exp.x}% ${exp.y}% Q ${(exp.x + next.x) / 2}% ${(exp.y + next.y) / 2 - 10}% ${next.x}% ${next.y}%`;
            
            return (
              <motion.path
                key={`path-${exp.id}-${next.id}`}
                d={pathData}
                fill="none"
                stroke={isActive ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? "0" : "4 4"}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            );
          })}
        </svg>

        {/* Experience nodes */}
        {workExperiences.map((experience, index) => (
          <PathNode
            key={experience.id}
            experience={experience}
            isActive={hoveredNode === experience.id}
            onHover={setHoveredNode}
            index={index}
          />
        ))}
      </motion.div>

      {/* Footer hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-16"
      >
        <p className="text-white/40 text-sm flex items-center justify-center gap-2">
          <span>Click nodes to explore details</span>
          <ArrowRight size={14} />
        </p>
      </motion.div>
    </section>
  );
}
