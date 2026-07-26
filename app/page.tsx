import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BentoGrid from "@/components/layout/bento-grid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <BentoGrid />
      </main>
      <Footer />
    </>
  );
}
