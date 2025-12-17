"use client";

import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react'; // Usando Phone para Zap se não tiver ícone específico
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="relative w-48 h-16 block mb-4">
               <Image 
                  src="/logo-full.png" 
                  alt="Teaser Pilates" 
                  fill
                  className="object-contain object-left"
                />
            </a>
            
            <p className="text-gray-500 max-w-sm mb-6 font-sans">
              Studio de Pilates e Saúde Integrada. Transformando vidas através do movimento consciente e reabilitação especializada em Itumbiara.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/studioteaser" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#F9F9F9] flex items-center justify-center text-gray-600 hover:bg-[#F58634] hover:text-white transition-all"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/people/Studio-Teaser/61577564057856/#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#F9F9F9] flex items-center justify-center text-gray-600 hover:bg-[#F58634] hover:text-white transition-all"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/5564996628508" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#F9F9F9] flex items-center justify-center text-gray-600 hover:bg-[#3AB764] hover:text-white transition-all"
                title="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="font-sans">
            <h4 className="font-bold text-gray-900 mb-4 font-serif text-lg">Studio</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-gray-500 hover:text-[#F58634] transition-colors">Quem somos</a></li>
              <li><a href="#metodologia" className="text-gray-500 hover:text-[#F58634] transition-colors">Metodologia</a></li>
              <li><a href="#servicos" className="text-gray-500 hover:text-[#F58634] transition-colors">Serviços</a></li>
              <li><a href="#localizacao" className="text-gray-500 hover:text-[#F58634] transition-colors">Localização</a></li>
            </ul>
          </div>

          {/* Legal/Contact */}
          <div className="font-sans">
            <h4 className="font-bold text-gray-900 mb-4 font-serif text-lg">Contato</h4>
            <ul className="space-y-3">
              <li className="text-gray-500">(64) 99662-8508</li>
              <li className="text-gray-500">contato_studioTeaser@gmail.com</li>
              <li className="text-gray-500 pt-4 text-sm">
                CREFITO: xxxxxxxx
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-sans">
          <p>&copy; {new Date().getFullYear()} Studio Teaser. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-600">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;