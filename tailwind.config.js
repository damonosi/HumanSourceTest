
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",

  theme: {
    fontFamily: {
      sans: ["var(--font-madera)"],
    },
    extend: {
      boxShadow: {
        parteneriShadow: "inset 0px 0px 20px rgba(102, 102, 102, 0.1)",
      },
      backgroundImage: {
        "card-blog":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, .4))",
      },

      colors: {
        "rosu-brand": "#B82C2F",
        "rosu-butoane": "#B21E23",
        "gri-brand": "#383A3C",
        "gri-bg": "#506673",
        "gri-deschis-bg": "#D0D0D0",
        "alb-site": "#FCFEFF",
      },
    },
  },
  plugins: [],
});
