"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Importando loadSlim do pacote correto
import { Container, Engine, MoveDirection } from "@tsparticles/engine"; // Removendo 'type' de MoveDirection
import { useCallback, useEffect, useState } from "react";

export function Hero() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine); // Usando loadSlim
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  const particlesOptions = {
    // Configurações básicas das partículas
    particles: {
      number: {
        value: 80, // Quantidade de partículas
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#212B36", // Cor das partículas (azul escuro - foreground)
      },
      shape: {
        type: "circle", // Formato das partículas
      },
      opacity: {
        value: 0.5, // Opacidade das partículas
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true, // Ligar partículas com linhas
        distance: 150, // Distância máxima para linhas
        color: "#212B36", // Cor das linhas (azul escuro)
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2, // Velocidade das partículas
        direction: MoveDirection.none, // Usando MoveDirection.none
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    // Interatividade
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true, // Habilitar hover
          mode: "grab", // Modo de interação (grab, bubble, repulse)
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: {}, // Mantendo como objeto vazio
      },
      modes: {
        grab: {
          distance: 140, // Distância para o grab
          links: {
            opacity: 1, // Opacidade das linhas no grab
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    // Configurações do detector de retina
    retina_detect: true,
    // Configurações do fundo (opcional, pois já temos o gradiente)
    // background: {
    //   color: "#000000",
    //   image: "",
    //   position: "50% 50%",
    //   repeat: "no-repeat",
    //   size: "cover",
    // },
  };

  if (init) {
    return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        {/* Fundo com gradiente radial para efeito visual */}
        <div className="absolute inset-0 z-0 bg-gradient-radial from-primary/20 via-background to-background"></div>

        {/* Overlay com padrão de grade sutil */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(var(--foreground), 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--foreground), 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)", // Para compatibilidade com Webkit
          }}
        ></div>

        {/* Componente de Partículas */}
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />

        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
              Leandro Tenório
            </h1>
            <p className="text-xl md:text-2xl mb-8 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
              Estudante de Desenvolvimento & Automação
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto bg-background/80 backdrop-blur-sm p-4 rounded-lg">
              Apaixonado por tecnologia, automação e inteligência artificial.
              Transformando ideias em soluções práticas através de ferramentas
              no-code e desenvolvimento.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button
              className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 transition-colors duration-300 flex items-center"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/leandro-tenório-088378310/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              className="bg-[#24292e] text-white hover:bg-[#24292e]/90 transition-colors duration-300 flex items-center"
              asChild
            >
              <a
                href="https://github.com/TenorioDevfullStack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild>
              <a
                href="mailto:tenorioleandro22@gmail.com"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Retorna null ou um placeholder enquanto as partículas estão sendo inicializadas
  return <div>Carregando background...</div>;
}
