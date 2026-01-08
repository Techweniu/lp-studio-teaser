"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const Team: React.FC = () => {
  const topics = [
    "Fisioterapeuta",
    "Instrutora de Pilates",
    "Especialista em Escoliose",
    "Especialista em Postura e Patologias da Coluna",
    "Mestre pela UFTM em Envelhecimento e Estilo de Vida"
  ];

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#F58634] font-bold tracking-wider uppercase text-sm mb-2 block">
            Quem cuida de você
          </span>
          {/* TÍTULO GENÉRICO MANTIDO PARA FUTURA EXPANSÃO */}
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Conheça nossa Equipe
          </h2>
          <p className="text-gray-600 text-lg">
            Profissionais apaixonados por movimento e ciência, prontos para acolher sua história.
          </p>
        </div>

        {/* Layout Single Profile (Destaque Atual) */}
        <div className="max-w-5xl mx-auto bg-[#F9F9F9] rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Coluna da Imagem */}
            <div className="md:w-1/2 relative h-[500px] md:h-[600px] w-full bg-gray-200">
              <Image
                src="/kessi-2.png" 
                alt="Dra. Kissy - Fisioterapeuta"
                fill
                className="object-cover object-top" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
            </div>

            {/* Coluna de Conteúdo */}
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2">
                Dra. Kissy
              </h3>
              
              
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Fisioterapeuta e fundadora do Studio Teaser. Dedica sua carreira a devolver a autonomia e qualidade de vida, tratando a causa real da dor através de protocolos científicos.
              </p>

              {/* Lista de Qualificações */}
              <ul className="space-y-4">
                {topics.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-[#3AB764] flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;