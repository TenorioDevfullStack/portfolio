"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";

const educationHistory = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário FAM",
    period: "2025",
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Educação
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-1 gap-6">
            {educationHistory.map((item, index) => (
              <Card
                key={item.degree}
                className={`p-6 rounded-lg border bg-card backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.institution}
                </h3>
                <p className="text-foreground mb-2 group-hover:text-primary-foreground/90">
                  {item.degree}
                </p>
                <p className="text-sm text-foreground group-hover:text-primary-foreground/90">
                  {item.period}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
