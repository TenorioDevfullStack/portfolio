"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Zap,
  GraduationCap,
  Target,
  Heart,
  Coffee,
  Lightbulb,
  Users,
  Clock,
  BookOpen,
  Rocket,
  Award,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const personalStats = [
  {
    icon: Coffee,
    number: "500+",
    label: "Cafés consumidos",
    color: "text-amber-500",
  },
  {
    icon: Clock,
    number: "2000+",
    label: "Horas codificando",
    color: "text-blue-500",
  },
  {
    icon: Lightbulb,
    number: "30+",
    label: "Projetos concluídos",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    number: "15+",
    label: "Clientes satisfeitos",
    color: "text-green-500",
  },
];

const journey = [
  {
    year: "2021",
    title: "Primeiro Contato com Programação",
    description:
      "Descobri o mundo da programação e me apaixonei pela capacidade de criar soluções através do código.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022",
    title: "Descoberta do No-Code",
    description:
      "Encontrei nas ferramentas no-code uma forma de acelerar o desenvolvimento e democratizar a criação de soluções.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2023",
    title: "Especialização em IA",
    description:
      "Mergulhei no mundo da inteligência artificial, explorando suas aplicações em automação e chatbots.",
    icon: Lightbulb,
    color: "from-green-500 to-teal-500",
  },
  {
    year: "2024",
    title: "Estudante Universitário",
    description:
      "Iniciei o curso de Análise e Desenvolvimento de Sistemas, formalizando meus conhecimentos técnicos.",
    icon: GraduationCap,
    color: "from-orange-500 to-red-500",
  },
];

const softSkills = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Sempre orientado para entregar soluções que realmente fazem a diferença.",
  },
  {
    icon: Heart,
    title: "Paixão por Tecnologia",
    description:
      "Genuinamente apaixonado por descobrir novas tecnologias e suas possibilidades.",
  },
  {
    icon: Users,
    title: "Comunicação Clara",
    description:
      "Habilidade para explicar conceitos técnicos de forma simples e acessível.",
  },
  {
    icon: Rocket,
    title: "Inovação Constante",
    description:
      "Sempre buscando formas criativas e eficientes de resolver problemas.",
  },
];

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background/95 to-background/90 relative overflow-hidden"
      ref={ref}
    >
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco da minha trajetória, paixões e o que me motiva a
            criar soluções inovadoras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Lado Esquerdo - História e Motivação */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg mr-4">
                    <Heart className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Minha Paixão
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sou movido pela curiosidade e pela vontade de transformar
                  ideias em realidade. Acredito que a tecnologia deve
                  simplificar a vida das pessoas e acelerar o crescimento dos
                  negócios.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Minha jornada começou com uma simples pergunta: "Como posso
                  usar a tecnologia para resolver problemas reais?" Hoje, com
                  foco em automação no-code e IA, ajudo empresas a alcançar seus
                  objetivos de forma mais eficiente.
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-900/30 dark:to-gray-800/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-5 h-5 text-purple-500 mr-2" />
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-blue-500" />
              Minha Jornada
            </h3>

            <div className="relative">
              {/* Linha da Timeline */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  {/* Círculo da Timeline */}
                  <div
                    className={`relative z-10 p-3 rounded-full bg-gradient-to-r ${item.color} mr-6 shadow-lg`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-900/30 dark:to-gray-800/10 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Estatísticas Pessoais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {personalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className={`text-2xl font-bold ${stat.color} mb-1`}
              >
                {stat.number}
              </motion.div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-md"
        >
          <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Vamos Construir Algo Incrível Juntos?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Se você tem uma ideia ou um desafio que precisa ser resolvido, eu
            adoraria ajudar a transformá-lo em realidade usando tecnologia de
            ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              Ver Serviços
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Entrar em Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
