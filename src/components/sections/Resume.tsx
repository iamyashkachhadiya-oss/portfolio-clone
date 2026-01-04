"use client";

import { motion } from "framer-motion";
import { Download, FileText, Briefcase } from "lucide-react";
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl" />

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
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Get My Resume
          </h2>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
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
            className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden min-w-[200px] sm:min-w-[280px]"
          >
            {/* Progress bar overlay */}
            {isDownloading && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${downloadProgress}%` }}
                transition={{ duration: 0.1 }}
                className="absolute bottom-0 left-0 h-1 bg-white/30"
              />
            )}

            {/* Content */}
            <div className="relative flex items-center gap-2 sm:gap-3">
              {/* Icon with animation */}
              <motion.div
                animate={isDownloading ? { rotate: [0, 360] } : {}}
                transition={{ 
                  duration: 1, 
                  ease: "linear", 
                  repeat: isDownloading ? Infinity : 0
                }}
              >
                <FileText size={20} className="sm:size-24" />
              </motion.div>

              {/* Text */}
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-base font-bold">
                  {isDownloading ? `Downloading... ${downloadProgress}%` : 'Download Resume'}
                </span>
                {!isDownloading && (
                  <span className="text-xs text-white/70">PDF • 2.5 MB</span>
                )}
              </div>

              {/* Download icon */}
              <motion.div
                animate={isDownloading ? { y: [0, -2, 0] } : {}}
                transition={{ 
                  duration: 0.5, 
                  repeat: isDownloading ? Infinity : 0
                }}
              >
                <Download size={16} className="sm:size-20" />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>

        {/* Resume Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-zinc-500">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-zinc-500">Projects Completed</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">9.17</div>
                <div className="text-sm text-zinc-500">GPA Score</div>
              </div>
            </motion.div>
          </div>

          {/* Management Skills */}
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Management & Business Skills</h3>
              <p className="text-zinc-500 text-sm">Core competencies</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "Project Management",
                "Product Strategy", 
                "Team Leadership",
                "Business Analytics",
                "Entrepreneurship",
                "Market Research",
                "Stakeholder Mgmt",
                "Agile Methods"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-3 text-center">
                    <div className="text-xs sm:text-sm font-medium text-white">{skill}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href="mailto:yashkachhadiyawork@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-all duration-300">
                <img 
                  src="/logos/gmail-logo.png" 
                  alt="Gmail" 
                  className="w-6 h-6"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }}
                />
                <span className="text-red-500 text-xl font-bold" style={{display: 'none'}}>G</span>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-all duration-300">
                <img 
                  src="/logos/instagram-logo.png" 
                  alt="Instagram" 
                  className="w-6 h-6"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }}
                />
                <span className="text-pink-500 text-xl" style={{display: 'none'}}>📷</span>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/yash-kachhadiya-0275832a4/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-all duration-300">
                <img 
                  src="/logos/linkedin-logo.png" 
                  alt="LinkedIn" 
                  className="w-6 h-6"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }}
                />
                <span className="text-blue-500 text-xl font-bold" style={{display: 'none'}}>in</span>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>PDF Format</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Updated 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>Print Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>ATS-Friendly</span>
            </div>
          </div>
          
          <p className="text-xs text-zinc-600 px-4">
            For recruitment inquiries, feel free to reach out directly
          </p>
        </motion.div>
      </div>
    </section>
  );
}
