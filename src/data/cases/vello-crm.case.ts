import type { Case } from './tipos';

const img = (arquivo: string) => `/images/cases/vello-crm/${arquivo}`;

const caso: Case = {
  slug: 'vello-crm',
  publicado: true,
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
      { rotulo: 'Período', valor: 'Set. 2026' },
      { rotulo: 'Status', valor: 'Em andamento' },
    ],
    capa: {
      src: img('capa.webp'),
      alt: 'Topo da página de vendas do Vello CRM em azul-marinho, com o título "A operação de uma revenda de 200 veículos exige um sistema de 200 veículos" e os botões Agendar demonstração e Ver como funciona',
    },
    contexto: [
      'O Vello CRM é um sistema de gestão com IA para revendas de carros e motos. Ele junta CRM, estoque, financeiro e atendimento por IA no WhatsApp numa só plataforma.',
      'O produto é feito para revendas de grande porte, com mais de 150 veículos em estoque. Nos últimos 12 meses, mais de 4.200 veículos foram vendidos pelo sistema.',
      'O projeto envolveu a identidade visual da marca e a página de vendas do produto.',
    ],
    problema: [
      'O desafio foi posicionar um software B2B como uma marca séria e exclusiva, que transmite confiança, fugindo da estética "amigável" comum em ferramentas de gestão.',
      'A página de vendas precisava convencer donos e gestores de revendas grandes, que já usam algum sistema e só trocam quando enxergam o prejuízo de ficar onde estão.',
    ],
    papel: [
      'Conduzi o briefing de marca com o cliente para definir posicionamento, público e tom.',
      'Criei uma nova identidade visual, mais sóbria e imponente.',
      'Estruturei a página de vendas: hierarquia da informação, argumentos de venda e chamadas para ação.',
    ],
    processo: {
      intro: [
        'Depois do briefing, defini o posicionamento: o Vello não fala com qualquer revenda, fala com a operação grande. Esse recorte aparece já no título da página e guia o resto do trabalho.',
        'Na identidade, usei azul-marinho como base, um azul claro para destaque e um dourado discreto nos rótulos de seção. Na página, organizei os blocos para que o produto apareça funcionando antes da lista de recursos.',
      ],
      imagens: [
        { src: img('whatsapp.webp'), alt: 'Seção Atendimento por IA: à esquerda, o título "Sua revenda atende e qualifica leads no WhatsApp enquanto seus vendedores dormem"; à direita, uma conversa em que a IA confirma o carro, pede fotos do veículo de troca e devolve uma estimativa de valor', legenda: 'A IA em uso logo no começo da página: uma conversa real de atendimento, da dúvida do cliente à estimativa do carro de troca.', formato: 'largo' },
        { src: img('diagnostico.webp'), alt: 'Seção Diagnóstico com o título "Problemas estruturais que custam milhões por ano sem aparecer no balanço" e quatro blocos numerados: estoque em planilhas, leads perdidos por demora, financeiro desconectado do funil e performance de vendedores sem dados', legenda: 'Diagnóstico: as quatro dores da revenda grande, cada uma com o custo que ela gera.', formato: 'largo' },
        { src: img('comparativo.webp'), alt: 'Tabela comparativa entre Vello e AutoConf com oito funcionalidades, marcadas como disponível, parcial ou não disponível', legenda: 'Comparativo com o principal concorrente, baseado em funcionalidades documentadas publicamente.', formato: 'largo' },
        { src: img('pipeline.webp'), alt: 'Mockup do pipeline de vendas com quatro colunas: novo lead, negociação, proposta e fechamento, cada uma com cards de clientes, modelo do veículo e valor', legenda: 'Pipeline de vendas: o funil completo da revenda numa tela só.', formato: 'largo' },
        { src: img('mobile.webp'), alt: 'Topo da página de vendas do Vello na largura de um celular', legenda: 'Versão para celular do topo da página.', formato: 'estreito' },
      ],
    },
    decisoes: [
      {
        titulo: 'Eliminar as bordas arredondadas',
        porque: 'Cantos retos deixam a interface mais sóbria e afastam a marca da estética "amigável" comum em ferramentas de gestão, que era justamente o que o posicionamento queria evitar.',
      },
      {
        titulo: 'Página de vendas organizada pela hierarquia da informação',
        porque: 'A página abre com o recorte do público e os números do produto, mostra a IA atendendo no WhatsApp, e só então lista os recursos. Depois vêm as dores da revenda, a implementação em três passos e o comparativo com a concorrência. Quem chega no fim já viu o produto funcionando e o custo de não trocar, e a chamada para agendar a demonstração aparece no topo e no fechamento.',
      },
      {
        titulo: 'Mostrar o sistema em vez de descrever',
        porque: 'Para um gestor que já usa outro sistema, uma lista de recursos não diferencia nada. A conversa no WhatsApp e o pipeline com negociações reais mostram como é o dia a dia com o Vello antes de qualquer promessa.',
      },
    ],
    resultado: [
      'A página de vendas está no ar com a nova identidade. Ela reúne num só lugar a proposta do Vello, o produto em uso, os números da operação e o comparativo com a concorrência.',
    ],
    status: 'Em andamento.',
    links: [],
  },

  en: {
    titulo: 'Vello CRM',
    resumo: 'Visual identity and sales page for an AI-powered management system for car and motorcycle dealerships.',
    meta: {
      titulo: 'Vello CRM · Case study by Isadora Massarioli',
      descricao: 'Brand and product case study: visual identity and sales page for Vello CRM, an AI-powered management system for car and motorcycle dealerships.',
    },
    ficha: [
      { rotulo: 'My role', valor: 'Brand briefing, visual identity and sales page structure' },
      { rotulo: 'Client', valor: 'Vello CRM' },
      { rotulo: 'Timeline', valor: 'Sep. 2026' },
      { rotulo: 'Status', valor: 'In progress' },
    ],
    capa: {
      src: img('capa.webp'),
      alt: 'Top of the Vello CRM sales page in navy blue, with the headline "A 200-vehicle dealership needs a 200-vehicle system" and the buttons Book a demo and See how it works',
    },
    contexto: [
      'Vello CRM is an AI-powered management system for car and motorcycle dealerships. It brings CRM, inventory, finance and AI customer service on WhatsApp into one platform.',
      'The product is built for large dealerships with more than 150 vehicles in stock. Over the last 12 months, more than 4,200 vehicles were sold through it.',
      'The project covered the brand\'s visual identity and the product\'s sales page.',
    ],
    problema: [
      'The challenge was to position a B2B software product as a serious, exclusive brand that earns trust, moving away from the "friendly" look common in management tools.',
      'The sales page had to win over owners and managers of large dealerships, who already use some system and only switch when they see what staying put is costing them.',
    ],
    papel: [
      'Ran the brand briefing with the client to define positioning, audience and tone.',
      'Created a new, more sober and commanding visual identity.',
      'Structured the sales page: information hierarchy, selling points and calls to action.',
    ],
    processo: {
      intro: [
        'After the briefing, I set the positioning: Vello doesn\'t speak to every dealership, it speaks to large operations. That focus shows up in the page headline and guides the rest of the work.',
        'For the identity, I used navy blue as the base, a light blue for highlights and a subtle gold on section labels. On the page, I ordered the blocks so the product is shown working before the feature list.',
      ],
      imagens: [
        { src: img('whatsapp.webp'), alt: 'AI Service section: on the left, the headline "Your dealership answers and qualifies WhatsApp leads while your salespeople sleep"; on the right, a chat where the AI confirms the car, asks for photos of the trade-in and returns a price estimate', legenda: 'The AI at work early on the page: a real service chat, from the customer\'s question to the trade-in estimate.', formato: 'largo' },
        { src: img('diagnostico.webp'), alt: 'Diagnosis section with the headline "Structural problems that cost millions a year without showing up on the balance sheet" and four numbered blocks: inventory in spreadsheets, leads lost to slow replies, finance disconnected from the funnel and sales performance without data', legenda: 'Diagnosis: the four pains of a large dealership, each with the cost it creates.', formato: 'largo' },
        { src: img('comparativo.webp'), alt: 'Comparison table between Vello and AutoConf with eight features, marked as available, partial or not available', legenda: 'Comparison with the main competitor, based on publicly documented features.', formato: 'largo' },
        { src: img('pipeline.webp'), alt: 'Sales pipeline mockup with four columns: new lead, negotiation, proposal and closing, each with customer cards, vehicle model and value', legenda: 'Sales pipeline: the dealership\'s whole funnel on one screen.', formato: 'largo' },
        { src: img('mobile.webp'), alt: 'Top of the Vello sales page at phone width', legenda: 'Mobile version of the top of the page.', formato: 'estreito' },
      ],
    },
    decisoes: [
      {
        titulo: 'Removing rounded corners',
        porque: 'Square corners make the interface more sober and move the brand away from the "friendly" look common in management tools, which is exactly what the positioning wanted to avoid.',
      },
      {
        titulo: 'A sales page built on information hierarchy',
        porque: 'The page opens with who it\'s for and the product\'s numbers, shows the AI answering on WhatsApp, and only then lists the features. Next come the dealership\'s pains, the three-step rollout and the competitor comparison. By the end, visitors have seen the product working and the cost of not switching, and the call to book a demo appears both at the top and at the close.',
      },
      {
        titulo: 'Showing the system instead of describing it',
        porque: 'For a manager who already uses another system, a feature list doesn\'t set anything apart. The WhatsApp chat and the pipeline with real deals show what day-to-day work with Vello looks like before any promise is made.',
      },
    ],
    resultado: [
      'The sales page is live with the new identity. It brings together Vello\'s proposition, the product in use, the operation\'s numbers and the competitor comparison.',
    ],
    status: 'In progress.',
    links: [],
  },
};

export default caso;
