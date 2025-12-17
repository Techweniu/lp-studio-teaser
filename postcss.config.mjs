/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- A MUDANÇA ESTÁ AQUI
    autoprefixer: {},
  },
};

export default config;