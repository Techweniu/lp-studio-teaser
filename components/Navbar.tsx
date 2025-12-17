"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Dúvidas', href: '#faq' }, // Alterado de Depoimentos para Dúvidas
    { name: 'Localização', href: '#localizacao' },
  ];

  // Link do WhatsApp formatado
  const whatsappLink = "https://wa.me/5564996628508?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20no%20Studio%20Teaser.";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <a href="#" className="relative w-40 h-12 md:w-48 md:h-14 transition-transform hover:scale-105">
            <Image 
              src="/logo-full.png" 
              alt="Teaser Pilates" 
              fill
              className="object-contain object-left"
              priority
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#F58634] transition-colors font-sans"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button (WhatsApp) */}
        <div className="hidden lg:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#F58634] text-white rounded-full font-semibold text-sm hover:bg-[#d9732a] transition-all transform hover:scale-105 shadow-lg shadow-orange-200 font-sans"
          >
            Agendar Avaliação
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 hover:text-[#F58634] font-sans"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full text-center px-6 py-3 bg-[#F58634] text-white rounded-full font-bold shadow-md font-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Avaliação
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;