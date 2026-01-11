import Image from "next/image";
import coursecalLogo from "@/public/images/coursecal-logo.svg";

export default function CourseCalLogo() {
  return (
    <Image src={coursecalLogo} alt="CourseCal Logo" width={29} height={29} />
  );
}
