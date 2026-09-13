# GranudoZ · Blog

Site pessoal do GranudoZ pra textos que não rendem vídeo. Estático, feito com [Astro](https://astro.build), publicado no Cloudflare Pages.

**Pra quem joga e pensa demais.**

## Rodar local

```bash
npm install
npm run dev
```

Abre em <http://localhost:4321>. Em dev, posts com `draft: true` aparecem; no build, não.

`npm run check` roda o type-check dos `.astro` e do schema dos posts. Vale rodar antes de commitar quando mexer em componente.

## Escrever um post

1. Crie um arquivo em `src/content/posts/nome-do-post.md`. O nome do arquivo vira a URL (`/posts/nome-do-post/`).
2. Preencha o frontmatter:

```md
---
title: 'Título do post com *uma palavra* em magenta'
description: 'Uma ou duas frases. Vai no card, no hero e no preview de compartilhamento.'
pubDate: 2026-09-13
pill: 'Jogos'                                  # opcional, só decoração
cover: '../../assets/covers/nome-do-post.jpg'  # opcional
coverAlt: 'Descrição da imagem'                # obrigatório se tiver cover
draft: false                                   # true = fora do build
---

Texto em Markdown.
```

3. Se tiver capa, coloque a imagem em `src/assets/covers/`. O Astro otimiza no build (webp, vários tamanhos).
4. `git commit` + `git push` na `main`. O Cloudflare Pages faz o build e publica em ~1 minuto.

**Regras que valem a pena lembrar**

- `*palavra*` no `title` vira magenta. Use em no máximo uma palavra, a que carrega a tensão da frase.
- Sem capa, o post usa o corte diagonal da marca com o símbolo. Funciona bem; não é obrigatório ter imagem.
- O post mais recente (por `pubDate`) vira o hero da home. Os demais vão pro grid.

## Estrutura

```
src/
├── assets/          símbolo, recorte, capas dos posts
├── components/      Header, Footer, Hero, PostCard, Capa
├── content/posts/   os textos, em Markdown
├── content.config.ts  schema do frontmatter
├── layouts/         Base (head, fontes, OG) e Post
├── pages/           index, sobre, posts/[slug]
└── styles/          tokens.css (identidade) e global.css
public/              favicon e og-default.png
```

## Identidade visual

Tokens em `src/styles/tokens.css`, direto do guia em `../IdentidadeVisual/LEIA-ME.md`: carvão `#14101A`, magenta `#ED1B6A`, laranja `#F7941D`, ouro `#FFC24A` (só no símbolo). Anton nos títulos, Inter no corpo, sem Bold.

## Publicação

GitHub → Cloudflare Workers (assets estáticos), build automático a cada push na `main`. Preset Astro: build `npm run build`, output `dist`. Node 24 (`.node-version`). URL: <https://blog.granudoz.workers.dev>.

Quando o domínio próprio entrar: adicionar no worker → Settings → Domains & Routes e trocar `site` em `astro.config.mjs`.

## Fora do escopo da v1

Categorias reais, tags, busca, comentários, newsletter, CMS, tema claro, analytics, paginação. Se bater vontade, anota em `TODO.md` e segue.
