"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, GraduationCap } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação só acontece uma vez
    threshold: 0.1, // Gatilho quando 10% do componente está visível
  });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Sobre Mim
        </h2>
        <div
          className={`max-w-3xl mx-auto transition-opacity duration-1000 delay-300 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-lg mb-6">
              Sou um estudante apaixonado por tecnologia e inovação. Atualmente
              cursando Análise e Desenvolvimento de Sistemas na FAM e me
              especializando em desenvolvimento no-code e automação através da
              OneBitCode.
            </p>
            <p className="text-lg mb-6">
              Minha jornada de aprendizado está focada em dois pilares
              principais: desenvolvimento no-code e automação de processos
              integrados com inteligência artificial. Estou constantemente
              aprendendo e praticando com ferramentas modernas de automação e
              IA.
            </p>
            <p className="text-lg">
              Acredito que a combinação de automação no-code com IA é o futuro
              da tecnologia, e estou dedicado a aprender e desenvolver soluções
              que possam otimizar processos e melhorar a experiência do usuário.
              Meu objetivo é criar sistemas que resolvam problemas reais de
              forma eficiente e inovadora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
