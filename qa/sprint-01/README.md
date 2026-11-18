# QA da Sprint 1

Versão **1.1.0**, testada na branch `develop`.
Histórias e regras: [planejamento da sprint](../../docs/sprints/sprint-01/planejamento.md).

## Entregas

- [x] Plano de teste ([`plano-de-teste.md`](plano-de-teste.md))
- [x] Casos de teste da US-101 ([`casos-de-teste/US-101-busca-de-contas.md`](casos-de-teste/US-101-busca-de-contas.md))
- [x] Casos de teste da US-102 ([`casos-de-teste/US-102-filtro-por-situacao.md`](casos-de-teste/US-102-filtro-por-situacao.md))
- [x] Casos de teste da US-103 ([`casos-de-teste/US-103-exportar-as-contas-do-mes-em-csv.md`](casos-de-teste/US-103-exportar-as-contas-do-mes-em-csv.md))
- [x] Casos de teste da US-104 ([`casos-de-teste/US-104-limita-o-valor-de-uma-conta.md`](casos-de-teste/US-104-limita-o-valor-de-uma-conta.md))
- [x] Bugs reportados (`bugs/` e [Issues do GitHub](https://github.com/DBP-Dev/gestao-gastos-qa/issues?q=is%3Aissue))
- [x] Reteste das correções
- [x] Regressão da versão 1.0 ([`regressao.md`](regressao.md))
- [x] Relatório de testes com parecer go / no-go ([`relatorio-de-teste.md`](relatorio-de-teste.md))

## Bugs encontrados

| Bug | Título | Severidade | Issue | Situação |
| --- | --- | --- | --- | --- |
| [BUG-001](bugs/BUG-001.md) | Busca não encontra contas com acento quando o termo é digitado sem acento | Média | [#1](https://github.com/DBP-Dev/gestao-gastos-qa/issues/1) | Corrigido |
| [BUG-002](bugs/BUG-002.md) | Filtro "Pendentes" não exibe contas atrasadas | Média | [#2](https://github.com/DBP-Dev/gestao-gastos-qa/issues/2) | Corrigido |
| [BUG-003](bugs/BUG-003.md) | CSV exporta data de vencimento inexistente (ex.: 31/11, 31/02) quando o dia cadastrado não existe no mês | Média | [#3](https://github.com/DBP-Dev/gestao-gastos-qa/issues/3) | Corrigido |
| [BUG-004](bugs/BUG-004.md) | Acentos aparecem corrompidos ao abrir o CSV exportado no Excel (ex.: "Ã�gua" em vez de "Água") | Média | [#4](https://github.com/DBP-Dev/gestao-gastos-qa/issues/4) | Corrigido |
| [BUG-005](bugs/BUG-005.md) | Conta com valor de R$ 1.000.000,01 é salva, um centavo acima do limite de R$ 1.000.000,00 | Baixa | [#5](https://github.com/DBP-Dev/gestao-gastos-qa/issues/5) | Corrigido |
