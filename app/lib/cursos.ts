// Catálogo de cursos sobre Engenharia de Prompt, contexto, fine-tuning e RAG.
// Cada item tem tags em português para a busca funcionar com palavras comuns.

export type Categoria = "prompt" | "contexto" | "finetuning" | "rag" | "ia";
export type Idioma = "pt-BR" | "internacional";

export interface Curso {
  id: string;
  titulo: string;
  categoria: Categoria;
  nivel: "Iniciante" | "Intermediário" | "Avançado";
  duracao: string;
  autor: string;
  idioma: Idioma;
  descricao: string;
  emUmaFrase: string; // explicação simples para leigos
  tags: string[];
  url: string;
}

export const CATEGORIAS: { id: Categoria; nome: string; cor: string }[] = [
  { id: "ia", nome: "Inteligência Artificial (Geral)", cor: "#ff5c8a" },
  { id: "prompt", nome: "Engenharia de Prompt", cor: "#7c5cff" },
  { id: "contexto", nome: "Engenharia de Contexto", cor: "#00b8d4" },
  { id: "finetuning", nome: "Fine-tuning", cor: "#ff9f1c" },
  { id: "rag", nome: "RAG (Recuperação de Texto)", cor: "#2fbf71" },
];

export const CURSO_POR_CATEGORIA: Record<Categoria, string> = {
  ia:
    "Entender o que é Inteligência Artificial generativa, como ela funciona e onde aplicá-la no trabalho e nos estudos.",
  prompt:
    "Ensinar a IA a responder melhor escrevendo boas instruções (prompts). É o jeito mais fácil de começar.",
  contexto:
    "Dar à IA o contexto certo — exemplos, papéis e limites — para respostas mais precisas antes de treinar o modelo.",
  finetuning:
    "Treinar o modelo com dados próprios para que ele aprenda um estilo ou tarefa específica. Requer mais técnica.",
  rag:
    "Buscar informações em uma base própria (seus documentos) e entregar ao modelo na hora da pergunta, sem re-treinar.",
};

