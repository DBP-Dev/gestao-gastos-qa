# US-101: Buscar conta pelo nome

**Como** pessoa com muitas contas no mês,
**quero** buscar uma conta digitando parte do nome,
**para** encontrá-la sem rolar a lista inteira.

## Regras

- O campo "Buscar conta pelo nome" fica acima da lista de contas de cada área.
- Cada área tem a sua própria busca.
- A busca procura o texto em **qualquer parte do nome** da conta.
- Não diferencia **maiúsculas de minúsculas** nem **acentos**: "agua", "ÁGUA" e "Água" são
  a mesma busca.
- Espaços no começo e no fim do texto são ignorados.
- O campo aceita até 50 caracteres.
- A busca não muda os resumos do mês: os totais do topo continuam iguais.

## Critérios de aceite

```gherkin
Cenário: busca por parte do nome
  Dado que o mês tem as contas "Internet" e "Água"
  Quando eu digito "net" na busca
  Então vejo só a conta "Internet"

Cenário: busca sem diferenciar maiúsculas
  Quando eu digito "INTERNET" na busca
  Então vejo a conta "Internet"

Cenário: busca sem diferenciar acentos
  Dado que o mês tem as contas "Água" e "Condomínio"
  Quando eu digito "agua" na busca
  Então vejo a conta "Água"
  E quando eu digito "condominio"
  Então vejo a conta "Condomínio"

Cenário: busca sem resultado
  Quando eu digito "xyz" na busca
  Então vejo a mensagem "Nenhuma conta encontrada"
  E vejo o botão "Limpar busca e filtro"
  E ao clicar nele a lista completa volta

Cenário: mês sem contas
  Dado que o mês exibido não tem contas
  Então o campo de busca não aparece
```

## Fora do escopo

- Buscar pelo nome da pessoa ou pelo valor.
- Buscar em todos os meses de uma vez.
