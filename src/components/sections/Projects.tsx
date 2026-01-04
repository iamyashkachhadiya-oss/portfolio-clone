"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft,
  ExternalLink, 
  Github, 
  Star, 
  Users, 
  Calendar, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Code2, 
  Globe,
  Play,
  Pause,
  Maximize2,
  Layers,
  Eye,
  Heart,
  Trophy,
  Rocket,
  Diamond,
  Flame,
  Zap as Lightning,
  Crown,
  Shield,
  Award,
  Target,
  Infinity,
  Gem
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

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
    views?: string;
    likes?: number;
    revenue?: string;
  };
  category: "web" | "mobile" | "ai" | "design";
  icon: React.ReactNode;
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";
  impact: "high" | "medium" | "low";
  premium: boolean;
};

const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights and predictive analytics for business intelligence.",
    image: "/projects/ai-analytics-dashboard/hero.png",
    tech: ["React", "TypeScript", "Python", "TensorFlow", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: {
      stars: 234,
      users: "10K+",
      date: "2024",
      growth: "+45%",
      views: "50K+",
      likes: 892,
      revenue: "$125K"
    },
    category: "ai",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500" />,
    difficulty: "expert",
    impact: "high",
    premium: true
  },
  {
    id: "2",
    title: "E-Commerce Mobile App",
    description: "Cross-platform mobile application with AR product preview, secure payments, and real-time inventory management.",
    image: "/projects/ecommerce-mobile/app-screen-1.png",
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: {
      stars: 189,
      users: "25K+",
      date: "2024",
      growth: "+67%",
      views: "120K+",
      likes: 1456,
      revenue: "$89K"
    },
    category: "mobile",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500" />,
    difficulty: "advanced",
    impact: "high",
    premium: true
  },
  {
    id: "3",
    title: "Design System Components",
    description: "Comprehensive UI component library with advanced theming, accessibility features, and developer experience optimizations.",
    image: "/projects/design-system/component-library.png",
    tech: ["Vue.js", "TypeScript", "Storybook", "Tailwind CSS", "Jest"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: {
      stars: 456,
      users: "50K+",
      date: "2023",
      growth: "+89%",
      views: "200K+",
      likes: 2341,
      revenue: "$45K"
    },
    category: "design",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />,
    difficulty: "intermediate",
    impact: "medium",
    premium: false
  },
  {
    id: "4",
    title: "Blockchain Supply Chain",
    description: "Decentralized supply chain management system with smart contracts, real-time tracking, and immutable record keeping.",
    image: "/projects/blockchain-supply-chain/dashboard.png",
    tech: ["Solidity", "Web3.js", "React", "IPFS", "Hardhat"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: {
      stars: 167,
      users: "5K+",
      date: "2023",
      growth: "+34%",
      views: "30K+",
      likes: 567,
      revenue: "$67K"
    },
    category: "web",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500" />,
    difficulty: "expert",
    impact: "medium",
    premium: true
  },
  {
    id: "5",
    title: "AI Chat Application",
    description: "Intelligent conversational interface with natural language processing, context awareness, and multi-language support.",
    image: "/projects/chat-application/interface.png",
    tech: ["Python", "FastAPI", "React", "OpenAI", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: {
      stars: 298,
      users: "15K+",
      date: "2024",
      growth: "+78%",
      views: "80K+",
      likes: 1234,
      revenue: "$156K"
    },
    category: "ai",
    icon: <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" />,
    difficulty: "advanced",
    impact: "high",
    premium: true
  }
];

const categoryColors = {
  web: "from-blue-500 to-cyan-500",
  mobile: "from-purple-500 to-pink-500",
  ai: "from-orange-500 to-red-500",
  design: "from-green-500 to-emerald-500"
};

const difficultyColors = {
  beginner: "from-green-400 to-emerald-500",
  intermediate: "from-yellow-400 to-orange-500",
  advanced: "from-orange-500 to-red-500",
  expert: "from-red-500 to-purple-600"
};

const impactColors = {
  low: "from-gray-400 to-gray-600",
  medium: "from-blue-400 to-indigo-500",
  high: "from-purple-500 to-pink-500"
};

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying, nextProject]);

  const currentProject = filteredProjects[currentIndex];

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-32">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: 999999,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: 999999,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-purple-500/30 rounded-full blur-3xl"
        />
        
        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: 999999,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-32">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
            <Gem className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium tracking-wider">PREMIUM PORTFOLIO</span>
            <Crown className="w-5 h-5 text-blue-400" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Million Dollar
            </span>
            <br />
            <span className="text-white">Creations</span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            Award-winning projects that showcase cutting-edge technology, innovative design thinking, 
            and exceptional user experiences that have generated significant impact and revenue.
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <motion.button
              onClick={() => setViewMode("showcase")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                viewMode === "showcase"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Maximize2 className="w-4 h-4 mr-2" />
              Showcase
            </motion.button>
            <motion.button
              onClick={() => setViewMode("grid")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4 mr-2" />
              Grid View
            </motion.button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { id: null, label: "All Projects", icon: <Layers className="w-4 h-4" />, count: projects.length },
            { id: "web", label: "Web Apps", icon: <Globe className="w-4 h-4" />, count: projects.filter(p => p.category === "web").length },
            { id: "mobile", label: "Mobile", icon: <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-500 to-pink-500" />, count: projects.filter(p => p.category === "mobile").length },
            { id: "ai", label: "AI/ML", icon: <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-500 to-red-500" />, count: projects.filter(p => p.category === "ai").length },
            { id: "design", label: "Design", icon: <div className="w-4 h-4 rounded bg-gradient-to-br from-green-500 to-emerald-500" />, count: projects.filter(p => p.category === "design").length }
          ].map((category) => (
            <motion.button
              key={category.id || "all"}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentIndex(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 border-white/20 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {category.icon}
              <span className="text-sm font-medium">{category.label}</span>
              <div className="px-2 py-0.5 rounded-full bg-white/10 text-xs">
                {category.count}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content Area */}
        {viewMode === "showcase" ? (
          /* Showcase Mode */
          <motion.div
            className="relative mb-20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 400, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -400, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative"
              >
                {/* Premium Project Card */}
                <div className="relative group">
                  {/* Premium Glow Effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${categoryColors[currentProject.category]} rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  {/* Main Card */}
                  <div className="relative bg-black/60 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Premium Banner */}
                    {currentProject.premium && (
                      <div className="absolute top-0 left-0 right-0 z-20">
                        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border-b border-yellow-500/30 px-6 py-2">
                          <div className="flex items-center justify-center gap-2">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-xs font-medium text-yellow-300 uppercase tracking-wider">Premium Project</span>
                            <Crown className="w-4 h-4 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Image Section */}
                    <div className="relative h-[500px] sm:h-[600px] overflow-hidden">
                      <Image
                        src={currentProject.image}
                        alt={currentProject.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 100vw, 100vw"
                      />
                      
                      {/* Premium Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {/* Floating Stats Cards */}
                      <div className="absolute top-6 right-6 space-y-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg"
                        >
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-white font-bold">{currentProject.stats.views}</span>
                          </div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -2 }}
                          className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg"
                        >
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-400" />
                            <span className="text-sm text-white font-bold">{currentProject.stats.likes}</span>
                          </div>
                        </motion.div>
                        {currentProject.stats.revenue && (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30 shadow-lg"
                          >
                            <div className="flex items-center gap-2">
                              <Trophy className="w-4 h-4 text-green-400" />
                              <span className="text-sm text-white font-bold">{currentProject.stats.revenue}</span>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[currentProject.category]} border border-white/20 shadow-lg`}>
                          {currentProject.icon}
                          <span className="text-sm text-white font-bold uppercase tracking-wider">
                            {currentProject.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Premium Badges */}
                      <div className="absolute bottom-6 left-6 flex gap-3">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${difficultyColors[currentProject.difficulty]} border border-white/20 shadow-lg`}>
                          <Lightning className="w-3 h-3 text-white" />
                          <span className="text-xs text-white font-bold">{currentProject.difficulty}</span>
                        </div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${impactColors[currentProject.impact]} border border-white/20 shadow-lg`}>
                          <Target className="w-3 h-3 text-white" />
                          <span className="text-xs text-white font-bold">{currentProject.impact} impact</span>
                        </div>
                        {currentProject.featured && (
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 border border-white/20 shadow-lg">
                            <Star className="w-3 h-3 text-white" />
                            <span className="text-xs text-white font-bold">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 sm:p-12 space-y-8">
                      {/* Title and Description */}
                      <div className="space-y-6">
                        <h3 className="text-4xl sm:text-5xl font-bold text-white">
                          {currentProject.title}
                        </h3>
                        <p className="text-xl text-white/70 leading-relaxed">
                          {currentProject.description}
                        </p>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider">Technology Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {currentProject.tech.map((tech) => (
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 shadow-lg"
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Premium Stats Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="text-3xl font-bold text-white">{currentProject.stats.stars}</span>
                          </div>
                          <span className="text-sm text-white/50 font-medium">GitHub Stars</span>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <Users className="w-5 h-5 text-blue-400" />
                            <span className="text-3xl font-bold text-white">{currentProject.stats.users}</span>
                          </div>
                          <span className="text-sm text-white/50 font-medium">Active Users</span>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <Calendar className="w-5 h-5 text-green-400" />
                            <span className="text-3xl font-bold text-white">{currentProject.stats.date}</span>
                          </div>
                          <span className="text-sm text-white/50 font-medium">Launched</span>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-purple-400" />
                            <span className="text-3xl font-bold text-white">{currentProject.stats.growth}</span>
                          </div>
                          <span className="text-sm text-white/50 font-medium">Growth Rate</span>
                        </div>
                      </div>
                      
                      {/* Premium Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-6">
                        <motion.a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>View Live Project</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </motion.a>
                        
                        <motion.a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Source Code</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Grid View */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${categoryColors[project.category]} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                
                {/* Card */}
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Premium Badge */}
                    {project.premium && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 rounded-full">
                          <Crown className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-white/70">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-blue-400" />
                        <span className="text-white/70">{project.stats.users}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-white/70">{project.stats.growth}</span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white text-sm font-medium hover:bg-purple-500/30 transition-colors"
                      >
                        Live
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 text-center py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Premium Navigation Controls (Showcase Mode) */}
        {viewMode === "showcase" && (
          <div className="flex items-center justify-center gap-8">
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {filteredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.7 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-12 bg-gradient-to-r from-purple-500 to-blue-500"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </motion.button>
            </div>
            
            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        )}

        {/* Premium Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-3">{projects.length}</div>
            <div className="text-sm text-white/50 font-medium">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-3">{projects.filter(p => p.featured).length}</div>
            <div className="text-sm text-white/50 font-medium">Featured</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-3">{projects.reduce((acc, p) => acc + (p.stats.stars || 0), 0)}</div>
            <div className="text-sm text-white/50 font-medium">Total Stars</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-3">{projects.filter(p => p.premium).length}</div>
            <div className="text-sm text-white/50 font-medium">Premium</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
