"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Dra. Kissy Urbanski",
      role: "Fisioterapeuta e Idealizadora",
      image: "/kissy-team.jpg",
      bio: "Fisioterapeuta e idealizadora do Pilates Teaser. Dedica sua carreira a devolver a autonomia e qualidade de vida, tratando a causa real da dor através de protocolos científicos.",
      qualifications: [
        "Fisioterapeuta",
        "Instrutora de Pilates",
        "Especialista em Escoliose",
        "Especialista em Postura e Patologias da Coluna",
        "Mestre pela UFTM em Envelhecimento e Estilo de Vida"
      ]
    },
    {
      name: "Dra. Milena Rocha",
      role: "Fisioterapeuta",
      image: "/milena-rocha.jpg",
      bio: "Fisioterapeuta pós-graduanda em Traumato-ortopedia e Esportiva. Focada na reabilitação eficiente e prevenção de lesões, utilizando o Pilates como base para o movimento seguro.",
      qualifications: [
        "Fisioterapeuta",
        "Instrutora de Pilates",
        "Pós-graduanda em Traumato-ortopedia e Esportiva"
      ]
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#F58634] font-bold tracking-wider uppercase text-sm mb-2 block">
            Quem cuida de você
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Conheça nossa Equipe
          </h2>
          <p className="text-gray-600 text-lg">
            Profissionais apaixonados por movimento e ciência, prontos para acolher sua história.
          </p>
        </div>

        {/* CONTÊINER RELATIVO PARA BOTÕES E LISTA */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Botão Esquerda */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white shadow-lg p-3 rounded-full text-gray-600 hover:text-[#F58634] hover:scale-110 transition-all border border-gray-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* AREA DE ROLAGEM (CARROSSEL) */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-8 px-4 justify-start md:justify-center no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="snap-center flex-shrink-0 w-full md:w-[400px] max-w-[400px] bg-[#F9F9F9] rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Imagem */}
                <div className="relative h-[450px] w-full bg-gray-200 group flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top" 
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                     <h3 className="font-serif text-3xl font-bold mb-2">{member.name}</h3>
                     {member.role && (
                       <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-white/30">
                         {member.role}
                       </span>
                     )}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* ALTERAÇÃO 1: Adicionado min-h-[120px] para padronizar a altura da descrição */}
                  <p className="text-gray-600 leading-relaxed mb-8 text-base min-h-[120px]">
                    {member.bio}
                  </p>

                  {/* ALTERAÇÃO 2: Removido 'mt-auto' para a lista não ir pro fundo e sim ficar logo após a bio */}
                  <div className="">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Qualificações:</h4>
                    <ul className="space-y-3">
                      {member.qualifications.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#3AB764] flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-700 font-medium text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botão Direita */}
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white shadow-lg p-3 rounded-full text-gray-600 hover:text-[#F58634] hover:scale-110 transition-all border border-gray-100"
          >
            <ChevronRight size={24} />
          </button>

        </div>
        
      </div>
    </section>
  );
};

export default Team;