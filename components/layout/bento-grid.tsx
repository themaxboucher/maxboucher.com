import EmbeddedCard from "../cards/embedded-card";
import FullstackCard from "../cards/fullstack-card";
import GPUCard from "../cards/gpu-card";
import MachineLearningCard from "../cards/ml-card";
import ResearchCard from "../cards/research-card";
import FlyIn from "../ui/fly-in";

export default function BentoGrid() {
  return (
    <section className="section">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-11">
          <FlyIn className="md:col-span-6 h-full">
            <FullstackCard />
          </FlyIn>

          <FlyIn className="md:col-span-5 h-full">
            <EmbeddedCard />
          </FlyIn>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FlyIn className="h-full">
            <ResearchCard />
          </FlyIn>
          <FlyIn className="h-full">
            <MachineLearningCard />
          </FlyIn>
          <FlyIn className="h-full">
            <GPUCard />
          </FlyIn>
        </div>
      </div>
    </section>
  );
}
