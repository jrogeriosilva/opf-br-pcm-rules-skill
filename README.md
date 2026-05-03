# PCM Rule Extractor
Extrai tabelas de regras de obrigatoriedade do `additionalInfo` em páginas PCM no Confluence e gera um JSON consolidado em `output/additional-info.json`.

## Requisitos

- Node.js 18+
- Acesso às páginas do Confluence

## Instalação

```bash
npm install
```

## Executar

```bash
npm run start
```

## Scripts

- `npm run start` — executa o extrator (`tsx src/index.ts`)
- `npm run build` — compila TypeScript
- `npm run lint` — checagem de tipos (`tsc --noEmit`)

## Saída

O arquivo gerado é salvo em:

`output/additional-info.json`

Estrutura principal:

- `extractedAt`: timestamp ISO da extração
- `version`: versão do extrator
- `pages[]`: lista de páginas processadas com `pageId`, `title`, `url` e `fields[]`
