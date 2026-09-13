export const SITE = {
  nome: 'GranudoZ',
  assinatura: 'Pra quem joga e pensa demais',
  descricao:
    'Jogos, saúde e histórias reais contadas em primeira pessoa. Textos sobre o que não rende vídeo.',
  youtube: 'https://youtube.com/@GranudoZ',
  instagram: 'https://instagram.com/granudoz',
  locale: 'pt-BR',
} as const;

export function formatarData(data: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
    .format(data)
    .replace('.', '');
}

export function tempoDeLeitura(texto: string | undefined): number {
  if (!texto) return 1;
  const palavras = texto.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palavras / 200));
}

/** Converte `*palavra*` do frontmatter em <em> (magenta no display). Escapa o resto. */
export function tituloHtml(titulo: string): string {
  const escapado = titulo
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escapado.replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export function tituloTexto(titulo: string): string {
  return titulo.replace(/\*/g, '');
}
