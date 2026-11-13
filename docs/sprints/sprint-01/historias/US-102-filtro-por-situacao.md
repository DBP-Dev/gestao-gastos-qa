# US-102: Filtrar contas por situação

**Como** pessoa que organiza os pagamentos do mês,
**quero** ver só as contas que faltam pagar, só as pagas ou só as atrasadas,
**para** saber rapidamente o que ainda preciso resolver.

## Regras

- Quatro opções acima da lista: **Todas**, **Pendentes**, **Pagas** e **Atrasadas**.
- Cada opção mostra entre parênteses quantas contas ela tem: `Pendentes (3)`.
- **Todas** vem selecionada.
- **Pendentes** mostra **tudo o que falta pagar**, ou seja, as contas não pagas **no prazo e
  também as atrasadas**. É o mesmo conceito do "Falta pagar" do resumo do mês.
- **Pagas** mostra as contas marcadas como pagas.
- **Atrasadas** mostra as contas não pagas com vencimento antes de hoje.
- O filtro funciona junto com a busca (US-101), e os contadores consideram o texto buscado.
- Ao marcar ou desmarcar uma conta como paga, a lista e os contadores se atualizam na hora.

## Critérios de aceite

```gherkin
Contexto:
  Dado que hoje é dia 15
  E o mês tem as contas:
    | conta     | vencimento | situação  |
    | Aluguel   | dia 5      | paga      |
    | Luz       | dia 10     | não paga  |
    | Internet  | dia 20     | não paga  |

Cenário: filtro padrão
  Então a opção "Todas (3)" está selecionada
  E vejo as três contas

Cenário: pendentes inclui atrasadas
  Quando eu escolho "Pendentes"
  Então vejo "Luz" e "Internet"
  E a opção mostra "Pendentes (2)"

Cenário: só atrasadas
  Quando eu escolho "Atrasadas"
  Então vejo só "Luz"

Cenário: só pagas
  Quando eu escolho "Pagas"
  Então vejo só "Aluguel"

Cenário: pagar uma conta com o filtro ativo
  Dado que escolhi "Pendentes"
  Quando eu marco "Internet" como paga
  Então "Internet" sai da lista
  E as opções mostram "Pendentes (1)" e "Pagas (2)"

Cenário: filtro com busca
  Dado que escolhi "Pendentes"
  Quando eu digito "inter" na busca
  Então vejo só "Internet"
  E a opção mostra "Todas (1)"
```

> Dica do time: o dia de hoje é o do seu computador. Para ter contas atrasadas, crie contas
> com vencimento num dia anterior ao de hoje.
