"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Activity, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Users size={32} className="text-[#3AB764]" />,
      title: "Atenção Dupla",
      description: "Segurança total em cada movimento: Fisioterapeuta + Estagiária acompanhando você simultaneamente em todas as aulas."
    },
    {
      icon: <Activity size={32} className="text-[#3AB764]" />,
      title: "Foco em Patologias",
      description: "Somos especialistas no tratamento de Escoliose, dores crônicas e reabilitação de coluna. Aqui, o Pilates é terapêutico."
    },
    {
      icon: <Heart size={32} className="text-[#3AB764]" />,
      title: "Atendimento Humanizado",
      description: "Você não é apenas um número. Entendemos sua dor e criamos um plano de tratamento único e acolhedor."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="metodologia" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#F58634] font-bold tracking-wider uppercase text-sm mb-2 block">Metodologia Exclusiva</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Por que o Teaser é diferente?</h2>
          <p className="text-gray-600 text-lg">
            Combinamos a técnica clássica do Pilates com o olhar clínico da fisioterapia para entregar resultados reais.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#F9F9F9] p-8 rounded-[2rem] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#3AB764]/20 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;