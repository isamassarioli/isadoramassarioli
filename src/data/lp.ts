// Textos da página inicial (landing page). Para mudar qualquer frase, edite aqui.
// Seções com lista vazia (depoimentos, resultados) não aparecem na página.
import { projetos } from './projetos';

export const lp = {
  meta: {
    titulo: 'Isadora Massarioli · Identidade visual e branding para negócios',
    descricao:
      'Identidade visual, branding e social media para negócios que querem ser lembrados e escolhidos. Mais de 50 marcas atendidas desde 2020. Peça seu orçamento.',
  },

  hero: {
    eyebrow: 'Identidade visual · Branding · Social media',
    tituloAntes: 'Identidade visual que faz o cliente ',
    tituloDestaque: 'escolher você',
    tituloDepois: ' antes da primeira conversa.',
    apoio: 'Branding, identidade visual e social media para negócios que querem ser lembrados e escolhidos.',
    objecao: 'Mesmo que você ainda não tenha logo, manual ou direção visual.',
    cta: 'Pedir orçamento',
    cta2: 'Ver cases',
    selo: { numero: '50+', rotulo: 'marcas atendidas desde 2020' },
    fotoAlt: 'Isadora Massarioli, designer de marca e Product Designer',
  },

  dor: {
    titulo: 'Seu negócio é bom, mas a marca ainda não mostra isso.',
    dica: 'Arraste para o lado',
    perguntas: [
      'Será que meu logo passa confiança?',
      'Por que o concorrente parece mais profissional do que eu?',
      'Será que o meu Instagram parece o de quem cobra o preço que eu cobro?',
      'Preciso refazer tudo para conseguir postar com consistência?',
      'Vale investir em marca antes de vender mais?',
    ],
    fecho: 'Se você já se perguntou alguma dessas coisas, a sua marca provavelmente ainda não está trabalhando por você.',
  },

  virada: {
    eyebrow: 'O que muda',
    titulo: 'Marca é um sistema: identidade, aplicação e conteúdo trabalhando juntos.',
    textos: [
      'O que o cliente vê no Instagram, na fachada, no cartão e na proposta precisa parecer da mesma empresa. Eu trabalho assim desde 2020, com identidade visual, manual e conteúdo pensados juntos.',
      'Sou Product Designer e designer de marca. Por isso desenho pensando em quem vai usar e em onde a marca vai aparecer no dia a dia.',
    ],
    pilares: [
      { titulo: 'Identidade', texto: 'Logo, tipografia, paleta e as regras de uso.' },
      { titulo: 'Aplicação', texto: 'Papelaria, fachada, uniforme, embalagem e site.' },
      { titulo: 'Conteúdo', texto: 'Posts, stories e carrosséis com a mesma cara da marca.' },
    ],
  },

  prova: {
    titulo: 'Marcas que já passaram por aqui',
    numeros: [
      { numero: '50+', rotulo: 'marcas atendidas' },
      { numero: '2020', rotulo: 'criando marcas desde' },
      { numero: '24h', rotulo: 'para devolver o orçamento' },
    ],
    // Nomes tirados dos projetos do portfólio, sem repetir.
    marcas: Array.from(new Set(projetos.filter((p) => !p.cats.includes('produto')).map((p) => p.nome))),
    // Preencha com resultados reais de clientes, por exemplo { numero: '+40%', rotulo: 'pedidos em 3 meses', cliente: 'Nome' }.
    resultados: [] as { numero: string; rotulo: string; cliente: string }[],
  },

  cases: {
    eyebrow: 'Portfólio',
    titulo: 'Cases em destaque',
    texto: 'Clique em um projeto para ver as peças de perto.',
    // Troque os nomes para mudar os três destaques. A categoria escolhe entre projetos com o mesmo nome.
    destaques: [
      { nome: 'Madre Pizzas', cat: 'branding' },
      { nome: 'Nova Energy Solutions', cat: 'branding' },
      { nome: 'Dra. Marina Malacarne', cat: 'social' },
    ] as { nome: string; cat: 'produto' | 'branding' | 'social' | 'web' }[],
    todos: 'Ver todos os projetos',
  },

  metodo: {
    eyebrow: 'Como funciona',
    titulo: 'Como o projeto acontece',
    texto: 'Todo projeto começa com perguntas, antes de eu abrir o Illustrator.',
    etapas: [
      { titulo: 'Escuta', texto: 'Quem é o cliente do seu cliente e o que ele precisa ouvir para confiar em você.' },
      { titulo: 'Posicionamento', texto: 'O que a marca diz, para quem e com que tom de voz.' },
      { titulo: 'Identidade', texto: 'Logo, tipografia, paleta e as regras de uso, reunidas no manual de marca.' },
      { titulo: 'Aplicação', texto: 'A marca nos lugares onde ela aparece: redes sociais, papelaria, fachada e site.' },
    ],
    cta: 'Preencher briefing',
  },

  servicos: {
    eyebrow: 'O que ofereço',
    titulo: 'Serviços',
    itens: [
      { titulo: 'Identidade Visual', ganho: 'Uma marca que parece a mesma em qualquer lugar.', texto: 'Logo, tipografia, paleta e as regras de uso que garantem consistência em qualquer peça.', href: '/portfolio?cat=branding' },
      { titulo: 'Manual de Marca', ganho: 'Ninguém inventa um logo torto depois.', texto: 'Guia completo de como aplicar a identidade em cada situação.', href: '/portfolio?cat=branding' },
      { titulo: 'Social Media', ganho: 'Um perfil com cara de negócio sério.', texto: 'Posts, stories e carrosséis para Instagram, LinkedIn, TV e campanhas de tráfego pago.', href: '/portfolio?cat=social' },
      { titulo: 'Branding Completo', ganho: 'Marca nova ou renovada, do zero ao dia a dia.', texto: 'Construção de marca do zero ou rebranding, da estratégia ao visual aplicado.', href: '/portfolio?cat=branding' },
      { titulo: 'Mockups e Web', ganho: 'Ver a marca pronta antes de ela ir para o mundo.', texto: 'Aplicação realista da marca em produto, papelaria, ambiente e páginas web.', href: '/portfolio?cat=web' },
      { titulo: 'UI/UX Design', ganho: 'Telas pensadas para quem vai usar.', texto: 'Sites, sistemas e aplicativos com pesquisa, arquitetura de informação e protótipo.', href: '/productdesign' },
    ],
  },

  // Preencha com depoimentos reais. Com a lista vazia, a seção some.
  depoimentos: {
    titulo: 'O que os clientes dizem',
    itens: [] as { texto: string; nome: string; negocio: string }[],
  },

  sobre: {
    eyebrow: 'Sobre',
    titulo: 'Bonito é o mínimo.',
    textos: [
      'Sou Product Designer e designer de marca desde 2020. Na minha agência, em Colatina-ES, cuido de identidade visual, branding e redes sociais para negócios. Já construí marca do zero para academias, clínicas, restaurantes, lojas e prestadores de serviço, sempre com o mesmo foco: fazer a marca vender, não só ficar bonita no feed.',
      'Todo projeto começa com perguntas antes de abrir o Illustrator: quem é o cliente do meu cliente, o que ele precisa ouvir pra confiar, e onde essa marca vai aparecer no dia a dia. O resultado é identidade visual, conteúdo e presença digital que conversam entre si.',
    ],
    cta: 'Pedir orçamento',
  },

  faq: {
    eyebrow: 'Dúvidas',
    titulo: 'Perguntas frequentes',
    itens: [
      {
        p: 'Quanto custa um projeto?',
        r: 'Depende do que a sua marca precisa hoje: uma identidade nova, um manual, posts, um site ou tudo junto. Você me conta o cenário e eu devolvo um orçamento certinho em até 24h, sem letra miúda.',
      },
      {
        p: 'Por onde eu começo?',
        r: 'Preencha o briefing no fim da página e deixe seu contato. Vou ler suas respostas e conversar com você sobre os próximos passos.',
      },
      {
        p: 'Você faz só o logo ou o pacote completo?',
        r: 'As duas coisas. Dá para contratar só a identidade visual, o manual de marca, as redes sociais ou o branding completo, do posicionamento até a aplicação.',
      },
      {
        p: 'Você também faz sites e produtos digitais?',
        r: 'Faço. Além de páginas web, trabalho como Product Designer em interfaces de sistemas e aplicativos. Esses trabalhos ficam em uma página própria.',
        link: { href: '/productdesign', rotulo: 'Ver trabalhos de produto' },
      },
    ],
  },

  final: {
    eyebrow: 'Vamos conversar',
    titulo: 'Vamos trabalhar juntos?',
    texto: 'Me conta o que sua marca precisa hoje. Devolvo um orçamento certinho em até 24h, sem letra miúda.',
    cta: 'Pedir orçamento',
  },
};
