import Logo from "../logo";
import IconLink from "../icon-link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

export default function Navbar() {
  return (
    <header className="py-4 sm:py-6 px-5 sm:px-8 flex justify-between items-center absolute lg:fixed z-20 inset-x-0 top-0">
      <Logo />
      <div>
        <ul className="flex justify-start items-center gap-3">
          <li>
            <IconLink
              href="https://github.com/themaxboucher"
              icon={<FaGithub />}
            />
          </li>
          <li>
            <IconLink
              href="https://www.linkedin.com/in/maxboucher/"
              icon={<FaLinkedin />}
            />
          </li>
          <li>
            <IconLink href="#" icon={<IoIosDocument />} />
          </li>
        </ul>
      </div>
    </header>
  );
}
