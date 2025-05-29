"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfólio Pessoal",
    description:
      "Portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS, apresentando minhas habilidades e projetos.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    github: "https://github.com/leandrotenorio/portfolio",
    demo: "#",
  },
  {
    title: "Sistema de Automação",
    description:
      "Sistema de automação de processos utilizando ferramentas no-code e integração com IA para otimização de workflows.",
    technologies: [
      "Zapier",
      "Make",
      "OpenAI",
      "API Integration",
      "No-code",
      "IA",
      "n8n",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Aplicação Web Full Stack",
    description:
      "Aplicação web completa com autenticação, banco de dados e interface responsiva.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background/90 to-background/85 relative overflow-hidden"
      ref={ref}
    >
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          Projetos
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 delay-300 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-300/10 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-colors duration-200"
                >
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
