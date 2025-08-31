/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: false,
  bracketSpacing: true,
  tabWidth: 2,
  trailingComma: "es5",
  semi: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
