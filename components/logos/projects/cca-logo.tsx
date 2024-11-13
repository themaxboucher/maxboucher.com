import Image from "next/image";
import ccaLogo from "@/public/images/cca-logo.png";

export default function CCALogo() {
  return (
    <Image
      src={ccaLogo}
      alt="Capital City Athletics Logo"
      width={29}
      height={29}
    />
  );
}
