import PythonLogo from "../logos/skills/python-logo";
import PyTorchLogo from "../logos/skills/pytorch-logo";
import SkillBadge from "../skill-badge";
import { ExpandableCard } from "../ui/expandable-card";
import { NetworkPreview } from "../ui/network-preview";
import CardHeading from "./card-heading";

function MachineLearningDetails() {
  return (
    <div className="space-y-4">
      <p>
        I’m currently going through Andrej Karpathy’s series on{" "}
        <a
          href="https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          building a GPT from scratch
        </a>
        . Stay tuned!
      </p>
    </div>
  );
}

export default function MachineLearningCard() {
  return (
    <ExpandableCard
      id="machine-learning"
      orientation="media-first"
      header={
        <CardHeading
          title="Machine Learning"
          description="Building a GPT from scratch."
          logos={
            <>
              <SkillBadge icon={<PythonLogo />} color="#0472B5" name="Python" />
              <SkillBadge
                icon={<PyTorchLogo />}
                color="#E34A2C"
                name="PyTorch"
              />
            </>
          }
        />
      }
      media={<NetworkPreview />}
      details={<MachineLearningDetails />}
    />
  );
}
