/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        benexa: {
          teal: "#00B894",
          dark: "#0B0F10",
          light: "#26D7AE",
          gray: "#69707D"
        },
      },
      letterSpacing: {
        tight: "-0.01em",   // titulares más compactos (Apple-like)
        tighter: "-0.02em",
      },
      lineHeight: {
        snug: "1.15",       // titulares más densos
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",     // cards suaves
        xl3: "1.75rem",
      },
    },
  },
  plugins: [],
}
