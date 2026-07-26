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
import coursecalScreenshot from "@/public/images/coursecal.png";
import Image from "next/image";
import maxBoucher from "@/public/images/max-boucher.webp";

export default function BentoGrid() {
  const image = coursecalScreenshot;
  return (
    <>
    <section className="section">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-11 gap-4">
          <Card className="col-span-6 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">Fullstack</CardTitle>
              <div className="flex flex-wrap gap-3">
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
              <CardContent>
                <div className="relative w-full h-64">
                  <div className="md:absolute md:bottom-[-64%] md:left-[10%] lg:right-[-2rem] w-full aspect-square md:w-[32rem] md:h-[25rem] md:-rotate-3 bg-muted/50 rounded-t-xl lg:rounded-b-xl overflow-hidden border border-border shadow-xl md:group-hover:-translate-y-4 transition-all duration-300 ease-out">
                    <div className="bg-muted/50 border-b border-border py-2 md:py-3 px-3 md:px-4 shadow-lg flex">
                      <div className="flex justify-start items-center gap-[0.3rem]">
                        <div className="size-2 rounded-full bg-red-500"></div>
                        <div className="size-2 rounded-full bg-yellow-500"></div>
                        <div className="size-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    {image ? (
                      <Image
                        src={image}
                        alt="CourseCal"
                        width={512}
                        height={400}
                        className="size-full object-cover object-top"
                      ></Image>
                    ) : (
                      <div className="font-semibold text-lg size-full flex justify-center items-center pb-6">
                        Coming soon...
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 z-30 size-full bg-gradient-to-t from-background to-transparent to-15% md:to-35%"></div>
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-5">
            <CardHeader>
              <CardTitle className="text-xl">Embedded</CardTitle>
              <div className="flex flex-wrap gap-3">
                <PythonLogo />
                <CLogo />
                <CppLogo />
              </div>
            </CardHeader>
            <CardContent>
              <Image src={maxBoucher} alt="" />
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card className="flex flex-col justify-between">
            <CardContent className="">
              <div className="p-6 h-32 flex justify-center items-center">
                I'm currently writting a paper on LLMs in software engineering. Stay
                tuned!
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-xl">Research</CardTitle>
              <div className="flex flex-wrap gap-3">
                <PythonLogo />
                <BashLogo />
                <HFLogo />
              </div>
            </CardHeader>
          </Card>
          <Card className="flex flex-col justify-between">
            <CardContent className="">
              <div>I'm currently building a GPT from scratch. Stay tuned!</div>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-xl">Machine Learning</CardTitle>
              <div className="flex flex-wrap gap-3">
                <PythonLogo />
                <PyTorchLogo />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardContent className="flex flex-col justify-between">
              <div>I'm currently learning CUDA kernel development. Stay tuned!</div>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-xl">GPU</CardTitle>
              <div className="flex flex-wrap gap-3">
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
