import { FloatingDock } from "@/components/FloatingDock";
import { Hero } from "@/components/sections/Hero";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { ToolsCloud } from "@/components/sections/ToolsCloud";
import { CapabilitiesReveal } from "@/components/sections/CapabilitiesReveal";
import { RecommendationsMasonry } from "@/components/sections/RecommendationsMasonry";
import { Resume } from "@/components/sections/Resume";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pb-40">
      <Hero name="Yash Kachhadiya" />

      <WorkExperience />

      <Education />

      <Certifications />

      <ToolsCloud />
      <CapabilitiesReveal />
      <RecommendationsMasonry />

      <Resume />
      <About />

      <Footer />

      <FloatingDock delay={0.85} />
    </main>
  );
}
