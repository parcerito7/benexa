import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benexa — Tu asistente para ayudas públicas",
  description: "Encuentra becas, subvenciones y prestaciones sin líos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-benexa-dark antialiased">
        {children}
      </body>
    </html>
  );
}
