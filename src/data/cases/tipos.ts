// Estrutura de um case de produto.
// Para cadastrar um case novo: copie um dos arquivos desta pasta, troque o conteúdo
// e salve com o slug no nome. Ele entra automaticamente em /produto, /en/product e no sitemap
// (este último só quando publicado for true).

export interface ImagemCase {
  src: string;
  alt: string;
  legenda?: string;
  // 'largo' ocupa a largura toda da galeria; 'estreito' é para telas de celular.
  formato?: 'largo' | 'estreito';
}

export interface Decisao {
  titulo: string;
  porque: string;
}

export interface LinkCase {
  rotulo: string;
  url: string;
}

export interface ConteudoCase {
  titulo: string;
  // Frase curta usada no card e no topo da página.
  resumo: string;
  meta: { titulo: string; descricao: string };
  // Pares rótulo/valor exibidos no topo (papel, período, ferramentas...).
  ficha: { rotulo: string; valor: string }[];
  capa: ImagemCase;
  contexto: string[];
  problema: string[];
  papel: string[];
  // Bloco opcional dentro do processo, para pesquisa ou outra base do trabalho.
  pesquisa?: { titulo: string; paragrafos: string[] };
  processo: { intro: string[]; imagens: ImagemCase[] };
  decisoes: Decisao[];
  resultado: string[];
  status: string;
  links: LinkCase[];
}

export interface Case {
  slug: string;
  // false: a página existe pela URL direta, mas fica fora dos menus, listas e sitemap, com noindex.
  publicado: boolean;
  ordem: number;
  tags: string[];
  pt: ConteudoCase;
  en: ConteudoCase;
}
