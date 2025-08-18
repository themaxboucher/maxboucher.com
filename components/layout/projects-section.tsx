import ProjectCard from "../project-card";
import wwScreenshot from "@/public/images/walletwiz.png";
import byttScreenshot from "@/public/images/best-yt-thumbnails.png";
import rhScreenshot from "@/public/images/rick-hu.png";
import ccaScreenshot from "@/public/images/ccathletics.png";
import facScreenshot from "@/public/images/fifth-avenue-club.png";
import WWLogo from "../logos/projects/ww-logo";
import RHLogo from "../logos/projects/rh-logo";
import BYTTLogo from "../logos/projects/bytt-logo";
import CCALogo from "../logos/projects/cca-logo";
import FACLogo from "../logos/projects/fac-logo";
import HyperText from "../ui/hyper-text";
import BlurFade from "../ui/blur-fade";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <BlurFade inView>
        <div className="w-full flex justify-center items-center mb-12 md:mb-16">
          <HyperText
            text="Projects"
            className="font-mono uppercase tracking-wide text-center"
          />
        </div>
      </BlurFade>
      <div className="flex flex-col justify-around gap-10 md:gap-20">
        <BlurFade inView>
          <ProjectCard
            logo={<WWLogo />}
            title="WalletWiz"
            description="Income and expenses tracker that makes budgeting easy."
            url="https://www.walletwiz.io/"
            github="https://github.com/themaxboucher/walletwiz"
            image={wwScreenshot}
          />
        </BlurFade>
        <BlurFade inView>
          <ProjectCard
            logo={<BYTTLogo />}
            title="Best YT Thumbnails"
            date="May 2024"
            description="Inspiration website for designing eye catching YouTube thumbnails."
            url="https://best-yt-thumbnails.vercel.app"
            github="https://github.com/themaxboucher/best-yt-thumbnails"
            image={byttScreenshot}
          />
        </BlurFade>
        <BlurFade inView>
          <ProjectCard
            logo={<RHLogo />}
            title="Rick Hu"
            date="June 2024"
            description="Professional website for a public speaker and coach."
            url="https://www.rickhu.com/"
            image={rhScreenshot}
          />
        </BlurFade>
        <BlurFade inView>
          <ProjectCard
            logo={<CCALogo />}
            title="Capital City Athletics"
            date="Dec 2023"
            description="Marketing website for an Edmonton functional fitness gym."
            url="https://www.ccathletics.ca/"
            image={ccaScreenshot}
          />
        </BlurFade>
        <BlurFade inView>
          <ProjectCard
            logo={<FACLogo />}
            title="Fifth Avenue Club"
            date="Sep 2023"
            description="Marketing website for a downtown Calgary fitness club."
            url="https://www.fifthavenueclub.ca/"
            image={facScreenshot}
          />
        </BlurFade>
      </div>
    </section>
  );
}
