"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: "Dra. Kissy", // Nome sugerido pelo arquivo de imagem, altere se necessário
      role: "Fisioterapeuta & Fundadora",
      specialties: "Especialista em Coluna e Escoliose",
      image: "/kissy.png", // Usando a mesma imagem da Hero por enquanto
      bio: "Com mais de 10 anos de experiência, dedica sua vida a devolver a autonomia e o movimento sem dor para seus pacientes."
    },
    {
      name: "Equipe Técnica",
      role: "Fisioterapeutas & Estagiários",
      specialties: "Reabilitação e Pilates",
      image: "/public/kessi-2.png", // Placeholder ou outra foto que você tenha
      bio: "Nossa equipe passa por treinamento constante nos protocolos exclusivos do Studio Teaser para garantir segurança total."
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
            Conheça nossa equipe
          </h2>
          <p className="text-gray-600 text-lg">
            Profissionais apaixonados por movimento e ciência, prontos para acolher sua história.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-[#F9F9F9] rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                {/* Fallback para imagem se não existir */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                  <p className="text-[#F58634] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#F58634] pl-4">
                    {member.bio}
                  </p>
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