import { describe, expect, it } from 'vitest'
import type { Bill } from '../types'
import { countByFilter, filterBills, matchesSearch } from './billFilters'

function bill(partial: Partial<Bill>): Bill {
  return {
    id: partial.name ?? 'conta',
    name: 'Conta',
    month: '2026-11',
    totalCents: 10000,
    dueDay: 10,
    shares: [],
    paid: false,
    ...partial,
  }
}

const today = { month: '2026-11', day: 15 }

describe('matchesSearch', () => {
  it('encontra pelo trecho do nome, sem diferenciar maiúsculas', () => {
    expect(matchesSearch(bill({ name: 'Internet' }), 'NET')).toBe(true)
    expect(matchesSearch(bill({ name: 'Internet' }), 'luz')).toBe(false)
  })

  it('não diferencia acentos, nem no nome nem no texto digitado (BUG-001)', () => {
    expect(matchesSearch(bill({ name: 'Água' }), 'agua')).toBe(true)
    expect(matchesSearch(bill({ name: 'Condomínio' }), 'condominio')).toBe(true)
    expect(matchesSearch(bill({ name: 'Agua' }), 'Água')).toBe(true)
    expect(matchesSearch(bill({ name: 'Manutenção' }), 'MANUTENCAO')).toBe(true)
    expect(matchesSearch(bill({ name: 'Água' }), 'gua')).toBe(true)
    expect(matchesSearch(bill({ name: 'Água' }), 'luz')).toBe(false)
  })

  it('busca vazia ou só com espaços mostra tudo', () => {
    expect(matchesSearch(bill({ name: 'Internet' }), '   ')).toBe(true)
  })
})

describe('filterBills', () => {
  const bills = [
    bill({ name: 'Aluguel', dueDay: 5, paid: true }),
    bill({ name: 'Internet', dueDay: 20 }),
  ]

  it('filtra pagas', () => {
    expect(filterBills(bills, '', 'paid', today).map((b) => b.name)).toEqual(['Aluguel'])
  })

  it('filtra pendentes', () => {
    expect(filterBills(bills, '', 'pending', today).map((b) => b.name)).toEqual(['Internet'])
  })

  it('pendentes inclui as atrasadas, como o "Falta pagar" (BUG-002)', () => {
    const contas = [
      bill({ name: 'Aluguel', dueDay: 5, paid: true }),
      bill({ name: 'Luz', dueDay: 10 }),
      bill({ name: 'Internet', dueDay: 20 }),
    ]
    expect(filterBills(contas, '', 'pending', today).map((b) => b.name)).toEqual(['Luz', 'Internet'])
    expect(filterBills(contas, '', 'late', today).map((b) => b.name)).toEqual(['Luz'])
    expect(countByFilter(contas, '', today)).toEqual({ all: 3, pending: 2, paid: 1, late: 1 })
  })

  it('combina busca e filtro', () => {
    expect(filterBills(bills, 'alu', 'pending', today)).toEqual([])
  })
})

describe('countByFilter', () => {
  it('conta as contas de cada filtro', () => {
    const bills = [bill({ name: 'A', paid: true }), bill({ name: 'B', dueDay: 20 })]
    expect(countByFilter(bills, '', today)).toMatchObject({ all: 2, paid: 1 })
  })
})
