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
    <section id="contact" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Contato
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className={`transition-opacity duration-1000 transform hover:scale-105 hover:shadow-lg transition-all duration-300 bg-card hover:bg-primary group ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary-foreground/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-foreground transition-colors duration-300">
                    {info.title}
                  </h3>
                  <Button
                    variant="link"
                    asChild
                    className={`h-auto p-0 transition-colors duration-300 ${
                      info.title === "LinkedIn"
                        ? "text-[#0A66C2] group-hover:text-white group-hover:bg-[#0A66C2]/20 rounded px-1"
                        : info.title === "GitHub"
                        ? "bg-[#24292e] text-white hover:bg-[#24292e]/90 rounded px-3 py-1"
                        : "text-foreground group-hover:text-primary-foreground"
                    }`}
                  >
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
