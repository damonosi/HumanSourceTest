module.exports = {
  trailingComma: "all",
  printWidth: 80,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  exclude: ["node_modules", ".next"],
  plugins: [require("prettier-plugin-tailwindcss")],
};
