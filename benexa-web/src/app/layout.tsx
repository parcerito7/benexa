import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benexa — Encuentra ayudas sin drama",
  description:
    "Tu asistente para becas y subvenciones. Te guiamos con preguntas simples, resultados claros y cero jerga.",
  metadataBase: new URL("https://benexa.com"), // cámbialo a tu dominio cuando lo tengas
  openGraph: {
    title: "Benexa — Encuentra ayudas sin drama",
    description:
      "Encuentra las becas y ayudas que te corresponden. Paso a paso, claro y sin complicaciones.",
    url: "https://benexa.com",
    siteName: "Benexa",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Benexa Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-benexa-dark antialiased">
        {children}
      </body>
    </html>
  );
}
