import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BentoGrid from "@/components/layout/bento-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export default function Home() {
  return (
    <>
      <AnimatedGridPattern className="absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-radial from-transparent to-background/30" />
      <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
      <Navbar />
      <main>
        <BentoGrid />
      </main>
      <Footer />
    </>
  );
}
