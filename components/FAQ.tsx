"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter encaminhamento médico para começar?",
      answer: "Não é obrigatório. Nossa fisioterapeuta Dra. Kissy realiza uma avaliação funcional completa no primeiro atendimento para entender suas necessidades."
    },
    {
      question: "Tenho dores constantes na coluna, o Pilates ajuda?",
      answer: "Sim! Somos especialistas em patologias da coluna e dores crônicas. O Pilates Clínico é uma das ferramentas mais eficazes para reabilitação e alívio da dor."
    },
    {
      question: "Nunca fiz Pilates antes, vou conseguir acompanhar?",
      answer: "Com certeza. Nossas aulas são personalizadas. Você terá o acompanhamento de uma Fisioterapeuta e uma estagiária o tempo todo para garantir que faça os movimentos no seu ritmo e com segurança."
    },
    {
      question: "Aceitam convênios?",
      answer: "Trabalhamos focados na qualidade máxima do atendimento particular, por isso não atendemos convênios diretamente, mas emitimos nota fiscal para reembolso se seu plano permitir."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#FFCCAA]/10 relative overflow-hidden">
        {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#F58634] font-bold tracking-wider uppercase text-sm mb-2 block font-sans">Dúvidas Comuns</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Perguntas Frequentes</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-serif text-lg font-medium transition-colors ${openIndex === index ? 'text-[#F58634]' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-[#F58634] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 font-sans leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;