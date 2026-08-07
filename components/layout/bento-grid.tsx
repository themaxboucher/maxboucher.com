import ReactLogo from "../logos/skills/react-logo";
import TypeScriptLogo from "../logos/skills/typescript-logo";
import NextJsLogo from "../logos/skills/next-logo";
import { CardDescription, CardTitle } from "../ui/card";
import PythonLogo from "../logos/skills/python-logo";
import CppLogo from "../logos/skills/cpp-logo";
import CLogo from "../logos/skills/c-logo";
import PostgresLogo from "../logos/skills/postgresql-logo";
import PyTorchLogo from "../logos/skills/pytorch-logo";
import CUDALogo from "../logos/skills/cuda-logo";
import HFLogo from "../logos/skills/hf-logo";
import MojoLogo from "../logos/skills/mojo-logo";
import BashLogo from "../logos/skills/bash-logo";
import { AutoVideo } from "../ui/auto-video";
import { NetworkPreview } from "../ui/network-preview";
import { CodePreview } from "../ui/code-preview";
import { ExpandableCard } from "../ui/expandable-card";
import SkillBadge from "../skill-badge";
import HtmlLogo from "../logos/skills/html-logo";
import CssLogo from "../logos/skills/css-logo";
import JavaScriptLogo from "../logos/skills/javascript-logo";
import ProjectMedia from "../project-media";

function FullstackDetails() {
  return (
    <div className="space-y-4">
      <p>
        I started with HTML, CSS and JavaScript, building websites for small
        businesses.
      </p>
      <p>
        I wanted to build real web apps, not just pages, so I learned React and
        Firebase. I built small projects like a{" "}
        <a className="link">leaderboard for the best AI tools</a> (circa 2023)
        and a site for YouTube thumbnail design inspiration.
      </p>
      <p>
        From there I moved to TypeScript, Next.js, and PostgreSQL. I've built
        projects at hackathons and for the fun: Schulich Speedway and Kiwi
        Quest. Right now I'm adding features to CourseCal, an app for managing
        your university schedule, and building a React Native version for
        mobile. I'm also building projects for local charities with Code the
        Change YYC.
      </p>
    </div>
  );
}

function Details() {
  return (
    <div className="space-y-4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder for
        a longer write-up about my experience in this area of software
        engineering.
      </p>
      <p>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Swap this out with the real
        story once the layout feels right.
      </p>
    </div>
  );
}

function Header({
  title,
  description,
  logos,
}: {
  title: string;
  description: React.ReactNode;
  logos: React.ReactNode;
}) {
  return (
    <div className="grid auto-rows-min items-start gap-1">
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <div className="flex flex-wrap gap-2.5 pt-2.5">{logos}</div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="section">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-11">
          <ExpandableCard
            id="fullstack"
            className="md:col-span-6"
            mediaClassName="min-h-48 flex-1"
            dialogMediaClassName="aspect-video"
            header={
              <Header
                title="Fullstack"
                description={
                  <>
                    Building useful web apps for{" "}
                    <a href="https://www.codethechangeyyc.ca/" className="link">
                      Code the Change YYC
                    </a>{" "}
                    and for myself.
                  </>
                }
                logos={
                  <>
                    <SkillBadge icon={<HtmlLogo />} color="#F36903" name="HTML" />
                    <SkillBadge icon={<CssLogo />} color="#0094DC" name="CSS" />
                    <SkillBadge icon={<JavaScriptLogo />} color="#EBD51E" name="JavaScript" />
                    <SkillBadge icon={<TypeScriptLogo />} color="#3776AB" name="TypeScript" />
                    <SkillBadge icon={<ReactLogo />} color="#61dbfb" name="React" />
                    <SkillBadge icon={<NextJsLogo />} color="#FFFFFF" name="Next.js" />
                    <SkillBadge icon={<PostgresLogo />} color="#30638A" name="PostgreSQL" />
                  </>
                }
              />
            }
            media={
              <ProjectMedia
                media={
                  <AutoVideo
                    src="/videos/coursecal-demo.mp4"
                    className="size-full rounded-xl"
                  />
                }
                link="https://www.coursecal.com/"
              />
            }
            details={<FullstackDetails />}
          />

          <ExpandableCard
            id="embedded"
            className="md:col-span-5"
            mediaClassName="min-h-48 flex-1"
            dialogMediaClassName="aspect-[16/10]"
            orientation="header-first"
            header={
              <Header
                title="Embedded"
                description="Built a mini drone and a robot hand."
                logos={
                  <>
                    <SkillBadge icon={<PythonLogo />} color="#0472B5" name="Python" />
                    <SkillBadge icon={<CLogo />} color="#6193C8" name="C" />
                    <SkillBadge icon={<CppLogo />} color="#5987B4" name="C++" />
                  </>
                }
              />
            }
            media={
              <div className="grid size-full grid-flow-col grid-cols-5 grid-rows-2 gap-2.5">
                <AutoVideo
                  src="/videos/soldering.mp4"
                  className="col-span-3 row-span-1 rounded-xl"
                />
                <AutoVideo
                  src="/videos/drone.mp4"
                  className="col-span-3 row-span-1 rounded-xl"
                />
                <AutoVideo
                  src="/videos/robot-hand.mp4"
                  className="col-span-2 row-span-2 rounded-xl"
                />
              </div>
            }
            details={<Details />}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ExpandableCard
            id="research"
            orientation="media-first"
            mediaClassName="min-h-48 flex-1"
            dialogMediaClassName="h-72"
            header={
              <Header
                title="Research"
                description="Writing a paper on LLM written code comments."
                logos={
                  <>
                    <SkillBadge icon={<PythonLogo />} color="#0472B5" name="Python" />
                    <SkillBadge icon={<BashLogo />} color="#4BA025" name="Bash" />
                    <SkillBadge icon={<HFLogo />} color="#F3C820" name="Hugging Face" />
                  </>
                }
              />
            }
            media={
              <AutoVideo
                src="/videos/android-agent-demo.mp4"
                className="aspect-video rounded-xl"
              />
            }
            details={<Details />}
          />

          <ExpandableCard
            id="machine-learning"
            orientation="media-first"
            mediaClassName="min-h-48 flex-1"
            dialogMediaClassName="h-72"
            header={
              <Header
                title="Machine Learning"
                description="Building a GPT from scratch."
                logos={
                  <>
                    <SkillBadge icon={<PythonLogo />} color="#0472B5" name="Python" />
                    <SkillBadge icon={<PyTorchLogo />} color="#E34A2C" name="PyTorch" />
                  </>
                }
              />
            }
            media={<NetworkPreview />}
            details={<Details />}
          />

          <ExpandableCard
            id="gpu"
            orientation="media-first"
            mediaClassName="min-h-48 flex-1"
            dialogMediaClassName="h-72"
            header={
              <Header
                title="GPU"
                description="Learning CUDA kernel development."
                logos={
                  <>
                    <SkillBadge icon={<CUDALogo />} color="#76B900" name="CUDA" />
                    <SkillBadge icon={<MojoLogo />} color="#F24A1E" name="Mojo" />
                    <SkillBadge icon={<CppLogo />} color="#5987B4" name="C++" />
                  </>
                }
              />
            }
            media={<CodePreview />}
            details={<Details />}
          />
        </div>
      </div>
    </section>
  );
}
