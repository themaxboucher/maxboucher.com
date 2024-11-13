import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/layout/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/layout/skills-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
