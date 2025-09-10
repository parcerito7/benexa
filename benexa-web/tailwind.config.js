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
          teal: "#00B894",   // verde principal
          dark: "#0B0F10",   // texto
          light: "#26D7AE",  // acento claro
        },
      },
      backgroundImage: {
        "benexa-pastel":
          "radial-gradient(1000px 600px at 20% -10%, rgba(38,215,174,0.25) 0%, transparent 60%), radial-gradient(800px 500px at 80% 0%, rgba(0,184,148,0.18) 0%, transparent 60%)",
      },
      boxShadow: {
        glass: "0 10px 40px rgba(0,0,0,.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}
