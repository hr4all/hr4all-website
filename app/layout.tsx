import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR4All | Consultoría de Recursos Humanos para PyMEs",
  description:
    "Soluciones estratégicas de Recursos Humanos para PyMEs argentinas: outsourcing, consultoría, capacitación y procesos escalables.",
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
