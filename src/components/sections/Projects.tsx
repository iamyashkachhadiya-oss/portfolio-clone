"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Star, 
  Calendar,
  Grid3x3,
  Eye
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  category: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Fabric Allocation Method",
    description: "Advanced optimization system for efficient fabric allocation in textile mills, reducing waste and improving production efficiency.",
    image: "/projects/fabric-allocation/preview.jpg",
    tech: ["Python", "Linear Programming", "React", "PostgreSQL", "Pandas"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2024,
    category: "Enterprise",
    featured: true
  },
  {
    id: "2",
    title: "Crypto Trading Platform",
    description: "Real-time cryptocurrency trading platform with advanced analytics, portfolio management, and automated trading strategies.",
    image: "/projects/crypto-trading/preview.jpg",
    tech: ["React", "Node.js", "WebSocket", "MongoDB", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2024,
    category: "Platform",
    featured: true
  },
  {
    id: "3",
    title: "Textile Mill Website",
    description: "Modern responsive website for textile mill with product catalog, order management, and customer portal integration.",
    image: "/projects/textile-website/preview.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2023,
    category: "Web",
    featured: false
  },
  {
    id: "4",
    title: "Sales Forecasting Platform",
    description: "AI-powered sales forecasting platform with machine learning models for accurate revenue predictions and trend analysis.",
    image: "/projects/sales-forecasting/preview.jpg",
    tech: ["Python", "TensorFlow", "FastAPI", "React", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2024,
    category: "AI",
    featured: false
  },
  {
    id: "5",
    title: "Analytics Platform",
    description: "Real-time data visualization and business intelligence platform for enterprise clients.",
    image: "/projects/analytics-platform/preview.jpg",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2024,
    category: "Enterprise",
    featured: false
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"featured" | "grid">("featured");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  const featuredProjects = projects.filter(p => p.featured);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  }, [featuredProjects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  }, [featuredProjects.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [nextProject]);

  const currentFeatured = featuredProjects[currentIndex];

  // Debug logging
  useEffect(() => {
    console.log('Current featured project:', currentFeatured);
    console.log('Current featured image path:', currentFeatured?.image);
  }, [currentFeatured]);

  return (
    <section id="projects" className="relative py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Test Image Display */}
        <div className="mb-8 p-4 bg-zinc-800 rounded-lg">
          <h3 className="text-white mb-4">Image Test:</h3>
          <div className="grid grid-cols-5 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="text-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-20 h-20 object-cover rounded mb-2"
                  onError={(e) => console.error('Test failed:', project.image)}
                  onLoad={() => console.log('Test loaded:', project.image)}
                />
                <p className="text-xs text-zinc-400">{project.title.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Product Portfolio
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative products and solutions that demonstrate strategic thinking, 
            user-centered design, and data-driven product development.
          </p>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50 backdrop-blur-sm">
            <button
              onClick={() => setViewMode("featured")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                viewMode === "featured"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Featured
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Grid3x3 className="w-4 h-4 inline mr-2" />
              All Projects
            </button>
          </div>
        </motion.div>

        {/* Featured View */}
        {viewMode === "featured" && (
          <div className="mb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatured.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto md:min-h-[500px] overflow-hidden bg-zinc-800">
                      <img
                        src={currentFeatured.image}
                        alt={currentFeatured.title}
                        className="w-full h-full object-cover"
                        style={{ minHeight: '300px', backgroundColor: '#1f2937' }}
                        onError={(e) => {
                          console.error('Image failed to load:', currentFeatured.image);
                          const target = e.target as HTMLImageElement;
                          target.src = '/projects/crypto-trading/preview.jpg'; // fallback image
                        }}
                        onLoad={() => {
                          console.log('Image loaded successfully:', currentFeatured.image);
                        }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm text-blue-400 font-medium">
                            {currentFeatured.category}
                          </span>
                          <span className="text-sm text-zinc-500">
                            {currentFeatured.year}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {currentFeatured.title}
                        </h3>
                        
                        <p className="text-zinc-400 leading-relaxed mb-8">
                          {currentFeatured.description}
                        </p>
                      </div>
                      
                      {/* Technology */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {currentFeatured.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-4">
                        <a
                          href={currentFeatured.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
                        >
                          <ExternalLink className="w-4 h-4 inline mr-2" />
                          View Project
                        </a>
                        <a
                          href={currentFeatured.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-zinc-800 text-white rounded-lg font-medium border border-zinc-700 hover:bg-zinc-700 transition-colors"
                        >
                          <Github className="w-4 h-4 inline mr-2" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <button
                onClick={prevProject}
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-zinc-600 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                        : "bg-zinc-700 hover:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-zinc-600 hover:text-white transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="mb-20">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { id: null, label: "All", count: projects.length },
                { id: "Enterprise", label: "Enterprise", count: projects.filter(p => p.category === "Enterprise").length },
                { id: "Platform", label: "Platform", count: projects.filter(p => p.category === "Platform").length },
                { id: "Web", label: "Web", count: projects.filter(p => p.category === "Web").length },
                { id: "AI", label: "AI", count: projects.filter(p => p.category === "AI").length }
              ].map((category) => (
                <button
                  key={category.id || "all"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border transition-all text-sm ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                      : "bg-zinc-900/50 text-zinc-400 border-zinc-700 hover:border-zinc-600 hover:text-white"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-60">({category.count})</span>
                </button>
              ))}
            </div>
            
            {/* Project Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group-hover:shadow-lg group-hover:shadow-blue-500/10">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-zinc-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ minHeight: '200px', backgroundColor: '#1f2937' }}
                        onError={(e) => {
                          console.error('Grid image failed to load:', project.image);
                          const target = e.target as HTMLImageElement;
                          target.src = '/projects/crypto-trading/preview.jpg'; // fallback image
                        }}
                        onLoad={() => {
                          console.log('Grid image loaded successfully:', project.image);
                        }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-blue-400 font-medium uppercase tracking-wide">
                          {project.category}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {project.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-6">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded text-xs text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-500">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
                        >
                          View
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 bg-zinc-800 text-white rounded-lg text-sm font-medium border border-zinc-700 hover:bg-zinc-700 transition-colors"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Product Management Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-16 border-t border-zinc-800"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <blockquote className="text-lg sm:text-xl text-zinc-300 italic leading-relaxed">
              "Great product management is about understanding the user's needs deeply and translating them into products that solve real problems."
            </blockquote>
            
            <div className="text-sm text-zinc-500">
              <p className="mb-2">From ideation to execution - driving product excellence through data-driven decisions and user-focused innovation.</p>
              <p>Bridging textile industry expertise with modern technology to create innovative solutions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
