"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#FFCCAA]/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            {/* MUDANÇA AQUI: Removi altura fixa (h-500px) e fill */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-md">
              <Image
                src="/kessi-2.png" 
                alt="Fisioterapeuta Kissy no Studio"
                width={800} // Proporção de referência (qualidade)
                height={1000}
                className="w-full h-auto" // Se ajusta automaticamente sem cortar
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 -left-10 w-32 h-32 bg-[#F58634] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 right-10 w-40 h-40 bg-[#3AB764] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
              10 anos transformando vidas através do movimento.
            </h2>
            <div className="w-20 h-1 bg-[#F58634] rounded-full"></div>
            
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              Idealizado por <span className="font-bold text-gray-900">Kissy</span>, fisioterapeuta apaixonada pelo poder de cura do corpo humano.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-sans">
              Após anos de experiência clínica, percebi que o tratamento convencional muitas vezes falha por falta de atenção aos detalhes. 
              Criamos o <span className="font-serif font-bold italic text-[#F58634]">Teaser</span> como um espaço próprio, pensado para acolher você com excelência técnica e calor humano.
            </p>

            <blockquote className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#3AB764] mt-6">
              <Quote className="text-[#3AB764] w-8 h-8 mb-2 opacity-50" />
              <p className="text-gray-800 italic font-medium font-serif">
                "Nosso objetivo não é apenas tratar a dor, mas devolver a confiança no próprio corpo."
              </p>
              
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;