"use client";

import { useState, useMemo } from "react";
import {
  cursos,
  CATEGORIAS,
  CURSO_POR_CATEGORIA,
  type Categoria,
  type Curso,
  type Idioma,
} from "../lib/cursos";
import styles from "./page.module.css";

function normalizar(texto: string): string {
  // Remove acentos e coloca em minúsculas para a busca funcionar
  // mesmo quando o usuário digita sem acento (ex.: "finetuning").
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtrarCursos(
  termo: string,
  categoria: Categoria | "todas",
  idioma: Idioma | "todos"
): Curso[] {
  const busca = normalizar(termo).trim();
  return cursos.filter((curso) => {
    if (categoria !== "todas" && curso.categoria !== categoria) return false;
    if (idioma !== "todos" && curso.idioma !== idioma) return false;
    if (!busca) return true;
    // Procura o termo no título, descrição, frase simples e tags.
    const alvo = normalizar(
      [curso.titulo, curso.descricao, curso.emUmaFrase, curso.tags.join(" ")].join(" ")
    );
    return busca.split(/\s+/).every((palavra) => alvo.includes(palavra));
  });
}

const NIVEL_COR: Record<Curso["nivel"], string> = {
  Iniciante: "#2fbf71",
  "Intermediário": "#ff9f1c",
  Avançado: "#ff5c5c",
};

export default function BuscadorCursos() {
  const [termo, setTermo] = useState("");
  const [categoria, setCategoria] = useState<Categoria | "todas">("todas");
  // Padrão: mostrar só cursos em português do Brasil (idioma preferido).
  const [idioma, setIdioma] = useState<Idioma | "todos">("pt-BR");

  const resultado = useMemo(
    () => filtrarCursos(termo, categoria, idioma),
    [termo, categoria, idioma]
  );

  const corCategoria = (id: Categoria) =>
    CATEGORIAS.find((c) => c.id === id)?.cor ?? "#888";

  return (
    <div className={styles.container}>
      {/* Barra de busca */}
      <section className={styles.buscaBloco} aria-label="Buscar cursos">
        <label className={styles.labelBusca} htmlFor="busca">
          🔍 O que você quer aprender?
        </label>
        <input
          id="busca"
          className={styles.inputBusca}
          type="search"
          placeholder="Ex.: RAG, few-shot, embeddings, fine-tuning..."
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          autoComplete="off"
        />
        <p className={styles.dicaBusca}>
          Digite qualquer palavra — a busca encontra cursos pelo título, descrição e
          assunto. Sem acento também funciona.
        </p>
      </section>

      {/* Filtro por idioma */}
      <section className={styles.idiomas} aria-label="Filtrar por idioma">
        <button
          className={`${styles.chip} ${idioma === "pt-BR" ? styles.chipAtivo : ""}`}
          onClick={() => setIdioma("pt-BR")}
          aria-pressed={idioma === "pt-BR"}
        >
          🇧🇷 Só em português
        </button>
        <button
          className={`${styles.chip} ${idioma === "todos" ? styles.chipAtivo : ""}`}
          onClick={() => setIdioma("todos")}
          aria-pressed={idioma === "todos"}
        >
          🌎 Todos os idiomas
        </button>
      </section>

      {/* Filtro por categoria */}
      <section className={styles.categorias} aria-label="Filtrar por categoria">
        <button
          className={`${styles.chip} ${categoria === "todas" ? styles.chipAtivo : ""}`}
          onClick={() => setCategoria("todas")}
          aria-pressed={categoria === "todas"}
        >
          Todos
        </button>
        {CATEGORIAS.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.chip} ${categoria === cat.id ? styles.chipAtivo : ""}`}
            onClick={() => setCategoria(cat.id)}
            aria-pressed={categoria === cat.id}
            style={categoria === cat.id ? { borderColor: cat.cor, color: cat.cor } : undefined}
          >
            {cat.nome}
          </button>
        ))}
      </section>

      {/* Explicação da categoria selecionada */}
      <p className={styles.explicacaoCategoria}>
        {categoria === "todas"
          ? "Explore cursos gratuitos sobre as 5 áreas principais para trabalhar com IA."
          : CURSO_POR_CATEGORIA[categoria]}
      </p>

      {/* Resultados */}
      <section aria-live="polite" aria-label="Resultados">
        <p className={styles.contador}>
          {resultado.length === 0
            ? "Nenhum curso encontrado para essa busca."
            : `${resultado.length} curso${resultado.length > 1 ? "s" : ""} encontrado${
                resultado.length > 1 ? "s" : ""
              }`}
        </p>

        {resultado.length > 0 && (
          <ul className={styles.grade}>
            {resultado.map((curso) => (
              <li key={curso.id} className={styles.card}>
                <div className={styles.cardTopo}>
                  <span
                    className={styles.etiqueta}
                    style={{ color: corCategoria(curso.categoria) }}
                  >
                    {CATEGORIAS.find((c) => c.id === curso.categoria)?.nome}
                  </span>
                  <span className={styles.cardIdioma}>
                    {curso.idioma === "pt-BR" ? "🇧🇷 Português" : "🌎 Inglês"}
                  </span>
                </div>
                <h2 className={styles.cardTitulo}>{curso.titulo}</h2>
                <p className={styles.cardFrase}>💡 {curso.emUmaFrase}</p>
                <p className={styles.cardDescricao}>{curso.descricao}</p>
                <div className={styles.cardMeta}>
                  <span>⏱ {curso.duracao}</span>
                  <span style={{ color: NIVEL_COR[curso.nivel] }}>{curso.nivel}</span>
                  <span>👤 {curso.autor}</span>
                </div>
                <div className={styles.cardTags}>
                  <span className={styles.tagGratuito}>✅ 100% gratuito</span>
                  {curso.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className={styles.cardLink}
                  href={curso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir curso →
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
