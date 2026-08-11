import PythonLogo from "../logos/skills/python-logo";
import BashLogo from "../logos/skills/bash-logo";
import HFLogo from "../logos/skills/hf-logo";
import SkillBadge from "../skill-badge";
import { AutoVideo } from "../ui/auto-video";
import { ExpandableCard } from "../ui/expandable-card";
import CardHeading from "./card-heading";

function ResearchDetails() {
  return (
    <div className="space-y-4">
      <p>
        I've received research awards for each of my first two summers of
        university, funding two four-month projects.
      </p>
      <p>
        The first summer, I built an LLM-powered agent that navigates Android
        apps. This was a pilot project for GDPR compliance research. Running on
        GPT-5 Mini, it could get past authentication screens and{" "}
        <b>
          completed 59% of tasks across the top 100 Google Play apps (88% on
          stable apps without two-factor authentication or CAPTCHA screens)
        </b>
        .
      </p>
      <p>
        This summer I've been researching LLM-generated code comments. I'm
        submitting a paper very soon :)
      </p>
    </div>
  );
}

export default function ResearchCard() {
  return (
    <ExpandableCard
      id="research"
      orientation="media-first"
      header={
        <CardHeading
          title="Research"
          description="Undergraduate research at U of C."
          logos={
            <>
              <SkillBadge icon={<PythonLogo />} color="#0472B5" name="Python" />
              <SkillBadge icon={<BashLogo />} color="#4BA025" name="Bash" />
              <SkillBadge
                icon={<HFLogo />}
                color="#F3C820"
                name="Hugging Face"
              />
            </>
          }
        />
      }
      media={
        <AutoVideo
          src="/videos/android-agent-demo.mp4"
          className="aspect-32/19 h-auto w-full rounded-xl"
        />
      }
      details={<ResearchDetails />}
    />
  );
}
