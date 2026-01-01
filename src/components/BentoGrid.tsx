"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  Info,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { DengueModal } from "./DengueModal";

const services = [
  {
    id: "dedetizacao",
    title: "Dedetização & Controle de Pragas",
    description:
      "Proteção completa para seu condomínio. Eliminação de pragas urbanas com produtos seguros e aprovados pela ANVISA. Especialistas no combate ao Aedes aegypti.",
    icon: Bug,
    size: "wide", // 2x1 on desktop - Primary position
    color: "from-orange-500/20 to-red-500/20",
    features: [
      "Combate à Dengue e Aedes aegypti",
      "Produtos aprovados pela ANVISA",
      "Garantia de resultado",
      "Saúde e segurança para moradores",
    ],
    hasDengueInfo: true,
  },
  {
    id: "portaria",
    title: "Portaria & Controle de Acesso",
    description:
      "Profissionais qualificados para recepção, portaria 24h e segurança em eventos. Controle rigoroso de acesso para a tranquilidade dos moradores.",
    icon: Shield,
    size: "tall", // 1x2 on desktop - Right side
    color: "from-emerald-500/20 to-emerald-600/20",
    features: [
      "Portaria 24 horas",
      "Controle de acesso de visitantes",
      "Segurança para eventos",
      "Recepção profissional",
    ],
  },
  {
    id: "limpeza",
    title: "Limpeza Pós-Obra & Conservação",
    description:
      "Serviços especializados de limpeza para condomínios em obras ou reformas. Preparamos o ambiente para a entrega das chaves aos novos moradores.",
    icon: Sparkles,
    size: "standard", // 1x1 on desktop - Mid left
    color: "from-blue-500/20 to-blue-600/20",
    features: [
      "Limpeza Grossa (remoção de resíduos)",
      "Limpeza Fina / Entrega de Chaves",
      "Conservação de áreas comuns",
      "Pronto para novos moradores",
    ],
  },
  {
    id: "manutencao",
    title: "Manutenção Predial & Reparos",
    description:
      'Serviços de "Marido de Aluguel" para seu condomínio. Pequenos reparos, retoques de pintura, instalações e organização de ambientes durante obras.',
    icon: Wrench,
    size: "standard", // 1x1 on desktop - Bottom left
    color: "from-purple-500/20 to-purple-600/20",
    features: [
      "Pequenos reparos hidráulicos e elétricos",
      "Retoques de pintura",
      "Instalação de itens e fixação",
      "Organização durante obras",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function BentoGrid() {
  const [isDengueOpen, setIsDengueOpen] = useState(false);

  const getGridClass = (size: string) => {
    switch (size) {
      case "wide":
        return "md:col-span-2"; // Primary - spans 2 columns
      case "tall":
        return "md:row-span-2 xl:max-h-[600px]"; // Right side - spans 2 rows with max height on xl
      default:
        return ""; // Standard 1x1
    }
  };

  return (
    <section
      id="servicos"
      className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--gmr-blue)] bg-[var(--gmr-blue)]/10 rounded-full">
            Nossos Serviços
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Soluções completas para{" "}
            <span className="text-[var(--gmr-blue)]">condomínios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para condomínios com
            qualidade, eficiência e preços competitivos.
          </p>
        </motion.div>

        {/* Bento Grid - New Layout for Condominium Focus */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={getGridClass(service.size)}
            >
              <Card
                className={`h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--gmr-blue)]/30 bg-gradient-to-br ${service.color}`}
              >
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--gmr-blue)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--gmr-blue)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      className="border-[var(--gmr-blue)] text-[var(--gmr-blue)] hover:bg-[var(--gmr-blue)] hover:text-white"
                    >
                      <a
                        href={`https://wa.me/5511950371748?text=Olá! Gostaria de saber mais sobre ${service.title} para meu condomínio.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>

                    {service.hasDengueInfo && (
                      <Button
                        variant="ghost"
                        onClick={() => setIsDengueOpen(true)}
                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-100"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        Combate à Dengue
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DengueModal isOpen={isDengueOpen} onClose={() => setIsDengueOpen(false)} />
    </section>
  );
}
