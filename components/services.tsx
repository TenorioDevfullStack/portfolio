"use client";

import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Bot,
  Globe,
  Database,
  Workflow,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Automação de Processos",
    description:
      "Transformo processos manuais em fluxos automatizados, economizando tempo e reduzindo erros operacionais.",
    icon: Zap,
    features: [
      "Automação de tarefas repetitivas",
      "Integração entre sistemas",
      "Fluxos de trabalho inteligentes",
      "Monitoramento em tempo real",
    ],
    tools: ["Make.com", "Zapier", "n8n", "Power Automate"],
    pricing: "A partir de R$ 500",
    popular: true,
  },
  {
    title: "Chatbots Inteligentes",
    description:
      "Desenvolvo chatbots com IA que atendem seus clientes 24/7, qualificam leads e automatizam vendas.",
    icon: Bot,
    features: [
      "Atendimento 24/7 automatizado",
      "Qualificação de leads",
      "Integração com WhatsApp/Telegram",
      "Analytics detalhados",
    ],
    tools: ["OpenAI", "Dialogflow", "Botpress", "Voiceflow"],
    pricing: "A partir de R$ 800",
    popular: false,
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Crio sites e aplicações web modernas, responsivas e otimizadas para conversão.",
    icon: Globe,
    features: [
      "Sites responsivos e modernos",
      "E-commerce completo",
      "SEO otimizado",
      "Performance máxima",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind"],
    pricing: "A partir de R$ 1.200",
    popular: false,
  },
  {
    title: "Integração de Sistemas",
    description:
      "Conecto diferentes plataformas e sistemas para criar um ecossistema integrado e eficiente.",
    icon: Database,
    features: [
      "APIs REST e GraphQL",
      "Sincronização de dados",
      "Webhooks personalizados",
      "Monitoramento de integrações",
    ],
    tools: ["REST APIs", "GraphQL", "Webhooks", "Database"],
    pricing: "A partir de R$ 600",
    popular: false,
  },
  {
    title: "Consultoria em No-Code",
    description:
      "Ajudo empresas a implementar soluções no-code para acelerar o desenvolvimento e reduzir custos.",
    icon: Workflow,
    features: [
      "Análise de processos",
      "Recomendação de ferramentas",
      "Implementação guiada",
      "Treinamento da equipe",
    ],
    tools: ["Bubble", "Webflow", "Airtable", "Notion"],
    pricing: "R$ 150/hora",
    popular: false,
  },
  {
    title: "Suporte e Manutenção",
    description:
      "Ofereço suporte contínuo e manutenção para garantir que suas soluções funcionem perfeitamente.",
    icon: MessageSquare,
    features: [
      "Suporte técnico prioritário",
      "Atualizações regulares",
      "Monitoramento proativo",
      "Relatórios mensais",
    ],
    tools: ["Monitoramento 24/7", "Backup", "Updates", "Reports"],
    pricing: "R$ 200/mês",
    popular: false,
  },
];

export function Services() {
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background/85 to-background/90 relative overflow-hidden"
      ref={ref}
    >
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 animate-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Meus Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções personalizadas em automação, desenvolvimento e inteligência
            artificial para acelerar o crescimento do seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group rounded-2xl border bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                service.popular
                  ? "border-green-500/50 ring-2 ring-green-500/20"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {/* Badge para serviço popular */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Mais Popular
                </div>
              )}

              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Ícone e Título */}
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg mr-4 group-hover:from-green-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {service.pricing}
                    </p>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    O que está incluído:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ferramentas */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Ferramentas utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:bg-green-300/10 dark:text-green-300 border border-green-200/50 dark:border-green-800/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botão de Ação */}
                <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto">
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-200/50 dark:border-green-800/50 backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Cada negócio é único. Vamos conversar sobre suas necessidades
            específicas e criar uma solução sob medida para você.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold"
          >
            Vamos Conversar
            <MessageSquare className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
