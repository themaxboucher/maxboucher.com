import HtmlLogo from "../logos/skills/html-logo";
import JavaScriptLogo from "../logos/skills/javascript-logo";
import ReactLogo from "../logos/skills/react-logo";
import TypeScriptLogo from "../logos/skills/typescript-logo";
import NextJsLogo from "../logos/skills/next-logo";
import CssLogo from "../logos/skills/css-logo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import PythonLogo from "../logos/skills/python-logo";
import CppLogo from "../logos/skills/cpp-logo";
import CLogo from "../logos/skills/c-logo";
import PostgresLogo from "../logos/skills/postgresql-logo";
import PyTorchLogo from "../logos/skills/pytorch-logo";
import CUDALogo from "../logos/skills/cuda-logo";
import HFLogo from "../logos/skills/hf-logo";
import MojoLogo from "../logos/skills/mojo-logo";
import BashLogo from "../logos/skills/bash-logo";
import { Safari } from "../ui/safari";
import { AutoVideo } from "../ui/auto-video";

export default function BentoGrid() {
  return (
    <>
      <section className="section">
        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-11 gap-5">
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Fullstack
                </CardTitle>
                <div className="flex flex-wrap gap-3 pt-1.5">
                  <HtmlLogo />
                  <CssLogo />
                  <JavaScriptLogo />
                  <TypeScriptLogo />
                  <ReactLogo />
                  <NextJsLogo />
                  <PostgresLogo />
                  <div className="text-lg opacity-80 h-[24px] w-[22px] flex items-center justify-center">
                    +
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Safari
                  mode="simple"
                  url="coursecal.com"
                  imageSrc="/images/coursecal.png"
                />
              </CardContent>
            </Card>
            <Card className="col-span-5">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Embedded
                </CardTitle>
                <div className="flex flex-wrap gap-3 pt-1.5">
                  <PythonLogo />
                  <CLogo />
                  <CppLogo />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid aspect-[13/9] grid-cols-5 grid-rows-2 gap-2">
                  <AutoVideo
                    src="/videos/robot-hand.mp4"
                    className="col-span-2 row-span-2 rounded-lg"
                  />
                  <AutoVideo
                    src="/videos/drone.mp4"
                    className="col-span-3 rounded-lg"
                  />
                  <AutoVideo
                    src="/videos/soldering.mp4"
                    className="col-span-3 rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <Card className="flex flex-col justify-between">
              <CardContent className="">
                <div className="p-6 flex justify-center items-center">
                  I&apos;m currently writting a paper on LLMs in software
                  engineering. Stay tuned!
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Research
                </CardTitle>
                <div className="flex flex-wrap gap-3 pt-1.5">
                  <PythonLogo />
                  <BashLogo />
                  <HFLogo />
                </div>
              </CardHeader>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent className="">
                <div>
                  I&apos;m currently building a GPT from scratch. Stay tuned!
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Machine Learning
                </CardTitle>
                <div className="flex flex-wrap gap-3 pt-1.5">
                  <PythonLogo />
                  <PyTorchLogo />
                </div>
              </CardHeader>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent>
                <div>
                  I&apos;m currently learning CUDA kernel development. Stay
                  tuned!
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">GPU</CardTitle>
                <div className="flex flex-wrap gap-3 pt-1.5">
                  <CUDALogo />
                  <MojoLogo />
                  <CppLogo />
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
