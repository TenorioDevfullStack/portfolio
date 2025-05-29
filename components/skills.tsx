"use client";

import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { useRef } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "No-Code Development",
    description:
      "Desenvolvimento de aplicações e automações usando ferramentas no-code",
    icon: Layers,
  },
  {
    name: "Automação de Processos",
    description: "Criação de fluxos de trabalho automatizados e integrações",
    icon: Zap,
  },
  {
    name: "Inteligência Artificial",
    description: "Integração de IA em soluções de automação e no-code",
    icon: Cpu,
  },
  {
    name: "Integração de APIs",
    description: "Conectando diferentes serviços e plataformas",
    icon: GitBranch,
  },
  {
    name: "Gestão de Dados",
    description: "Organização e manipulação eficiente de dados",
    icon: Database,
  },
  {
    name: "Desenvolvimento Web",
    description: "Conhecimentos em desenvolvimento web moderno",
    icon: Globe,
  },
  {
    name: "Programação",
    description: "Fundamentos de programação e lógica",
    icon: Code2,
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-background/95 to-background/90 relative overflow-hidden"
      ref={ref}
    >
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          Habilidades
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 delay-300 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <div className="p-3 bg-gray-900/10 dark:bg-white/10 rounded-lg group-hover:bg-gray-900/20 dark:group-hover:bg-white/20 transition-all duration-300 mb-4">
                  <skill.icon className="w-12 h-12 text-[#3b82f6] group-hover:text-[#8b5cf6] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#3b82f6] dark:group-hover:text-[#8b5cf6] transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
