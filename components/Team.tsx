"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const Team: React.FC = () => {
  
  const teamMembers = [
    {
      name: "Dra. Kissy Urbanski",
      role: "Fisioterapeuta e Idealizadora",
      image: "/kissy-team.jpg",
      // Mantido texto exato conforme solicitado
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
      name: "Dra. Milena Rocha", // Abreviei para caber visualmente, mas mantendo a formalidade
      role: "Fisioterapeuta",
      image: "/milena-rocha.jpg", // Atualizado para .jpg
      // Bio baseada no currículo enviado
      bio: "Fisioterapeuta pós-graduanda em Traumato-ortopedia e Esportiva. Focada na reabilitação eficiente e prevenção de lesões, utilizando o Pilates como base para o movimento seguro.",
      qualifications: [
        "Fisioterapeuta",
        "Instrutora de Pilates",
        "Pós-graduanda em Traumato-ortopedia e Esportiva"
      ]
    }
  ];

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

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F9F9F9] rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Área da Foto */}
              <div className="relative h-[450px] w-full bg-gray-200 group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  // MUDANÇA: 'object-top' aplicado para AMBAS as fotos. 
                  // Isso garante que o rosto (que fica no topo) nunca seja cortado.
                  className="object-cover object-top" 
                  priority
                />
                
                {/* Gradiente para leitura do nome */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                
                {/* Nome e Cargo na Foto */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                   <h3 className="font-serif text-3xl font-bold mb-2">{member.name}</h3>
                   {member.role && (
                     <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-white/30">
                       {member.role}
                     </span>
                   )}
                </div>
              </div>

              {/* Área de Texto */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  {member.bio}
                </p>

                <div className="mt-auto">
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
        
      </div>
    </section>
  );
};

export default Team;