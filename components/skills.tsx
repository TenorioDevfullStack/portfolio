"use client";

import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Zap,
  Bot,
  Settings,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "No-Code & Automação",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    skills: [
      {
        name: "Make.com",
        level: 95,
        description: "Automação avançada de processos",
      },
      { name: "Zapier", level: 90, description: "Integração entre aplicações" },
      { name: "n8n", level: 85, description: "Automação workflow open-source" },
      {
        name: "Power Automate",
        level: 80,
        description: "Automação Microsoft 365",
      },
    ],
  },
  {
    category: "Inteligência Artificial",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "OpenAI API",
        level: 90,
        description: "Integração GPT e modelos IA",
      },
      {
        name: "Chatbots",
        level: 88,
        description: "Desenvolvimento de assistentes IA",
      },
      {
        name: "Prompt Engineering",
        level: 92,
        description: "Otimização de prompts",
      },
      { name: "Machine Learning", level: 75, description: "Fundamentos de ML" },
    ],
  },
  {
    category: "Desenvolvimento Web",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "Next.js",
        level: 88,
        description: "Framework React para produção",
      },
      { name: "React", level: 85, description: "Biblioteca para interfaces" },
      { name: "TypeScript", level: 82, description: "JavaScript tipado" },
      {
        name: "Tailwind CSS",
        level: 90,
        description: "Framework CSS utilitário",
      },
    ],
  },
  {
    category: "Integração & APIs",
    icon: GitBranch,
    color: "from-green-500 to-teal-500",
    skills: [
      {
        name: "REST APIs",
        level: 85,
        description: "Integração de serviços web",
      },
      { name: "Webhooks", level: 88, description: "Comunicação em tempo real" },
      { name: "GraphQL", level: 75, description: "Query language para APIs" },
      { name: "Database", level: 80, description: "Modelagem e consultas" },
    ],
  },
];

const tools = [
  { name: "Make.com", category: "Automação", icon: "🔄" },
  { name: "OpenAI", category: "IA", icon: "🤖" },
  { name: "Next.js", category: "Web", icon: "⚛️" },
  { name: "Zapier", category: "Automação", icon: "⚡" },
  { name: "TypeScript", category: "Dev", icon: "🔷" },
  { name: "Tailwind", category: "CSS", icon: "🎨" },
  { name: "n8n", category: "Workflow", icon: "🔗" },
  { name: "Vercel", category: "Deploy", icon: "▲" },
];

const achievements = [
  {
    icon: Bot,
    title: "50+ Automações Criadas",
    description: "Processos automatizados que economizam centenas de horas",
  },
  {
    icon: Layers,
    title: "Especialista No-Code",
    description: "Certificação avançada em ferramentas no-code",
  },
  {
    icon: Cpu,
    title: "IA Integrator",
    description: "Especialista em integração de IA em processos empresariais",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "Desenvolvimento completo de aplicações web modernas",
  },
];

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-background/90 to-background/85 relative overflow-hidden"
      ref={ref}
    >
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Minhas Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domínio técnico em automação, desenvolvimento e inteligência
            artificial para criar soluções que transformam negócios.
          </p>
        </motion.div>

        {/* Categorias de Habilidades */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                {/* Header da Categoria */}
                <div className="flex items-center mb-8">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mr-4 shadow-lg`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {category.category}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.skills.length} tecnologias dominadas
                    </p>
                  </div>
                </div>

                {/* Skills com Progress Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </h4>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ferramentas Favoritas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Ferramentas do Dia a Dia
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                className="group px-4 py-3 bg-gradient-to-r from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{tool.icon}</span>
                  <div>
                    <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                      {tool.name}
                    </span>
                    <span className="text-xs text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {tool.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conquistas e Certificações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Conquistas & Especialidades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="text-center p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    <achievement.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-md"
        >
          <Settings className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Pronto para Aplicar Essas Habilidades?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Cada habilidade foi desenvolvida através de projetos reais. Vamos
            usar essa experiência para criar algo incrível para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              Ver Projetos Práticos
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Conhecer Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
