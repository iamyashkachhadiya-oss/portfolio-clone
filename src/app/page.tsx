import { FloatingDock } from "@/components/FloatingDock";
import { Hero } from "@/components/sections/Hero";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Certifications } from "@/components/sections/Certifications";
import { ToolsCloud } from "@/components/sections/ToolsCloud";
import { CapabilitiesReveal } from "@/components/sections/CapabilitiesReveal";
import { RecommendationsMasonry } from "@/components/sections/RecommendationsMasonry";
import { Resume } from "@/components/sections/Resume";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen pb-40">
      <Hero name="Yash Kachhadiya" />

      <WorkExperience />

      <Certifications />

      <ToolsCloud />
      <CapabilitiesReveal />
      <RecommendationsMasonry />

      <Resume />
      <About />

      <FloatingDock delay={0.85} />
    </main>
  );
}
