"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, UserCheck, Check, Star } from 'lucide-react';

const Results: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Vida Sem Dor",
      desc: "Tratamos a causa da hérnia e dores crônicas, não apenas o sintoma."
    },
    {
      icon: <UserCheck size={28} />,
      title: "Correção Postural",
      desc: "Protocolos científicos para realinhamento em adolescentes e adultos."
    },
    {
      icon: <Zap size={28} />,
      title: "Funcionalidade",
      desc: "Recupere a liberdade de movimento para o trabalho e lazer."
    },
    {
      icon: <Activity size={28} />,
      title: "Corpo Definido",
      desc: "Tonificação da musculatura profunda com elegância e consciência."
    }
  ];

  return (
    // Fundo Escuro (Verde Profundo) para Alto Contraste
    <section className="py-24 bg-[#0B2318] relative overflow-hidden text-white">
      
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3AB764] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F58634] rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl mb-6 font-medium"
          >
            Não é mágica, é <span className="text-[#3AB764]">Ciência</span>.
          </motion.h2>
          <p className="text-gray-300 text-lg md:text-xl font-sans max-w-2xl mx-auto">
            Resultados mensuráveis baseados em fisioterapia especializada. 
            Veja como seu corpo vai se transformar:
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* COLUNA 1: Destaque Principal (Escoliose) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gradient-to-br from-[#3AB764] to-[#258a46] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
                <Star size={16} fill="currentColor" /> Especialidade 
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Tratamento de Escoliose
              </h3>
              <p className="text-green-50 text-lg leading-relaxed mb-8">
                Utilizamos técnicas com respaldo científico capazes de proporcionar melhora significativa na curvatura.
              </p>
              
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <p className="text-5xl font-bold text-white mb-2">40%</p>
                <p className="text-green-100 text-sm font-medium uppercase tracking-wide">
                  De melhora possível na curva em adolescentes graves (com uso de colete e exercícios).
                </p>
              </div>
            </div>
            {/* Pattern decorativo */}
            <div className="absolute -bottom-10 -right-10 text-white/10 transform rotate-12">
               <Activity size={200} />
            </div>
          </motion.div>

          {/* COLUNA 2: Grid de Benefícios */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-[#F58634] hover:border-[#F58634] transition-all duration-300 hover:-translate-y-2 cursor-default"
              >
                <div className="w-12 h-12 bg-[#F58634] rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-[#F58634] transition-colors shadow-lg">
                  {item.icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;