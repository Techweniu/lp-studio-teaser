import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties'; // <--- O NOVO ARQUIVO
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Specialties substitui o antigo Results/Features */}
      {/* Motivo: Separar Patologias (Ciência) de Benefícios (Resultados) */}
      <Specialties /> 
      
      <About />
      <Services />
      
      <FAQ />
      <Location />
      <Footer />
    </main>
  );
}