import Image from "next/image";
import cursorLogo from "@/public/images/cursor-logo.png";

export default function CursorLogo() {
  return <Image src={cursorLogo} alt="Cursor Logo" width={24} height={24} />;
}
