"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-[#F58634]/20 relative">
      <div className="container mx-auto px-6">
        
        {/* Grid Principal */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Marca (Logo Imagem) */}
          <div className="space-y-6">
            <Link href="#hero" className="inline-block">
               <Image 
                 src="/logo-full.png" 
                 alt="Studio Teaser" 
                 width={180} 
                 height={60} 
                 className="w-auto h-10 md:h-12 object-contain brightness-0 invert" // Filtro para deixar branco no fundo escuro
               />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transformando vidas através do movimento consciente. 
              Referência em Pilates, tratamento de dores e reabilitação em Itumbiara.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F58634] hover:border-[#F58634] transition-all text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* 2. Mapa do Site (Explorar) */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#F58634]">Explorar</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#hero" className="hover:text-white hover:translate-x-1 transition-all inline-block">Início</Link></li>
              <li><Link href="#especialidades" className="hover:text-white hover:translate-x-1 transition-all inline-block">Especialidades</Link></li>
              <li><Link href="#servicos" className="hover:text-white hover:translate-x-1 transition-all inline-block">Serviços</Link></li>
              <li><Link href="#equipe" className="hover:text-white hover:translate-x-1 transition-all inline-block">Nossa Equipe</Link></li>
              <li><Link href="#faq" className="hover:text-white hover:translate-x-1 transition-all inline-block">Dúvidas</Link></li>
              <li><Link href="#localizacao" className="hover:text-white hover:translate-x-1 transition-all inline-block">Localização</Link></li>
            </ul>
          </div>

          {/* 3. Contato Direto (Sem Endereço) */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#F58634]">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 group">
                <Phone size={18} className="text-[#F58634] mt-1 group-hover:text-white transition-colors" />
                <a href="tel:+5564996628508" className="group-hover:text-white transition-colors">(64) 99662-8508</a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail size={18} className="text-[#F58634] mt-1 group-hover:text-white transition-colors" />
                <a href="mailto:contato@studioteaser.com.br" className="group-hover:text-white transition-colors">contato@studioteaser.com.br</a>
              </li>
            </ul>
          </div>

          {/* 4. Horários */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#F58634]">Funcionamento</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Seg - Sex</span>
                <span className="text-white font-medium">06:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábado</span>
                <span className="text-white font-medium">08:00 - 12:00</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Domingo</span>
                <span className="text-[#F58634]">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Studio Teaser. Todos os direitos reservados.</p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 hover:text-[#F58634] transition-colors"
          >
            Voltar ao topo <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;