import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Figma,
  Framer,
  Github,
  Layers,
  LineChart,
  Monitor,
  Palette,
  PenTool,
  Puzzle,
  Sparkles,
} from "lucide-react";

export type ToolItem = {
  id: string;
  name: string;
  icon: LucideIcon;
  accent: "teal" | "blue" | "purple";
};

export type CapabilityWord = {
  id: string;
  word: string;
  className: string;
};

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  avatarText: string;
  quote: string;
};

export const DAILY_TOOLS: ToolItem[] = [
  { id: "figma", name: "Figma", icon: Figma, accent: "purple" },
  { id: "framer", name: "Framer", icon: Framer, accent: "blue" },
  { id: "github", name: "GitHub", icon: Github, accent: "teal" },
  { id: "code", name: "Code", icon: Code2, accent: "blue" },
  { id: "design", name: "Design Systems", icon: Layers, accent: "purple" },
  { id: "research", name: "UX", icon: PenTool, accent: "teal" },
  { id: "visual", name: "Visual", icon: Palette, accent: "purple" },
  { id: "analytics", name: "Analytics", icon: LineChart, accent: "blue" },
  { id: "qa", name: "Polish", icon: Sparkles, accent: "teal" },
  { id: "ui", name: "UI", icon: Monitor, accent: "blue" },
  { id: "systems", name: "Components", icon: Puzzle, accent: "purple" },
];

export const CAPABILITY_WORDS: CapabilityWord[] = [
  {
    id: "build",
    word: "build",
    className: "bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent",
  },
  {
    id: "analyze",
    word: "analyze",
    className: "bg-gradient-to-r from-accent-teal to-accent-blue bg-clip-text text-transparent",
  },
  {
    id: "market",
    word: "market",
    className: "bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent",
  },
  {
    id: "operate",
    word: "operate",
    className: "bg-gradient-to-r from-accent-teal via-accent-blue to-accent-purple bg-clip-text text-transparent",
  },
  {
    id: "lead",
    word: "lead",
    className: "bg-gradient-to-r from-accent-purple via-accent-blue to-accent-teal bg-clip-text text-transparent",
  },
  {
    id: "manage",
    word: "manage",
    className: "bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent",
  },
  {
    id: "scale",
    word: "scale",
    className: "bg-gradient-to-r from-accent-teal to-accent-blue bg-clip-text text-transparent",
  },
  {
    id: "raise",
    word: "raise",
    className: "bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Yogesh Gajera",
    title: "Startup Partner | Co-founder",
    avatarText: "YG",
    quote: "Yash is one of those rare people who combines execution speed with deep thinking. As startup partners, I've seen him take ownership beyond his role—whether it was solving operational chaos, understanding customers, or making tough decisions under pressure. He doesn't chase validation; he chases clarity. That mindset is what makes him a reliable builder and a long-term founder.",
  },
  {
    id: "t2",
    name: "Nileshbhai Kachhadiya",
    title: "Owner, Radhe Group | Father",
    avatarText: "NK",
    quote: "Working with Yash at Radhe Group showed me his seriousness toward responsibility and learning. Even as a student, he treated factory operations, market research, and client understanding with maturity. He never looked at work as a formality—he looked at it as a way to grow. His discipline, ethics, and respect for people are his strongest foundations.",
  },
  {
    id: "t3",
    name: "Rajani Gajera",
    title: "Operations Manager, Armaan Textile",
    avatarText: "RG",
    quote: "Yash brings structure where there is complexity. During his time at Armaan Textile, he demonstrated a strong ability to connect data with real operational decisions. His suggestions improved efficiency, reduced losses, and helped teams work more cohesively. What stood out most was his willingness to listen first, then act decisively.",
  },
  {
    id: "t4",
    name: "Chintan Gundradiya",
    title: "Founder, Cristal Textile Factory | Mentor & Friend",
    avatarText: "CG",
    quote: "Yash is someone who learns faster from failure than most people learn from success. I've mentored him closely and watched his evolution—from ambition-driven action to thoughtful, user-centered decision-making. He asks the right questions, challenges assumptions respectfully, and consistently seeks long-term value over short-term wins. He has the mindset of a modern entrepreneur.",
  },
  {
    id: "t5",
    name: "Vipul Barvaliya",
    title: "Managing Partner, Armaan Textile | Mentor",
    avatarText: "VB",
    quote: "Yash worked closely with me during a phase where learning mattered more than titles. I saw him rebuild his confidence through execution—handling retail operations, customer interactions, and process improvements with honesty and grit. He absorbs feedback fast and applies it on the ground. His growth mindset and willingness to get his hands dirty make him stand out.",
  },
  {
    id: "t6",
    name: "Dharmendra Dubey",
    title: "Principal, Shree Dhanvantary College of Engineering & Technology",
    avatarText: "DD",
    quote: "Over the last two years, I have seen Yash grow not only academically but also as a leader. He took responsibility for major cultural events, led large teams, and developed strong public speaking and anchoring skills. He has maturity beyond his age and the ability to inspire confidence in others through calm, thoughtful leadership.",
  },
];
