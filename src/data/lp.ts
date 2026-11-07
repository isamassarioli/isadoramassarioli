// Textos da página inicial (landing page). Para mudar qualquer frase, edite aqui.
// Seções com lista vazia (depoimentos) não aparecem na página.
import { projetos } from './projetos';

export const lp = {
  meta: {
    titulo: 'Isadora Massarioli · Estratégia, branding e direção criativa',
    descricao:
      'Estratégia, branding e direção criativa para negócios que já são bons, mas que ninguém entende só olhando. Mais de 50 marcas atendidas desde 2020.',
  },

  hero: {
    eyebrow: 'Estratégia · Branding · Direção criativa',
    // A parte destacada ganha o sublinhado rosa que se desenha sozinho.
    tituloAntes: 'Além do bonito, te entrego o que ',
    tituloDestaque: 'realmente vende',
    tituloDepois: '.',
    apoio: 'Sua marca já é boa. O problema é que ninguém entende isso só olhando. Eu cuido da estratégia, do branding e da direção criativa para o cliente certo entender, confiar e escolher você.',
    objecao: 'Mesmo que você ainda não tenha logo, manual ou direção visual.',
    cta: 'Pedir orçamento',
    cta2: 'Ver cases',
    selo: { numero: '50+', rotulo: 'marcas atendidas desde 2020' },
    fotoAlt: 'Isadora Massarioli sorrindo, recortada como figurinha sobre os rabiscos rosa e ameixa da marca',
  },

  dor: {
    titulo: 'Seu negócio é bom, mas a marca ainda não mostra isso.',
    perguntas: [
      'Será que meu logo passa confiança?',
      'O feed ficou lindo. E o cliente certo?',
      'Por que o concorrente parece mais profissional do que eu?',
      'Meu perfil recebe visitas. Mas isso vira conversa?',
      'Será que o meu Instagram parece o de quem cobra o preço que eu cobro?',
      'Meu perfil explica o que eu faço, mas explica por que me pagar caro?',
      'Preciso refazer tudo para conseguir postar com consistência?',
      'Vale investir em marca antes de vender mais?',
    ],
    fecho: 'Se você já se perguntou alguma dessas coisas, a sua marca provavelmente ainda não está trabalhando por você.',
  },

  estrategia: {
    eyebrow: 'Antes do visual, a estratégia',
    titulo: 'Estratégia não é o post bonito. É o que tá por trás dele.',
    texto: [
      'Antes de abrir o Illustrator, eu monto um diagnóstico da sua marca. É esse documento que decide o que a identidade, o perfil e o conteúdo vão dizer, e para quem.',
      'Conteúdo bonito sem estratégia é só decoração.',
    ],
    nota: 'Modelo do documento. Os dados de cada cliente ficam só com ele.',
    blocos: [
      { titulo: 'Diagnóstico', texto: 'Onde a marca está hoje: o perfil, a concorrência e o que o cliente vê primeiro.' },
      { titulo: 'Público', texto: 'Quem compra, o que essa pessoa procura e o que ela precisa ouvir para confiar.' },
      { titulo: 'Posicionamento', texto: 'O lugar que a marca ocupa e por que alguém escolheria você, e não o outro.' },
      { titulo: 'Tom de voz', texto: 'Como a marca fala: as palavras que usa e as que evita.' },
      { titulo: 'Pilares de conteúdo', texto: 'Os assuntos que sustentam o perfil, para cada post ter um motivo.' },
      { titulo: 'Calendário', texto: 'O que postar, quando e com qual objetivo.' },
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
    // Só resultados reais, informados pelos clientes.
    resultados: [
      { numero: '+50%', rotulo: 'em leads', cliente: 'SOS Energia Solar' },
      { numero: '+200', rotulo: 'seguidores no primeiro mês', cliente: 'Yamoh Moda Praia' },
      { numero: '+200', rotulo: 'seguidores no período do trabalho', cliente: 'SOS Energia Solar' },
    ] as { numero: string; rotulo: string; cliente: string }[],
  },

  cases: {
    eyebrow: 'Cases',
    titulo: 'O que o cliente pediu, o que eu fiz e o resultado',
    // Troque os nomes para mudar os destaques. A categoria escolhe entre projetos com o mesmo nome.
    // Só entram projetos com o campo "caso" preenchido em src/data/projetos.ts.
    destaques: [
      { nome: 'Madre Pizzas', cat: 'branding' },
      { nome: 'Yamoh Moda Praia', cat: 'social' },
      { nome: 'SOS Energia Solar', cat: 'social' },
    ] as { nome: string; cat: 'produto' | 'branding' | 'social' | 'web' }[],
    atos: { pediu: 'O que o cliente pediu', fiz: 'O que eu fiz', resultado: 'O resultado' },
    ver: 'Ver o case completo',
    todos: 'Ver todos os projetos',
  },

  metodo: {
    eyebrow: 'Como funciona',
    titulo: 'Como o projeto acontece',
    texto: 'Todo projeto começa com perguntas, antes de eu abrir o Illustrator. Em cada etapa você sabe o que vai receber.',
    rotuloEntrega: 'Você recebe',
    etapas: [
      { titulo: 'Escuta', texto: 'Uma conversa sobre o negócio, o cliente do seu cliente e o que incomoda na marca hoje.', entrega: 'Briefing e diagnóstico do perfil' },
      { titulo: 'Posicionamento', texto: 'O que a marca diz, para quem e com que tom de voz.', entrega: 'Público, posicionamento e tom de voz' },
      { titulo: 'Identidade', texto: 'Logo, tipografia, paleta e as regras de uso, reunidas no manual de marca.', entrega: 'Identidade visual e manual de marca' },
      { titulo: 'Conteúdo e aplicação', texto: 'A marca nos lugares onde ela aparece: Instagram, embalagem, papelaria e site.', entrega: 'Pilares de conteúdo, calendário e peças' },
    ],
    cta: 'Preencher briefing',
  },

  servicos: {
    eyebrow: 'O que ofereço',
    titulo: 'Serviços',
    itens: [
      { titulo: 'Estratégia e direção criativa', ganho: 'Saber o que dizer antes de decidir como mostrar.', texto: 'Diagnóstico, público, posicionamento, tom de voz, pilares de conteúdo e calendário. É o que orienta todo o resto.', href: '#estrategia', destaque: true },
      { titulo: 'Diagnóstico de perfil', ganho: 'Um perfil que explica por que te escolher.', texto: 'Análise e reestruturação da foto, da bio, dos destaques e do link do seu Instagram.', href: '#estrategia' },
      { titulo: 'Identidade Visual', ganho: 'Uma marca que parece a mesma em qualquer lugar.', texto: 'Logo, tipografia, paleta e as regras de uso que garantem consistência em qualquer peça.', href: '/portfolio?cat=branding' },
      { titulo: 'Manual de Marca', ganho: 'Ninguém inventa um logo torto depois.', texto: 'Guia completo de como aplicar a identidade em cada situação.', href: '/portfolio?cat=branding' },
      { titulo: 'Social Media', ganho: 'Um perfil com cara de negócio sério.', texto: 'Posts, stories e carrosséis para Instagram, LinkedIn, TV e campanhas de tráfego pago.', href: '/portfolio?cat=social' },
      { titulo: 'Branding Completo', ganho: 'Marca nova ou renovada, do zero ao dia a dia.', texto: 'Construção de marca do zero ou rebranding, da estratégia ao visual aplicado.', href: '/portfolio?cat=branding' },
      { titulo: 'Mockups e Web', ganho: 'Ver a marca pronta antes de ela ir para o mundo.', texto: 'Aplicação realista da marca em produto, papelaria, ambiente e páginas web.', href: '/portfolio?cat=web' },
      { titulo: 'UI/UX Design', ganho: 'Telas pensadas para quem vai usar.', texto: 'Sites, sistemas e aplicativos com pesquisa, arquitetura de informação e protótipo.', href: '/productdesign' },
    ] as { titulo: string; ganho: string; texto: string; href: string; destaque?: boolean }[],
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
      'Sou designer de marca e Product Designer desde 2020. Na minha agência, em Colatina-ES, trabalho com estratégia, branding e direção criativa para negócios: academias, clínicas, restaurantes, lojas e prestadores de serviço.',
      'Todo projeto começa com perguntas antes de abrir o Illustrator: quem é o cliente do meu cliente, o que ele precisa ouvir pra confiar e onde essa marca vai aparecer no dia a dia.',
      'Bonito vende uma vez. Entregar o que promete vende sempre.',
    ],
    fotoAlt: 'Isadora Massarioli',
    cta: 'Pedir orçamento',
  },

  faq: {
    eyebrow: 'Dúvidas',
    titulo: 'Perguntas frequentes',
    itens: [
      {
        p: 'Quanto custa um projeto?',
        r: 'Depende do que a sua marca precisa hoje: estratégia, uma identidade nova, um manual, posts, um site ou tudo junto. Você me conta o cenário e eu devolvo um orçamento certinho em até 24h, sem letra miúda.',
      },
      {
        p: 'Por onde eu começo?',
        r: 'Preencha o briefing no fim da página e deixe seu contato. Vou ler suas respostas e conversar com você sobre os próximos passos.',
      },
      {
        p: 'Você faz só o logo ou o pacote completo?',
        r: 'As duas coisas. Dá para contratar só a estratégia, a identidade visual, o manual de marca, as redes sociais ou o branding completo, do posicionamento até a aplicação.',
      },
      {
        p: 'Já tenho logo. Preciso refazer?',
        r: 'Nem sempre. Às vezes a marca é boa e o que falta é estratégia: saber o que dizer, para quem e onde. O diagnóstico mostra se o problema está no visual ou na mensagem.',
      },
      {
        p: 'Você também faz sites e produtos digitais?',
        r: 'Faço. Além de páginas web, trabalho como Product Designer em interfaces de sistemas e aplicativos. Esses trabalhos ficam em uma página própria.',
        link: { href: '/productdesign', rotulo: 'Ver trabalhos de produto' },
      },
    ] as { p: string; r: string; link?: { href: string; rotulo: string } }[],
  },

  final: {
    eyebrow: 'Vamos conversar',
    titulo: 'Vamos trabalhar juntos?',
    texto: 'Me conta o que sua marca precisa hoje. Devolvo um orçamento certinho em até 24h, sem letra miúda.',
    cta: 'Pedir orçamento',
  },
};
