"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Educação", href: "#education" },
  { name: "Contato", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Ativa o efeito após rolar 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/60 backdrop-blur-md shadow-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a
              href="/"
              onClick={handleHomeClick}
              className="text-xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent"
            >
              Leandro Tenório
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={item.name === "Início" ? handleHomeClick : undefined}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  {/* Efeito de brilho no hover */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button variant="outline" className="md:hidden">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
