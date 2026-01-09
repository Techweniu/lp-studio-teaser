"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Tratamento de Dores & Hérnias",
      desc: "Fisioterapia especializada para tratar a causa da dor nas costas e devolver sua funcionalidade e bem-estar."
    },
    {
      title: "Pilates Clínico",
      desc: "Atendimento individualizado com foco em reabilitação de lesões e patologias específicas, respeitando seus limites.",
      badge: "Turmas Reduzidas" // Novo campo para o destaque
    },
    {
      title: "Pilates Contemporâneo",
      desc: "Método atualizado focado em força, flexibilidade e controle corporal, utilizando equipamentos modernos."
    },
    {
      title: "Tratamento Específico para Escoliose",
      desc: "Protocolos baseados em evidências científicas para correção de curvas e postura em adolescentes e adultos."
    },
    {
      title: "RPG (Reeducação Postural Global)",
      desc: "Terapia manual focada em corrigir má postura, aliviar dores crônicas e realinhar a coluna vertebral."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row gap-12">
          
          {/* Cabeçalho Lateral (Fixo à esquerda em telas grandes) */}
          <div className="xl:w-1/3 flex-shrink-0">
            <div className="sticky top-24">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Nossos Serviços</h2>
                <p className="text-gray-600 text-lg mb-8 font-sans leading-relaxed">
                Um menu completo de saúde para sua coluna. 
                Do alívio da dor à manutenção da saúde, temos a modalidade certa para você.
                </p>
                
                <a 
                href="https://wa.me/5564996628508?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F58634] font-bold hover:underline text-lg inline-flex items-center gap-2 group font-sans"
                >
                <MessageCircle size={20} />
                Falar com Fisioterapeuta
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
          </div>

          {/* Lista de Serviços (Flexbox para centralizar itens ímpares) */}
          <div className="xl:w-2/3 flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                // w-full no mobile, calc(50% - 12px) no tablet/desktop para ficar 2 por linha
                className="w-full md:w-[calc(50%-12px)] flex flex-col gap-3 p-6 rounded-2xl bg-[#F9F9F9] hover:bg-[#FFCCAA]/10 transition-colors border border-transparent hover:border-[#FFCCAA] relative group"
              >
                {/* Badge de Destaque (Se existir) */}
                {service.badge && (
                    <div className="absolute -top-3 right-6 bg-[#3AB764] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
                        <Users size={12} />
                        {service.badge}
                    </div>
                )}

                <div className="flex items-start gap-3 mt-2">
                    <CheckCircle2 className="text-[#3AB764] flex-shrink-0 mt-1" size={24} />
                    <h3 className="font-serif text-xl text-gray-900 font-bold leading-tight">{service.title}</h3>
                </div>
                <p className="text-gray-600 font-sans text-sm leading-relaxed pl-9">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;