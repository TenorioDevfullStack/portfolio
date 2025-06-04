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
import { Github, ExternalLink, Filter } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfólio Pessoal",
    description:
      "Portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS, apresentando minhas habilidades e projetos com animações avançadas e design moderno.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/ui",
    ],
    github: "https://github.com/TenorioDevfullStack/portfolio-github",
    demo: "https://leandro-tenorio.vercel.app",
    category: "web",
    featured: true,
  },
  {
    title: "Sistema de Automação Empresarial",
    description:
      "Sistema completo de automação de processos empresariais utilizando Make.com, integrando CRM, email marketing e gestão de leads com IA.",
    technologies: [
      "Make.com",
      "Zapier",
      "OpenAI API",
      "Google Sheets",
      "Webhooks",
      "Email Marketing",
    ],
    github: "#",
    demo: "#",
    category: "automation",
    featured: true,
  },
  {
    title: "Chatbot IA para Atendimento",
    description:
      "Chatbot inteligente desenvolvido com n8n e OpenAI, capaz de responder dúvidas, agendar reuniões e qualificar leads automaticamente.",
    technologies: ["n8n", "OpenAI", "Webhook", "WhatsApp API", "Node.js"],
    github: "#",
    demo: "#",
    category: "ai",
    featured: false,
  },
  {
    title: "Dashboard de Analytics",
    description:
      "Dashboard interativo para análise de dados empresariais com gráficos em tempo real e relatórios automatizados.",
    technologies: ["React", "Chart.js", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
    category: "web",
    featured: false,
  },
  {
    title: "Integração Multi-Plataforma",
    description:
      "Sistema de integração conectando mais de 10 plataformas diferentes (CRM, E-commerce, ERP) para sincronização automática de dados.",
    technologies: ["Make.com", "REST APIs", "GraphQL", "Webhooks", "JSON"],
    github: "#",
    demo: "#",
    category: "automation",
    featured: true,
  },
  {
    title: "App Mobile de Produtividade",
    description:
      "Aplicativo móvel para gestão de tarefas e produtividade com sincronização em nuvem e notificações inteligentes.",
    technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
    github: "#",
    demo: "#",
    category: "mobile",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "Todos", count: projects.length },
  {
    id: "web",
    label: "Web Dev",
    count: projects.filter((p) => p.category === "web").length,
  },
  {
    id: "automation",
    label: "Automação",
    count: projects.filter((p) => p.category === "automation").length,
  },
  {
    id: "ai",
    label: "IA",
    count: projects.filter((p) => p.category === "ai").length,
  },
  {
    id: "mobile",
    label: "Mobile",
    count: projects.filter((p) => p.category === "mobile").length,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes em desenvolvimento web,
            automação e inteligência artificial.
          </p>
        </motion.div>

        {/* Filtros de Categoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                  : "bg-white/10 hover:bg-white/20 text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${activeCategory}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                project.featured ? "ring-2 ring-blue-500/50" : ""
              }`}
            >
              {/* Badge para projetos em destaque */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Destaque
                </div>
              )}

              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags de Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-300/10 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-200 ${
                      project.github === "#"
                        ? "border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                        : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
                    }`}
                    {...(project.github === "#"
                      ? { "aria-disabled": true }
                      : {})}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {project.github === "#" ? "Em breve" : "Código"}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      project.demo === "#"
                        ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transform hover:scale-105"
                    }`}
                    {...(project.demo === "#" ? { "aria-disabled": true } : {})}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.demo === "#" ? "Em breve" : "Demo"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Mais/Ver Menos */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Filter className="w-4 h-4 mr-2" />
              {showAll ? "Ver Menos" : "Ver Todos"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
