import CUDALogo from "../logos/skills/cuda-logo";
import MojoLogo from "../logos/skills/mojo-logo";
import CppLogo from "../logos/skills/cpp-logo";
import SkillBadge from "../skill-badge";
import { CodePreview } from "../ui/code-preview";
import { ExpandableCard } from "../ui/expandable-card";
import CardHeading from "./card-heading";

function GPUDetails() {
  return (
    <div className="space-y-4">
      <p>
        I’m currently learning CUDA kernel development (also a bit of the new
        programming language, Mojo). Stay tuned!
      </p>
    </div>
  );
}

export default function GPUCard() {
  return (
    <ExpandableCard
      id="gpu"
      orientation="media-first"
      header={
        <CardHeading
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
      details={<GPUDetails />}
    />
  );
}
