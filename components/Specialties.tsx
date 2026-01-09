"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, UserCheck } from 'lucide-react';

const Specialties: React.FC = () => {
  // Bloco 1: O que tratamos (Patologias) - Foco Clínico
  const pathologies = [
    {
      title: "Dor na Coluna",
      icon: <Activity className="w-8 h-8 text-white" />,
      description: "Alívio imediato e tratamento da causa raiz."
    },
    {
      title: "Hérnia de Disco",
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      description: "Protocolos seguros de descompressão."
    },
    {
      title: "Escoliose",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      description: "Realinhamento baseado em evidências."
    }
  ];

  // Bloco 2: O Resultado (Lifestyle) - Foco no Benefício
  const benefits = [
    {
      title: "Vida Sem Dor",
      text: "Recupere o prazer de realizar atividades diárias sem limitações."
    },
    {
      title: "Funcionalidade",
      text: "Recupere e amplie seus movimentos para a atividade física."
    },
    {
      title: "Corpo Definido",
      text: "Tonificação muscular global com alongamento e controle."
    }
  ];

  return (
    <section id="especialidades" className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        
        {/* PARTE 1: CIÊNCIA (O que tratamos) */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#F58634] font-bold tracking-wider uppercase text-sm mb-2 block">
              Especialidades
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Não é mágica, é ciência.
            </h2>
            <p className="text-gray-600 text-lg">
              Utilizamos protocolos de exercícios de realinhamento da postura e correção.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pathologies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-[#C5A266] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#C5A266]/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-gray-900 font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTE 2: RESULTADOS (O que você ganha) */}
        <div className="bg-[#2C2C2C] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Decoração de fundo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58634] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

          <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {benefits.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className="pt-8 md:pt-0 md:px-6"
              >
                <h3 className="text-2xl font-serif text-[#F58634] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specialties;