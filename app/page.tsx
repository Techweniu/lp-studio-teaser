import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team'; // <--- Importar
import Testimonials from '../components/Testimonials'; // <--- Importar
import FAQ from '../components/FAQ';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Specialties />
      <About />
      <Services />
      
      {/* Novas Seções de Confiança */}
      <Team />
      <Testimonials />
      
      <FAQ />
      <Location />
      <Footer />
    </main>
  );
}