export const cursos: Curso[] = [
  // ============ INTELIGÊNCIA ARTIFICIAL (GERAL) ============
  {
    id: "ia-generativa-gov-brasil",
    titulo: "Inteligência Artificial Generativa",
    categoria: "ia",
    nivel: "Iniciante",
    duracao: "10h",
    autor: "Escola Virtual Gov (gratuito, com certificado)",
    idioma: "pt-BR",
    descricao:
      "Curso aberto e gratuito em português do Brasil, com certificado, sobre o que é Inteligência Artificial generativa, como funciona e como aplicar na prática.",
    emUmaFrase:
      "Curso grátis do governo para entender o que é IA generativa do zero.",
    tags: ["ia", "inteligencia artificial", "generativa", "gratuito", "governo", "brasil", "portugues", "certificado"],
    url: "https://www.escolavirtual.gov.br/curso/1091",
  },
  {
    id: "ia-generativa-google-brasil",
    titulo: "Introdução à IA Generativa",
    categoria: "ia",
    nivel: "Iniciante",
    duracao: "1h",
    autor: "Google Skills (gratuito)",
    idioma: "pt-BR",
    descricao:
      "Microcurso gratuito da Google em português: o que é IA generativa, como ela é usada e por que é diferente de outras formas de IA.",
    emUmaFrase:
      "Resumo rápido e grátis da Google para entender IA generativa.",
    tags: ["ia", "inteligencia artificial", "generativa", "google", "gratuito", "brasil", "portugues", "basico"],
    url: "https://www.skills.google/course_templates/536",
  },
  {
    id: "ia-fluencia-bradesco-brasil",
    titulo: "FluêncIA em Inteligência Artificial",
    categoria: "ia",
    nivel: "Iniciante",
    duracao: "8h",
    autor: "Fundação Bradesco (gratuito, com certificado)",
    idioma: "pt-BR",
    descricao:
      "Curso gratuito em português do Brasil da Fundação Bradesco para ganhar fluência em Inteligência Artificial, com certificado de conclusão.",
    emUmaFrase:
      "Aprenda grátis a falar e entender o mundo da IA com a Fundação Bradesco.",
    tags: ["ia", "inteligencia artificial", "gratuito", "bradesco", "certificado", "brasil", "portugues"],
    url: "https://www.ev.org.br/cursos/fluencia",
  },
  {
    id: "ia-generativa-mit-brasil",
    titulo: "IA Generativa na Era da Transformação Digital",
    categoria: "ia",
    nivel: "Intermediário",
    duracao: "12h",
    autor: "MIT Professional Education (em português)",
    idioma: "pt-BR",
    descricao:
      "Programa do MIT com material em português sobre como usar a IA generativa na transformação digital de empresas e carreiras.",
    emUmaFrase:
      "Conteúdo do MIT para usar IA generativa de forma estratégica.",
    tags: ["ia", "inteligencia artificial", "generativa", "mit", "transformacao digital", "portugues"],
    url: "https://professional.mit.edu/course-catalog/ia-generativa-na-era-da-transformacao-digital-portuguese",
  },

  // ============ ENGENHARIA DE PROMPT ============
  {
    id: "prompt-basico",
    titulo: "Fundamentos de Engenharia de Prompt",
    categoria: "prompt",
    nivel: "Iniciante",
    duracao: "4h",
    autor: "DeepLearning.AI",
    idioma: "internacional",
    descricao:
      "Aprenda a escrever instruções claras e objetivas para modelos de linguagem, entender tokens, temperatura e os padrões de prompt que funcionam na prática.",
    emUmaFrase:
      "Como falar com a IA de um jeito que ela entenda bem o que você quer.",
    tags: ["prompt", "engenharia de prompt", "instrucoes", "basico", "ia", "tokens", "temperatura"],
    url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
  },
  {
    id: "prompt-zero-shot-few-shot",
    titulo: "Zero-shot e Few-shot Prompting",
    categoria: "prompt",
    nivel: "Intermediário",
    duracao: "2h",
    autor: "Google (Prompting Guide)",
    idioma: "internacional",
    descricao:
      "Explore as técnicas de zero-shot, one-shot e few-shot prompting, e aprenda como exemplos no prompt aumentam a consistência das respostas.",
    emUmaFrase:
      "Dar exemplos no pedido para a IA acertar mais, sem precisar re-treinar o modelo.",
    tags: ["prompt", "few-shot", "zero-shot", "exemplos", "consistencia", "ia"],
    url: "https://www.promptingguide.ai/techniques/fewshot",
  },
  {
    id: "prompt-chain-of-thought",
    titulo: "Chain-of-Thought (Raciocínio em Etapas)",
    categoria: "prompt",
    nivel: "Intermediário",
    duracao: "3h",
    autor: "Prompting Guide",
    idioma: "internacional",
    descricao:
      "Técnica que faz o modelo 'pensar passo a passo' antes de responder, melhorando muito problemas de lógica, matemática e análise.",
    emUmaFrase:
      "Pedir para a IA resolver devagar, mostrando o raciocínio, em vez de chutar a resposta.",
    tags: ["prompt", "raciocinio", "chain of thought", "logica", "pensar passo a passo", "ia"],
    url: "https://www.promptingguide.ai/techniques/cot",
  },
  {
    id: "prompt-escola-gov-brasil",
    titulo: "Engenharia de Prompt eficaz (para servidores públicos)",
    categoria: "prompt",
    nivel: "Iniciante",
    duracao: "5h",
    autor: "Escola Virtual Gov (gratuito)",
    idioma: "pt-BR",
    descricao:
      "Curso gratuito em português que aborda o que é engenharia de prompt, como construir prompts eficazes e técnicas de refinamento e otimização.",
    emUmaFrase:
      "Curso grátis do governo brasileiro para construir e melhorar prompts passo a passo.",
    tags: ["prompt", "engenharia de prompt", "gratuito", "governo", "brasil", "portugues", "refinamento"],
    url: "https://www.escolavirtual.gov.br/curso/1439",
  },
  {
    id: "prompt-santander-brasil",
    titulo: "Domine a IA com prompting responsável",
    categoria: "prompt",
    nivel: "Iniciante",
    duracao: "10h",
    autor: "Santander Open Academy (gratuito)",
    idioma: "pt-BR",
    descricao:
      "Curso gratuito em português: passo a passo para criar bons prompts e exemplos diários de como integrar a IA na vida e no trabalho.",
    emUmaFrase:
      "Aprenda grátis a dominar a IA com prompts bem feitos e responsáveis.",
    tags: ["prompt", "engenharia de prompt", "gratuito", "santander", "brasil", "portugues"],
    url: "https://app.santanderopenacademy.com/pt/course/master-ai-with-responsible-prompting",
  },
  {
    id: "prompt-dio-brasil",
    titulo: "Engenharia de Prompt: potencializando o uso de IA Generativa",
    categoria: "prompt",
    nivel: "Iniciante",
    duracao: "2h",
    autor: "DIO (YouTube, gratuito)",
    idioma: "pt-BR",
    descricao:
      "Aula gratuita da DIO em português do Brasil sobre como potencializar o uso de IA generativa com boas técnicas de engenharia de prompt.",
    emUmaFrase:
      "Vídeo gratuito em português para turbinar o uso de IA generativa.",
    tags: ["prompt", "engenharia de prompt", "gratuito", "youtube", "dio", "brasil", "portugues"],
    url: "https://www.youtube.com/watch?v=s4f6PJwkyBQ",
  },
  {
    id: "prompt-curso-em-video-brasil",
    titulo: "Introdução à Engenharia de Prompt",
    categoria: "prompt",
    nivel: "Iniciante",
    duracao: "2h",
    autor: "Curso em Vídeo (gratuito)",
    idioma: "pt-BR",
    descricao:
      "Curso gratuito em português do Brasil do Curso em Vídeo apresentando os fundamentos da engenharia de prompt com exemplos práticos no ChatGPT.",
    emUmaFrase:
      "Aula gratuita em português para começar a fazer prompts que funcionam.",
    tags: ["prompt", "engenharia de prompt", "gratuito", "youtube", "curso em video", "brasil", "portugues", "basico"],
    url: "https://www.youtube.com/watch?v=ATp4Q4UD-c8",
  },
  {
    id: "prompt-prompt-master-brasil",
    titulo: "Curso Gratuito de Engenharia de Prompt para IA",
    categoria: "prompt",
    nivel: "Intermediário",
    duracao: "4h",
    autor: "Prompt Master (playlist, gratuito)",
    idioma: "pt-BR",
    descricao:
      "Playlist gratuita em português do Brasil cobrindo técnicas de engenharia de prompt do básico ao avançado, com exemplos passo a passo.",
    emUmaFrase:
      "Playlist gratuita para dominar prompts de IA do básico ao avançado.",
    tags: ["prompt", "engenharia de prompt", "gratuito", "playlist", "youtube", "brasil", "portugues"],
    url: "https://www.youtube.com/playlist?list=PLnTte7--UAGg4g-8GrS6RtdN3VqwKdb0x",
  },
  {
    id: "prompt-dataway-brasil",
    titulo: "Prompt Engineering no ChatGPT",
    categoria: "prompt",
    nivel: "Iniciante",
    duracao: "3h",
    autor: "DataWay (gratuito)",
    idioma: "pt-BR",
    descricao:
      "Curso gratuito em português do Brasil para dominar engenharia de prompt no ChatGPT e usar IA generativa no trabalho com mais eficiência, com técnicas validadas.",
    emUmaFrase:
      "Curso grátis em português para usar o ChatGPT com eficiência.",
    tags: ["prompt", "engenharia de prompt", "chatgpt", "gratuito", "dataway", "brasil", "portugues"],
    url: "https://www.datawaybr.com/course/bs-0007-g",
  },

  // ============ ENGENHARIA DE CONTEXTO ============
  {
    id: "contexto-system-role",
    titulo: "Prompts de Sistema, Papel e Personalidade",
    categoria: "contexto",
    nivel: "Iniciante",
    duracao: "2h",
    autor: "OpenAI",
    idioma: "internacional",
    descricao:
      "Como definir o papel da IA (professor, revisora, programadora) e passar instruções de sistema para moldar o tom e o comportamento da resposta.",
    emUmaFrase:
      "Falar para a IA quem ela é e como deve agir, antes de qualquer pergunta.",
    tags: ["contexto", "system prompt", "papel", "personalidade", "instrucoes de sistema", "ia"],
    url: "https://platform.openai.com/docs/guides/prompt-engineering",
  },
  {
    id: "contexto-exemplos-limites",
    titulo: "Engenharia de Contexto: Exemplos e Limites",
    categoria: "contexto",
    nivel: "Intermediário",
    duracao: "3h",
    autor: "Anthropic",
    idioma: "internacional",
    descricao:
      "Construir o contexto certo: dar exemplos, definir limites, separar instruções de dados e controlar a janela de contexto do modelo.",
    emUmaFrase:
      "Montar o 'cabo de guerra' de informações que a IA recebe antes de responder.",
    tags: ["contexto", "exemplos", "limites", "janela de contexto", "instrucoes", "ia"],
    url: "https://www.anthropic.com/engineering/building-effective-agents",
  },
  {
    id: "contexto-few-shot-aplicado",
    titulo: "Contexto Aplicado a Agentes e Ferramentas",
    categoria: "contexto",
    nivel: "Avançado",
    duracao: "5h",
    autor: "Anthropic",
    idioma: "internacional",
    descricao:
      "Como passar contexto rico para agentes de IA que usam ferramentas, APIs e tomam decisões em várias etapas sem perder o objetivo.",
    emUmaFrase:
      "Dar 'mochila de contexto' para robôs de IA que executam tarefas com várias ferramentas.",
    tags: ["contexto", "agentes", "ferramentas", "apis", "avancado", "ia"],
    url: "https://www.anthropic.com/engineering/building-effective-agents",
  },
  {
    id: "contexto-datacamp-brasil",
    titulo: "Engenharia de Contexto: um guia com exemplos",
    categoria: "contexto",
    nivel: "Intermediário",
    duracao: "3h",
    autor: "DataCamp (em português)",
    idioma: "pt-BR",
    descricao:
      "Guia em português sobre o que é engenharia de contexto, como funciona, quando usar em vez da engenharia de prompt comum e as técnicas principais.",
    emUmaFrase:
      "Entenda em português como estruturar o contexto certo para a IA acertar.",
    tags: ["contexto", "engenharia de contexto", "portugues", "datacamp", "brasil", "janela de contexto"],
    url: "https://www.datacamp.com/pt/blog/context-engineering",
  },
  {
    id: "contexto-agentes-brasil",
    titulo: "Engenharia de Contexto: a chave para agentes de IA",
    categoria: "contexto",
    nivel: "Avançado",
    duracao: "4h",
    autor: "Rhawk (YouTube, gratuito)",
    idioma: "pt-BR",
    descricao:
      "Vídeo em português do Brasil explicando por que a engenharia de contexto é fundamental para construir agentes de IA que funcionam de verdade.",
    emUmaFrase:
      "Aprenda em português o que realmente entra na janela de contexto de um agente de IA.",
    tags: ["contexto", "engenharia de contexto", "agentes", "gratuito", "youtube", "brasil", "portugues"],
    url: "https://www.youtube.com/watch?v=aMJUnOeOs2k",
  },

  // ============ FINE-TUNING ============
  {
    id: "finetuning-intro",
    titulo: "Introdução ao Fine-tuning de Modelos",
    categoria: "finetuning",
    nivel: "Intermediário",
    duracao: "6h",
    autor: "Hugging Face",
    idioma: "internacional",
    descricao:
      "Aprenda o que é fine-tuning, quando vale a pena, e como adaptar um modelo pré-treinado a uma tarefa específica com seus dados.",
    emUmaFrase:
      "Treinar um pouco mais a IA com dados seus para ela ficar craque num assunto.",
    tags: ["finetuning", "treinamento", "modelos", "hugging face", "dados", "ia"],
    url: "https://huggingface.co/learn/nlp-course",
  },
  {
    id: "finetuning-llm-completo",
    titulo: "Fine-tuning Completo de LLMs",
    categoria: "finetuning",
    nivel: "Avançado",
    duracao: "10h",
    autor: "Hugging Face (PEFT)",
    idioma: "internacional",
    descricao:
      "Técnicas práticas de fine-tuning: LoRA e PEFT, preparação de dataset, hiperparâmetros e avaliação do modelo afinado.",
    emUmaFrase:
      "Ajuste fino de um modelo grande usando truques que economizam memória e tempo.",
    tags: ["finetuning", "lora", "peft", "dataset", "avancado", "modelos", "ia"],
    url: "https://huggingface.co/docs/peft",
  },
  {
    id: "finetuning-lora-brasil",
    titulo: "Como treinar LLMs com fine-tuning usando LoRA",
    categoria: "finetuning",
    nivel: "Intermediário",
    duracao: "1h",
    autor: "YouTube (em português, gratuito)",
    idioma: "pt-BR",
    descricao:
      "Aula gratuita em português do Brasil mostrando na prática como treinar modelos de linguagem com fine-tuning usando a técnica LoRA.",
    emUmaFrase:
      "Vídeo prático em português para treinar sua própria IA sem gastar fortuna em memória.",
    tags: ["finetuning", "lora", "treinamento", "gratuito", "youtube", "brasil", "portugues"],
    url: "https://www.youtube.com/watch?v=RGfNf9QrJ8E",
  },
  {
    id: "finetuning-instruction-brasil",
    titulo: "Ajustando LLMs com instruction fine-tuning",
    categoria: "finetuning",
    nivel: "Intermediário",
    duracao: "2h",
    autor: "YouTube (em português, gratuito)",
    idioma: "pt-BR",
    descricao:
      "Curso gratuito em português do Brasil mostrando o ajuste fino de instruções (instruction fine-tuning) em modelos de linguagem de larga escala.",
    emUmaFrase:
      "Aprenda em português a treinar sua IA para seguir instruções do jeito certo.",
    tags: ["finetuning", "instruction fine-tuning", "treinamento", "gratuito", "youtube", "brasil", "portugues"],
    url: "https://www.youtube.com/watch?v=pD7ol5xDGm8",
  },
  {
    id: "finetuning-13min",
    titulo: "Fine-tune seu próprio LLM em 13 minutos",
    categoria: "finetuning",
    nivel: "Intermediário",
    duracao: "13min",
    autor: "David Ondrej (gratuito)",
    idioma: "internacional",
    descricao:
      "Tutorial gratuito e direto ensinando a fazer fine-tuning de qualquer modelo de IA de graça, do zero, em apenas 13 minutos.",
    emUmaFrase:
      "O jeito mais rápido de treinar sua própria IA, sem pagar nada.",
    tags: ["finetuning", "rapido", "treinamento", "gratuito", "youtube", "pratico"],
    url: "https://www.youtube.com/watch?v=g80Q1sVtikE",
  },
  {
    id: "finetuning-labs",
    titulo: "LLM Fine-Tuning Tutorial (com laboratórios gratuitos)",
    categoria: "finetuning",
    nivel: "Avançado",
    duracao: "3h",
    autor: "KodeKloud (gratuito)",
    idioma: "internacional",
    descricao:
      "Curso gratuito com laboratórios práticos: entenda por que fine-tuning supera prompt engineering, como LoRA e QLoRA funcionam e treine um agente real.",
    emUmaFrase:
      "Aprenda grátis com laboratórios na prática como fazer fine-tuning de LLMs.",
    tags: ["finetuning", "lora", "qlora", "laboratorio", "gratuito", "pratico", "avancado"],
    url: "https://www.youtube.com/watch?v=o9jz04bIW0E",
  },

  // ============ RAG ============
  {
    id: "rag-intro",
    titulo: "RAG na Prática: Fundamentos",
    categoria: "rag",
    nivel: "Intermediário",
    duracao: "6h",
    autor: "LlamaIndex / LangChain",
    idioma: "internacional",
    descricao:
      "Entenda a Recuperação Aumentada por Geração (RAG): dividir documentos, criar embeddings, buscar trechos e montar a resposta final.",
    emUmaFrase:
      "Deixar a IA 'pesquisar' nos seus documentos antes de responder — sem re-treinar nada.",
    tags: ["rag", "embeddings", "vetores", "busca", "documentos", "ia"],
    url: "https://docs.llamaindex.ai/en/stable/",
  },
  {
    id: "rag-chunking-embeddings",
    titulo: "Chunking, Embeddings e Vetores",
    categoria: "rag",
    nivel: "Avançado",
    duracao: "4h",
    autor: "Pinecone",
    idioma: "internacional",
    descricao:
      "Técnicas para dividir textos em pedaços (chunking) e transformar em vetores (embeddings), o coração de qualquer sistema RAG.",
    emUmaFrase:
      "Como transformar textos em números para o computador encontrar trechos parecidos rapidinho.",
    tags: ["rag", "chunking", "embeddings", "vetores", "busca semantica", "avancado", "ia"],
    url: "https://www.pinecone.io/learn/chunking-strategies/",
  },
  {
    id: "rag-rag-stack",
    titulo: "RAG Stack: Pipeline Completo",
    categoria: "rag",
    nivel: "Avançado",
    duracao: "8h",
    autor: "LangChain",
    idioma: "internacional",
    descricao:
      "Monte um sistema RAG completo de ponta a ponta: ingestão, indexação, recuperação, re-ranqueamento e geração com fontes.",
    emUmaFrase:
      "A receita completa para a IA responder usando seus próprios arquivos e citar de onde tirou.",
    tags: ["rag", "pipeline", "ingestao", "indexacao", "re-ranking", "fontes", "avancado", "ia"],
    url: "https://python.langchain.com/docs/tutorials/rag/",
  },
  {
    id: "rag-zero-brasil",
    titulo: "Implementando um RAG do zero em Python",
    categoria: "rag",
    nivel: "Intermediário",
    duracao: "2h",
    autor: "YouTube (em português, gratuito)",
    idioma: "pt-BR",
    descricao:
      "Curso prático gratuito em português do Brasil ensinando a implementar um sistema RAG do zero em Python, com banco de vetores e busca semântica.",
    emUmaFrase:
      "Monte seu próprio RAG em português, do começo ao fim, de graça.",
    tags: ["rag", "python", "vetores", "busca semantica", "gratuito", "youtube", "brasil", "portugues"],
    url: "https://www.youtube.com/watch?v=0aFpP3-wap0",
  },
  {
    id: "rag-dio-brasil",
    titulo: "RAG e LangChain com Python na prática",
    categoria: "rag",
    nivel: "Intermediário",
    duracao: "3h",
    autor: "DIO (em português, gratuito)",
    idioma: "pt-BR",
    descricao:
      "Conteúdo da DIO em português do Brasil sobre construção de aplicações com LangChain e RAG, do conceito à prática com Python.",
    emUmaFrase:
      "Aprenda em português a criar aplicações que respondem com seus próprios documentos.",
    tags: ["rag", "langchain", "python", "gratuito", "dio", "brasil", "portugues"],
    url: "https://www.dio.me/articles/como-funciona-a-arquitetura-rag",
  },
  {
    id: "rag-crash-langchain",
    titulo: "RAG Crash Course com LangChain (2h)",
    categoria: "rag",
    nivel: "Intermediário",
    duracao: "2h",
    autor: "LangChain / YouTube (gratuito)",
    idioma: "internacional",
    descricao:
      "Curso intensivo gratuito (2 horas) para montar um sistema RAG completo com LangChain, incluindo embeddings e banco de vetores.",
    emUmaFrase:
      "Em 2 horas você aprende grátis a fazer um RAG de verdade.",
    tags: ["rag", "langchain", "embeddings", "vetores", "gratuito", "youtube", "intensivo"],
    url: "https://www.youtube.com/watch?v=o126p1QN_RI",
  },
  {
    id: "rag-production-freecodecamp",
    titulo: "RAG em Produção com LangChain e Bancos Vetoriais",
    categoria: "rag",
    nivel: "Avançado",
    duracao: "10h",
    autor: "freeCodeCamp (gratuito)",
    idioma: "internacional",
    descricao:
      "Curso completo e gratuito do freeCodeCamp para construir, depurar, otimizar e escalar sistemas RAG para produção com LangChain e bancos de vetores.",
    emUmaFrase:
      "Curso grátis e completo para colocar RAG em produção de verdade.",
    tags: ["rag", "langchain", "producao", "vetores", "gratuito", "freecodecamp", "avancado"],
    url: "https://www.youtube.com/watch?v=mHxLXzYjQRE",
  },
];
