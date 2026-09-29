import type { Case } from './tipos';

export type { Case, ConteudoCase, ImagemCase, Decisao, LinkCase } from './tipos';

const modulos = import.meta.glob<{ default: Case }>('./*.case.ts', { eager: true });

export const todosOsCases: Case[] = Object.values(modulos)
  .map((m) => m.default)
  .sort((a, b) => a.ordem - b.ordem);

export const casesPublicados = todosOsCases.filter((c) => c.publicado);

export function proximoCase(slug: string): Case | undefined {
  const i = casesPublicados.findIndex((c) => c.slug === slug);
  if (i === -1 || casesPublicados.length < 2) return undefined;
  return casesPublicados[(i + 1) % casesPublicados.length];
}
