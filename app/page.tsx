import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import Story from "@/components/Story";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <div className="wrap">
        <Header />
        <main id="top">
          <Hero />
          <Marquee />
          <Skills />
          <Story />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
