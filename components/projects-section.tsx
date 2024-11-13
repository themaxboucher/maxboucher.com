import ProjectCard from "./project-card";
import byttScreenshot from "@/public/images/best-yt-thumbnails.png";
import rhScreenshot from "@/public/images/rick-hu.png";
import ccaScreenshot from "@/public/images/ccathletics.png";
import facScreenshot from "@/public/images/fifth-avenue-club.png";
import tbScreenshot from "@/public/images/toolbox.png";
import WWLogo from "./logos/projects/ww-logo";
import RHLogo from "./logos/projects/rh-logo";
import BYTTLogo from "./logos/projects/bytt-logo";
import CCALogo from "./logos/projects/cca-logo";
import FACLogo from "./logos/projects/fac-logo";
import TBLogo from "./logos/projects/tb-logo";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h2 className="font-mono uppercase tracking-wide text-center mb-12 md:mb-16">
        Projects
      </h2>
      <div className="flex flex-col justify-around gap-10 md:gap-20">
        <ProjectCard
          logo={<WWLogo />}
          title="WalletWiz"
          description="Income and expenses tracker that makes budgeting easy."
          github="https://github.com/themaxboucher/walletwiz"
        />
        <ProjectCard
          logo={<BYTTLogo />}
          title="Best YT Thumbnails"
          date="May 2024"
          description="Inspiration website for designing eye catching YouTube thumbnails."
          url="https://best-yt-thumbnails.vercel.app"
          github="https://github.com/themaxboucher/best-yt-thumbnails"
          image={byttScreenshot}
        />
        <ProjectCard
          logo={<RHLogo />}
          title="Rick Hu"
          date="June 2024"
          description="Professional website for a public speaker and coach."
          url="https://www.rickhu.com/"
          image={rhScreenshot}
        />
        <ProjectCard
          logo={<CCALogo />}
          title="Capital City Athletics"
          date="Dec 2023"
          description="Marketing website for an Edmonton functional fitness gym."
          url="https://www.ccathletics.ca/"
          image={ccaScreenshot}
        />
        <ProjectCard
          logo={<FACLogo />}
          title="Fifth Avenue Club"
          date="Sep 2023"
          description="Marketing website for a downtown Calgary fitness club."
          url="https://www.fifthavenueclub.ca/"
          image={facScreenshot}
        />
        <ProjectCard
          logo={<TBLogo />}
          title="Toolbox"
          date="Aug 2023"
          description="Directory website for AI apps and tools built with React.js."
          url="https://toolbox-phi-three.vercel.app/"
          github={"https://github.com/themaxboucher/ToolBox"}
          image={tbScreenshot}
        />
      </div>
    </section>
  );
}
