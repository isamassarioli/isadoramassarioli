import type { Case } from './tipos';

const img = (arquivo: string) => `/images/cases/titas-da-robotica/${arquivo}`;
const site = 'https://titasdarobotica.vercel.app/';
const codigo = 'https://github.com/isamassarioli/titasdarobotica';

const caso: Case = {
  slug: 'titas-da-robotica',
  publicado: true,
  ordem: 1,
  tags: ['Pesquisa', 'Arquitetura de informação', 'UI', 'Conteúdo'],

  pt: {
    titulo: 'Portal Web dos Titãs da Robótica',
    resumo: 'O portal oficial da equipe de robótica do Ifes Campus Colatina, que reúne mais de 10 anos de história num só lugar.',
    meta: {
      titulo: 'Portal Titãs da Robótica · Case de Isadora Massarioli',
      descricao: 'Case de produto: pesquisa, arquitetura de informação e interface do portal oficial da equipe Titãs da Robótica, do Ifes Campus Colatina.',
    },
    ficha: [
      { rotulo: 'Meu papel', valor: 'Pesquisa, conteúdo, arquitetura de informação e interface' },
      { rotulo: 'Período', valor: 'Set. 2025 a set. 2026' },
      { rotulo: 'Vínculo', valor: 'Iniciação Científica CNPq' },
      { rotulo: 'Status', valor: 'Em desenvolvimento' },
    ],
    capa: {
      src: img('home.webp'),
      alt: 'Página inicial do portal Titãs da Robótica: logo da equipe com capacete espartano, menu de navegação e foto do grupo na competição CBR 2025',
    },
    contexto: [
      'O portal é o site oficial da equipe Titãs da Robótica, do Ifes Campus Colatina. Desenvolvo o projeto como bolsista de Iniciação Científica do CNPq, de setembro de 2025 a setembro de 2026.',
    ],
    problema: [
      'A equipe tem mais de 10 anos de projetos, conquistas e evolução. Essa história estava espalhada em redes sociais, documentos e fotos.',
      'Não havia um lugar oficial para a equipe se apresentar a escolas, patrocinadores e à comunidade acadêmica.',
    ],
    papel: [
      'Mapeei, documentei e redigi 10 anos de marcos históricos e conquistas da equipe.',
      'Estruturei a arquitetura da informação do site.',
      'Aprimorei a identidade visual digital e a experiência de navegação.',
      'Organizei o conteúdo para dois públicos: a comunidade acadêmica e o público geral.',
    ],
    pesquisa: {
      titulo: 'Base de pesquisa',
      paragrafos: [
        'O conteúdo do portal partiu da pesquisa que fiz para o livro oficial dos 10 anos da equipe, como bolsista da Fapes.',
        'Junto com um colega de pesquisa, conduzi mais de 50 entrevistas com estudantes, orientadores e colaboradores. Também analisei mais de 10 anos de documentos históricos, registros técnicos e imagens.',
      ],
    },
    processo: {
      intro: [
        'Com a pesquisa em mãos, o trabalho foi transformar entrevistas e documentos em páginas que cada público consegue percorrer sem se perder. Primeiro defini a arquitetura e os fluxos de navegação, depois o conteúdo de cada seção e, por fim, a interface.',
      ],
      imagens: [
        { src: img('fluxos.png'), alt: 'Mapa de fluxos de navegação do portal, com a home conectada às páginas de equipes, inscrição, blog, apoio e contato', legenda: 'Mapa de fluxos: como a home se conecta às páginas internas.', formato: 'largo' },
        { src: img('historia.webp'), alt: 'Seção Nossa História do portal, com texto sobre a origem da equipe em 2014 e foto dos integrantes numa competição', legenda: 'Nossa História: a origem da equipe contada a partir das entrevistas e documentos.', formato: 'largo' },
        { src: img('trajetoria.webp'), alt: 'Linha do tempo da equipe com marcos de 2014 a 2025, como fundação, rebranding, ações na pandemia e participação em mundiais', legenda: 'Linha do tempo com os marcos da equipe, de 2014 até hoje.', formato: 'largo' },
        { src: img('equipes.webp'), alt: 'Página Equipes do portal com cards de fotos das equipes de competição', legenda: 'Página de equipes, com uma entrada para cada categoria de competição.', formato: 'largo' },
        { src: img('mobile.webp'), alt: 'Página inicial do portal Titãs da Robótica exibida na largura de um celular', legenda: 'Versão para celular da página inicial.', formato: 'estreito' },
      ],
    },
    decisoes: [
      {
        titulo: 'Um caminho para cada público no menu',
        porque: 'Escolas, patrocinadores e comunidade acadêmica chegam ao site com perguntas diferentes. Por isso o menu tem entradas diretas como Inscreva-se, Apoio, Equipes e Blog, e cada pessoa encontra o que procura no primeiro clique.',
      },
      {
        titulo: 'A história contada em linha do tempo',
        porque: 'São mais de 10 anos de marcos. Em ordem cronológica, dá para entender a evolução da equipe de relance e ler cada conquista no seu contexto.',
      },
      {
        titulo: 'Conteúdo apoiado na pesquisa do livro',
        porque: 'Os textos do portal vêm das entrevistas e documentos levantados para o livro dos 10 anos. Assim, datas e fatos publicados foram conferidos em fonte, não escritos de memória.',
      },
    ],
    resultado: [
      '10 anos de história da equipe consolidados numa única plataforma digital.',
    ],
    status: 'Em desenvolvimento.',
    links: [
      { rotulo: 'Ver o site', url: site },
      { rotulo: 'Ver o código no GitHub', url: codigo },
    ],
  },

  en: {
    titulo: '[REVISAR] Titãs da Robótica Web Portal',
    resumo: '[REVISAR] The official website of the robotics team at Ifes Campus Colatina, bringing more than 10 years of history into one place.',
    meta: {
      titulo: 'Titãs da Robótica Portal · Case study by Isadora Massarioli',
      descricao: 'Product case study: research, information architecture and interface for the official portal of the Titãs da Robótica team at Ifes Campus Colatina.',
    },
    ficha: [
      { rotulo: 'My role', valor: '[REVISAR] Research, content, information architecture and interface' },
      { rotulo: 'Timeline', valor: 'Sep 2025 to Sep 2026' },
      { rotulo: 'Program', valor: '[REVISAR] CNPq undergraduate research fellowship' },
      { rotulo: 'Status', valor: 'In development' },
    ],
    capa: {
      src: img('home.webp'),
      alt: 'Home page of the Titãs da Robótica portal: team logo with a Spartan helmet, navigation menu and a group photo at the CBR 2025 competition',
    },
    contexto: [
      '[REVISAR] The portal is the official website of the Titãs da Robótica team at Ifes Campus Colatina, in Brazil. I work on it as an undergraduate research fellow funded by CNPq, from September 2025 to September 2026.',
    ],
    problema: [
      '[REVISAR] The team has more than 10 years of projects, awards and growth. That history was scattered across social media, documents and photos.',
      '[REVISAR] There was no official place for the team to introduce itself to schools, sponsors and the academic community.',
    ],
    papel: [
      '[REVISAR] Mapped, documented and wrote 10 years of the team\'s milestones and achievements.',
      '[REVISAR] Structured the site\'s information architecture.',
      '[REVISAR] Refined the digital visual identity and the navigation experience.',
      '[REVISAR] Organized the content for two audiences: the academic community and the general public.',
    ],
    pesquisa: {
      titulo: 'Research foundation',
      paragrafos: [
        '[REVISAR] The portal\'s content came from the research I did for the team\'s official 10th anniversary book, as a Fapes research fellow.',
        '[REVISAR] Together with a fellow researcher, I conducted more than 50 interviews with students, advisors and collaborators. I also reviewed more than 10 years of historical documents, technical records and images.',
      ],
    },
    processo: {
      intro: [
        '[REVISAR] With the research done, the job was to turn interviews and documents into pages each audience can move through without getting lost. I defined the architecture and navigation flows first, then the content of each section, and then the interface.',
      ],
      imagens: [
        { src: img('fluxos.png'), alt: 'Navigation flow map of the portal, connecting the home page to the teams, sign-up, blog, support and contact pages', legenda: 'Flow map: how the home page connects to the inner pages.', formato: 'largo' },
        { src: img('historia.webp'), alt: 'Our History section of the portal, with text about the team\'s origin in 2014 and a photo of members at a competition', legenda: 'Our History: the team\'s origin, written from the interviews and documents.', formato: 'largo' },
        { src: img('trajetoria.webp'), alt: 'Team timeline with milestones from 2014 to 2025, such as its founding, rebranding, pandemic work and world championships', legenda: 'Timeline of the team\'s milestones, from 2014 to today.', formato: 'largo' },
        { src: img('equipes.webp'), alt: 'Teams page of the portal with photo cards for each competition team', legenda: 'Teams page, with one entry per competition category.', formato: 'largo' },
        { src: img('mobile.webp'), alt: 'Home page of the Titãs da Robótica portal at phone width', legenda: 'Mobile version of the home page.', formato: 'estreito' },
      ],
    },
    decisoes: [
      {
        titulo: '[REVISAR] One path per audience in the menu',
        porque: '[REVISAR] Schools, sponsors and the academic community come to the site with different questions. The menu has direct entries such as Sign up, Support, Teams and Blog, so each person finds what they need in one click.',
      },
      {
        titulo: '[REVISAR] History told as a timeline',
        porque: '[REVISAR] There are more than 10 years of milestones. In chronological order, the team\'s growth is easy to grasp at a glance and each achievement reads in context.',
      },
      {
        titulo: '[REVISAR] Content grounded in the book research',
        porque: '[REVISAR] The portal\'s copy comes from the interviews and documents gathered for the 10th anniversary book, so the dates and facts it publishes were checked against sources, not written from memory.',
      },
    ],
    resultado: [
      '[REVISAR] 10 years of team history brought together in a single digital platform.',
    ],
    status: 'In development.',
    links: [
      { rotulo: 'Visit the website', url: site },
      { rotulo: 'See the code on GitHub', url: codigo },
    ],
  },
};

export default caso;
