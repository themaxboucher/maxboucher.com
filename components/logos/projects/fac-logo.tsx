import Image from "next/image";
import facLogo from "@/public/images/fifth-avenue-club-logo.png";

export default function FACLogo() {
  return (
    <Image
      src={facLogo}
      alt="Fifth Avenue Club Logo"
      className="brightness-0 saturate-100 invert"
      width={18.5}
      height={29}
    />
  );
}
