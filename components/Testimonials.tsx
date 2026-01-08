"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rubens Antônio",
      text: "Todas as Pessoas deveriam fazer Pilates!!! independente da idade!!! faz bem para alma e o corpo!!! Professoras com muita experiência!!! 6 meses de pilates mudou minha vida em todos os sentidos...",
      tag: "Mudança de Vida"
    },
    {
      name: "Fernanda Lau",
      text: "O melhor Studio de Pilates de Itumbiara!! As professoras são MARAVILHOSAS! Depois que comecei minha postura melhorou e não sinto dor na lombar. A questão de postura foi visível!",
      tag: "Postura & Dor Lombar"
    },
    {
      name: "Layla Zago",
      text: "As instrutoras demonstram muita atenção e cuidado, sempre corrigindo os movimentos com delicadeza. É visível o comprometimento em oferecer um atendimento individualizado.",
      tag: "Atendimento Individualizado"
    },
    {
      name: "Camila Almeida",
      text: "Faço pilates aqui há muito tempo e estou muito satisfeita com os resultados. Os profissionais são atenciosos e conduzem as aulas com muito cuidado, respeitando os limites de cada aluno.",
      tag: "Aluna Satisfeita"
    },
    {
      name: "Maria Júlia Andrade",
      text: "Lugar maravilhoso, ótimos profissionais... superou as minhas expectativas, atendeu as minhas necessidades, me fez aprender a gostar de pilates.",
      tag: "Superou Expectativas"
    },
    {
      name: "Viviane Moraes",
      text: "Quer ter uma excelente experiência com o Pilates? Faça já a matrícula (experiência de uma aluna que está vencendo o sedentarismo).",
      tag: "Vencendo o Sedentarismo"
    }
  ];

  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  // Detecta o tamanho da tela para ajustar quantos cards aparecem
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop: 3 por vez
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet: 2 por vez
      } else {
        setItemsPerPage(1); // Mobile: 1 por vez
      }
    };

    // Executa no início e quando a tela muda
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  // Garante que se redimensionar a tela, não ficamos numa página inválida
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [itemsPerPage, totalPages, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Pega apenas os itens da página atual para renderizar
  const currentReviews = reviews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="depoimentos" className="py-24 bg-[#2C2C2C] text-white relative overflow-hidden">
      {/* Elementos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-20 left-10 w-64 h-64 bg-[#F58634] rounded-full blur-[100px]" />
         <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#3AB764] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#F58634] font-bold tracking-wider uppercase text-sm mb-2 block">
            Depoimentos Reais
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            O que dizem no Google
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Histórias de quem confiou sua saúde ao Studio Teaser.
          </p>
        </div>

        {/* Área do Carrossel */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Botões de Navegação (Escondidos no Mobile se quiser, ou ajustados) */}
          <button 
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 bg-white/10 hover:bg-[#F58634] p-3 rounded-full backdrop-blur-sm transition-all text-white hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 bg-white/10 hover:bg-[#F58634] p-3 rounded-full backdrop-blur-sm transition-all text-white hidden md:block"
          >
            <ChevronRight size={24} />
          </button>

          {/* Grid Responsivo Animado */}
          <div className="min-h-[400px]">
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={currentPage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {currentReviews.map((review, index) => (
                        <div 
                        key={index}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-[#F58634]/50 transition-colors flex flex-col justify-between h-full min-h-[300px]"
                        >
                        <div>
                            <div className="flex gap-1 mb-6 text-[#F58634]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                            </div>
                            
                            <Quote className="text-gray-600 mb-4 opacity-50" size={28} />
                            
                            <p className="text-gray-300 leading-relaxed mb-6 italic text-sm md:text-base">
                            "{review.text}"
                            </p>
                        </div>
                        
                        <div className="border-t border-white/10 pt-4 mt-auto">
                            <p className="font-serif text-lg font-medium text-white">{review.name}</p>
                            <p className="text-xs text-[#3AB764] font-bold tracking-wide uppercase mt-1">{review.tag}</p>
                        </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
          </div>

          {/* Paginação (Bolinhas) e Setas Mobile */}
          <div className="flex flex-col items-center gap-6 mt-8">
            
            {/* Controles Mobile (Aparecem só em telas pequenas) */}
            <div className="flex gap-4 md:hidden">
                <button onClick={prevPage} className="bg-white/10 p-3 rounded-full"><ChevronLeft /></button>
                <button onClick={nextPage} className="bg-white/10 p-3 rounded-full"><ChevronRight /></button>
            </div>

            {/* Indicadores de Página */}
            <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === idx ? "bg-[#F58634] w-8" : "bg-gray-600 w-2 hover:bg-gray-400"
                    }`}
                />
                ))}
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=studio+pilates+teaser+itumbiara" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white border-b border-[#F58634] pb-1 hover:text-[#F58634] transition-colors gap-2"
          >
            <Star size={16} />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;