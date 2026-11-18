# Relatório de teste: Sprint 1

| | |
| --- | --- |
| Versão testada | 1.1.0 — `develop` @ `877a466` |
| Período | 13/11/2026 a 18/11/2026 |
| Responsável | Diego Bianchini (QA) |

## 1. Parecer

**GO com ressalvas.** Os 38 casos de teste passaram após as correções e os 9 itens de regressão também passaram. Não há bugs críticos ou altos em aberto. A liberação deve considerar as limitações de compatibilidade registradas neste relatório.

## 2. Resumo da execução

| História | CTs | Passaram na 1ª execução | Falharam na 1ª execução | Bugs |
| --- | ---: | ---: | ---: | --- |
| US-101 — Busca de contas | 9 | 8 | 1 | BUG-001 |
| US-102 — Filtro por situação | 8 | 4 | 4 | BUG-002 |
| US-103 — Exportação CSV | 11 | 8 | 3 | BUG-003 e BUG-004 |
| US-104 — Limite de valor | 10 | 5 | 5 | BUG-005 |
| **Total** | **38** | **25** | **13** | **5** |

Após as correções, os **38 casos passaram**. Os **5 bugs foram corrigidos e retestados**. A regressão da versão 1.0 também passou: **9 de 9 itens**.

## 3. Bugs

| Bug | Severidade | Situação | Reteste |
| --- | --- | --- | --- |
| [BUG-001](bugs/BUG-001.md) | Média | Corrigido | Passou — 18/11 |
| [BUG-002](bugs/BUG-002.md) | Média | Corrigido | Passou — 18/11 |
| [BUG-003](bugs/BUG-003.md) | Média | Corrigido | Passou — 18/11 |
| [BUG-004](bugs/BUG-004.md) | Média | Corrigido | Passou — 18/11 |
| [BUG-005](bugs/BUG-005.md) | Baixa | Corrigido | Passou — 18/11 |

Nenhum bug novo foi encontrado durante a regressão. Os bugs foram documentados neste repositório e registrados como [Issues no GitHub](https://github.com/DBP-Dev/gestao-gastos-qa/issues?q=is%3Aissue) (#1 a #5), todas fechadas como concluídas após o reteste.

## 4. Critérios de saída do plano

| Critério | Situação | Observação |
| --- | --- | --- |
| Casos planejados executados ou justificados | Atendido com ressalvas | Os 38 CTs foram executados. Compatibilidade com Chrome e Firefox não foi validada. |
| Resultados registrados | Atendido | Resultados registrados nos casos de teste e na regressão. |
| Evidências organizadas | Atendido | Prints e gravações disponíveis na pasta `evidencias/`. |
| Bugs documentados e registrados como Issues | Atendido | Os 5 bugs estão documentados e registrados como Issues (#1 a #5). |
| Correções submetidas a reteste | Atendido | Os 5 bugs foram retestados e passaram. |
| Regressão das funcionalidades relacionadas | Atendido | Os 9 itens da regressão passaram. |
| Nenhum bug crítico ou alto aberto | Atendido | Não há bugs críticos ou altos em aberto. |
| Relatório final com parecer | Atendido | Parecer registrado neste documento. |

## 5. O que não foi testado / riscos

- **Google Chrome e Mozilla Firefox:** não foram testados. Um problema específico desses navegadores pode não ter sido identificado.
- **Microsoft Edge 157 na regressão:** a regressão final foi executada no navegador integrado do Claude, baseado em Chromium 156. Os testes iniciais e os retestes dos bugs foram feitos no Edge 157. Pode haver diferenças entre os ambientes.
- **Excel instalado:** não foi testado porque não está disponível na máquina. A exportação foi validada no Excel Online; um comportamento diferente no Excel instalado não foi descartado.
- **Celular:** nenhum caso de teste cobriu o celular. A única verificação foi na regressão (REG-09), na visualização de 375 px do navegador integrado do Claude, em vez do DevTools do Edge previsto no plano, e cobriu só busca, filtros e "Exportar CSV" em "Minhas contas". Aparelhos reais não foram testados.
- **Área compartilhada criada para o teste:** busca, filtro e CSV foram verificados só em "Minhas contas" e "Gastos da casa". Um defeito que apareça só em áreas novas pode não ter sido detectado.
- **Testes exploratórios:** não foram executados. Problemas fora dos cenários planejados podem não ter sido identificados.

## 6. Observações

- Na abertura do CSV no Excel Online, os valores numéricos aparecem sem os zeros finais, como `1500` e `99,9`. Isso é uma formatação de exibição da planilha; os valores exportados foram conferidos no arquivo.
- Dois dos cinco bugs encontrados estavam relacionados à exportação CSV. Esse ponto merece atenção nos próximos testes.
- A regressão foi executada com apoio de IA, conforme registrado em [regressao.md](regressao.md). O escopo, os casos e os critérios foram definidos pelo QA; a abertura do CSV no Excel Online foi realizada pelo QA.

## 7. Documentos relacionados

- [Plano de teste](plano-de-teste.md)
- [Casos de teste — US-101](casos-de-teste/US-101-busca-de-contas.md)
- [Casos de teste — US-102](casos-de-teste/US-102-filtro-por-situacao.md)
- [Casos de teste — US-103](casos-de-teste/US-103-exportar-as-contas-do-mes-em-csv.md)
- [Casos de teste — US-104](casos-de-teste/US-104-limita-o-valor-de-uma-conta.md)
- [BUG-001](bugs/BUG-001.md) · [BUG-002](bugs/BUG-002.md) · [BUG-003](bugs/BUG-003.md) · [BUG-004](bugs/BUG-004.md) · [BUG-005](bugs/BUG-005.md)
- [Regressão da versão 1.0](regressao.md)
