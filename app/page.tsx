import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section>
        <h1 className="heading-1">Maxime Boucher</h1>
        <p className="text-large">Software Engineer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://github.com/themaxboucher">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/maxboucher/">LinkedIn</a>
            </li>
            <li>Resume</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="heading-2">Experience</h2>
      </section>
      <section>
        <h2 className="heading-2">Projects</h2>
      </section>
      <section>
        <h2 className="heading-2">Skills</h2>
      </section>
    </div>
  );
}
