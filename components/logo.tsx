import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="cursor-pointer hover:opacity-80 transition-all duration-200 ease-out"
    >
      <h1 className="text-foreground font-semibold">Max Boucher</h1>
      <p className=" text-xs">1st Year Enginering @ U of C</p>
    </Link>
  );
}
