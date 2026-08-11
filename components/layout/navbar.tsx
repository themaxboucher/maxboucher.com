import Logo from "../logo";
import IconLink from "../icon-link";
import { DocumentFill, Github2Fill, LinkedinFill } from "@mingcute/react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export default function Navbar() {
  return (
    <header className="py-4 sm:py-6 px-5 sm:px-8 flex justify-between items-center absolute lg:fixed z-20 inset-x-0 top-0 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
      <Logo />
      <div>
        <ul className="flex justify-start items-center gap-2.5">
          <li>
            <IconLink
              href="https://github.com/themaxboucher"
              name="Github"
              icon={<Github2Fill />}
            />
          </li>
          <li>
            <IconLink
              href="https://www.linkedin.com/in/maxboucher/"
              name="LinkedIn"
              icon={<LinkedinFill />}
            />
          </li>
          <li>
            <IconLink
              href="https://drive.google.com/file/d/1H7409USL8zmPCu1lcsioViUcJWMpcpSU/view?usp=sharing"
              name="Resume"
              icon={<DocumentFill />}
            />
          </li>
          <div className="h-6 min-w-0.5 bg-border rounded-2xl"></div>
          <li>
            <AnimatedThemeToggler
              aria-label="Toggle theme"
              className="size-6 block cursor-pointer text-foreground opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-out"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
