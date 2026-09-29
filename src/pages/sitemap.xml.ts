import type { APIRoute } from 'astro';
import { SITE_URL, EN_REVISADO } from '../data/site';
import { casesPublicados } from '../data/cases';
import { rotas } from '../data/textos';

// Só entram páginas publicadas. Cases com publicado: false ficam de fora,
// e as páginas em inglês só entram depois de EN_REVISADO = true.
export const GET: APIRoute = () => {
  const caminhos = [
    '/',
    rotas.pt.produto,
    ...casesPublicados.map((c) => rotas.pt.caso(c.slug)),
    ...(EN_REVISADO ? [rotas.en.produto, ...casesPublicados.map((c) => rotas.en.caso(c.slug))] : []),
  ];
  const urls = caminhos
    .map((p) => `  <url><loc>${new URL(p, SITE_URL).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
