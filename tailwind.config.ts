import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F58634',
          green: '#3AB764',
          beige: '#FFCCAA',
          bg: '#F9F9F9'
        }
      },
      fontFamily: {
        // As fontes agora apontam para as variáveis que criamos no layout.tsx
        serif: ['var(--font-tanaegean)', 'serif'],
        sans: ['var(--font-wadrum)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;