# US-104: Limitar o valor de uma conta a R$ 1 milhão

**Como** PO,
**quero** que o valor de uma conta tenha um limite realista,
**para** evitar erros de digitação como "150000000" no lugar de "1500,00", que hoje
estragam os totais do mês.

> Hoje o formulário aceita até R$ 1 bilhão. O suporte recebeu reclamações de totais
> absurdos causados por zeros a mais.

## Regras

- O valor máximo de uma conta passa a ser **R$ 1.000.000,00**.
- Vale para **criar e editar** contas, em todas as áreas e em todos os tipos (comum,
  recorrente e parcelada; na parcelada, o limite é do valor de cada parcela).
- Acima do limite, o campo mostra a mensagem
  **"O valor máximo de uma conta é R$ 1.000.000,00."** e a conta não é salva.
- Backups antigos com contas acima do limite continuam sendo restaurados normalmente.

## Critérios de aceite

```gherkin
Esquema do Cenário: limite do valor
  Quando eu crio uma conta com o valor "<valor>"
  Então o resultado é "<resultado>"

  Exemplos:
    | valor          | resultado                     |
    | 999.999,99     | conta salva                   |
    | 1.000.000,00   | conta salva                   |
    | 1.000.000,01   | mensagem do limite, não salva |
    | 2.000.000,00   | mensagem do limite, não salva |

Cenário: editar uma conta para um valor acima do limite
  Dado uma conta salva de R$ 100,00
  Quando eu edito o valor para "1.500.000,00"
  Então vejo a mensagem "O valor máximo de uma conta é R$ 1.000.000,00."
  E a conta continua com R$ 100,00
```
