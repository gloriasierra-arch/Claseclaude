import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOCTOQUIMBO | Encuentra tu departamento en Coquimbo",
  description:
    "Encuentra los mejores departamentos a precios accesibles en Coquimbo y La Serena. Proyectos con subsidio, 1, 2 y 3 dormitorios disponibles.",
  keywords: "departamentos baratos coquimbo, arriendo coquimbo, venta departamentos coquimbo, subsidio habitacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
