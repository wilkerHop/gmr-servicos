"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    AlertTriangle,
    Bug,
    CheckCircle,
    Droplets,
    Phone,
    Shield,
} from "lucide-react";

interface DengueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const symptoms = [
  "Febre alta (39°C a 40°C)",
  "Dor de cabeça intensa",
  "Dores musculares e nas articulações",
  "Dor atrás dos olhos",
  "Manchas vermelhas na pele",
  "Náuseas e vômitos",
];

const preventionTips = [
  {
    title: "Elimine água parada",
    description:
      "Verifique vasos de plantas, pneus, garrafas, calhas e qualquer recipiente que possa acumular água.",
  },
  {
    title: "Cubra caixas d'água",
    description:
      "Mantenha caixas d'água, tonéis e barris sempre bem fechados com tampa adequada.",
  },
  {
    title: "Limpe regularmente",
    description:
      "Lave semanalmente os bebedouros de animais e pratos de vasos de plantas com escova.",
  },
  {
    title: "Descarte corretamente",
    description:
      "Coloque o lixo em sacos plásticos fechados e mantenha a lixeira tampada.",
  },
];

export function DengueModal({ isOpen, onClose }: DengueModalProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto px-6 py-6">
        <SheetHeader className="text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
              <Bug className="w-5 h-5 text-white" />
            </div>
            <SheetTitle className="text-xl">Combate à Dengue</SheetTitle>
          </div>
          <SheetDescription>
            Informações importantes sobre prevenção e sinais de alerta da
            Dengue. A GMR é especialista no combate ao Aedes aegypti.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Alert Banner */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-orange-800 mb-1">
                Atenção!
              </h4>
              <p className="text-sm text-orange-700">
                A Dengue é uma doença grave que pode levar a complicações
                severas. A prevenção é a melhor forma de combate.
              </p>
            </div>
          </div>

          {/* Symptoms */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-3">
              <Droplets className="w-5 h-5 text-red-500" />
              Sintomas da Dengue
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {symptom}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground italic">
              Se apresentar estes sintomas, procure atendimento médico
              imediatamente.
            </p>
          </div>

          {/* Prevention Accordion */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-3">
              <Shield className="w-5 h-5 text-green-500" />
              Como Prevenir
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {preventionTips.map((tip, index) => (
                <AccordionItem key={tip.title} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {tip.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {tip.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* GMR Service Highlight */}
          <div className="bg-[var(--gmr-blue)]/5 border border-[var(--gmr-blue)]/20 rounded-lg p-6">
            <h4 className="font-semibold text-[var(--gmr-blue)] mb-2">
              Serviço Especializado GMR
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Nossa equipe utiliza produtos homologados pela ANVISA para
              eliminação do Aedes aegypti e outras pragas. Realizamos
              dedetização preventiva e emergencial com garantia de resultado.
            </p>
            <Button
              asChild
              className="w-full bg-[var(--gmr-yellow)] text-[var(--gmr-blue)] hover:bg-[var(--gmr-blue)] hover:text-white font-semibold"
            >
              <a
                href="https://wa.me/5511942627997?text=Olá! Gostaria de agendar uma visita preventiva contra Dengue no meu condomínio."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                Agendar Visita Preventiva
              </a>
            </Button>
          </div>

          {/* Final CTA Banner */}
          <div className="bg-orange-500 text-white rounded-lg p-6 text-center">
            <h4 className="font-bold text-lg mb-2">
              Proteja seu condomínio agora!
            </h4>
            <p className="text-white/90 text-sm mb-4">
              Chame a GMR para uma dedetização preventiva e garanta a saúde dos moradores.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 font-semibold shadow-lg"
            >
              <a
                href="https://wa.me/5511942627997?text=Olá! Preciso de dedetização preventiva para meu condomínio. Podem agendar uma visita?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                Falar com a GMR Serviços
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
