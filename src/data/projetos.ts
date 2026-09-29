// Projetos do portfólio da home.
// Projetos da agência abrem o detalhe na própria home (campo "imagens").
// Projetos de produto levam para a página do case (campo "href").

export type Categoria = 'produto' | 'branding' | 'social' | 'web';

export interface Imagem { src: string; alt: string; }

export interface Projeto {
  nome: string;
  cats: Categoria[];
  tags: string[];
  desc: string;
  capa?: Imagem;
  imagens?: Imagem[];
  link?: string;
  href?: string;
}

export const categorias: { id: Categoria | 'todos'; rotulo: string }[] = [
  { id: 'todos', rotulo: 'Todos' },
  { id: 'produto', rotulo: 'Produto & UX' },
  { id: 'branding', rotulo: 'Identidade & Branding' },
  { id: 'social', rotulo: 'Social Media' },
  { id: 'web', rotulo: 'Páginas Web' },
];

export const rotuloCategoria: Record<Categoria, string> = {
  produto: 'Produto & UX',
  branding: 'Identidade & Branding',
  social: 'Social Media',
  web: 'Páginas Web',
};

export const projetos: Projeto[] = [
  {
    nome: 'Portal Titãs da Robótica',
    cats: ['produto', 'web'],
    tags: ['Arquitetura de informação', 'Pesquisa', 'Portal'],
    desc: 'Portal oficial da equipe de robótica do Ifes Campus Colatina, com 10 anos de história organizados num só lugar.',
    capa: { src: '/images/cases/titas-da-robotica/home.webp', alt: 'Página inicial do portal Titãs da Robótica com o logo da equipe e foto do grupo na competição CBR 2025' },
    href: '/produto/titas-da-robotica',
  },
  {
    nome: 'Submissão de projetos FAPES',
    cats: ['produto'],
    tags: ['UX/UI', 'Wizard', 'Figma Make'],
    desc: 'Tela de submissão em 4 etapas para editais da FAPES, feita para pesquisadores com prazo apertado.',
    capa: { src: '/images/cases/fapes-submissao/etapa-1.webp', alt: 'Primeira etapa do wizard de submissão de projetos da FAPES, com indicador de progresso e dados do coordenador pré-preenchidos' },
    href: '/produto/fapes-submissao',
  },
  {
    nome: "Madre Pizzas",
    cats: ["branding"],
    tags: ["Rebranding", "Impressos"],
    desc: "Rebranding completo da pizzaria, com nova paleta em azul e dourado, variações de logo e aplicação em voucher promocional e caixas de pizza.",
    imagens: [
      { src: "/images/cropped/04-1.png", alt: "Voucher promocional da Madre Pizzas com 15% de desconto, foto de pizzas e QR code no verso" },
      { src: "/images/cropped/04-2.png", alt: "Logo horizontal da Madre Pizzas em branco e dourado sobre fundo azul-marinho" },
      { src: "/images/cropped/04-3.png", alt: "Logo vertical da Madre Pizzas aplicado em duas versões de cor, fundo verde e fundo azul" },
      { src: "/images/cropped/04-4.png", alt: "Símbolo da Madre Pizzas em verde, formado por folhas estilizadas com um ponto dourado" },
      { src: "/images/cropped/04-5.png", alt: "Logo horizontal da Madre Pizzas em branco e dourado sobre fundo verde" },
      { src: "/images/cropped/04-6.png", alt: "Caixa de pizza aberta com o logo da Madre Pizzas em azul na tampa e uma pizza de pepperoni dentro" },
      { src: "/images/cropped/04-7.png", alt: "Caixa de pizza azul-marinho fechada com o logo da Madre Pizzas em branco e dourado" }
    ]
  },
  {
    nome: "GDN",
    cats: ["branding"],
    tags: ["Branding", "Mockups"],
    desc: "Marca construída do zero para loja de tecnologia: logo em variações de cor, aplicada em fachada, uniforme e cartão de visita.",
    imagens: [
      { src: "/images/cropped/05-1.png", alt: "Cartão de visita cinza-escuro com o logo da GDN em branco e seta amarela" },
      { src: "/images/cropped/05-2.png", alt: "Pilha de cartões de visita azul-marinho com o logo da GDN" },
      { src: "/images/cropped/05-3.png", alt: "Camiseta azul-marinho com o logo da GDN bordado no peito" },
      { src: "/images/cropped/05-4.png", alt: "Fachada de loja com placa escura e o logo GDN Store em branco e amarelo" }
    ]
  },
  {
    nome: "Nova Energy Solutions",
    cats: ["branding"],
    tags: ["Branding"],
    desc: "Identidade para empresa de energia solar, do símbolo N ao aplicativo em copo térmico, pasta institucional e cartaz de rua.",
    imagens: [
      { src: "/images/cropped/06-1.png", alt: "Símbolo da Nova Energy Solutions: letra N branca com círculos em azul e lilás sobre fundo verde-petróleo" },
      { src: "/images/cropped/06-2.png", alt: "Pilha de cartões de visita verde-petróleo com o logo da Nova Energy Solutions" },
      { src: "/images/cropped/06-3.png", alt: "Cartaz colado na parede com foto de casa e o logo da Nova Energy Solutions" },
      { src: "/images/cropped/06-4.png", alt: "Pasta institucional e papel timbrado da Nova Energy Solutions" },
      { src: "/images/cropped/06-5.png", alt: "Cartaz em moldura na parede externa com o logo da Nova Energy Solutions" },
      { src: "/images/cropped/06-6.png", alt: "Quatro variações do logo da Nova Energy Solutions em fundos verde-petróleo e creme" }
    ]
  },
  {
    nome: "Leandro Rampinelli",
    cats: ["branding"],
    tags: ["Branding", "Mockups"],
    desc: "Marca pessoal para fisioterapeuta, com símbolo de coluna vertebral em dourado aplicado em uniforme, placa de consultório e tablet.",
    imagens: [
      { src: "/images/cropped/07-1.png", alt: "Logo de Leandro Rampinelli, fisioterapeuta, com símbolo de coluna vertebral dourada sobre fundo escuro" },
      { src: "/images/cropped/07-2.png", alt: "Placa de acrílico de consultório com o logo de Leandro Rampinelli" },
      { src: "/images/cropped/07-3.png", alt: "Símbolo de silhueta humana com coluna vertebral dourada sobre fundo preto" },
      { src: "/images/cropped/07-4.png", alt: "Costas de camisa polo preta com o logo de Leandro Rampinelli" },
      { src: "/images/cropped/07-5.png", alt: "Papel texturizado sobre mesa de madeira com o logo de Leandro Rampinelli" },
      { src: "/images/cropped/07-6.png", alt: "Tablet e celular exibindo o logo de Leandro Rampinelli" },
      { src: "/images/cropped/07-7.png", alt: "Logo de Leandro Rampinelli em relevo aplicado em parede clara" }
    ]
  },
  {
    nome: "Saiph Team",
    cats: ["branding"],
    tags: ["Branding"],
    desc: "Identidade inspirada em constelações, aplicada em capa de vinil conceitual, wallpaper de desktop e mockups de estúdio.",
    imagens: [
      { src: "/images/cropped/08-1.png", alt: "Arte da Saiph Team com símbolo circular em azul e laranja sobre fundo escuro" },
      { src: "/images/cropped/08-2.png", alt: "Notebook exibindo wallpaper com o logo da Saiph Team" },
      { src: "/images/cropped/08-3.png", alt: "Capa de disco de vinil conceitual com o logo da Saiph Team numa loja de discos" },
      { src: "/images/cropped/08-4.png", alt: "Estrela azul brilhante no céu escuro, referência visual da constelação que inspirou a Saiph Team" }
    ]
  },
  {
    nome: "Andréa Matos",
    cats: ["branding"],
    tags: ["Branding", "Ícones"],
    desc: "Marca para clínica de psicologia, com símbolo psi acolhedor em paleta terrosa e lilás, e conjunto de ícones para aplicativo.",
    imagens: [
      { src: "/images/cropped/09-1.png", alt: "Cartão de visita com o logo de Andréa Matos, psicóloga, sob sombra de folhagem" },
      { src: "/images/cropped/09-2.png", alt: "Logo de Andréa Matos com símbolo psi e coração lilás, fundo claro" },
      { src: "/images/cropped/09-3.png", alt: "Logo de Andréa Matos em versão clara sobre fundo marrom" }
    ]
  },
  {
    nome: "Dra. Sandra Helena Pereira",
    cats: ["branding"],
    tags: ["Rebranding"],
    desc: "Rebranding para ginecologista, com símbolo de lua crescente em rosa e verde e versão circular pronta pra redes sociais.",
    imagens: [
      { src: "/images/cropped/10-1.png", alt: "Logo circular da Dra. Sandra Helena Pereira com lua crescente e silhueta feminina em rosa, fundo verde" },
      { src: "/images/cropped/10-2.png", alt: "Logo horizontal da Dra. Sandra Helena Pereira, ginecologia, terapia sexual e climatério, fundo branco" },
      { src: "/images/cropped/10-3.png", alt: "Símbolo de lua crescente com silhueta feminina sobre círculo rosa" },
      { src: "/images/cropped/10-4.png", alt: "Logo da Dra. Sandra Helena Pereira em branco sobre fundo verde" },
      { src: "/images/cropped/10-5.png", alt: "Símbolo de lua crescente com silhueta feminina em verde-escuro" },
      { src: "/images/cropped/10-6.png", alt: "Versão circular do logo da Dra. Sandra Helena Pereira para perfil em redes sociais" }
    ]
  },
  {
    nome: "Beatriz Soares",
    cats: ["branding"],
    tags: ["Branding"],
    desc: "Marca para doceria saudável, com tipografia manuscrita em rosa vibrante e monograma BS aplicado em 2 paletas de cor.",
    imagens: [
      { src: "/images/cropped/11-1.png", alt: "Logo de Beatriz Soares, doceria saudável, em rosa escuro sobre fundo rosa claro" },
      { src: "/images/cropped/11-2.png", alt: "Logo de Beatriz Soares em rosa escuro sobre fundo verde-claro" },
      { src: "/images/cropped/11-3.png", alt: "Logo de Beatriz Soares em branco sobre fundo rosa escuro" },
      { src: "/images/cropped/11-4.png", alt: "Monograma BS com cupcake em rosa escuro sobre fundo verde-claro" }
    ]
  },
  {
    nome: "Tia Leninha",
    cats: ["branding"],
    tags: ["Branding"],
    desc: "Marca floral para negócio local, do carimbo personalizado ao luminoso de fachada.",
    imagens: [
      { src: "/images/cropped/12-1.png", alt: "Luminoso de fachada preto com o símbolo floral da Tia Leninha em branco" },
      { src: "/images/cropped/12-2.png", alt: "Logo da Tia Leninha com folhas coloridas em lilás, rosa e amarelo" },
      { src: "/images/cropped/12-3.png", alt: "Logo horizontal da Tia Leninha com folhas coloridas" },
      { src: "/images/cropped/12-4.png", alt: "Carimbo de madeira ao lado da marca impressa da Tia Leninha" }
    ]
  },
  {
    nome: "Igreja Adventista de São Silvano",
    cats: ["branding"],
    tags: ["Branding"],
    desc: "Identidade para organização religiosa: monograma com chama e cruz, em versões positiva e negativa.",
    imagens: [
      { src: "/images/cropped/13-1.png", alt: "Monograma IASS com chama dourada e cruz, em preto sobre fundo branco" },
      { src: "/images/cropped/13-2.png", alt: "Monograma IASS com chama dourada e cruz, em branco sobre fundo preto" }
    ]
  },
  {
    nome: "DJ Consultoria em Gestão Pública",
    cats: ["branding"],
    tags: ["Rebranding"],
    desc: "Rebranding corporativo com monograma DJ, aplicado em post de Instagram e mockups de celular.",
    imagens: [
      { src: "/images/cropped/14-1.png", alt: "Logo da DJ Consultoria em Gestão Pública: monograma DJ em prata e azul com seta, sobre fundo preto" },
      { src: "/images/cropped/14-2.png", alt: "Letra J em azul com seta, ícone reduzido da DJ Consultoria, sobre fundo preto" },
      { src: "/images/cropped/14-3.png", alt: "Símbolo J com seta em azul degradê sobre fundo preto" },
      { src: "/images/cropped/14-4.png", alt: "Logo horizontal da DJ Consultoria em Gestão Pública sobre fundo preto" },
      { src: "/images/cropped/14-5.png", alt: "Mockup de story e de post de Instagram com o logo da DJ Consultoria sobre fotos de reunião de negócios" }
    ]
  },
  {
    nome: "Jefferson Fernandes",
    cats: ["branding"],
    tags: ["Branding", "Mockups"],
    desc: "Marca pessoal para personal trainer, com escudo JF aplicado em camiseta, fachada de academia e fotos de treino.",
    imagens: [
      { src: "/images/cropped/15-1.png", alt: "Placa em fachada de prédio com o logo de Jefferson Fernandes, personal trainer" },
      { src: "/images/cropped/15-2.png", alt: "Variações do logo de Jefferson Fernandes com escudo JF e halteres, em fundo azul-marinho e fundo branco" },
      { src: "/images/cropped/15-3.png", alt: "Mulher treinando em barra fixa vestindo regata com o logo de Jefferson Fernandes" },
      { src: "/images/cropped/15-4.png", alt: "Pessoa levantando barra com anilhas em academia, foto de apoio da marca" },
      { src: "/images/cropped/15-5.png", alt: "Mulher treinando com cordas navais em frente a parede com o logo de Jefferson Fernandes" }
    ]
  },
  {
    nome: "Madre Pizzas",
    cats: ["social"],
    tags: ["Instagram", "TV"],
    desc: "Postagens sazonais para Instagram e material de apresentação em TV da pizzaria.",
    imagens: [
      { src: "/images/cropped/17-1.png", alt: "Grade com seis postagens da Madre Pizzas para Instagram em azul e dourado" },
      { src: "/images/cropped/17-2.png", alt: "Post da Madre Pizzas anunciando novo horário: fechado segunda e terça, aberto de quarta a domingo" },
      { src: "/images/cropped/17-3.png", alt: "Post da Madre Pizzas divulgando pizza em pedaço toda quinta-feira" },
      { src: "/images/cropped/17-4.png", alt: "Post da Madre Pizzas com a frase A verdadeira pizza italiana sobre foto de pizza" },
      { src: "/images/cropped/17-5.png", alt: "Post da Madre Pizzas sobre o Dia da Pizza com burrata" },
      { src: "/images/cropped/17-6.png", alt: "Post da Madre Pizzas para o Dia dos Namorados com massa em formato de coração" }
    ]
  },
  {
    nome: "Ízi Stays",
    cats: ["social"],
    tags: ["Social Media", "Tráfego pago"],
    desc: "Postagens e campanhas pagas para hospedagem, incluindo guia de restaurantes de Vitória.",
    imagens: [
      { src: "/images/cropped/18-1.png", alt: "Post da Ízi Stays com a pergunta Sonhando com suas próximas férias sobre foto de pés numa rede na praia" },
      { src: "/images/cropped/18-2.png", alt: "Carrossel da Ízi Stays com os 5 melhores restaurantes de Vitória" },
      { src: "/images/cropped/18-3.png", alt: "Carrossel da Ízi Stays mostrando quarto, sala e banheiro de apartamento de hospedagem" },
      { src: "/images/cropped/18-4.png", alt: "Post da Ízi Stays com depoimento de hóspede sobre foto de apartamento com vista para o mar" }
    ]
  },
  {
    nome: "E-Redação",
    cats: ["social"],
    tags: ["Social Media", "Tráfego pago"],
    desc: "Conteúdo educativo e de conversão para plataforma de correção de redação do Enem.",
    imagens: [
      { src: "/images/cropped/19-1.png", alt: "Grade com quatro postagens do E-Redação em azul e verde-limão" },
      { src: "/images/cropped/19-2.png", alt: "Post do E-Redação com fotos de alunos em varal e a frase Eles acreditaram, escreveram e conquistaram" },
      { src: "/images/cropped/19-3.png", alt: "Post do E-Redação perguntando o que os alunos aprovados têm em comum" },
      { src: "/images/cropped/19-4.png", alt: "Post do E-Redação divulgando checklist gratuito na bio" },
      { src: "/images/cropped/19-5.png", alt: "Post do E-Redação alertando sobre o erro de não responder ao tema do jeito certo" },
      { src: "/images/cropped/19-6.png", alt: "Post do E-Redação explicando que o Enem segue regras claras de correção" },
      { src: "/images/cropped/19-7.png", alt: "Post do E-Redação convidando para baixar o checklist gratuito" },
      { src: "/images/cropped/19-8.png", alt: "Post do E-Redação com a frase Redação não é dom" }
    ]
  },
  {
    nome: "SOS Energia Solar",
    cats: ["social"],
    tags: ["Social Media", "Tráfego pago"],
    desc: "Série de postagens educativas sobre economia e benefícios da energia solar.",
    imagens: [
      { src: "/images/cropped/20-1.png", alt: "Logo da SOS Energia Solar em preto com símbolo de círculos concêntricos" },
      { src: "/images/cropped/20-2.png", alt: "Post da SOS Energia Solar sobre sustentabilidade e meio ambiente com foto de painéis solares" },
      { src: "/images/cropped/20-3.png", alt: "Post da SOS Energia Solar apresentando os benefícios da energia solar para casa e escritório" },
      { src: "/images/cropped/20-4.png", alt: "Post da SOS Energia Solar sobre redução da conta de luz" },
      { src: "/images/cropped/20-5.png", alt: "Post da SOS Energia Solar sobre energia infinita e renovável" },
      { src: "/images/cropped/20-6.png", alt: "Post da SOS Energia Solar sobre payback e retorno do investimento" },
      { src: "/images/cropped/20-7.png", alt: "Post da SOS Energia Solar com a frase Invista em um futuro sustentável sobre fundo escuro" }
    ]
  },
  {
    nome: "Tile Pro Services",
    cats: ["social"],
    tags: ["Portfólio", "Redes sociais"],
    desc: "Postagens de portfólio e antes/depois de obras para empresa de acabamento em pisos nos EUA.",
    imagens: [
      { src: "/images/cropped/21-1.png", alt: "Logo da Tile Pro Services em preto e vermelho com símbolo de casa" },
      { src: "/images/cropped/21-2.png", alt: "Post da Tile Pro Services mostrando piso de porcelanato finalizado, marcado como depois" },
      { src: "/images/cropped/21-3.png", alt: "Post da Tile Pro Services mostrando piso em instalação com niveladores, marcado como antes" },
      { src: "/images/cropped/21-4.png", alt: "Post da Tile Pro Services com a frase The perfection is in the details sobre borda de piscina em pedra" },
      { src: "/images/cropped/21-5.png", alt: "Post da Tile Pro Services com banheiro revestido em azulejo escama verde e banheira branca" }
    ]
  },
  {
    nome: "Dra. Marina Malacarne",
    cats: ["social"],
    tags: ["Social Media", "Tráfego pago"],
    desc: "Conteúdo educativo sobre infectologia para redes sociais e campanhas pagas.",
    imagens: [
      { src: "/images/cropped/22-1.png", alt: "Logo da Dra. Marina da Rós Malacarne com símbolo orgânico em tons de rosa e vinho" },
      { src: "/images/cropped/22-2.png", alt: "Post da Dra. Marina Malacarne para o Dia do Médico com foto dela de jaleco" },
      { src: "/images/cropped/22-3.png", alt: "Post da Dra. Marina Malacarne sobre estresse e risco de infecção" },
      { src: "/images/cropped/22-4.png", alt: "Post da Dra. Marina Malacarne convidando a tirar dúvidas sobre ISTs" },
      { src: "/images/cropped/22-5.png", alt: "Post da Dra. Marina Malacarne sobre covid longa" },
      { src: "/images/cropped/22-6.png", alt: "Post da Dra. Marina Malacarne com a frase Indetectável é igual a intransmissível" },
      { src: "/images/cropped/22-7.png", alt: "Post da Dra. Marina Malacarne com cuidados ao visitar um recém-nascido" }
    ]
  },
  {
    nome: "Dra. Sandra Helena Pereira",
    cats: ["social"],
    tags: ["Social Media", "Tráfego pago"],
    desc: "Postagens institucionais e educativas sobre saúde da mulher.",
    imagens: [
      { src: "/images/cropped/23-1.png", alt: "Símbolo da Dra. Sandra Helena Pereira: lua crescente com silhueta feminina sobre círculo rosa" },
      { src: "/images/cropped/23-2.png", alt: "Post de apresentação com foto da Dra. Sandra Helena e a pergunta Quem é Sandra Helena" },
      { src: "/images/cropped/23-3.png", alt: "Post com foto da Dra. Sandra Helena falando dos mais de 40 anos cuidando da saúde de mulheres" },
      { src: "/images/cropped/23-4.png", alt: "Post da Dra. Sandra Helena Pereira sobre terapia sexual" },
      { src: "/images/cropped/23-5.png", alt: "Post da Dra. Sandra Helena Pereira sobre menopausa e climatério com foto dela no consultório" },
      { src: "/images/cropped/23-6.png", alt: "Post da Dra. Sandra Helena Pereira sobre prevenção do câncer de colo de útero" },
      { src: "/images/cropped/23-7.png", alt: "Post com foto antiga em preto e branco da Dra. Sandra Helena sobre sua carreira como obstetra" }
    ]
  },
  {
    nome: "Chiuba Store",
    cats: ["web"],
    tags: ["E-commerce", "Landing page"],
    desc: "Landing page, loja Shopify e loja integrada para marca de moda contemporânea.",
    imagens: [
      { src: "/images/cropped/29-1.png", alt: "Logo da Chiuba em tipografia serifada preta sobre fundo claro" },
      { src: "/images/cropped/29-2.png", alt: "Três modelos vestindo blazers com o monograma CH ao fundo" },
      { src: "/images/cropped/29-3.png", alt: "Banner da Chiuba com três modelos em frente a um lago" },
      { src: "/images/cropped/29-4.png", alt: "Modelo de jaqueta vermelha em frente ao monograma CH" },
      { src: "/images/cropped/29-5.png", alt: "Landing page da Chiuba com a chamada Vista sua identidade" },
      { src: "/images/cropped/29-6.png", alt: "Loja Shopify da Chiuba com banner e vitrine de produtos" },
      { src: "/images/cropped/29-7.png", alt: "Loja integrada da Chiuba com grade de produtos e menu de categorias" }
    ],
    link: "https://chiuba-brand-experience.lovable.app/"
  },
];
