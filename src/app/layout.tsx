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
  title: "Dedetização, Limpeza e Manutenção Predial para Condomínios | GMR Serviços",
  description:
    "Dedetização contra Dengue, limpeza pós-obra, portaria 24h e manutenção predial para condomínios em São Paulo. Cobrimos orçamentos! Solicite uma visita gratuita.",
  keywords: [
    "Dedetização SP",
    "Dedetização Dengue São Paulo",
    "Controle de pragas condomínio",
    "Limpeza pós-obra SP",
    "Manutenção predial condomínio",
    "Portaria 24h São Paulo",
    "Empresa de limpeza condomínio",
    "GMR Serviços",
  ],
  authors: [{ name: "Gerson Moreira" }],
  icons: {
    icon: "/gmr-logo.jpeg",
    apple: "/gmr-logo.jpeg",
  },
  openGraph: {
    title: "Dedetização e Manutenção Predial para Condomínios | GMR Serviços",
    description:
      "Dedetização contra Dengue, limpeza, portaria e manutenção predial. Cobrimos orçamentos!",
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
