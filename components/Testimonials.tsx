"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ana Paula Souza",
      text: "Cheguei ao estúdio travada da coluna e com medo de me mexer. O método da Dra. Kissy mudou minha vida. Hoje faço coisas que achava impossíveis!",
      tag: "Tratamento de Hérnia"
    },
    {
      name: "Ricardo Mendes",
      text: "Ambiente acolhedor e profissionais extremamente técnicos. A atenção dupla (fisioterapeuta e estagiário) faz toda a diferença na segurança.",
      tag: "Pilates Contemporâneo"
    },
    {
      name: "Mariana Oliveira",
      text: "Minha escoliose sempre me causou dores, mas o tratamento específico do Teaser aliviou muito. Sinto minha postura muito mais elegante.",
      tag: "Tratamento de Escoliose"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#2C2C2C] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-20 left-10 w-64 h-64 bg-[#F58634] rounded-full blur-[100px]" />
         <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#3AB764] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#F58634] font-bold tracking-wider uppercase text-sm mb-2 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Histórias de quem vive sem dor
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-[#F58634]/50 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-[#F58634]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <Quote className="text-gray-500 mb-4 opacity-50" size={32} />
              
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <p className="font-serif text-lg font-medium text-white">{review.name}</p>
                <p className="text-sm text-[#3AB764] font-medium">{review.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps" // Coloque o link real do Google Maps dela aqui
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white border-b border-[#F58634] pb-1 hover:text-[#F58634] transition-colors"
          >
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;