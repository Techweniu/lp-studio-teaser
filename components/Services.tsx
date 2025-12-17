"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react'; // Adicionei icone de msg

const Services: React.FC = () => {
  const services = [
    {
      title: "Pilates Clássico & Contemporâneo",
      desc: "Aulas completas utilizando todos os aparelhos (Reformer, Cadillac, Chair, Barrel) para fortalecimento global."
    },
    {
      title: "Tratamento de Escoliose",
      desc: "Abordagem específica baseada em evidências para correção postural e alívio de dores em curvas da coluna."
    },
    {
      title: "Reabilitação Pós-Lesão",
      desc: "Protocolos seguros para retorno às atividades após cirurgias ou lesões esportivas."
    },
    {
      title: "Gestantes e Pós-Parto",
      desc: "Cuidado especial para preparar o corpo para o parto e recuperar a forma com segurança."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Header */}
          <div className="md:w-1/3">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Nossos Serviços</h2>
            <p className="text-gray-600 text-lg mb-8 font-sans">
              Um menu completo de saúde pensado para cada etapa da sua vida. 
              Aqui, a técnica se adapta ao aluno, nunca o contrário.
            </p>
            
            {/* Botão Útil agora */}
            <a 
              href="https://wa.me/5564996628508?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20os%20hor%C3%A1rios%20dispon%C3%ADveis."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F58634] font-bold hover:underline text-lg inline-flex items-center gap-2 group font-sans"
            >
              <MessageCircle size={20} />
              Consultar horários no WhatsApp
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* List */}
          <div className="md:w-2/3 grid gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#F9F9F9] hover:bg-[#FFCCAA]/10 transition-colors border border-transparent hover:border-[#FFCCAA]"
              >
                <CheckCircle2 className="text-[#3AB764] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 font-sans">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;