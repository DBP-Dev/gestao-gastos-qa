# Casos de teste: US-104 (Limitar o valor de uma conta a R$ 1 milhão)

**Ambiente:** develop @ 68721c9, Microsoft Edge 157.0.4341.60 (Compilação oficial) (64 bits), Windows 11.

## CT-104-01 — Criar conta com valor imediatamente abaixo do limite

**Pré-condição:**

- A área "Minhas contas" deve estar disponível.
- O formulário de criação de contas deve estar acessível.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Iniciar a criação de uma conta.
4. Preencher os campos obrigatórios.
5. Informar o valor de R$ 999.999,99.
6. Salvar a conta.
7. Verificar se a conta foi cadastrada.

**Dados de teste:**

- Nome: Conta de teste.
- Valor: R$ 999.999,99.
- Vencimento: dia 20.

**Resultado esperado:**

A conta deve ser salva normalmente, pois o valor informado está abaixo do limite máximo de R$ 1.000.000,00.

**Resultado obtido:**

A conta é salva normalmente, pois o valor informado está abaixo do limite máximo de R$ 1.000.000,00.

**Situação:** Passou.

**Evidência:**

[Criação conta](../evidencias/CT-104-01.mp4)

---

## CT-104-02 — Criar conta com valor exatamente igual ao limite

**Pré-condição:**

- A área "Minhas contas" deve estar disponível.
- O formulário de criação de contas deve estar acessível.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Iniciar a criação de uma conta.
4. Preencher os campos obrigatórios.
5. Informar o valor de R$ 1.000.000,00.
6. Salvar a conta.
7. Verificar se a conta foi cadastrada.

**Dados de teste:**

- Nome: Conta de teste.
- Valor: R$ 1.000.000,00.
- Vencimento: dia 20.

**Resultado esperado:**

A conta deve ser salva normalmente, pois o valor informado corresponde ao limite máximo permitido de R$ 1.000.000,00.

**Resultado obtido:**

A conta é salva normalmente, pois o valor informado corresponde ao limite máximo permitido de R$ 1.000.000,00.

**Situação:** Passou.

**Evidência:**

[Criação conta](../evidencias/CT-104-02.mp4)

---

## CT-104-03 — Impedir a criação de conta com valor acima do limite

**Pré-condição:**

- A área "Minhas contas" deve estar disponível.
- O formulário de criação de contas deve estar acessível.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Iniciar a criação de uma conta.
4. Preencher os campos obrigatórios.
5. Informar o valor de R$ 1.000.000,01.
6. Tentar salvar a conta.
7. Verificar a mensagem apresentada.
8. Verificar se a conta foi cadastrada.

**Dados de teste:**

- Nome: Conta de teste.
- Valor: R$ 1.000.000,01.
- Vencimento: dia 20.

**Resultado esperado:**

- A mensagem "O valor máximo de uma conta é R$ 1.000.000,00." deve ser exibida.
- A conta não deve ser salva.

**Resultado obtido:**

- Ao informar R$ 1.000.000,01, nenhuma mensagem é exibida e a conta é salva.
- Testes adicionais para encontrar o limite efetivo:

| Valor | Resultado |
| --- | --- |
| R$ 1.000.000,01 | Aceito (conta salva) |
| R$ 1.000.000,02 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.000,03 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.001,00 | Rejeitado, com a mensagem de valor máximo |

- O limite efetivo é R$ 1.000.000,01, um centavo acima do definido na US-104.

**Situação:** Falhou — ver [BUG-005](../bugs/BUG-005.md)

**Evidência:**

[Criação conta](../evidencias/CT-104-03.mp4)

[Descobrindo limite](../evidencias/CT-104-03b.mp4)

---

## CT-104-04 — Impedir a criação de conta com valor muito acima do limite

**Pré-condição:**

- A área "Minhas contas" deve estar disponível.
- O formulário de criação de contas deve estar acessível.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Iniciar a criação de uma conta.
4. Preencher os campos obrigatórios.
5. Informar o valor de R$ 2.000.000,00.
6. Tentar salvar a conta.
7. Verificar a mensagem apresentada.
8. Verificar se a conta foi cadastrada.

**Dados de teste:**

- Nome: Conta de teste.
- Valor: R$ 2.000.000,00.
- Vencimento: dia 20.

**Resultado esperado:**

- A mensagem "O valor máximo de uma conta é R$ 1.000.000,00." deve ser exibida.
- A conta não deve ser salva.

**Resultado obtido:**

- A mensagem "O valor máximo de uma conta é R$ 1.000.000,00." é exibida.
- A conta não foi salva.

**Situação:** Passou.

**Evidência:**

[Criação conta](../evidencias/CT-104-04.mp4)

---

## CT-104-05 — Impedir a edição de uma conta para um valor acima do limite

**Pré-condição:**

- A área "Minhas contas" deve possuir uma conta cadastrada com valor de R$ 150,00.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Localizar a conta cadastrada de R$ 150,00.
4. Abrir a edição da conta.
5. Alterar o valor para R$ 1.500.000,00.
6. Tentar salvar as alterações.
7. Verificar a mensagem apresentada.
8. Verificar se o valor original da conta foi preservado.

