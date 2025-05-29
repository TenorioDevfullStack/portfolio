"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

const educationHistory = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário FAM",
    period: "Cursando (Previsão 2027)",
    description:
      "Curso superior EAD com foco em desenvolvimento de sistemas e novas tecnologias.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    degree: "Dev Full Stack JavaScript",
    institution: "OneBitCode",
    period: "2024 - Presente",
    description:
      "Formação completa em desenvolvimento web full stack com JavaScript, incluindo frontend (React, Next.js) e backend (Node.js).",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    degree: "Gestão de Automação No-Code",
    institution: "OneBitCode",
    period: "2025",
    description:
      "Especialização em automação de processos utilizando ferramentas no-code e low-code, com foco em integração e eficiência, incluindo módulos de IA.",
    icon: <Zap className="h-6 w-6" />,
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-background/85 to-background/80 relative overflow-hidden"
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
          Educação
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 delay-300 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {educationHistory.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {entry.institution}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {entry.degree}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {entry.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
