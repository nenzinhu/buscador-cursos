import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buscador de Cursos de IA",
  description:
    "Busque e encontre cursos sobre Engenharia de Prompt, Engenharia de Contexto, Fine-tuning e RAG, explicados de forma simples.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