**Dados de teste:**

- Conta: Conta de teste.
- Valor original: R$ 150,00.
- Novo valor: R$ 1.500.000,00.

**Resultado esperado:**

- A mensagem "O valor máximo de uma conta é R$ 1.000.000,00." deve ser exibida.
- A alteração não deve ser salva.
- A conta deve continuar com o valor original de R$ 150,00.

**Resultado obtido:**

- A mensagem "O valor máximo de uma conta é R$ 1.000.000,00." é exibida.
- A alteração não é salva.
- A conta continua com o valor original de R$ 150,00.

**Situação:** Passou.

**Evidência:**

[Edição conta para R$ 1.500.000,00](../evidencias/CT-104-05.mp4)

---

## CT-104-06 — Verificar o limite de valor na criação de contas em diferentes áreas

**Pré-condição:**

- As áreas "Minhas contas" e "Gastos da casa" devem estar disponíveis.
- Os formulários de criação de contas devem estar acessíveis.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Iniciar a criação de uma conta.
4. Informar o valor de R$ 1.000.000,01.
5. Tentar salvar a conta.
6. Verificar se a mensagem do limite é exibida.
7. Cancelar a criação.
8. Expandir "Gastos da casa".
9. Iniciar a criação de uma conta.
10. Informar o valor de R$ 1.000.000,01.
11. Tentar salvar a conta.
12. Verificar se a mensagem do limite é exibida.

**Dados de teste:**

- Área 1: Minhas contas.
- Área 2: Gastos da casa.
- Valor informado: R$ 1.000.000,01.

**Resultado esperado:**

Nas duas áreas, a mensagem "O valor máximo de uma conta é R$ 1.000.000,00." deve ser exibida e as contas não devem ser salvas.

**Resultado obtido:**

- Ao informar R$ 1.000.000,01 em "Minhas contas", nenhuma mensagem é exibida e a conta é salva, o que impossibilita o passo 7. O comportamento se repete na área "Gastos da casa".
- Testes adicionais para encontrar o limite efetivo:

| Valor | Resultado |
| --- | --- |
| R$ 1.000.000,01 | Aceito (conta salva) |
| R$ 1.000.000,02 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.000,03 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.001,00 | Rejeitado, com a mensagem de valor máximo |

- O limite efetivo é R$ 1.000.000,01, um centavo acima do definido na US-104.

**Situação:** Falhou — ver [BUG-005](../bugs/BUG-005.md)

**Evidência:**

[Criação conta em "Minhas contas"](../evidencias/CT-104-06a.mp4)

[Criação conta em "Gastos da casa"](../evidencias/CT-104-06b.mp4)

[Descobrindo limite](../evidencias/CT-104-06c.mp4)

---

## CT-104-07 — Verificar o limite de valor na criação de contas recorrentes

**Pré-condição:**

- A área "Minhas contas" deve estar disponível.
- A criação de contas recorrentes deve estar habilitada.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Iniciar a criação de uma conta recorrente.
4. Preencher os campos obrigatórios.
5. Informar o valor de R$ 1.000.000,01.
6. Tentar salvar a conta.
7. Verificar a mensagem apresentada.
8. Verificar se a conta recorrente foi criada.

**Dados de teste:**

- Nome: Conta de teste recorrente.
- Tipo: Recorrente.
- Valor: R$ 1.000.000,01.

**Resultado esperado:**

- A mensagem "O valor máximo de uma conta é R$ 1.000.000,00." deve ser exibida.
- A conta recorrente não deve ser criada.

**Resultado obtido:**

- Ao selecionar conta como recorrente e informar o valor de R$ 1.000.000,01, nenhuma mensagem é exibida e a conta é salva.
- Testes adicionais para encontrar o limite efetivo:

| Valor | Resultado |
| --- | --- |
| R$ 1.000.000,01 | Aceito (conta salva) |
| R$ 1.000.000,02 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.000,03 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.001,00 | Rejeitado, com a mensagem de valor máximo |

- O limite efetivo é R$ 1.000.000,01, um centavo acima do definido na US-104.

**Situação:** Falhou — ver [BUG-005](../bugs/BUG-005.md)

**Evidência:**

[Criação conta recorrente](../evidencias/CT-104-07a.mp4)

[Descobrindo limite](../evidencias/CT-104-07b.mp4)

---

## CT-104-08 — Verificar o limite de valor na criação de contas parceladas

**Pré-condição:**

- A área "Minhas contas" deve estar disponível.
- A criação de contas parceladas deve estar habilitada.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Iniciar a criação de uma conta parcelada.
4. Preencher os campos obrigatórios.
5. Informar o valor de R$ 1.000.000,01 para cada parcela.
6. Informar a quantidade de parcelas.
7. Tentar salvar a conta.
8. Verificar a mensagem apresentada.
9. Verificar se a conta parcelada foi criada.

