"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export function Resume() {
  const handleDownload = async () => {
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
      }, 100);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new window
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <section id="resume" className="mx-auto w-full max-w-4xl px-4 py-16 scroll-mt-20 sm:px-6 sm:py-20 sm:scroll-mt-32">
      <div className="space-y-8 sm:space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-xs font-medium tracking-[0.22em] text-zinc-500">
            RESUME
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Get My Resume
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative flex items-center gap-2 sm:gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1], repeatDelay: 3 }}
              >
                <FileText size={20} className="sm:size-24" />
              </motion.div>
              <span className="text-sm sm:text-base">Download Resume</span>
              <Download size={16} className="sm:size-20" />
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.01 }}
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
          </div>
          
          <p className="text-xs text-white/40 px-4">
            For recruitment inquiries, feel free to reach out directly
          </p>
        </motion.div>
      </div>
    </section>
  );
}
