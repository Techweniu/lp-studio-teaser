"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, User, Award, Sun, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const About: React.FC = () => {
  
  const values = [
    { icon: <Heart size={24} />, title: "Empatia", text: "Escutar, acolher e compreender cada história, cada dor, cada corpo." },
    { icon: <User size={24} />, title: "Respeito", text: "Tratar cada pessoa com dignidade, valorizando suas limitações e conquistas." },
    { icon: <User size={24} />, title: "Individualidade", text: "Personalizar o cuidado, porque cada corpo é único." },
    { icon: <Award size={24} />, title: "Excelência", text: "Buscar constantemente conhecimento e qualidade no atendimento." },
    { icon: <Sun size={24} />, title: "Bem-estar", text: "Promover uma vida com mais qualidade, movimento e leveza." },
  ];

  const objectives = [
    "Aliviar e tratar dores na coluna de forma eficaz.",
    "Proporcionar um ambiente acolhedor e seguro.",
    "Estimular hábitos saudáveis através do Pilates.",
    "Fortalecer a autonomia e consciência corporal.",
    "Expandir o impacto positivo na comunidade local."
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* BLOCO 1: O QUE É O TEASER (INTRODUÇÃO) */}
        {/* GAP REDUZIDO: de gap-12 para gap-6 para aproximar colunas */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-20">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                // MUDANÇA: 'lg:justify-end' empurra a imagem para a direita (perto do texto)
                className="relative flex justify-center lg:justify-end pr-0 lg:pr-8" 
            >
                 <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-md w-full">
                  {/* MUDANÇA: Aumentei width/height para garantir alta definição */}
                  <Image
                    src="/kessi-2.png" 
                    alt="Kissy Urbanski - Studio Teaser"
                    width={1000} 
                    height={1300}
                    quality={100} // Qualidade máxima para evitar pixelização
                    className="w-full h-auto object-cover"
                  />
                  {/* Badge Flutuante */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 border-t border-gray-100">
                      <p className="font-serif text-xl text-[#F58634] font-bold">O que é o Pilates Teaser?</p>
                      <p className="text-gray-600 text-sm mt-1">Mais que um estúdio, um espaço de transformação.</p>
                  </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 pl-0 lg:pl-4" // Pequeno ajuste de padding para não colar demais
            >
                {/* MISSÃO */}
                <div className="bg-[#F9F9F9] p-8 rounded-3xl border border-gray-100 hover:border-[#F58634]/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#F58634]/10 p-2 rounded-lg text-[#F58634]"><Target size={24} /></div>
                        <h3 className="font-serif text-2xl text-gray-900 font-bold">Nossa Missão</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Promover saúde, bem-estar e qualidade de vida por meio do movimento consciente, utilizando o Pilates e a fisioterapia como ferramentas para aliviar dores, especialmente na coluna, e devolver autonomia ao corpo com respeito, empatia e individualidade.
                    </p>
                </div>

                {/* VISÃO */}
                <div className="bg-[#F9F9F9] p-8 rounded-3xl border border-gray-100 hover:border-[#3AB764]/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#3AB764]/10 p-2 rounded-lg text-[#3AB764]"><Eye size={24} /></div>
                        <h3 className="font-serif text-2xl text-gray-900 font-bold">Nossa Visão</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Ser referência em cuidado humanizado e resultados efetivos no tratamento de dores na coluna, mostrando que é possível viver sem dor e com mais leveza, através de um atendimento personalizado e acolhedor.
                    </p>
                </div>
            </motion.div>
        </div>

        {/* BLOCO 2: VALORES (GRID HORIZONTAL) */}
        <div className="mb-20">
            <div className="text-center mb-10">
                <h3 className="font-serif text-3xl text-gray-900 font-bold">Nossos Valores</h3>
                <div className="w-16 h-1 bg-[#F58634] mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {values.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center"
                    >
                        <div className="w-12 h-12 bg-[#FFCCAA]/20 text-[#F58634] rounded-full flex items-center justify-center mx-auto mb-4">
                            {item.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* BLOCO 3: OBJETIVOS (LISTA DESTACADA) */}
        <div className="bg-[#2C2C2C] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#3AB764] opacity-10 rounded-full blur-[80px]"></div>
             
             <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <span className="text-[#F58634] font-bold tracking-wider uppercase text-sm mb-2 block">Compromisso</span>
                    <h3 className="font-serif text-3xl md:text-4xl mb-6">Nossos Objetivos</h3>
                    <p className="text-gray-400 text-lg mb-6">
                        Trabalhamos todos os dias para expandir o impacto positivo do estúdio na comunidade, sendo lembrados não só por tratar, mas por transformar vidas.
                    </p>
                </div>
                
                <div className="space-y-4">
                    {objectives.map((obj, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
                        >
                            <CheckCircle2 className="text-[#3AB764] flex-shrink-0 mt-1" />
                            <span className="text-gray-200">{obj}</span>
                        </motion.div>
                    ))}
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default About;