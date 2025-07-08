import Image from "next/image";
import wwLogo from "@/public/images/walletwiz-logo.svg";

export default function WWLogo() {
  return <Image src={wwLogo} alt="Wallet Wiz Logo" width={29} height={29} />;
}
