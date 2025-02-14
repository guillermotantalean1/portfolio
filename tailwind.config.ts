import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1117", // Snow
        foreground: "#E6EDF3", // Davy's Gray (Texto principal)
        cardBg: "#D0CFCF", // Timberwolf (Fondo de tarjetas)
        borderColor: "#7A7D7D", // Gray (Bordes y líneas)
        headerBg: "#565254", // Davy's Gray (Fondo del header)
        footerBg: "#7A7D7D", // Gray (Fondo del footer)
        buttonBg: "#565254", // Davy's Gray (Botón principal)
        buttonText: "#FFFFFF", // White (Texto del botón)
        muted: "#8B949E", // Texto gris más claro (subtítulos)
        secondary: "#E2E8F0", // Otro tono de gris más visible
        accent: "#58A6FF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;