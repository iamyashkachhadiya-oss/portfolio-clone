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
import Image from "next/image";
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
    title: "Analytics Platform",
    description: "Real-time data visualization and business intelligence platform for enterprise clients.",
    image: "/projects/analytics-platform/preview.jpg",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2024,
    category: "Enterprise",
    featured: true
  },
  {
    id: "2",
    title: "Mobile Commerce",
    description: "E-commerce mobile application with modern UI and seamless payment integration.",
    image: "/projects/mobile-commerce/preview.jpg",
    tech: ["React Native", "Redux", "Stripe", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2024,
    category: "Mobile",
    featured: true
  },
  {
    id: "3",
    title: "Design System",
    description: "Comprehensive component library with accessibility and theming capabilities.",
    image: "/projects/design-system/preview.jpg",
    tech: ["Vue.js", "Storybook", "Sass", "Jest"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2023,
    category: "Design",
    featured: false
  },
  {
    id: "4",
    title: "Content Management",
    description: "Headless CMS with API-first architecture and real-time collaboration features.",
    image: "/projects/cms/preview.jpg",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2023,
    category: "Platform",
    featured: false
  },
  {
    id: "5",
    title: "AI Assistant",
    description: "Intelligent chat interface with natural language processing and context awareness.",
    image: "/projects/ai-assistant/preview.jpg",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: 2024,
    category: "AI",
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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects that demonstrate thoughtful design, 
            technical excellence, and attention to detail.
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
          <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("featured")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                viewMode === "featured"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Featured
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                viewMode === "grid"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
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
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto md:min-h-[500px] overflow-hidden bg-gray-100">
                      <Image
                        src={currentFeatured.image}
                        alt={currentFeatured.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm text-gray-500 font-medium">
                            {currentFeatured.category}
                          </span>
                          <span className="text-sm text-gray-400">
                            {currentFeatured.year}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                          {currentFeatured.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-8">
                          {currentFeatured.description}
                        </p>
                      </div>
                      
                      {/* Technology */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {currentFeatured.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
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
                          className="flex-1 text-center py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 inline mr-2" />
                          View Project
                        </a>
                        <a
                          href={currentFeatured.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-white text-gray-900 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
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
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
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
                        ? "w-8 bg-gray-900"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
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
                { id: "Mobile", label: "Mobile", count: projects.filter(p => p.category === "Mobile").length },
                { id: "Design", label: "Design", count: projects.filter(p => p.category === "Design").length },
                { id: "Platform", label: "Platform", count: projects.filter(p => p.category === "Platform").length },
                { id: "AI", label: "AI", count: projects.filter(p => p.category === "AI").length }
              ].map((category) => (
                <button
                  key={category.id || "all"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border transition-all text-sm ${
                    selectedCategory === category.id
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
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
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {project.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-serif text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-6">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-xs text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-xs text-gray-400">
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
                          className="flex-1 text-center py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                          View
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 bg-white text-gray-900 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
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

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-16 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-serif text-gray-900 mb-2">{projects.length}</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gray-900 mb-2">{featuredProjects.length}</div>
              <div className="text-sm text-gray-600">Featured Works</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gray-900 mb-2">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
