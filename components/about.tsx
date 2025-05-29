"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, GraduationCap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          Sobre Mim
        </h2>
        <div
          className={`max-w-3xl mx-auto transition-opacity duration-1000 delay-300 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 dark:bg-gray-900/80 dark:border-gray-800/20 relative group">
            {/* Efeito de brilho simplificado */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="space-y-6">
              {/* Desenvolvimento */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-[#3b82f6]/5 to-[#8b5cf6]/5 hover:from-[#3b82f6]/10 hover:to-[#8b5cf6]/10 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-900/10 dark:bg-white/10 rounded-lg group-hover:bg-gray-900/20 dark:group-hover:bg-white/20 transition-all duration-300">
                    <Code className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Desenvolvimento
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Apaixonado por criar soluções inovadoras e eficientes
                      através do código. Sempre em busca de novas tecnologias e
                      melhores práticas.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Automação */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-[#8b5cf6]/5 to-[#e0b0ff]/5 hover:from-[#8b5cf6]/10 hover:to-[#e0b0ff]/10 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-900/10 dark:bg-white/10 rounded-lg group-hover:bg-gray-900/20 dark:group-hover:bg-white/20 transition-all duration-300">
                    <Zap className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Automação
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Especialista em criar fluxos de trabalho automatizados que
                      aumentam a produtividade e reduzem erros.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Educação */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-[#e0b0ff]/5 to-[#b0d0ff]/5 hover:from-[#e0b0ff]/10 hover:to-[#b0d0ff]/10 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-900/10 dark:bg-white/10 rounded-lg group-hover:bg-gray-900/20 dark:group-hover:bg-white/20 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Educação
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Em constante aprendizado, sempre buscando expandir meus
                      conhecimentos e habilidades na área de tecnologia.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
