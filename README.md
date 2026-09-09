# 🎓 Buscador de Cursos de IA

Uma aplicação **Next.js + TypeScript** que busca e lista cursos **100% gratuitos** sobre
Inteligência Artificial, Engenharia de Prompt, Engenharia de Contexto, Fine-tuning e RAG,
com explicações simples para facilitar o aprendizado.

![Stack](https://img.shields.io/badge/Next.js-16-000000) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6) ![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-green)

---

## ✨ Funcionalidades

- 🔍 **Busca em tempo real** no catálogo (título, descrição, tags e frase de explicação)
- 🔤 **Busca sem acento** — digite "finetuning" ou "finetuning", o resultado é o mesmo
- 🗂️ **Filtro por categoria**: IA Geral, Engenharia de Prompt, Contexto, Fine-tuning e RAG
- 🇧🇷 **Filtro de idioma**: só em português ou todos os idiomas (português ativo por padrão)
- 💡 **Explicação em uma frase** para cada curso, ideal para quem está começando
- ✅ **Selos visuais**: nível (iniciante/intermediário/avançado), duração, autor e gratuidade
- 🎨 **Visual dark-glass** com gradientes suaves

## 📦 Catálogo atual (31 cursos)

| Área | Cursos | Em português |
|------|--------|--------------|
| Inteligência Artificial (Geral) | 4 | 4 🇧🇷 |
| Engenharia de Prompt | 9 | 6 🇧🇷 |
| Engenharia de Contexto | 5 | 2 🇧🇷 |
| Fine-tuning | 6 | 2 🇧🇷 |
| RAG | 7 | 2 🇧🇷 |
| **Total** | **31** | **16 🇧🇷** |

## 🚀 Como rodar

### Opção 1 — Arquivo `.bat` (Windows)

Dê dois cliques em **`run-dev.bat`**. Ele abre o servidor e mostra o endereço.

### Opção 2 — Terminal

```bash
# Instale as dependências (primeira vez)
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Produção

```bash
npm run build
npm start
```

## 🧱 Estrutura do projeto

```
buscador-cursos/
├── app/
│   ├── lib/
│   │   └── cursos.ts          # ← Catálogo de cursos (edite aqui para adicionar)
│   ├── components/
│   │   ├── BuscadorCursos.tsx # Componente de busca e filtros
│   │   └── page.module.css    # Estilos do componente
│   ├── globals.css            # Tema dark-glass
│   ├── layout.tsx             # Layout raiz
│   └── page.tsx               # Página inicial
├── run-dev.bat                # Inicia o dev server com um clique
└── package.json
```

## ➕ Como adicionar um curso

Abra `app/lib/cursos.ts` e adicione um novo item no array `cursos`, seguindo o modelo:

```ts
{
  id: "prompt-exemplo",                     // identificador único
  titulo: "Nome do Curso",
  categoria: "prompt",                      // "ia" | "prompt" | "contexto" | "finetuning" | "rag"
  nivel: "Iniciante",                       // Iniciante | Intermediário | Avançado
  duracao: "4h",
  autor: "Criador do curso",
  idioma: "pt-BR",                          // "pt-BR" | "internacional"
  descricao: "Descrição completa do curso.",
  emUmaFrase: "Explicação simples, para leigos.",
  tags: ["prompt", "engenharia de prompt"], // palavras para a busca encontrar
  url: "https://link-do-curso.com",
},
```

O curso aparece automaticamente na busca e nos filtros.

## ✅ Verificações de qualidade

- TypeScript estrito: `npx tsc --noEmit -p tsconfig.json`
- Build de produção: `npm run build`
- Lint: `npm run lint`

## 📄 Licença

MIT — sinta-se livre para usar e adaptar.
