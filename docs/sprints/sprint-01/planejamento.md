# Sprint 1: encontrar contas com rapidez

| | |
| --- | --- |
| Período | 09/11/2026 a 20/11/2026 |
| Versão alvo | **1.1.0** |
| Objetivo | Quem tem muitas contas no mês consegue encontrar, filtrar e levar as contas para uma planilha |
| Ambiente de teste | branch `develop` |

## Histórias

| História | Título | Pontos | Situação |
| --- | --- | --- | --- |
| [US-101](historias/US-101-busca-de-contas.md) | Buscar conta pelo nome | 3 | Pronto para QA |
| [US-102](historias/US-102-filtro-por-situacao.md) | Filtrar contas por situação | 3 | Pronto para QA |
| [US-103](historias/US-103-exportar-csv.md) | Exportar as contas do mês em CSV | 5 | Pronto para QA |
| [US-104](historias/US-104-limite-de-valor.md) | Limitar o valor de uma conta a R$ 1 milhão | 2 | Pronto para QA |

## Calendário do QA

| Data | Entrega do QA |
| --- | --- |
| 13/11 (sex) | Onboarding e ambiente rodando |
| 16/11 (seg) | Plano de teste da sprint |
| 17/11 (ter) | Casos de teste das quatro histórias |
| 17 e 18/11 | Execução, evidências e bugs abertos |
| 19/11 (qui) | Reteste das correções e regressão da 1.0 |
| 20/11 (sex) | Relatório de testes e parecer go / no-go na review |

## Riscos levantados no planejamento

- O CSV precisa abrir certo no **Excel em português**, que é o que os nossos usuários usam.
- A situação "atrasada" depende da data de hoje: o teste precisa de contas com vencimento
  anterior ao dia atual.
- A busca e o filtro foram colocados no componente da lista, que é usado por todas as áreas.
  Vale conferir em **Minhas contas**, **Gastos da casa** e numa área criada.
