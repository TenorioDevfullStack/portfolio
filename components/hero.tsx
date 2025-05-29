"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Gradientes e efeitos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/95" />

      {/* Efeito de Código Binário - Reduzido */}
      <div className="binary-container">
        {/* Colunas de código */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`column-${i}`}
            className="binary-column"
            style={{
              left: `${(i * 100) / 10}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {[...Array(5)].map((_, j) => (
              <motion.div
                key={`char-${i}-${j}`}
                className="binary-char"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: j * 0.3,
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Partículas de brilho - Reduzidas */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="glow-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 dark:bg-gray-900/80 dark:border-gray-800/20 relative group">
          {/* Efeito de brilho simplificado */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#06b6d4]/20 to-[#3b82f6]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent"
          >
            Leandro Tenório
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl mb-4 text-[#30e0ff] font-semibold"
          >
            Estudante de Análise e Desenvolvimento de Sistemas
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl mb-4 text-[#60d0ff] font-semibold"
          >
            Especialista em Automação No-Code + IA | Desenvolvedor de Soluções
            Inteligentes
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg mb-8 text-[#90c0ff] font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Apaixonado por transformar ideias em realidade através da IA e
            automação. Explorando as infinitas possibilidades que a tecnologia
            oferece para criar soluções inovadoras e impactantes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4 mb-8"
          >
            <a
              href="#projetos"
              className="px-6 py-3 bg-[#4a2a8a] text-white rounded-lg hover:bg-[#6a3aaa] transition-all duration-300 transform hover:scale-105"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-6 py-3 border-2 border-[#4a2a8a] text-[#4a2a8a] rounded-lg hover:bg-[#4a2a8a] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contato
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/TenorioDevfullStack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#24292e] text-white rounded-full hover:bg-[#2d333b] transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/leandro-tenório-088378310/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0077b5] text-white rounded-full hover:bg-[#006699] transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tenorioleandro22@gmail.com"
              className="p-3 bg-white/10 text-gray-900 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll simplificado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-900 dark:border-white rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full"
          />
        </div>
      </motion.div>

      <style jsx global>{`
        .binary-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0.8;
          font-family: monospace;
        }

        .binary-column {
          position: absolute;
          top: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 2rem 0;
        }

        .binary-char {
          color: #3b82f6;
          font-size: 1.5rem;
          font-weight: bold;
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
          opacity: 0.8;
        }

        .glow-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 15px #3b82f6;
        }
      `}</style>
    </section>
  );
}
