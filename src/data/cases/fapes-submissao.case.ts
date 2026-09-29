import type { Case } from './tipos';

const img = (arquivo: string) => `/images/cases/fapes-submissao/${arquivo}`;
const prototipo = 'https://guide-quote-31249278.figma.site';

const caso: Case = {
  slug: 'fapes-submissao',
  publicado: true,
  ordem: 2,
  tags: ['UX/UI', 'Formulário longo', 'Figma Make', 'Acessibilidade'],

  pt: {
    titulo: 'Submissão de projetos em editais da FAPES',
    resumo: 'Uma tela de submissão para um formulário longo, preenchido por pesquisadores com prazo apertado.',
    meta: {
      titulo: 'Submissão de projetos FAPES · Case de Isadora Massarioli',
      descricao: 'Case de UX/UI: wizard em 4 etapas para a submissão de projetos em editais da FAPES, com protótipo funcional de alta fidelidade no Figma Make.',
    },
    ficha: [
      { rotulo: 'Meu papel', valor: 'Product Designer, projeto individual' },
      { rotulo: 'Contexto', valor: 'Desafio técnico de UX/UI do processo seletivo do LEDS' },
      { rotulo: 'Ferramenta', valor: 'Figma Make' },
      { rotulo: 'Status', valor: 'Protótipo funcional concluído' },
    ],
    capa: {
      src: img('etapa-1.webp'),
      alt: 'Primeira etapa do wizard de submissão, com indicador de 4 etapas no topo, dados do edital FAPES e coordenador responsável pré-preenchido',
    },
    contexto: [
      'Este projeto foi o meu desafio técnico de UX/UI no processo seletivo do LEDS.',
    ],
    problema: [
      'O desafio era projetar a tela de submissão de projetos para editais da FAPES.',
      'A entrega precisava ser uma única tela para um formulário longo, preenchido por pesquisadores sob pressão de prazo.',
    ],
    papel: [
      'Fiz o projeto sozinha, da leitura do problema ao protótipo funcional.',
      'Desenhei o fluxo de preenchimento, a interface e os estados de validação e ajuda.',
      'Construí o protótipo navegável de alta fidelidade no Figma Make.',
    ],
    processo: {
      intro: [
        'Como o formulário é longo e o prazo pesa, organizei o preenchimento em etapas curtas dentro da mesma tela. As imagens abaixo seguem a ordem em que o pesquisador passa por elas.',
      ],
      imagens: [
        { src: img('etapa-1.webp'), alt: 'Etapa 1, Identificação do projeto: campos de título e área temática e card com os dados do coordenador já preenchidos', legenda: 'Etapa 1, Identificação. O coordenador responsável vem pré-preenchido do perfil.', formato: 'largo' },
        { src: img('validacao.webp'), alt: 'Etapa 1 com os campos obrigatórios destacados em vermelho e mensagens de erro abaixo de cada um', legenda: 'Validação no próprio campo, com mensagem que diz o que falta.', formato: 'largo' },
        { src: img('tooltip.webp'), alt: 'Tooltip de ajuda aberto ao lado do campo Título do projeto explicando como preenchê-lo', legenda: 'Tooltips de ajuda ao lado dos termos que costumam gerar dúvida.', formato: 'largo' },
        { src: img('etapa-2.webp'), alt: 'Etapa 2, Descrição do projeto: campos de resumo e metodologia com contador de caracteres e sugestões de palavras-chave', legenda: 'Etapa 2, Descrição. Resumo, metodologia e palavras-chave.', formato: 'largo' },
        { src: img('etapa-3.webp'), alt: 'Etapa 3, Documentos complementares: lista de documentos obrigatórios e área para arrastar arquivos em PDF', legenda: 'Etapa 3, Documentos. A lista mostra o que já foi enviado e o que ainda falta.', formato: 'largo' },
        { src: img('etapa-4.webp'), alt: 'Etapa 4, Revisão e envio: resumo de todas as informações preenchidas antes do envio', legenda: 'Etapa 4, Revisão. Tudo o que foi preenchido, antes de enviar.', formato: 'largo' },
        { src: img('sucesso.png'), alt: 'Tela de confirmação de projeto enviado com sucesso, com número de protocolo', legenda: 'Confirmação com número de protocolo.', formato: 'estreito' },
        { src: img('tema-claro.webp'), alt: 'Etapa 1 do wizard no tema claro', legenda: 'O mesmo fluxo no tema claro.', formato: 'largo' },
        { src: img('mobile.webp'), alt: 'Etapa 1 do wizard na largura de um celular', legenda: 'Versão para celular.', formato: 'estreito' },
      ],
    },
    decisoes: [
      {
        titulo: 'Wizard em 4 etapas na mesma tela',
        porque: 'Com progressive disclosure, o pesquisador vê só o bloco que está preenchendo e sabe quanto falta. Isso evita a rolagem infinita e reduz a carga cognitiva de um formulário longo.',
      },
      {
        titulo: 'Usuário já autenticado e dados pré-preenchidos',
        porque: 'O avatar com status na navegação mostra quem está logado, e os dados do coordenador responsável já vêm preenchidos. Quem tem prazo curto não perde tempo digitando o que o sistema já sabe.',
      },
      {
        titulo: 'Salvamento automático, validação clara e ajuda no contexto',
        porque: 'O salvamento automático (simulado no protótipo) protege o trabalho de quem é interrompido. As validações apontam o erro no campo onde ele está, e os tooltips explicam termos como "Metodologia" sem tirar a pessoa da tela.',
      },
      {
        titulo: 'Tema claro e escuro com contraste ajustado',
        porque: 'Cada pesquisador usa o modo que prefere. Ajustei o contraste nos dois temas para que textos, campos e mensagens continuem legíveis.',
      },
      {
        titulo: 'Identidade visual da FAPES na navegação',
        porque: 'A marca da FAPES na barra de navegação deixa claro que a pessoa está no ambiente oficial do edital.',
      },
    ],
    resultado: [
      'Protótipo funcional de alta fidelidade, navegável do primeiro campo até a confirmação do envio.',
    ],
    status: 'Protótipo concluído.',
    links: [
      { rotulo: 'Abrir o protótipo', url: prototipo },
    ],
  },

  en: {
    titulo: '[REVISAR] Project submission for FAPES funding calls',
    resumo: '[REVISAR] A submission screen for a long form, filled in by researchers on a tight deadline.',
    meta: {
      titulo: 'FAPES project submission · Case study by Isadora Massarioli',
      descricao: 'UX/UI case study: a 4-step wizard for submitting projects to FAPES funding calls, with a high-fidelity working prototype built in Figma Make.',
    },
    ficha: [
      { rotulo: 'My role', valor: 'Product Designer, solo project' },
      { rotulo: 'Context', valor: '[REVISAR] UX/UI take-home challenge for the LEDS selection process' },
      { rotulo: 'Tool', valor: 'Figma Make' },
      { rotulo: 'Status', valor: 'Working prototype completed' },
    ],
    capa: {
      src: img('etapa-1.webp'),
      alt: 'First step of the submission wizard, with a 4-step progress indicator, FAPES call details and the lead researcher\'s data already filled in',
    },
    contexto: [
      '[REVISAR] This project was my UX/UI take-home challenge for the LEDS selection process.',
    ],
    problema: [
      '[REVISAR] The brief was to design the project submission screen for FAPES funding calls. FAPES is the research funding agency of the state of Espírito Santo, Brazil.',
      '[REVISAR] The deliverable had to be a single screen for a long form, filled in by researchers under deadline pressure.',
    ],
    papel: [
      '[REVISAR] I did the project on my own, from understanding the problem to the working prototype.',
      '[REVISAR] I designed the filling flow, the interface, and the validation and help states.',
      '[REVISAR] I built the high-fidelity clickable prototype in Figma Make.',
    ],
    processo: {
      intro: [
        '[REVISAR] Because the form is long and the deadline matters, I split it into short steps on the same screen. The images below follow the order in which a researcher goes through them.',
      ],
      imagens: [
        { src: img('etapa-1.webp'), alt: 'Step 1, Project identification: title and topic fields and a card with the lead researcher\'s data already filled in', legenda: 'Step 1, Identification. The lead researcher is prefilled from the profile.', formato: 'largo' },
        { src: img('validacao.webp'), alt: 'Step 1 with required fields highlighted in red and an error message under each one', legenda: 'Inline validation that says what is missing.', formato: 'largo' },
        { src: img('tooltip.webp'), alt: 'Help tooltip open next to the Project title field explaining how to fill it in', legenda: 'Help tooltips next to terms that usually raise questions.', formato: 'largo' },
        { src: img('etapa-2.webp'), alt: 'Step 2, Project description: summary and methodology fields with a character counter and keyword suggestions', legenda: 'Step 2, Description. Summary, methodology and keywords.', formato: 'largo' },
        { src: img('etapa-3.webp'), alt: 'Step 3, Supporting documents: list of required documents and a drop area for PDF files', legenda: 'Step 3, Documents. The list shows what is uploaded and what is still missing.', formato: 'largo' },
        { src: img('etapa-4.webp'), alt: 'Step 4, Review and submit: summary of everything filled in before submitting', legenda: 'Step 4, Review. Everything filled in, before submitting.', formato: 'largo' },
        { src: img('sucesso.png'), alt: 'Confirmation screen for a successfully submitted project, with a protocol number', legenda: 'Confirmation with a protocol number.', formato: 'estreito' },
        { src: img('tema-claro.webp'), alt: 'Step 1 of the wizard in light theme', legenda: 'The same flow in light theme.', formato: 'largo' },
        { src: img('mobile.webp'), alt: 'Step 1 of the wizard at phone width', legenda: 'Mobile version.', formato: 'estreito' },
      ],
    },
    decisoes: [
      {
        titulo: '[REVISAR] A 4-step wizard on a single screen',
        porque: '[REVISAR] With progressive disclosure, researchers only see the block they are working on and know how much is left. This avoids endless scrolling and lowers the cognitive load of a long form.',
      },
      {
        titulo: '[REVISAR] Signed-in user and prefilled data',
        porque: '[REVISAR] The avatar with status in the navigation shows who is signed in, and the lead researcher\'s data comes prefilled. People on a deadline don\'t waste time typing what the system already knows.',
      },
      {
        titulo: '[REVISAR] Autosave, clear validation and in-context help',
        porque: '[REVISAR] Autosave (simulated in the prototype) protects the work of people who get interrupted. Validation points to the error in the field where it happens, and tooltips explain terms like "Methodology" without taking people off the screen.',
      },
      {
        titulo: '[REVISAR] Light and dark themes with tuned contrast',
        porque: '[REVISAR] Each researcher uses the mode they prefer. I tuned the contrast in both themes so text, fields and messages stay readable.',
      },
      {
        titulo: '[REVISAR] FAPES visual identity in the navigation',
        porque: '[REVISAR] The FAPES brand in the navigation bar makes it clear that people are in the official environment of the funding call.',
      },
    ],
    resultado: [
      '[REVISAR] A high-fidelity working prototype, clickable from the first field to the submission confirmation.',
    ],
    status: 'Prototype completed.',
    links: [
      { rotulo: 'Open the prototype', url: prototipo },
    ],
  },
};

export default caso;
