import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/layout/hero-section";
import ProjectsSection from "@/components/layout/projects-section";
import SkillsSection from "@/components/layout/skills-section";
import BentoGrid from "@/components/layout/bento-grid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <BentoGrid />
      </main>
      <Footer />
    </>
  );
}
