import EmojiCursor from "../emoji-cursor";
import HeroVisual from "../hero-visual";

export default function HeroSection() {
  return (
    <section id="about" className="section pt-[8rem] sm:pt-[10rem] relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] justify-between items-center gap-10">
        <div className="min-w-48 min-h-48 mx-auto">
          <HeroVisual />
        </div>
        <div className="flex flex-col items-start max-w-[35rem] mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl text-foreground mb-4">
            Hi, I’m Max! 👋
          </h2>
          <p className="text-lg">
            I am a 1st year engineering student at the{" "}
            <EmojiCursor emoji="🇨🇦">University of Calgary</EmojiCursor>. I’m
            passionate about{" "}
            <a
              href="#skills"
              className="text-foreground hover:text-primary transition-all duration-200 ease-out"
            >
              full stack web development
            </a>{" "}
            and building{" "}
            <a
              href="#projects"
              className="text-foreground hover:text-primary transition-all duration-200 ease-out"
            >
              cool projects
            </a>
            . I also enjoy <EmojiCursor emoji="🎧">podcasts</EmojiCursor>,{" "}
            <EmojiCursor emoji="🐟">fly fishing</EmojiCursor>, and{" "}
            <EmojiCursor emoji="💪">working out</EmojiCursor>.
          </p>
        </div>
      </div>
    </section>
  );
}
