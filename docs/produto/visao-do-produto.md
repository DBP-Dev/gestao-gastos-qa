# Visão do produto: Gestão de Gastos 1.0

## Para quem é

Pessoas que querem saber, todo mês, **quanto gastaram, quem paga o quê e o que ainda falta
pagar**, morando sozinhas ou dividindo a casa com outras pessoas.

## Como funciona hoje (versão 1.0.0, em produção)

O aplicativo roda no navegador e guarda os dados **só naquele navegador** (localStorage).
Não há login nem servidor.

### Áreas

- **Minhas contas**: área fixa, individual, para gastos pessoais (sem divisão).
- **Gastos da casa**: área compartilhada que já vem criada, com participantes.
- **Outras áreas compartilhadas**: podem ser criadas, cada uma com participantes e contas
  próprios.

### Contas

| Regra | Como funciona |
| --- | --- |
| Valor | Em reais, maior que zero. Aceita `1500`, `1.500,00`, `R$ 1.500,00` e `1500.50` |
| Vencimento | Dia de 1 a 31. Em meses mais curtos vale o último dia (dia 31 em fevereiro vira 28 ou 29) |
| Divisão | Igual entre as pessoas escolhidas ou com valores personalizados que precisam fechar o total |
| Situação | **Paga**; **Pendente** (não paga, no prazo); **Atrasada** (não paga, vencimento antes de hoje) |
| Tipos | **Comum** (só naquele mês), **Recorrente** (todo mês) e **Parcelada** (de 2 a 120 parcelas) |
| Copiar mês | Copia as contas comuns do mês anterior |

### Resumos

- Resumo do mês de cada área: total, já pago, falta pagar e atrasos de meses anteriores.
- **Meu painel**: a parte da pessoa nas contas de "Gastos da casa".

### Backup

Salva os dados em um arquivo `.json` e restaura depois.

### Dados de exemplo

Na primeira vez aparecem contas de **exemplo**. O botão "Apagar exemplos" remove essas contas.
Para começar do zero, limpe os dados do site no navegador (DevTools → Application →
Local Storage).
