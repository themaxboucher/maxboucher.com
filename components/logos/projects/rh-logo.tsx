import Image from "next/image";
import rhLogo from "@/public/images/rick-hu-logo.webp";

export default function RHLogo() {
  return (
    <Image
      src={rhLogo}
      alt="Rick Hu Logo"
      width={29}
      height={20}
      className="ml-[0.1rem]"
    />
  );
}
