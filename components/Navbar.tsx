"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // LISTA DE LINKS ATUALIZADA
  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Avaliações', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' }, // <--- ADICIONADO AQUI
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        
        {/* 1. Logo (Esquerda) */}
        <Link href="#hero" className="relative z-50 flex-shrink-0">
           <Image 
             src="/logo-full.png" 
             alt="Studio Teaser" 
             width={180} 
             height={60} 
             className="w-auto h-10 md:h-12 object-contain"
             priority
           />
        </Link>

        {/* 2. Desktop Menu (Centralizado e Ajustado) */}
        {/* Adicionei 'xl:gap-8' para monitores maiores e 'gap-4' para menores para caber tudo */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs xl:text-sm font-medium hover:text-[#F58634] transition-colors uppercase tracking-wide ${
                isScrolled ? 'text-gray-600' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Botão de Ação (Direita) */}
        <div className="hidden lg:flex flex-shrink-0">
            <Link
                href="https://wa.me/5564996628508"
                target="_blank"
                className="px-6 py-2.5 bg-[#F58634] text-white rounded-full text-sm font-bold hover:bg-[#d9732a] transition-transform hover:scale-105 shadow-lg shadow-orange-200"
            >
                Agendar Agora
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-6 lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-serif text-gray-900 hover:text-[#F58634]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://wa.me/5564996628508"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-[#F58634] text-white rounded-full text-xl font-bold"
              >
                Agendar Agora
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;