# Plano de teste: Sprint 1

## Informações gerais

- **Versão:** 1.1.0
- **Responsável:** Diego Bianchini (QA)
- **Período de testes:** 13/11/2026 a 20/11/2026 (sprint de 09/11 a 20/11/2026)
- **Ambiente:** branch `develop`
- **Commit:** `68721c9`

## 1. Objetivo

Validar manualmente as funcionalidades desenvolvidas na Sprint 1, verificando se atendem às regras de negócio e aos critérios de aceite definidos nas histórias de usuário.

Identificar, documentar e encaminhar os defeitos encontrados durante os testes, garantindo que as correções sejam retestadas antes da conclusão da sprint.

## 2. Escopo

### Dentro do escopo

| História | O que será testado |
|---|---|
| US-101 | Busca de contas pelo nome, incluindo busca parcial, diferenciação de maiúsculas e minúsculas, acentos, espaços, limite de caracteres, ausência de resultados, independência entre áreas e preservação dos resumos financeiros. |
| US-102 | Filtros por situação: Todas, Pendentes, Pagas e Atrasadas; contadores, combinação com busca e atualização após marcar uma conta como paga. |
| US-103 | Exportação das contas do mês para CSV, incluindo conteúdo, nome do arquivo, separador, formatação de valores e datas, caracteres especiais e compatibilidade com o Excel. |
| US-104 | Limite de R$ 1.000.000,00 no valor das contas, incluindo criação, edição, diferentes tipos de conta e restauração de backups. |
| Regressão da 1.0 | Funcionalidades já existentes que podem ser afetadas pelas mudanças (ver seção 3). |
| Celular | Busca, filtro e botão "Exportar CSV" na visualização de celular do DevTools (375 px de largura). |

### Fora do escopo

- Testes automatizados de unidade, pois são responsabilidade do desenvolvedor.
- Funcionalidades que não fazem parte das histórias selecionadas para a Sprint 1, exceto as incluídas na regressão.
- Testes em aparelhos de celular reais; nesta sprint o celular é verificado só pela visualização do DevTools.
- Testes de desempenho e segurança, que não estão previstos no escopo desta sprint.

## 3. Estratégia de testes

**Tipos de teste:**
- Testes funcionais manuais.
- Testes de valor-limite.
- Testes exploratórios.
- Testes de regressão.
- Testes de compatibilidade entre navegadores.

**Técnicas utilizadas:**
- Partição de equivalência.
- Análise de valor-limite.
- Verificação dos critérios de aceite.
- Comparação entre resultado esperado e resultado obtido.

**Prioridade de execução:**
1. O que o desenvolvedor não testou, segundo a nota de entrega: CSV aberto no Excel, Firefox e celular.
2. Critérios de aceite de cada história, em todas as áreas: "Minhas contas", "Gastos da casa" e uma área compartilhada criada para o teste.
3. Regressão da versão 1.0.
4. Testes exploratórios.

**Regressão da versão 1.0:**
- Criar, editar e excluir uma conta.
- Marcar e desmarcar uma conta como paga.
- Divisão igual e com valores personalizados entre as pessoas.
- Conta recorrente e conta parcelada.
- Copiar as contas do mês anterior.
- Resumos do mês e "Meu painel".
- Backup e restauração dos dados.

**Preparação dos dados de teste:**
- Criar contas com diferentes nomes, valores e situações.
- Criar contas com vencimento antes, no dia e depois da data da execução, porque a situação "atrasada" depende do dia de hoje.
- Preparar valores próximos ao limite de R$ 1.000.000,00.
- Preparar dados que permitam validar a exportação CSV, incluindo nomes com acento.
- Utilizar dados fictícios, sem informações pessoais reais.

## 4. Ambientes e ferramentas

- **Sistema operacional:** Windows 11.
- **Navegador principal:** Microsoft Edge 157.0.4341.60 (64 bits).
- **Compatibilidade:** Google Chrome e Mozilla Firefox (versões registradas na execução).
- **Celular:** visualização de celular do DevTools do Edge.
- **Aplicação:** ambiente local, executado pela branch `develop`.
- **Editor:** Visual Studio Code.
- **Controle de versão:** Git e GitHub.
- **Evidências:** capturas de tela e gravações de execução.
- **Ferramentas adicionais:** Microsoft Excel em português para validar os arquivos CSV.

## 5. Critérios

**Critérios de entrada:**
- Código disponível na branch `develop`.
- Testes unitários do desenvolvedor aprovados.
- Nota de entrega do desenvolvedor disponível.
- Histórias e critérios de aceite documentados.
- Ambiente de teste acessível.

**Critérios de saída:**
- Casos de teste planejados executados ou com justificativa para não execução.
- Resultados registrados.
- Evidências organizadas.
- Bugs identificados documentados e registrados como Issues.
- Correções recebidas submetidas a reteste.
- Regressão realizada nas funcionalidades relacionadas.
- **Nenhum bug de severidade crítica ou alta aberto** (Definition of Done do time).
- Relatório final com recomendação GO ou NO-GO.

**Critérios de suspensão:**
- Aplicação indisponível ou impossibilidade de acessar o ambiente.
- Defeito que impeça a execução de outros testes importantes.
- Dados de teste inválidos ou insuficientes.
- Problemas que comprometam a confiabilidade dos resultados.

## 6. Riscos

| Risco | Impacto | O que fazer |
|---|---|---|
| O desenvolvedor não testou o CSV no Excel, nem no Firefox ou no celular | Defeitos nesses pontos chegariam à produção sem ninguém ter visto | Executar esses testes primeiro. |
| A situação "atrasada" depende da data de hoje | Filtros e CSV podem parecer corretos só porque não havia contas atrasadas | Criar contas com vencimento anterior ao dia da execução. |
| A busca e o filtro ficam num componente usado por todas as áreas | Um defeito pode aparecer só em uma área | Testar em "Minhas contas", em "Gastos da casa" e numa área criada. |
| Incompatibilidade na exportação CSV | Usuário pode não conseguir utilizar o arquivo no Excel | Abrir o arquivo com duplo clique no Excel em português e conferir colunas e acentos. |
| Defeitos em funcionalidades compartilhadas | Podem afetar outras histórias | Executar a regressão da seção 3. |
| Correções entregues próximo ao fim da sprint | Reduz o tempo disponível para reteste | Priorizar os bugs de maior severidade nos retestes. |
| Ambiente de teste indisponível | Impede a execução dos testes | Comunicar o desenvolvedor e aguardar a normalização. |

## 7. Entregas

- Plano de testes da Sprint 1.
- Casos de teste das histórias US-101, US-102, US-103 e US-104.
- Evidências das execuções.
- Bugs documentados e registrados como Issues.
- Resultados dos retestes.
- Registro dos testes de regressão.
- Relatório final de testes com recomendação GO ou NO-GO.
