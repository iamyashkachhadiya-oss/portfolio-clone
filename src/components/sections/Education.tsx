"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

type Education = {
  institution: string;
  location: string;
  degree: string;
  field: string;
  duration: string;
  gpa: string;
  highlights?: string[];
};

const education: Education[] = [
  {
    institution: "Gujarat Technological University (GTU)",
    location: "Surat, India",
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    duration: "2023 – 2026",
    gpa: "9.17/10",
    highlights: ["Data Structures & Algorithms", "Database Management Systems", "Python, Java, C++", "Agile Management"]
  },
  {
    institution: "Gujarat Technological University (GTU)",
    location: "Surat, India",
    degree: "Diploma in Textile Sciences & Engineering",
    field: "Textile Engineering",
    duration: "2018 – 2022",
    gpa: "8.8/10",
    highlights: ["Quality Control in Textiles", "Textile Machinery Maintenance", "Production Planning & Optimization"]
  }
];

const EducationCard = ({ education, index }: { education: Education; index: number }) => {
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
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1 sm:text-xl">{education.degree}</h3>
                  <div className="flex flex-col gap-1 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={12} />
                      <span>{education.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPA */}
              <div className="flex items-center gap-2 mb-4">
                <Award size={12} className="text-green-400" />
                <span className="text-green-400 font-semibold text-sm">GPA: {education.gpa}</span>
              </div>

              {/* Field of Study */}
              <div className="mb-4">
                <p className="text-white/80 text-sm font-medium">{education.field}</p>
              </div>

              {/* Relevant Coursework */}
              {education.highlights && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    <Award size={12} />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {education.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border border-green-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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
    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white/20 shadow-lg shadow-green-500/25"
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
      className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-50"
    />
  </motion.div>
);

export function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full max-w-7xl mx-auto px-4 py-16 scroll-mt-20 sm:px-6 sm:py-20 sm:scroll-mt-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 rounded-3xl" />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="relative z-10 text-center mb-12 sm:mb-20"
      >
        <p className="text-xs font-medium tracking-[0.22em] text-zinc-500 mb-2">
          EDUCATION
        </p>
        <h2 className="text-2xl font-bold text-white mb-4 sm:text-3xl lg:text-4xl">
          Academic Journey
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          Strong foundation in Computer Science with specialized knowledge in Textile Engineering
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500/50 via-blue-500/50 to-green-500/50" />
        
        {/* Education cards */}
        <div className="space-y-12 sm:space-y-16">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <TimelineNode index={index} total={education.length} />
              <EducationCard education={edu} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
