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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Projetos
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-1000 delay-300 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`p-6 rounded-lg border bg-card backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 group-hover:text-primary-foreground/90 text-foreground`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary-foreground group-hover:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <Button
                      className="bg-[#24292e] text-white hover:bg-[#24292e]/90 transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground transition-colors duration-300 group-hover:text-primary-foreground"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
