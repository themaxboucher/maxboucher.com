import EmojiCursor from "../emoji-cursor";
import HeroVisual from "../hero-visual";
import BlurFade from "../ui/blur-fade";

export default function HeroSection() {
  return (
    <section id="about" className="section pt-[8rem] sm:pt-[10rem] relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] justify-between items-center gap-10">
        <div className="min-w-48 min-h-48 mx-auto">
          <BlurFade inView>
            <HeroVisual />
          </BlurFade>
        </div>
        <div className="flex flex-col items-start max-w-[35rem] mx-auto">
          <BlurFade delay={0.15} inView>
            <h2 className="font-semibold text-xl md:text-2xl text-foreground mb-4">
              Hi, I’m Max! 👋
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg">
              I am a software engineering student at the{" "}
              <EmojiCursor emoji="🇨🇦">University of Calgary</EmojiCursor>. I
              love building{" "}
              <a
                href="#projects"
                className="text-foreground hover:text-primary transition-all duration-200 ease-out"
              >
                useful projects
              </a>{" "}
              and am currently working on{" "}
              <a
                href="https://www.walletwiz.io/"
                className="text-foreground hover:text-primary transition-all duration-200 ease-out"
              >
                WalletWiz
              </a>
              . I also enjoy <EmojiCursor emoji="🎧">podcasts</EmojiCursor>,{" "}
              <EmojiCursor emoji="🐟">fly fishing</EmojiCursor>, and{" "}
              <EmojiCursor emoji="💪">working out</EmojiCursor>.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