**Dados de teste:**

- Nome: Conta parcelada de teste.
- Tipo: Parcelada.
- Valor de cada parcela: R$ 1.000.000,01.
- Quantidade de parcelas: 2.

**Resultado esperado:**

- A mensagem "O valor máximo de uma conta é R$ 1.000.000,00." deve ser exibida.
- A conta parcelada não deve ser criada.

**Resultado obtido:**

- Ao selecionar conta como parcelada e informar o valor de R$ 1.000.000,01, nenhuma mensagem é exibida e a conta é salva.
- Testes adicionais para encontrar o limite efetivo:

| Valor | Resultado |
| --- | --- |
| R$ 1.000.000,01 | Aceito (conta salva) |
| R$ 1.000.000,02 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.000,03 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.001,00 | Rejeitado, com a mensagem de valor máximo |

- O limite efetivo é R$ 1.000.000,01, um centavo acima do definido na US-104.

**Situação:** Falhou — ver [BUG-005](../bugs/BUG-005.md)

**Evidência:**

[Criação conta parcelada](../evidencias/CT-104-08a.mp4)

[Descobrindo limite](../evidencias/CT-104-08b.mp4)

---

## CT-104-09 — Verificar o limite de valor na edição de contas recorrentes e parceladas

**Pré-condição:**

- A área "Minhas contas" deve possuir uma conta recorrente e uma conta parcelada cadastradas com valores abaixo do limite.
- A edição dessas contas deve estar disponível.

**Passos:**

1. Acessar a aplicação.
2. Expandir "Minhas contas".
3. Localizar a conta recorrente.
4. Abrir a edição da conta.
5. Alterar o valor para R$ 1.000.000,01.
6. Tentar salvar e verificar a mensagem apresentada.
7. Verificar se o valor original foi preservado.
8. Repetir o procedimento com a conta parcelada, alterando o valor de cada parcela para R$ 1.000.000,01.
9. Verificar a mensagem apresentada.
10. Verificar se o valor original de cada parcela foi preservado.

**Dados de teste:**

- Conta 1: Recorrente — valor original R$ 100,00.
- Conta 2: Parcelada — valor original de cada parcela R$ 100,00.
- Novo valor: R$ 1.000.000,01.

**Resultado esperado:**

- A mensagem "O valor máximo de uma conta é R$ 1.000.000,00." deve ser exibida ao tentar salvar valores acima do limite.
- As alterações não devem ser salvas.
- Os valores originais das contas devem ser preservados.

**Resultado obtido:**

- Ao editar as contas "Parcelada" e "Recorrente" e informar o novo valor de R$ 1.000.000,01, nenhuma mensagem é exibida e as contas são salvas.
- Testes adicionais para encontrar o limite efetivo:

| Valor | Resultado |
| --- | --- |
| R$ 1.000.000,01 | Aceito (conta salva) |
| R$ 1.000.000,02 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.000,03 | Rejeitado, com a mensagem de valor máximo |
| R$ 1.000.001,00 | Rejeitado, com a mensagem de valor máximo |

- O limite efetivo é R$ 1.000.000,01, um centavo acima do definido na US-104.

**Situação:** Falhou — ver [BUG-005](../bugs/BUG-005.md)

**Evidência:**

[Edição de conta parcelada e recorrente](../evidencias/CT-104-09a.mp4)

[Descobrindo limite conta parcelada](../evidencias/CT-104-09c.mp4)

[Descobrindo limite conta recorrente](../evidencias/CT-104-09d.mp4)

---

## CT-104-10 — Restaurar backup antigo com conta acima do limite

**Pré-condição:**

- Deve existir um backup antigo contendo pelo menos uma conta com valor superior a R$ 1.000.000,00.
- A funcionalidade de restauração de backup deve estar disponível.
- Backup gerado pela aplicação e editado manualmente no JSON para simular um backup antigo com uma conta de R$ 1.500.000,00.

**Passos:**

1. Acessar a aplicação.
2. Abrir a funcionalidade de restauração de backup.
3. Selecionar o arquivo de backup antigo.
4. Iniciar a restauração.
5. Verificar se a restauração é concluída.
6. Conferir se a conta com valor superior a R$ 1.000.000,00 foi restaurada.
7. Verificar se o valor original da conta foi preservado.

**Dados de teste:**

- Backup: gestao-de-gastos-backup-2026-11-18-1021.
- Conta: Conta de teste backup.
- Valor registrado no backup: R$ 1.500.000,00.

**Resultado esperado:**

- O backup deve ser restaurado normalmente.
- A conta com valor superior a R$ 1.000.000,00 deve ser restaurada.
- O valor original registrado no backup deve ser preservado.

**Resultado obtido:**

- O backup é restaurado normalmente.
- A conta com valor superior a R$ 1.000.000,00 é restaurada.
- O valor original registrado no backup é preservado.

**Situação:** Passou.

**Evidência:**

[Restauração via backup de conta superior a R$ 1.000.000,00](../evidencias/CT-104-10.mp4)
