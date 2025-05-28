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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Habilidades
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 delay-300 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className={`p-6 rounded-lg border bg-card backdrop-blur-sm hover:bg-primary hover:shadow-lg group transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <skill.icon className="w-12 h-12 mb-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-foreground transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/90 transition-colors duration-300">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
