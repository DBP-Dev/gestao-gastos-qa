# Padrões de QA

Os testes de QA deste time são **manuais**. Cada caso de teste é executado à mão no
navegador, e o resultado é registrado com evidência (print, vídeo ou arquivo gerado).
Os testes unitários automatizados são responsabilidade do desenvolvedor.

## Identificadores

| Item | Formato | Exemplo |
| --- | --- | --- |
| História | `US-` + número | US-101 |
| Caso de teste | `CT-` + história + sequência | CT-101-03 |
| Bug | `BUG-` + sequência (e a issue do GitHub) | BUG-004 (#7) |

## Severidade × prioridade

A **severidade** é o impacto técnico e quem define é o QA. A **prioridade** é a urgência
para o negócio e quem decide é a PO (o QA sugere).

| Severidade | Quando usar | Exemplo |
| --- | --- | --- |
| Crítica | Perda de dados, aplicativo inutilizável, sem contorno | Contas somem ao recarregar a página |
| Alta | Funcionalidade principal errada, contorno difícil | Total do mês soma errado |
| Média | Funcionalidade secundária errada, existe contorno | Filtro deixa de mostrar algumas contas |
| Baixa | Detalhe visual, texto, incômodo pequeno | Erro de digitação numa mensagem |

## Como escrever um bug

Use o modelo [`qa/modelos/bug.md`](../../qa/modelos/bug.md) ou o formulário de Issue do
GitHub. Um bom bug tem:

- **Título** que diz o problema e onde: *"Busca não encontra contas com acento quando o
  texto é digitado sem acento"* — não *"busca com erro"*.
- **Passos numerados** que qualquer pessoa consegue repetir, com os dados usados.
- **Resultado esperado** (citando o critério de aceite) e **resultado obtido**.
- **Evidência**: print, vídeo curto ou o arquivo gerado.
- **Ambiente**: branch e commit, navegador, sistema operacional.

Um bug por relatório. Se achar dois problemas, abra dois.

## Como escrever um caso de teste

Use o modelo [`qa/modelos/caso-de-teste.md`](../../qa/modelos/caso-de-teste.md). Cubra:

- o caminho feliz de cada critério de aceite;
- **partição de equivalência** e **valores-limite** (o valor exato do limite, um centavo
  abaixo e um centavo acima);
- entradas estranhas: vazio, só espaços, caracteres especiais, textos longos;
- **teste exploratório**: reserve um tempo da sprint para usar a funcionalidade sem roteiro
  e anote o que fez.

## Evidências

Salve em `qa/sprint-XX/evidencias/` com o nome do caso: `CT-101-03.png`.
