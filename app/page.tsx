import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ"; // Importe o FAQ
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <FAQ /> {/* Troque Results por FAQ */}
      <Location />
      <Footer />
    </main>
  );
}