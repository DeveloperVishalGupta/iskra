// prettier.config.js
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
};
