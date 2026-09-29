import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Dados de contato e configuração usados em todas as páginas.

export const SITE_URL = 'https://isadoramassarioli.com.br';

// Enquanto for false, as páginas em inglês ficam com noindex e fora do sitemap.
// Troque para true depois de revisar os textos marcados com [REVISAR].
export const EN_REVISADO = false;

const WHATSAPP_NUMERO = '5527995153664';

export function whatsapp(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export const contato = {
  email: 'isadoramassarioli@gmail.com',
  emailHref: 'mailto:isadoramassarioli@gmail.com',
  whatsappExibicao: '(27) 99515-3664',
  whatsappOrcamento: whatsapp('oi, vi seu portfólio e quero um orçamento'),
  whatsappProjeto: whatsapp('oi, tenho um projeto!'),
  whatsappProduto: whatsapp('oi, Isadora! vi seu portfólio de produto'),
  linkedin: 'https://www.linkedin.com/in/isadoramassarioli/',
  behance: 'https://www.behance.net/isadoramassarioli',
  github: 'https://github.com/isamassarioli',
  instagram: 'https://www.instagram.com/isadoramassarioli/',
  youtube: 'https://www.youtube.com/@isadora.massarioli',
};

// Os PDFs ficam em public/cv/. Basta salvar os arquivos com estes nomes.
// Enquanto o PDF em inglês não existir, o botão dele some e as páginas em inglês usam o PDF em português.
const CV_PT = '/cv/curriculo-isadora-massarioli-pt.pdf';
const CV_EN = '/cv/resume-isadora-massarioli-en.pdf';
const temCvEn = existsSync(join(process.cwd(), 'public', CV_EN));

export const curriculo = {
  pt: CV_PT,
  en: temCvEn ? CV_EN : null,
};

export function curriculoPara(lang: 'pt' | 'en') {
  return curriculo[lang] ?? CV_PT;
}
