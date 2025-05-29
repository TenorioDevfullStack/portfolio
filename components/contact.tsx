"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useInView } from "react-intersection-observer";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "tenorioleandro22@gmail.com",
    link: "mailto:tenorioleandro22@gmail.com",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    value: "Leandro Tenorio",
    link: "https://www.linkedin.com/in/leandro-tenório-088378310/",
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: "GitHub",
    value: "TenorioDevfullStack",
    link: "https://github.com/TenorioDevfullStack",
  },
];

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background/80 to-background/75 relative overflow-hidden"
      ref={ref}
    >
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Contato
        </h2>
        <div
          className={`max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-1000 delay-300 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className={`relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="p-3 bg-gray-900/10 dark:bg-white/10 rounded-lg group-hover:bg-gray-900/20 dark:group-hover:bg-white/20 transition-all duration-300 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    info.title === "LinkedIn"
                      ? "bg-[#0077b5] text-white hover:bg-[#006699]"
                      : info.title === "GitHub"
                      ? "bg-[#24292e] text-white hover:bg-[#2d333b]"
                      : "bg-gray-900/10 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-900/20 dark:hover:bg-white/20"
                  }`}
                >
                  {info.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
