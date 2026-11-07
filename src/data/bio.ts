// Página de links (/bio), a que vai na bio do Instagram.
import { contato } from './site';

export const bio = {
  meta: {
    titulo: 'Isadora Massarioli · Links',
    descricao: 'Estratégia, branding e direção criativa. Cases, resultados, como eu trabalho e contato de Isadora Massarioli.',
  },
  apresentacao: 'estratégia, branding e direção criativa',
  // Mesma frase da identidade no Figma. A parte destacada fica em itálico.
  frase: { antes: 'além do bonito, te entrego o que ', destaque: 'realmente vende' },

  servicos: [
    { titulo: 'Estratégia para redes sociais', sub: 'Quero um plano de conteúdo para minha marca', destaque: true },
    { titulo: 'Produto', sub: 'Design de interfaces e experiências digitais' },
    { titulo: 'Identidade visual', sub: 'Logo, cores e tipografia para sua marca' },
  ],

  // Guia gratuito: preencha "href" com o link do guia. Com o link vazio, o card não aparece.
  guia: {
    href: '',
    selo: 'Gratuito',
    titulo: 'Guia completo do Criador de Conteúdo',
    sub: 'Teste se o nicho que você tá pensando é o certo, ou só o mais óbvio, e crie conteúdos e ganchos que convertem.',
    cta: 'Baixar o guia',
  },

  redes: [
    { rotulo: 'Instagram', href: contato.instagram },
    { rotulo: 'TikTok', href: 'https://www.tiktok.com/@isadoramassarioli' },
    { rotulo: 'LinkedIn', href: contato.linkedin },
    { rotulo: 'Behance', href: contato.behance },
  ],
};
