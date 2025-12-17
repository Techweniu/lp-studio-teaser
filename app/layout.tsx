import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configurando a fonte do Título (Tan Aegean)
const tanAegean = localFont({
  src: "./fonts/TanAegean-regular.otf", 
  variable: "--font-tanaegean",
  display: "swap",
});

// Configurando a fonte do Texto (Wadrum Pro)
// O segredo está aqui: mapeamos os arquivos para os pesos
const wadrumPro = localFont({
  src: [
    {
      path: "./fonts/WardrumPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WardrumPro-Bold.otf",
      weight: "700", // Quando usarmos font-bold, ele vai pegar esse arquivo
      style: "normal",
    },
  ],
  variable: "--font-wadrum",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Teaser | Pilates e Saúde Integrada",
  description: "Pilates personalizado e fisioterapia especializada em Itumbiara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Aplicando as variáveis no body */}
      <body className={`${tanAegean.variable} ${wadrumPro.variable} antialiased bg-[#F9F9F9] text-gray-800 font-sans`}>
        {children}
      </body>
    </html>
  );
}