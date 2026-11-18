# Gestão de Gastos: portfólio de QA

Este repositório mostra o meu trabalho como **Analista de QA** num time de produto
simulado. O aplicativo é real e funciona; a empresa (**Casa Clara Tecnologia**) e as
pessoas do time são fictícias. As histórias, as entregas do desenvolvedor e os bugs seguem
o fluxo de uma empresa de verdade, sprint a sprint.

## Foco: testes manuais

O meu objetivo aqui são os **testes manuais**: entender as regras de negócio, planejar,
escrever e executar casos de teste, explorar o aplicativo, encontrar e reportar bugs com
evidências, testar de novo as correções e dar o parecer de cada versão.

Técnicas usadas na Sprint 1: partição de equivalência, análise de valor-limite, reteste e
teste de regressão. Os testes exploratórios e de compatibilidade entre navegadores estavam
no plano, mas não foram executados; isso está registrado no relatório de teste.

Os testes unitários automatizados que aparecem no código (`npm test`) são do
desenvolvedor, não fazem parte do meu trabalho de QA.

## O que você encontra aqui

| Onde | O quê |
| --- | --- |
| [`qa/`](qa/README.md) | **Meu trabalho**: planos de teste, casos de teste, bugs, evidências e relatórios |
| [`docs/sprints/`](docs/sprints/sprint-01/planejamento.md) | Histórias de usuário com critérios de aceite e as entregas do dev |
| [`docs/empresa/`](docs/empresa/01-boas-vindas.md) | Onboarding, processo do time e padrões de QA |
| [Issues](../../issues) | Bugs reportados durante os testes |
| Histórico do Git | Correções dos bugs nas branches `fix/BUG-…`, juntadas na `develop` e retestadas por mim |

## Sprints

| Sprint | Versão | Tema | Situação |
| --- | --- | --- | --- |
| [Sprint 1](docs/sprints/sprint-01/planejamento.md) | 1.1.0 | Busca, filtro, exportação em CSV e limite de valor | Concluída: [GO com ressalvas](qa/sprint-01/relatorio-de-teste.md) |

## Quem fez o quê

Este é um cenário de estudo. Eu fiz o papel de QA; o **Claude** (assistente de IA da
Anthropic) fez o papel do desenvolvedor, do restante do time e de mentor.

**Feito por mim (Diego Bianchini, QA):**

- [Plano de teste](qa/sprint-01/plano-de-teste.md) da Sprint 1.
- Os [38 casos de teste](qa/sprint-01/README.md) das quatro histórias: escrita e
  primeira execução.
- Os [5 relatórios de bug](qa/sprint-01/README.md#bugs-encontrados), da descoberta à
  reprodução, severidade e evidências.
- Os retestes das cinco correções.
- As evidências: vídeos e prints das execuções e dos retestes.
- A abertura do CSV no Excel Online durante a regressão.
- O [relatório de teste](qa/sprint-01/relatorio-de-teste.md) com o parecer, redigido com
  apoio do ChatGPT e conferido com os documentos do projeto.

**Feito pelo Claude:**

- O código do aplicativo e as correções dos bugs, no papel de desenvolvedor.
- A documentação da empresa fictícia: onboarding, processo, visão do produto, histórias
  de usuário, notas de entrega do desenvolvedor e os modelos de QA.
- A revisão dos meus documentos: ortografia, formatação e consistência entre os arquivos.
- A execução da [regressão](qa/sprint-01/regressao.md), a meu pedido, seguindo o escopo e
  os casos de teste que eu defini. Isso está registrado no próprio documento.

A versão entregue para teste continha defeitos colocados de propósito pelo
"desenvolvedor", para simular uma entrega real. Eu não sabia quais eram nem onde estavam;
os bugs reportados aqui são os que encontrei executando os meus casos de teste.

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
