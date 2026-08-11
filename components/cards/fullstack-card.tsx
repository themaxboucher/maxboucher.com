import Image from "next/image";

import HtmlLogo from "../logos/skills/html-logo";
import CssLogo from "../logos/skills/css-logo";
import JavaScriptLogo from "../logos/skills/javascript-logo";
import TypeScriptLogo from "../logos/skills/typescript-logo";
import ReactLogo from "../logos/skills/react-logo";
import NextJsLogo from "../logos/skills/next-logo";
import PostgresLogo from "../logos/skills/postgresql-logo";
import ProjectMedia from "../project-media";
import SkillBadge from "../skill-badge";
import { AutoVideo } from "../ui/auto-video";
import { ExpandableCard } from "../ui/expandable-card";
import CardHeading from "./card-heading";

function FullstackDetails() {
  return (
    <div className="space-y-4">
      <p>
        <b>In the beginning, there was HTML.</b> I loved being able to write
        text and have something visual and interactive appear. I turned that
        into a side hustle of designing websites for small businesses.
      </p>
      <p>
        But I was hooked with the idea of being able to create my own{" "}
        <b>fully functional apps</b>, so I kept learning. Armed with W3Schools
        and YouTube tutorials (and eventually AI), I built some apps. With each
        project I would try to upgrade my tech stack (see logos above for some
        of what I use now).
      </p>
      <p>
        Right now, I'm working on adding features to{" "}
        <a
          href="https://www.coursecal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          CourseCal
        </a>
        , an app for managing your university schedule. I'm also building
        projects for local charities with{" "}
        <a
          href="https://www.codethechangeyyc.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Code the Change YYC
        </a>
        .
      </p>
    </div>
  );
}

export default function FullstackCard() {
  return (
    <ExpandableCard
      id="fullstack"
      dialogMediaClassName="aspect-video"
      header={
        <CardHeading
          title="Fullstack"
          description="Developing web apps."
          logos={
            <>
              <SkillBadge icon={<HtmlLogo />} color="#F36903" name="HTML" />
              <SkillBadge icon={<CssLogo />} color="#0094DC" name="CSS" />
              <SkillBadge
                icon={<JavaScriptLogo />}
                color="#EBD51E"
                name="JavaScript"
              />
              <SkillBadge
                icon={<TypeScriptLogo />}
                color="#3776AB"
                name="TypeScript"
              />
              <SkillBadge icon={<ReactLogo />} color="#61dbfb" name="React" />
              <SkillBadge
                icon={<NextJsLogo />}
                color="#000000"
                darkColor="#FFFFFF"
                name="Next.js"
              />
              <SkillBadge
                icon={<PostgresLogo />}
                color="#30638A"
                name="PostgreSQL"
              />
            </>
          }
        />
      }
      media={
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-2.5">
          <ProjectMedia
            media={
              <AutoVideo
                src="/videos/coursecal-demo.mp4"
                className="h-auto w-full rounded-xl aspect-video object-bottom"
              />
            }
            link="https://www.coursecal.com/"
          />
          <ProjectMedia
            media={
              <Image
                src="/images/hack-the-change.png"
                alt="Hack the Change hackathon management tool"
                width={1280}
                height={1345}
                loading="eager"
                className="size-full bg-muted object-cover border shadow shadow-zinc-900/5 h-auto w-full rounded-xl aspect-video object-top"
              />
            }
            inProgress
          />
          <ProjectMedia
            media={
              <AutoVideo
                src="/videos/walletwiz-demo.mp4"
                className="h-auto w-full rounded-xl aspect-video object-top"
              />
            }
            link="https://walletwiz.vercel.app/"
          />
          <ProjectMedia
            media={
              <AutoVideo
                src="/videos/kiwi-quest-demo.mp4"
                className="h-auto w-full rounded-xl aspect-video object-top"
              />
            }
            link="https://kiwi-quest-rho.vercel.app/"
          />
        </div>
      }
      details={<FullstackDetails />}
    />
  );
}
