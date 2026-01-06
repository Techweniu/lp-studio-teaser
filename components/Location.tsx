"use client";

import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        {/* Layout centralizado sem grid de mapa */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl p-8 md:p-12 text-center border border-gray-100">
            
            <div className="mb-10">
              <h2 className="font-serif text-4xl text-gray-900 mb-4">Nosso endereço</h2>
              <p className="text-gray-600 text-lg font-sans max-w-2xl mx-auto">
                Estamos de casa nova! Um espaço ampliado, pensado nos mínimos detalhes para o seu conforto e reabilitação no centro de Itumbiara.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto mb-10 font-sans">
              {/* Endereço */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-[#FFCCAA]/30 p-4 rounded-full text-[#F58634] mb-4">
                  <MapPin size={28} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Onde Estamos</h4>
                <p className="text-gray-600">Rua Tiradentes, 804</p>
                <p className="text-gray-500 text-sm">Centro, Itumbiara - GO</p>
              </div>

              {/* Horário */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-[#FFCCAA]/30 p-4 rounded-full text-[#F58634] mb-4">
                  <Clock size={28} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Horários</h4>
                <div className="text-gray-600 text-sm space-y-1">
                    <p>Seg - Qui: 06:00–20:00</p>
                    <p>Sexta: 07:00–11:00</p>
                </div>
              </div>

              {/* Contato */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-[#FFCCAA]/30 p-4 rounded-full text-[#F58634] mb-4">
                  <Phone size={28} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Contato</h4>
                <p className="text-gray-600 mb-1">(64) 99662-8508</p>
                <p className="text-gray-500 text-sm">teaserstudio2@gmail.com</p>
              </div>
            </div>
            
            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/5564996628508?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20localiza%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-[#3AB764] text-white font-bold hover:bg-[#2e9652] transition-colors shadow-lg shadow-green-100 font-sans text-lg"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </a>

        </div>
      </div>
    </section>
  );
};

export default Location;