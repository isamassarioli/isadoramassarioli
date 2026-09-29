# isadoramassarioli.com.br

Site pessoal de Isadora Massarioli, feito com [Astro](https://astro.build) e publicado na Vercel.

## Rodar localmente

Precisa de Node.js 22 ou mais recente.

```bash
npm install
npm run dev
```

O site abre em http://localhost:4321. Para gerar a versão final e conferir se não há erros:

```bash
npm run build
npm run preview
```

## Onde fica cada coisa

| O quê | Arquivo |
| --- | --- |
| Contatos, WhatsApp, links dos currículos | `src/data/site.ts` |
| Projetos da agência (home) | `src/data/projetos.ts` |
| Cases de produto | `src/data/cases/*.case.ts` |
| Textos da página /produto e /en/product | `src/data/produto.ts` |
| Textos de interface (PT e EN) | `src/data/textos.ts` |
| Currículos em PDF | `public/cv/` |
| Imagens dos cases | `public/images/cases/<slug>/` |
| Imagens de compartilhamento | `public/og/` |

## Cadastrar um case novo

1. Copie `src/data/cases/fapes-submissao.case.ts` para `src/data/cases/<slug>.case.ts`.
2. Troque `slug`, `ordem`, `tags` e o conteúdo de `pt` e `en`.
3. Coloque as imagens em `public/images/cases/<slug>/`.
4. Deixe `publicado: false` enquanto for rascunho: o case não vira página nem aparece em listas ou no sitemap. Troque para `true` para publicar.

## Versão em inglês

As páginas em inglês ficam em `/en/product`. A opção `EN_REVISADO` em `src/data/site.ts` controla se elas são indexadas e entram no sitemap.

O currículo em inglês entra salvando `public/cv/resume-isadora-massarioli-en.pdf`. Enquanto ele não existir, o botão em inglês oferece o PDF em português.

## Publicar

A Vercel publica automaticamente a cada push na branch `main`. Pushes em outras branches geram um link de pré-visualização.
