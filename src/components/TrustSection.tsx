"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, FileText, Shield } from "lucide-react";

const trustPoints = [
  {
    icon: FileText,
    title: "Propostas Detalhadas",
    subtitle: "Transparência Total",
    description:
      "Não trabalhamos com boca-a-boca. Cada projeto recebe uma proposta comercial completa, com escopo detalhado, prazos, valores e condições claras.",
    color: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "Segurança Contratual",
    subtitle: "Proteção Jurídica",
    description:
      "Todos os serviços são formalizados com contratos claros, termos de confidencialidade e cláusulas que protegem ambas as partes.",
    color: "bg-emerald-500",
  },
  {
    icon: Award,
    title: "Pós-Venda",
    subtitle: "Garantia de Satisfação",
    description:
      "Emitimos declaração de serviço prestado e oferecemos suporte pós-execução. Sua satisfação é nossa prioridade número um.",
    color: "bg-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TrustSection() {
  return (
    <section id="porque-nos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--gmr-blue)] bg-[var(--gmr-blue)]/10 rounded-full">
            O Padrão GMR
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que contratar a{" "}
            <span className="text-[var(--gmr-blue)]">GMR Serviços?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com transparência, profissionalismo e compromisso.
            Conheça os diferenciais que fazem da GMR a escolha certa.
          </p>
        </motion.div>

        {/* Trust Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {trustPoints.map((point) => (
            <motion.div key={point.title} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--gmr-blue)]/30 group">
                <CardContent className="p-6 lg:p-8 text-center">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${point.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <point.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Subtitle */}
                  <span className="text-sm font-medium text-[var(--gmr-blue)] uppercase tracking-wider">
                    {point.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-4">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[var(--gmr-blue)] rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[var(--gmr-yellow)]">
                10+
              </div>
              <p className="text-white/70 text-sm mt-1">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[var(--gmr-yellow)]">
                500+
              </div>
              <p className="text-white/70 text-sm mt-1">Clientes Atendidos</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[var(--gmr-yellow)]">
                100%
              </div>
              <p className="text-white/70 text-sm mt-1">Documentado</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[var(--gmr-yellow)]">
                24/7
              </div>
              <p className="text-white/70 text-sm mt-1">Suporte Disponível</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
