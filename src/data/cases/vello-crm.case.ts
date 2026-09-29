import type { Case } from './tipos';

// RASCUNHO: publicado false. A página existe em /produto/vello-crm com noindex,
// mas não aparece em menus, listas nem no sitemap. Troque para true quando autorizar.
const placeholder = '/images/cases/placeholder.svg';

const caso: Case = {
  slug: 'vello-crm',
  publicado: false,
  ordem: 3,
  tags: ['Branding B2B', 'Página de vendas', 'UI'],

  pt: {
    titulo: 'Vello CRM',
    resumo: 'Identidade visual e página de vendas para um sistema de gestão com IA voltado a revendas de carros e motos.',
    meta: {
      titulo: 'Vello CRM · Case de Isadora Massarioli',
      descricao: 'Case de marca e produto: identidade visual e página de vendas para o Vello CRM, sistema de gestão com IA para revendas de carros e motos.',
    },
    ficha: [
      { rotulo: 'Meu papel', valor: 'Briefing de marca, identidade visual e estrutura da página de vendas' },
      { rotulo: 'Cliente', valor: 'Vello CRM' },
      { rotulo: 'Período', valor: '[Período do projeto]' },
      { rotulo: 'Status', valor: 'Em andamento' },
    ],
    capa: { src: placeholder, alt: '[Descreva a imagem de capa do Vello CRM]' },
    contexto: [
      'O Vello CRM é um sistema de gestão com IA para revendas de carros e motos. O projeto envolveu a identidade visual da marca e a página de vendas do produto.',
    ],
    problema: [
      'O desafio foi posicionar um software B2B como uma marca séria e exclusiva, que transmite confiança, fugindo da estética "amigável" comum em ferramentas de gestão.',
    ],
    papel: [
      'Conduzi o briefing de marca com o cliente para definir posicionamento, público e tom.',
      'Criei uma nova identidade visual, mais sóbria e imponente.',
      'Estruturei a página de vendas: hierarquia da informação, argumentos de venda e chamadas para ação.',
    ],
    processo: {
      intro: ['[Descreva as etapas do processo e escolha as imagens que mostram a evolução do trabalho.]'],
      imagens: [
        { src: placeholder, alt: '[Descreva a imagem]', legenda: '[Legenda: briefing ou referências]', formato: 'largo' },
        { src: placeholder, alt: '[Descreva a imagem]', legenda: '[Legenda: nova identidade visual]', formato: 'largo' },
        { src: placeholder, alt: '[Descreva a imagem]', legenda: '[Legenda: estrutura da página de vendas]', formato: 'largo' },
      ],
    },
    decisoes: [
      {
        titulo: 'Eliminar as bordas arredondadas',
        porque: 'Cantos retos deixam a interface mais sóbria e afastam a marca da estética "amigável" comum em ferramentas de gestão, que era justamente o que o posicionamento queria evitar.',
      },
      {
        titulo: 'Página de vendas organizada pela hierarquia da informação',
        porque: '[Explique a lógica da ordem dos blocos, dos argumentos de venda e das chamadas para ação.]',
      },
    ],
    resultado: ['[Resultado ou próximos passos]'],
    status: 'Em andamento.',
    links: [],
  },

  en: {
    titulo: 'Vello CRM',
    resumo: '[REVISAR] Visual identity and sales page for an AI-powered management system for car and motorcycle dealerships.',
    meta: {
      titulo: 'Vello CRM · Case study by Isadora Massarioli',
      descricao: 'Brand and product case study: visual identity and sales page for Vello CRM, an AI-powered management system for car and motorcycle dealerships.',
    },
    ficha: [
      { rotulo: 'My role', valor: '[REVISAR] Brand briefing, visual identity and sales page structure' },
      { rotulo: 'Client', valor: 'Vello CRM' },
      { rotulo: 'Timeline', valor: '[Project timeline]' },
      { rotulo: 'Status', valor: 'In progress' },
    ],
    capa: { src: placeholder, alt: '[Describe the Vello CRM cover image]' },
    contexto: [
      '[REVISAR] Vello CRM is an AI-powered management system for car and motorcycle dealerships. The project covered the brand\'s visual identity and the product\'s sales page.',
    ],
    problema: [
      '[REVISAR] The challenge was to position a B2B software product as a serious, exclusive brand that earns trust, moving away from the "friendly" look common in management tools.',
    ],
    papel: [
      '[REVISAR] Ran the brand briefing with the client to define positioning, audience and tone.',
      '[REVISAR] Created a new, more sober and commanding visual identity.',
      '[REVISAR] Structured the sales page: information hierarchy, selling points and calls to action.',
    ],
    processo: {
      intro: ['[Describe the process steps and pick images that show how the work evolved.]'],
      imagens: [
        { src: placeholder, alt: '[Describe the image]', legenda: '[Caption]', formato: 'largo' },
        { src: placeholder, alt: '[Describe the image]', legenda: '[Caption]', formato: 'largo' },
        { src: placeholder, alt: '[Describe the image]', legenda: '[Caption]', formato: 'largo' },
      ],
    },
    decisoes: [
      {
        titulo: '[REVISAR] Removing rounded corners',
        porque: '[REVISAR] Square corners make the interface more sober and move the brand away from the "friendly" look common in management tools, which is exactly what the positioning wanted to avoid.',
      },
      {
        titulo: '[REVISAR] A sales page built on information hierarchy',
        porque: '[Explain the order of the blocks, the selling points and the calls to action.]',
      },
    ],
    resultado: ['[Result or next steps]'],
    status: 'In progress.',
    links: [],
  },
};

export default caso;
