"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  // Link direto para o WhatsApp (mantido o número do seu código anterior)
  const whatsappLink = "https://wa.me/5564996628508?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20no%20Studio%20Teaser.";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#F9F9F9]">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#FFCCAA]/20 -z-10 rounded-bl-[10rem] blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#3AB764]/10 text-[#3AB764] text-sm font-bold tracking-wide mb-2 font-sans">
            Novo Espaço em Itumbiara
          </div>
          
          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-gray-900 font-medium">
            Pilates Teaser <br />
            <span className="italic text-[#C5A266] font-light">O movimento cura</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-sans">
            Promovemos saúde e autonomia através do movimento consciente. 
            Protocolos de exercícios para tratar dores na coluna, hérnia de disco e 
            escoliose com respeito à sua individualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 font-sans">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F58634] text-white rounded-full font-semibold text-lg hover:bg-[#d9732a] transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-200"
            >
              Agendar Avaliação
              <ArrowRight size={20} />
            </a>
            <Link
              href="#especialidades"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-[#F58634] hover:text-[#F58634] transition-all"
            >
              Conhecer Tratamentos
            </Link>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative z-10 rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl w-full max-w-[500px]">
            <Image 
              src="/kissy.png" 
              alt="Instrutora Kissy corrigindo aluna no Studio Teaser" 
              width={800} 
              height={1000}
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs border-l-4 border-[#3AB764] hidden sm:block">
            <p className="font-serif text-xl text-gray-900 mb-1">10+ Anos</p>
            <p className="text-gray-500 text-sm font-sans">De experiência em reabilitação e movimento consciente.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;