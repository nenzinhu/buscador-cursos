import type { Metadata } from "next";
import BuscadorCursos from "./components/BuscadorCursos";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Buscador de Cursos de IA",
  description:
    "Busque e encontre cursos sobre Engenharia de Prompt, Engenharia de Contexto, Fine-tuning e RAG.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <h1 className={styles.titulo}>Buscador de Cursos de IA</h1>
        <p className={styles.subtitulo}>
          Encontre cursos <strong>100% gratuitos</strong> sobre{" "}
          <strong>Inteligência Artificial</strong>, <strong>Engenharia de Prompt</strong>,{" "}
          <strong>Contexto</strong>, <strong>Fine-tuning</strong> e{" "}
          <strong>RAG</strong> — explicados de um jeito simples.
        </p>
      </header>

      <BuscadorCursos />
    </main>
  );
}
