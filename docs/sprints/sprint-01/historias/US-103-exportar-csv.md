# US-103: Exportar as contas do mês em CSV

**Como** pessoa que controla as finanças também numa planilha,
**quero** baixar as contas do mês em um arquivo CSV,
**para** abrir no Excel e fazer as minhas próprias contas.

## Regras

- Botão **"Exportar CSV"** no cabeçalho da lista de contas de cada área.
- O botão fica **desabilitado** quando o mês não tem contas.
- Nome do arquivo: `gastos-<nome-da-area>-<AAAA-MM>.csv`, com o nome da área em minúsculas,
  sem acentos e com hífens no lugar dos espaços. Ex.: `gastos-gastos-da-casa-2026-11.csv`.
- Exporta **todas as contas do mês exibido**, ignorando a busca e o filtro, na mesma ordem
  da tela (por vencimento).
- Colunas, separadas por **ponto e vírgula**: `Nome;Vencimento;Valor;Situação`.
- **Vencimento** no formato `DD/MM/AAAA`, **igual à data mostrada na tela** (uma conta com
  dia 31 em novembro vence em 30/11, como na tela).
- **Valor** sem "R$" e sem ponto de milhar, com vírgula decimal: `1500,00`.
- **Situação**: `Paga`, `Pendente` ou `Atrasada`, como no cartão da conta.
- Um nome com ponto e vírgula ou aspas não pode quebrar as colunas.
- O arquivo precisa **abrir com duplo clique no Excel em português** com as colunas
  separadas e os **acentos corretos** ("Água", "Situação").

## Critérios de aceite

```gherkin
Cenário: exportar as contas do mês
  Dado que estou em "Gastos da casa" em novembro de 2026
  Quando eu clico em "Exportar CSV"
  Então é baixado o arquivo "gastos-gastos-da-casa-2026-11.csv"
  E ele tem uma linha de cabeçalho e uma linha para cada conta do mês

Cenário: abrir no Excel
  Quando eu abro o arquivo com duplo clique no Excel em português
  Então vejo as colunas Nome, Vencimento, Valor e Situação separadas
  E os acentos aparecem corretos

Cenário: vencimento igual ao da tela
  Dado uma conta "Cartão" com vencimento no dia 31
  E o mês exibido é novembro de 2026
  Quando eu exporto o CSV
  Então o vencimento de "Cartão" é "30/11/2026"

Cenário: exportação ignora o filtro
  Dado que escolhi o filtro "Pagas"
  Quando eu exporto o CSV
  Então o arquivo tem todas as contas do mês

Cenário: mês sem contas
  Dado que o mês exibido não tem contas
  Então o botão "Exportar CSV" está desabilitado
```
