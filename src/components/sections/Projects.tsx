"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Star, Users, Calendar, TrendingUp, Sparkles, Zap, Code2, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stats: {
    stars?: number;
    users?: string;
    date: string;
    growth?: string;
  };
  category: "web" | "mobile" | "ai" | "design";
  icon: React.ReactNode;
};

const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights and predictive analytics for business intelligence.",
    image: "/api/placeholder/600/400",
    tech: ["React", "TypeScript", "Python", "TensorFlow", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: {
      stars: 234,
      users: "10K+",
      date: "2024",
      growth: "+45%"
    },
    category: "ai",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500" />
  },
  {
    id: "2",
    title: "E-Commerce Mobile App",
    description: "Cross-platform mobile application with AR product preview, secure payments, and real-time inventory management.",
    image: "/api/placeholder/600/400",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: {
      stars: 189,
      users: "5K+",
      date: "2024",
      growth: "+32%"
    },
    category: "mobile",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
  },
  {
    id: "3",
    title: "Collaborative Design System",
    description: "Component library and design system with real-time collaboration, version control, and automated testing.",
    image: "/api/placeholder/600/400",
    tech: ["Vue.js", "Figma API", "Storybook", "Jest"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: {
      stars: 156,
      users: "3K+",
      date: "2023",
      growth: "+28%"
    },
    category: "design",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500" />
  },
  {
    id: "4",
    title: "Blockchain Supply Chain",
    description: "Decentralized supply chain management platform with smart contracts, real-time tracking, and IoT integration.",
    image: "/api/placeholder/600/400",
    tech: ["Solidity", "Web3.js", "React", "IPFS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: {
      stars: 98,
      users: "1K+",
      date: "2023",
      growth: "+15%"
    },
    category: "web",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
  },
  {
    id: "5",
    title: "Real-Time Chat Application",
    description: "Scalable messaging platform with end-to-end encryption, video calls, and AI-powered message suggestions.",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "Socket.io", "WebRTC", "OpenAI API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: {
      stars: 312,
      users: "15K+",
      date: "2024",
      growth: "+67%"
    },
    category: "web",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />
  }
];

const categoryColors = {
  web: "from-blue-500 to-cyan-500",
  mobile: "from-purple-500 to-pink-500", 
  ai: "from-orange-500 to-red-500",
  design: "from-green-500 to-emerald-500"
};

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const currentProject = projects[currentIndex];
  const totalProjects = projects.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalProjects]);

  // Manual navigation
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Scroll-based progress
  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="projects" className="relative min-h-screen w-full max-w-7xl mx-auto px-4 py-16 scroll-mt-20 sm:px-6 sm:py-20 sm:scroll-mt-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-16 sm:mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">Project Showcase</span>
          <Zap className="w-4 h-4 text-blue-400" />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Innovation in Action
          </span>
        </h2>
        
        <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
          Explore my latest projects with an interactive showcase featuring cutting-edge technologies
          and creative solutions.
        </p>
      </motion.div>

      {/* Slider Container */}
      <div ref={sliderRef} className="relative z-10">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            style={{ scaleX }}
          />
        </div>

        {/* Main Slider */}
        <div className="relative overflow-hidden rounded-3xl">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{ x: `-${currentIndex * 100}%` }}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="w-full flex-shrink-0 px-4">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-4 left-4 z-20"
                    >
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-yellow-300 font-medium">Featured</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[project.category]}/20 border border-white/20 backdrop-blur-sm`}>
                      <span className="text-xs text-white font-medium capitalize">{project.category}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 sm:p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Left Column - Text Content */}
                      <div className="space-y-6">
                        {/* Icon */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                        >
                          {project.icon}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-xs text-white/50">
                          {project.stats.stars && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              <span>{project.stats.stars}</span>
                            </div>
                          )}
                          {project.stats.users && (
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{project.stats.users}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{project.stats.date}</span>
                          </div>
                          {project.stats.growth && (
                            <div className="flex items-center gap-1 text-green-400">
                              <TrendingUp className="w-3 h-3" />
                              <span>{project.stats.growth}</span>
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300"
                            >
                              <Globe className="w-4 h-4" />
                              <span className="text-sm font-medium">Live Demo</span>
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                              <Github className="w-4 h-4" />
                              <span className="text-sm font-medium">Code</span>
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Right Column - Visual */}
                      <div className="relative">
                        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                          <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} opacity-20`} />
                          <div className="absolute inset-0 bg-black/40" />
                          
                          {/* Placeholder for project image */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                              <Code2 className="w-12 h-12 text-white/50" />
                            </div>
                          </div>

                          {/* Floating elements */}
                          <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/20"
                          />
                          <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Previous Button */}
          <motion.button
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-white/40'}`} />
            <span className="text-xs text-white/60">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 text-center mt-16"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
          <div className="text-left sm:text-center">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Want to see more?
            </h4>
            <p className="text-white/60">
              Check out my GitHub for additional projects and contributions
            </p>
          </div>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
