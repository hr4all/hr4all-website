import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR4All | Consultoría de Recursos Humanos para PyMEs",
  description:
    "Outsourcing, consultoría, capacitación y procesos de RR.HH. para PyMEs argentinas que necesitan ordenar su operación de personas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
