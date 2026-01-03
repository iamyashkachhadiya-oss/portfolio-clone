"use client";

import { motion } from "framer-motion";
import { Download, FileText, Sparkles, Zap, ArrowRight, Briefcase, Star } from "lucide-react";
import { useState } from "react";

export function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Simulate download progress
    const progressInterval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    try {
      // Create a link to your resume file
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Yash-Kachhadiya-Resume.pdf';
      link.target = '_blank'; // Open in new tab as backup
      
      // Add to DOM and click
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        setDownloadProgress(100);
        setTimeout(() => {
          setIsDownloading(false);
          setDownloadProgress(0);
        }, 500);
      }, 100);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new window
      window.open('/resume.pdf', '_blank');
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  return (
    <section id="resume" className="relative mx-auto w-full max-w-4xl px-4 py-16 scroll-mt-20 sm:px-6 sm:py-20 sm:scroll-mt-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 space-y-8 sm:space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm"
          >
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">RESUME</span>
            <Star className="w-4 h-4 text-purple-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Get My Resume
            </span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
        </motion.div>

        {/* Main Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isDownloading}
            className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 sm:px-12 sm:py-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden min-w-[280px] sm:min-w-[320px]"
          >
            {/* Animated background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* Progress bar overlay */}
            {isDownloading && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${downloadProgress}%` }}
                transition={{ duration: 0.1 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-blue-400"
              />
            )}

            {/* Content */}
            <div className="relative flex items-center gap-3 sm:gap-4">
              {/* Icon with animation */}
              <motion.div
                animate={isDownloading ? { rotate: [0, 360] } : { rotate: [0, 10, -10, 0] }}
                transition={{ 
                  duration: isDownloading ? 1 : 0.1, 
                  ease: "linear", 
                  repeat: isDownloading ? Infinity : 3,
                  repeatDelay: isDownloading ? 0 : 2
                }}
                className="relative"
              >
                <FileText size={24} className="sm:size-28" />
                {/* Download particles */}
                {isDownloading && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      className="absolute -top-2 -right-2 w-2 h-2 bg-green-400 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      className="absolute -top-1 -left-2 w-1.5 h-1.5 bg-blue-400 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                      className="absolute -bottom-2 right-1 w-1 h-1 bg-purple-400 rounded-full"
                    />
                  </>
                )}
              </motion.div>

              {/* Text */}
              <div className="flex flex-col items-center">
                <span className="text-base sm:text-lg font-bold">
                  {isDownloading ? `Downloading... ${downloadProgress}%` : 'Download Resume'}
                </span>
                {!isDownloading && (
                  <span className="text-xs text-white/70">PDF • 2.5 MB</span>
                )}
              </div>

              {/* Download icon */}
              <motion.div
                animate={isDownloading ? { y: [0, -2, 0] } : { x: [0, 2, 0] }}
                transition={{ 
                  duration: 0.5, 
                  repeat: isDownloading ? Infinity : 1,
                  repeatDelay: isDownloading ? 0 : 2
                }}
              >
                <Download size={20} className="sm:size-24" />
              </motion.div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/20" />
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute bottom-2 left-3 w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-white/20" />
          </motion.button>
        </motion.div>

        {/* Cool Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Resume Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-white/70">Projects Completed</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                <div className="text-3xl font-bold text-white mb-2">9.17</div>
                <div className="text-sm text-white/70">GPA Score</div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Skills Showcase */}
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Management & Business Skills</h3>
              <p className="text-white/60 text-sm">Hover to see proficiency levels</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "Project Management", level: 95, color: "from-purple-500 to-pink-500" },
                { name: "Product Strategy", level: 88, color: "from-blue-500 to-indigo-500" },
                { name: "Team Leadership", level: 92, color: "from-green-500 to-emerald-500" },
                { name: "Business Analytics", level: 85, color: "from-orange-500 to-red-500" },
                { name: "Entrepreneurship", level: 90, color: "from-yellow-500 to-orange-500" },
                { name: "Market Research", level: 82, color: "from-cyan-500 to-blue-500" },
                { name: "Stakeholder Mgmt", level: 87, color: "from-purple-500 to-blue-500" },
                { name: "Agile Methods", level: 93, color: "from-green-500 to-lime-500" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-xs sm:text-sm font-medium text-white mb-2">{skill.name}</div>
                    <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                    <div className="text-xs text-white/50 mt-1">{skill.level}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✉</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Email Me</div>
                    <div className="text-xs text-white/60">your.email@example.com</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">💼</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">LinkedIn</div>
                    <div className="text-xs text-white/60">Connect with me</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>PDF Format</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>Updated 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Print Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>ATS-Friendly</span>
            </div>
          </div>
          
          <p className="text-xs text-white/40 px-4">
            For recruitment inquiries, feel free to reach out directly
          </p>
        </motion.div>
      </div>
    </section>
  );
}
