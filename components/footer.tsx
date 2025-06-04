"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Heart,
  Code,
  ArrowUp,
} from "lucide-react";

const footerSections = [
  {
    title: "Navegação",
    links: [
      { name: "Início", href: "#" },
      { name: "Sobre", href: "#about" },
      { name: "Habilidades", href: "#skills" },
      { name: "Serviços", href: "#services" },
      { name: "Projetos", href: "#projects" },
      { name: "Contato", href: "#contact" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { name: "Automação de Processos", href: "#services" },
      { name: "Chatbots Inteligentes", href: "#services" },
      { name: "Desenvolvimento Web", href: "#services" },
      { name: "Integração de Sistemas", href: "#services" },
      { name: "Consultoria No-Code", href: "#services" },
    ],
  },
  {
    title: "Tecnologias",
    links: [
      { name: "Next.js & React", href: "#skills" },
      { name: "TypeScript", href: "#skills" },
      { name: "Make.com & Zapier", href: "#skills" },
      { name: "OpenAI & IA", href: "#skills" },
      { name: "No-Code Platforms", href: "#skills" },
    ],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/TenorioDevfullStack",
    icon: Github,
    color: "hover:text-gray-600 dark:hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/leandro-tenório-088378310/",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    href: "mailto:tenorioleandro22@gmail.com",
    icon: Mail,
    color: "hover:text-red-500",
  },
];

const quickInfo = [
  {
    icon: MapPin,
    text: "Brasil",
  },
  {
    icon: Phone,
    text: "Disponível para projetos",
  },
  {
    icon: Calendar,
    text: "Resposta em até 24h",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-background/95 border-t border-border/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Section - About */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Leandro Tenório
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Especialista em automação no-code e inteligência artificial.
                  Transformo ideias em soluções tecnológicas inovadoras que
                  aceleram o crescimento dos negócios.
                </p>

                {/* Quick Info */}
                <div className="space-y-3 mb-6">
                  {quickInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <info.icon className="w-4 h-4 mr-3 text-blue-500" />
                      {info.text}
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Section - Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold mb-4 text-foreground">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm hover:underline"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0"
            >
              <span>
                © {new Date().getFullYear()} Leandro Tenório. Feito com
              </span>
              <Heart className="w-4 h-4 mx-2 text-red-500" />
              <span>e</span>
              <Code className="w-4 h-4 mx-2 text-blue-500" />
              <span>no Brasil.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-muted-foreground"
            >
              <span>Next.js 15 • TypeScript • Tailwind CSS</span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-500"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
