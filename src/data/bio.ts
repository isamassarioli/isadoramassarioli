// Página de links (/bio), a que vai na bio do Instagram.
import { contato, whatsapp } from './site';

export const bio = {
  meta: {
    titulo: 'Isadora Massarioli · Links',
    descricao: 'Estratégia, branding e direção criativa. Cases, resultados, como eu trabalho e contato de Isadora Massarioli.',
  },
  apresentacao: 'estratégia, branding e direção criativa',
  // Mesma frase da identidade no Figma. A parte destacada fica em itálico.
  frase: { antes: 'além do bonito, te entrego o que ', destaque: 'realmente vende' },

  principal: {
    titulo: 'Quero conversar sobre a minha marca',
    sub: 'Pelo WhatsApp. Devolvo o orçamento em até 24h.',
    href: whatsapp('Oi, Isadora! Vim pelo seu Instagram e quero conversar sobre a minha marca.'),
  },

  // Guia gratuito: preencha "href" com o link do guia. Com o link vazio, o card não aparece.
  guia: {
    href: '',
    selo: 'Gratuito',
    titulo: 'Guia completo do Criador de Conteúdo',
    sub: 'Teste se o nicho que você tá pensando é o certo, ou só o mais óbvio, e crie conteúdos e ganchos que convertem.',
    cta: 'Baixar o guia',
  },

  // Para quem chegou curioso e ainda não quer conversar.
  conhecer: {
    titulo: 'Antes de conversar, conheça',
    links: [
      { titulo: 'Um case do início ao resultado', sub: 'Madre Pizzas: o que o cliente pediu, o que eu fiz e o resultado', href: '/portfolio#madre-pizzas-branding' },
      { titulo: 'Resultados de clientes', sub: '+50% em leads e +200 seguidores no primeiro mês', href: '/#resultados' },
      { titulo: 'Antes do visual, a estratégia', sub: 'O diagnóstico que decide o que a sua marca vai dizer', href: '/#estrategia' },
      { titulo: 'Como o projeto acontece', sub: 'As 4 etapas e o que você recebe em cada uma', href: '/#metodo' },
      { titulo: 'Portfólio completo', sub: 'Branding, identidade visual, social media e web', href: '/portfolio' },
    ],
  },

  produto: { titulo: 'Trabalho em produto (UX/UI)', href: '/productdesign' },

  redes: [
    { rotulo: 'Instagram', href: contato.instagram },
    { rotulo: 'TikTok', href: 'https://www.tiktok.com/@isadoramassarioli' },
    { rotulo: 'LinkedIn', href: contato.linkedin },
    { rotulo: 'Behance', href: contato.behance },
  ],
};
