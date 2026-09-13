import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      // Capa opcional. Sem capa, hero e card usam o corte diagonal + símbolo.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Pill decorativa (JOGOS, SAÚDE, PESSOAL, SÉRIES...). Não gera listagem.
      pill: z.string().optional(),
      // draft: true fica fora do build de produção.
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
