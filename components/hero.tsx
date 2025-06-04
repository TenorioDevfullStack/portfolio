"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Play,
  ArrowRight,
  Zap,
  Code,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Zap,
    number: "50+",
    label: "Projetos de Automação",
    color: "text-yellow-500",
  },
  {
    icon: Code,
    number: "3+",
    label: "Anos Programando",
    color: "text-blue-500",
  },
  {
    icon: Brain,
    number: "100+",
    label: "Horas com IA",
    color: "text-purple-500",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 animate-gradient" />

      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              y: [-20, -100],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Disponível para novos projetos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Leandro
              </span>
              <br />
              <span className="text-foreground">Tenório</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 space-y-2"
            >
              <p className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                Especialista em Automação No-Code & IA
              </p>
              <p className="text-lg text-muted-foreground">
                Estudante de Análise e Desenvolvimento de Sistemas
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transformo ideias em soluções tecnológicas inovadoras através da
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                {" "}
                automação no-code
              </span>{" "}
              e
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                {" "}
                inteligência artificial
              </span>
              . Acelero o crescimento de negócios com tecnologia de ponta.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Projetos
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Meus Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            {/* Redes Sociais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-muted-foreground mr-2">
                Conecte-se:
              </span>
              <a
                href="https://github.com/TenorioDevfullStack"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-gray-400 dark:hover:border-gray-500"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-tenório-088378310/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-400 hover:text-blue-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:tenorioleandro22@gmail.com"
                className="p-3 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-red-400 hover:text-red-500"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Estatísticas e Métricas */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Efeito de brilho */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative z-10 flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300`}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className={`text-2xl font-bold ${stat.color} mb-1`}
                      >
                        {stat.number}
                      </motion.div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Call to Action Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-200/50 dark:border-green-800/50 backdrop-blur-md"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">
                    Pronto para Inovar?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Vamos criar algo incrível juntos
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm font-semibold"
                  >
                    Iniciar Projeto
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs mb-2">Role para baixo</span>
          <div className="w-6 h-10 border-2 border-current rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
