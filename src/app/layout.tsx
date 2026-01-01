import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GMR Serviços | Limpeza, Segurança e Manutenção para Condomínios em SP",
  description:
    "Empresa de serviços terceirizados em São Paulo. Portaria, limpeza, conservação, dedetização contra Dengue, segurança para eventos. Solicite um orçamento gratuito!",
  keywords: [
    "Portaria em SP",
    "Empresa de Limpeza São Paulo",
    "Dedetização Dengue",
    "Segurança para eventos",
    "Terceirização de serviços",
    "Limpeza comercial",
    "Controle de pragas SP",
  ],
  authors: [{ name: "Gerson Moreira" }],
  icons: {
    icon: "/gmr-logo.jpeg",
    apple: "/gmr-logo.jpeg",
  },
  openGraph: {
    title: "GMR Serviços | Soluções Completas para Condomínios",
    description:
      "Portaria, Limpeza, Dedetização e Segurança. Cobrimos orçamentos!",
    type: "website",
    locale: "pt_BR",
    images: ["/gmr-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
