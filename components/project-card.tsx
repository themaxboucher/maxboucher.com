import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCard {
  logo?: React.ReactNode;
  title?: string;
  date?: string;
  description?: string;
  url?: string;
  github?: string;
  image?: StaticImageData;
}

export default function ProjectCard({
  logo,
  title = "New Project",
  date,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  url,
  github,
  image,
}: ProjectCard) {
  return (
    <Card className="text-zinc-400/80 rounded-3xl px-8 pt-8 pb-0 md:pb-8 md:hover:scale-[103%] bg-background overflow-hidden md:hover:shadow-lg transition-all duration-300 ease-out relative group md:hover:border-muted-foreground/30">
      <div className="absolute inset-0 -z-20 size-full bg-gradient-to-tl from-muted/0 to-muted/20 opacity-0 md:group-hover:opacity-100 transition-all duration-300 ease-out"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:max-w-xs">
          <CardHeader className="px-2 pt-4 md:px-6 pb-4">
            <div className="size-11 bg-muted-foreground/10 rounded-lg mb-6 flex justify-center items-center border border-border">
              {logo}
            </div>
            <div>
              <CardTitle className="text-foreground pb-2">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-2 md:px-6">
            <p className="mb-8">{description}</p>
            <div className="flex justify-start items-center gap-4">
              {url && (
                <Button asChild>
                  <a href={url} target="_blank">
                    Visit
                  </a>
                </Button>
              )}
              {github && (
                <Button variant="secondary" asChild>
                  <a href={github} target="_blank">
                    <FaGithub className="size-4" /> Github
                  </a>
                </Button>
              )}
              {!url && !github && <div className="h-10"></div>}
            </div>
          </CardContent>
        </div>

        <div className="md:absolute md:bottom-[-22%] md:left-[50%] lg:right-[-2rem] w-full aspect-square md:w-[32rem] md:h-[25rem] md:-rotate-3 bg-muted/50 rounded-t-xl lg:rounded-b-xl overflow-hidden border border-border shadow-xl md:group-hover:-translate-y-4 transition-all duration-300 ease-out">
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
              alt={title}
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
    </Card>
  );
}
