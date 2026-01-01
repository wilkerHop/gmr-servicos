"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { AlertTriangle, Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  "Limpeza & Conservação",
  "Portaria & Segurança",
  "Dedetização",
  "Faxinas Avulsas",
  "Outro",
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, you would use Formspree or similar
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formState.name}.\n` +
        `Telefone: ${formState.phone}\n` +
        `Serviço de interesse: ${formState.service}\n` +
        `Mensagem: ${formState.message || "Gostaria de solicitar um orçamento."}`
    );

    window.open(`https://wa.me/5511950371748?text=${whatsappMessage}`, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--gmr-blue)] bg-[var(--gmr-blue)]/10 rounded-full">
            Fale Conosco
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Solicite seu{" "}
            <span className="text-[var(--gmr-blue)]">orçamento gratuito</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp ou preencha o formulário. Respondemos
            em até 2 horas úteis!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WhatsApp CTA */}
            <Card className="bg-green-500 border-0 overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center animate-pulse-glow">
                      <Phone className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">
                      Atendimento via WhatsApp
                    </h3>
                    <p className="text-white/80 text-sm mb-3">
                      Resposta rápida e orçamento sem compromisso
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-green-600 hover:bg-green-50 font-semibold shadow-lg"
                    >
                      <a
                        href="https://wa.me/5511950371748?text=Olá! Vim pelo site e gostaria de solicitar um orçamento."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (11) 9.5037-1748
                        <Phone className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dengue Alert */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-800 mb-1">
                      Preocupado com a Dengue?
                    </h4>
                    <p className="text-orange-700 text-sm mb-3">
                      Agende uma visita preventiva e proteja sua família e
                      colaboradores.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                    >
                      <a
                        href="https://wa.me/5511950371748?text=Olá! Gostaria de agendar uma visita preventiva contra Dengue."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar Visita Preventiva
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--gmr-blue)]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[var(--gmr-blue)]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a
                    href="mailto:gersonmribeiro2004@gmail.com"
                    className="font-medium text-foreground hover:text-[var(--gmr-blue)] transition-colors"
                  >
                    gersonmribeiro2004@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--gmr-blue)]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--gmr-blue)]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium text-foreground">
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-2">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Envie sua mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Seu nome *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Como podemos chamá-lo?"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Telefone / WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 9.9999-9999"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Serviço de interesse *
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      required
                      className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecione um serviço</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos mais sobre sua necessidade..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full h-12 bg-[var(--gmr-yellow)] text-[var(--gmr-blue)] hover:bg-[var(--gmr-blue)] hover:text-white font-semibold text-lg transition-all duration-300"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Enviado com Sucesso!
                      </>
                    ) : isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp para
                    continuarmos a conversa.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
