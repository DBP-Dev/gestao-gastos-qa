# Como o time trabalha

## Scrum em sprints de 2 semanas

| Cerimônia | Quando | Papel do QA |
| --- | --- | --- |
| Planejamento | 1º dia da sprint | Questiona critérios de aceite e estima o esforço de teste |
| Refinamento | Meio da sprint | Revisa as histórias da próxima sprint antes de serem aceitas |
| Daily | Todo dia, 15 min | Conta o que testou, bugs abertos e bloqueios |
| Review | Último dia | Apresenta o relatório de testes e o parecer go / no-go |
| Retrospectiva | Último dia | Sugere melhorias no processo |

## Fluxo de uma história no quadro

```
A fazer → Em desenvolvimento → Pronto para QA → Em teste → Aprovado → Em produção
                                        ↑              │
                                        └── Reprovado ─┘  (bug bloqueante ou crítico aberto)
```

- **Pronto para QA**: o código está na `develop`, os testes unitários passam e o dev
  escreveu a nota de entrega.
- **Reprovado**: volta para o dev com os bugs vinculados. Após a correção, o QA reteste.
- **Aprovado**: todos os critérios de aceite passaram e não há bug crítico ou alto aberto.

## Definition of Ready (para a história entrar na sprint)

- Tem descrição no formato *Como… quero… para…*
- Tem critérios de aceite testáveis, escritos em Dado / Quando / Então
- Dúvidas de regra de negócio já foram respondidas pela PO

## Definition of Done (para a história ir para produção)

- Critérios de aceite validados pelo QA, com evidência
- Testes unitários novos passando (`npm test`)
- Sem bug **crítico** ou **alto** aberto
- Regressão básica da versão executada

## Branches e ambientes

| Branch | Ambiente | Quem usa |
| --- | --- | --- |
| `main` | Produção (versão publicada, com tags `v1.0.0`, `v1.1.0`…) | Clientes |
| `develop` | Homologação: onde o QA testa | Time |
| `feature/US-xxx-…` | Desenvolvimento de uma história | Dev |
| `fix/BUG-xxx-…` | Correção de um bug reportado pelo QA | Dev |

Todo bug é aberto como **Issue** no GitHub. A correção chega por **Pull Request** para a
`develop`, citando a issue (`Corrige #12`). O QA retesta e fecha a issue.
