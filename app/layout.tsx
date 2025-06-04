import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Leandro Tenório - Especialista em Automação No-Code & IA",
    template: "%s | Leandro Tenório",
  },
  description:
    "Especialista em automação no-code, desenvolvimento web e inteligência artificial. Transformo ideias em soluções tecnológicas inovadoras que aceleram o crescimento dos negócios.",
  keywords: [
    "automação",
    "no-code",
    "inteligência artificial",
    "desenvolvimento web",
    "chatbots",
    "Make.com",
    "Zapier",
    "Next.js",
    "React",
    "TypeScript",
    "integração de sistemas",
    "consultoria tecnológica",
  ],
  authors: [{ name: "Leandro Tenório" }],
  creator: "Leandro Tenório",
  publisher: "Leandro Tenório",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://leandro-tenorio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://leandro-tenorio.vercel.app",
    title: "Leandro Tenório - Especialista em Automação No-Code & IA",
    description:
      "Especialista em automação no-code, desenvolvimento web e inteligência artificial. Transformo ideias em soluções tecnológicas inovadoras.",
    siteName: "Leandro Tenório Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Leandro Tenório - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandro Tenório - Especialista em Automação No-Code & IA",
    description:
      "Especialista em automação no-code, desenvolvimento web e inteligência artificial.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <div className="relative min-h-screen">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
