import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Serviços",
    links: [
      { label: "Limpeza & Conservação", href: "#servicos" },
      { label: "Portaria & Segurança", href: "#servicos" },
      { label: "Dedetização", href: "#servicos" },
      { label: "Faxinas Avulsas", href: "#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#porque-nos" },
      { label: "Por que Contratar", href: "#porque-nos" },
      { label: "Contato", href: "#contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--gmr-blue)] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <span className="text-[var(--gmr-blue)] font-bold text-xl">
                  G
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">GMR</span>
                <span className="text-xs text-white/70 -mt-1">
                  Serviços
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Soluções completas em serviços para sua empresa e residência.
              Qualidade, confiança e compromisso.
            </p>
            <p className="text-[var(--gmr-yellow)] font-semibold text-sm italic">
              &quot;Cobrimos orçamentos. Agende uma visita e contrate já!&quot;
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[var(--gmr-yellow)] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[var(--gmr-yellow)]" />
                <div>
                  <a
                    href="tel:+5511942627997"
                    className="text-white/70 hover:text-[var(--gmr-yellow)] transition-colors text-sm"
                  >
                    (11) 9.4262-7997
                  </a>
                  <p className="text-xs text-white/50">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[var(--gmr-yellow)]" />
                <a
                  href="mailto:gersonmribeiro2004@gmail.com"
                  className="text-white/70 hover:text-[var(--gmr-yellow)] transition-colors text-sm break-all"
                >
                  gersonmribeiro2004@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--gmr-yellow)]" />
                <span className="text-white/70 text-sm">
                  São Paulo, SP - Brasil
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[var(--gmr-yellow)]" />
                <span className="text-white/70 text-sm">
                  Seg - Sex: 8h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} GMR Serviços. Todos os direitos
              reservados.
            </p>
            <p className="text-xs">Gerson Moreira | CNPJ em regularização</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
