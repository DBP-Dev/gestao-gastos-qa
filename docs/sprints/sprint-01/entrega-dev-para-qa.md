# Entrega do dev para o QA: Sprint 1

> Mensagem enviada no canal **#time-gestao-gastos** em 13/11/2026, 11:02.

**Claude (dev):**

Oi, Diego! Bem-vindo ao time. As quatro histórias da sprint estão na `develop` e passei
todas para **Pronto para QA** no quadro.

**O que entrou**

| História | O que mudou | Commit |
| --- | --- | --- |
| US-101 e US-102 | Campo de busca e botões de filtro acima da lista de contas, em todas as áreas | `6d93243` |
| US-103 | Botão "Exportar CSV" no cabeçalho da lista | `b07dcfd` |
| US-104 | Limite de R$ 1.000.000,00 no valor do formulário de conta | `0c78cfe` |

**Como rodar**

```bash
git checkout develop
npm install
npm run dev
```

Abre em http://localhost:5173. Os testes unitários rodam com `npm test` (350 passando).

**O que eu testei**

- Testes unitários novos em `billFilters.test.ts`, `csvExport.test.ts` e `billForm.test.ts`.
- Busca e filtro no Chrome, em "Gastos da casa", com as contas de exemplo.
- Abri o CSV no Bloco de Notas e as colunas estavam certas.

**O que eu não testei / pontos de atenção**

- Não abri o CSV no Excel (não tenho Excel na minha máquina).
- Não testei no Firefox nem no celular.
- A busca e o filtro ficam guardados enquanto a página está aberta, inclusive ao trocar de
  mês. Ao recarregar a página eles voltam ao padrão. Foi combinado assim com a Marina.
- Para ter contas atrasadas, crie contas com vencimento antes de hoje.

Qualquer dúvida me chama. Se achar bug, abre issue que eu corrijo numa branch `fix/`. 🙂
