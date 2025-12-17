"use client";

import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[2.5rem] overflow-hidden shadow-xl">
          
          {/* Info Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="font-serif text-4xl text-gray-900 mb-4">Nosso novo lar</h2>
              <p className="text-gray-600 text-lg font-sans">
                Um ambiente planejado, clean e 100% climatizado no coração de Itumbiara. 
                Estacionamento fácil e acessibilidade total.
              </p>
            </div>

            <div className="space-y-6 font-sans">
              <div className="flex items-start gap-4">
                <div className="bg-[#FFCCAA]/30 p-3 rounded-full text-[#F58634] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">R. Rui de Almeida, 742 - St. Central, Itumbiara - GO</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FFCCAA]/30 p-3 rounded-full text-[#F58634] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Horário de Funcionamento</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p><span className="font-semibold">Seg - Qui:</span> 06:00–12:00, 13:00–20:00</p>
                    <p><span className="font-semibold">Sexta:</span> 07:00–11:00</p>
                    <p><span className="font-semibold text-red-400">Sáb - Dom:</span> Fechado</p>
                  </div>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-[#FFCCAA]/30 p-3 rounded-full text-[#F58634] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Contato</h4>
                  <p className="text-gray-600">(64) 99662-8508</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=R.+Rui+de+Almeida,+742+-+St.+Central,+Itumbiara+-+GO"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 rounded-xl bg-[#3AB764] text-white font-bold hover:bg-[#2e9652] transition-colors shadow-lg shadow-green-100 font-sans"
            >
              Traçar rota no Google Maps
            </a>
          </div>

          {/* Map Side (Iframe Corrigido) */}
          <div className="relative min-h-[400px] lg:min-h-full bg-gray-200">
             <iframe 
                src="https://maps.google.com/maps?q=R.+Rui+de+Almeida,+742+-+St.+Central,+Itumbiara+-+GO&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;