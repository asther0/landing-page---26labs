import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tu SoluciÃ³n Digital",
  description: "Plataforma innovadora que transforma tu experiencia digital con herramientas poderosas y fÃ¡ciles de usar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
