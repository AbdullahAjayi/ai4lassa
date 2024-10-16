import About from "@/components/About";
import Footer from "@/components/Footer";
import Forecast from "@/components/Forecast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Report from "@/components/Report";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Forecast />
      <Report />
      <Resources />
      <Footer />
    </>

  );
}
