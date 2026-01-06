import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Results from '../components/Results'; // Seção nova (Benefícios)
import Services from '../components/Services';
import FAQ from '../components/FAQ'; // <--- Trazendo de volta as Dúvidas
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Results substitui 'Features' com foco nos benefícios reais do cliente */}
      <Results /> 
      
      <About />
      <Services />
      
      {/* Seção de Dúvidas (importante pois tem link no menu) */}
      <FAQ />

      <Location />
      <Footer />
    </main>
  );
}