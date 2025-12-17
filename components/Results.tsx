"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-24 bg-[#1f2937] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Resultados reais de quem vive sem dor</h2>
          <p className="text-gray-300 text-lg">
            Acompanhamento técnico detalhado com bioimpedância e avaliação postural fotográfica. 
            Nós documentamos sua evolução.
          </p>
        </div>

        {/* Comparison Simulation Cards */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Card 1: Postural Correction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-2 rounded-3xl"
          >
            <div className="bg-gray-900 rounded-[1.2rem] p-6 border border-gray-700">
                <div className="flex justify-between items-end mb-4">
                    <h3 className="text-[#3AB764] font-bold uppercase tracking-widest text-sm">Caso: Escoliose Juvenil</h3>
                    <span className="text-xs text-gray-500">6 meses de tratamento</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="relative h-64 bg-gray-700 rounded-xl overflow-hidden group">
                           <img src="https://picsum.photos/300/400?grayscale&blur=2" alt="Antes" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                           <div className="absolute top-2 left-2 bg-black/50 px-3 py-1 rounded text-xs font-bold text-white">ANTES</div>
                           <div className="absolute bottom-4 left-0 w-full text-center text-xs text-gray-300 px-2">Desalinhamento Scapular</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="relative h-64 bg-gray-700 rounded-xl overflow-hidden group border-2 border-[#3AB764]">
                           <img src="https://picsum.photos/301/400?grayscale&blur=2" alt="Depois" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                           <div className="absolute top-2 left-2 bg-[#3AB764] px-3 py-1 rounded text-xs font-bold text-white">DEPOIS</div>
                           <div className="absolute bottom-4 left-0 w-full text-center text-xs text-white font-bold px-2">Correção de 85%</div>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Card 2: Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
                <div className="flex gap-1 text-[#F58634]">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="font-serif text-2xl text-white leading-relaxed">
                    "Cheguei ao studio travada, com medo de me mexer. Hoje, não só estou sem dor, como descobri uma força que não sabia que tinha. O cuidado da Kissy e da equipe é surreal."
                </p>
                <div>
                    <p className="font-bold text-lg text-white">Mariana Costa</p>
                    <p className="text-[#3AB764] text-sm">Aluna há 2 anos</p>
                </div>
            </div>
            
            <div className="w-full h-px bg-gray-700"></div>

             <div className="space-y-6">
                <div className="flex gap-1 text-[#F58634]">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="font-serif text-2xl text-white leading-relaxed">
                    "Ambiente impecável, limpo e super profissional. Sinto que tenho personal trainer e fisioterapeuta ao mesmo tempo."
                </p>
                <div>
                    <p className="font-bold text-lg text-white">Roberto Almeida</p>
                    <p className="text-[#3AB764] text-sm">Aluno de Pilates Clínico</p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Results;