import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}