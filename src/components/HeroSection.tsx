"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle, Phone, Star } from "lucide-react";

const highlights = [
  "Orçamento Gratuito",
  "Cobrimos Concorrência",
  "Profissionais Treinados",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gmr-blue)]/5 via-background to-[var(--gmr-yellow)]/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--gmr-blue)]/5 rounded-bl-[100px] hidden lg:block" />

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-[var(--gmr-blue)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--gmr-yellow)]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gmr-yellow)]/20 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-[var(--gmr-yellow)] fill-current" />
              <span className="text-sm font-medium text-foreground">
                +10 anos de experiência em SP
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">Dedetização</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[var(--gmr-yellow)]/40 -z-0" />
              </span>
              , Limpeza e{" "}
              <span className="text-[var(--gmr-blue)]">Manutenção Predial</span>{" "}
              para Condomínios
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Dedetização contra Dengue, limpeza pós-obra, portaria 24h e manutenção predial.
              Trabalhamos com transparência, qualidade e preços competitivos.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {highlight}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[var(--gmr-yellow)] text-[var(--gmr-blue)] hover:bg-[var(--gmr-blue)] hover:text-white font-semibold text-lg px-8 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://wa.me/5511950371748?text=Olá! Vim pelo site e gostaria de solicitar um orçamento gratuito."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento Gratuito
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[var(--gmr-blue)] text-[var(--gmr-blue)] hover:bg-[var(--gmr-blue)] hover:text-white font-semibold text-lg px-8 h-14"
              >
                <a href="#servicos">
                  Conhecer Serviços
                  <ArrowDown className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Slogan */}
            <p className="mt-8 text-sm text-muted-foreground italic">
              &quot;Cobrimos orçamentos. Agende uma visita e contrate já!&quot;
            </p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Service Cards Preview */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-20 border">
                <div className="w-12 h-12 rounded-xl bg-[var(--gmr-blue)] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  GMR Serviços
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Terceirização de serviços com qualidade e confiança
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Limpeza", "Portaria", "Dedetização", "Segurança"].map(
                    (service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-[var(--gmr-blue)]/10 text-[var(--gmr-blue)] text-xs font-medium rounded-full"
                      >
                        {service}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-green-500 text-white rounded-xl p-4 shadow-lg z-30"
              >
                <Phone className="w-6 h-6 mb-1" />
                <p className="text-xs font-medium">WhatsApp</p>
                <p className="text-sm font-bold">9.5037-1748</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 bg-[var(--gmr-yellow)] text-[var(--gmr-blue)] rounded-xl p-4 shadow-lg z-10"
              >
                <Star className="w-6 h-6 mb-1 fill-current" />
                <p className="text-xs font-medium">Avaliação</p>
                <p className="text-sm font-bold">5.0 ★★★★★</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
