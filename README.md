# Gestão de Gastos: portfólio de QA

Este repositório mostra o meu trabalho como **Analista de QA** num time de produto
simulado. O aplicativo é real e funciona; a empresa (**Casa Clara Tecnologia**) e as
pessoas do time são fictícias. As histórias, as entregas do desenvolvedor e os bugs seguem
o fluxo de uma empresa de verdade, sprint a sprint.

## O que você encontra aqui

| Onde | O quê |
| --- | --- |
| [`qa/`](qa/README.md) | **Meu trabalho**: planos de teste, casos de teste, bugs, evidências e relatórios |
| [`docs/sprints/`](docs/sprints/sprint-01/planejamento.md) | Histórias de usuário com critérios de aceite e as entregas do dev |
| [`docs/empresa/`](docs/empresa/01-boas-vindas.md) | Onboarding, processo do time e padrões de QA |
| [Issues](../../issues) | Bugs reportados durante os testes |
| [Pull requests](../../pulls) | Correções dos bugs, retestadas por mim |

## Sprints

| Sprint | Versão | Tema | Situação |
| --- | --- | --- | --- |
| [Sprint 1](docs/sprints/sprint-01/planejamento.md) | 1.1.0 | Busca, filtro, exportação em CSV e limite de valor | Em teste |

## O aplicativo

O **Gestão de Gastos** organiza as contas do mês de quem mora sozinho ou divide despesas:
áreas individuais e compartilhadas, divisão entre pessoas, contas recorrentes e
parceladas, atrasos e backup. Veja a [visão do produto](docs/produto/visao-do-produto.md).

Feito com React, TypeScript e Vite; testes unitários com Vitest. Os dados ficam no
navegador (localStorage).

### Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173.

| Comando | O que faz |
| --- | --- |
| `npm test` | Testes unitários |
| `npm run lint` | Verificação do código |
| `npm run build` | Versão final em `dist/` |

### Branches

- `main`: produção (tags `v1.0.0`, `v1.1.0`…)
- `develop`: homologação, onde o QA testa
- `feature/…` e `fix/…`: histórias e correções
