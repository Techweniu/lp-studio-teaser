"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Tratamento de Dores & Hérnias",
      desc: "Fisioterapia especializada para tratar a causa da dor nas costas e devolver sua funcionalidade e bem-estar."
    },
    {
      title: "Tratamento Específico para Escoliose",
      desc: "Protocolos baseados em evidências científicas para correção de curvas e postura em adolescentes e adultos."
    },
    {
      title: "Pilates Clínico",
      desc: "Atendimento individualizado com foco em reabilitação de lesões e patologias específicas, respeitando seus limites."
    },
    {
      title: "Pilates em Grupo",
      desc: "Aulas dinâmicas em turmas reduzidas, ideais para manutenção da saúde, condicionamento físico e socialização."
    },
    {
      title: "Pilates Contemporâneo",
      desc: "Método atualizado focado em força, flexibilidade e controle corporal, utilizando equipamentos modernos."
    },
    {
      title: "RPG (Reeducação Postural Global)",
      desc: "Terapia manual focada em corrigir má postura, aliviar dores crônicas e realinhar a coluna vertebral."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Cabeçalho Lateral */}
          <div className="md:w-1/3">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Nossos Serviços</h2>
            <p className="text-gray-600 text-lg mb-8 font-sans">
              Um menu completo de saúde para sua coluna. 
              Do alívio da dor à manutenção da saúde em grupo, temos a modalidade certa para você.
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

          {/* Lista de Serviços (Grid ajustado para 6 itens) */}
          <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-[#F9F9F9] hover:bg-[#FFCCAA]/10 transition-colors border border-transparent hover:border-[#FFCCAA]"
              >
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#3AB764] flex-shrink-0" size={24} />
                    <h3 className="font-serif text-xl text-gray-900 font-bold">{service.title}</h3>
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