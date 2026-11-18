import { describe, expect, it } from 'vitest'
import type { Bill } from '../types'
import { buildBillsCsv, csvFileName, slugify } from './csvExport'

const today = { month: '2026-11', day: 15 }

function bill(partial: Partial<Bill>): Bill {
  return {
    id: 'x',
    name: 'Conta',
    month: '2026-11',
    totalCents: 10000,
    dueDay: 10,
    shares: [],
    paid: false,
    ...partial,
  }
}

describe('buildBillsCsv', () => {
  it('gera cabeçalho e uma linha por conta', () => {
    const csv = buildBillsCsv(
      [bill({ name: 'Aluguel', totalCents: 150000, dueDay: 5, paid: true })],
      today,
    )
    expect(csv.split('\r\n')).toEqual([
      'Nome;Vencimento;Valor;Situação',
      'Aluguel;05/11/2026;1500,00;Paga',
    ])
  })

  it('ajusta o vencimento ao último dia quando o dia não existe no mês (BUG-003)', () => {
    const vencimento = (partial: Partial<Bill>) =>
      buildBillsCsv([bill({ name: 'Cartão', ...partial })], today).split('\r\n')[1].split(';')[1]
    expect(vencimento({ month: '2026-11', dueDay: 31 })).toBe('30/11/2026')
    expect(vencimento({ month: '2027-02', dueDay: 31 })).toBe('28/02/2027')
    expect(vencimento({ month: '2028-02', dueDay: 30 })).toBe('29/02/2028')
    expect(vencimento({ month: '2026-12', dueDay: 31 })).toBe('31/12/2026')
  })

  it('coloca entre aspas nomes com ponto e vírgula', () => {
    const csv = buildBillsCsv([bill({ name: 'Luz; gás' })], today)
    expect(csv.split('\r\n')[1].startsWith('"Luz; gás";')).toBe(true)
  })
})

describe('csvFileName', () => {
  it('usa a área sem acentos e o mês', () => {
    expect(slugify('Minhas contas')).toBe('minhas-contas')
    expect(csvFileName('Gastos da casa', '2026-11')).toBe('gastos-gastos-da-casa-2026-11.csv')
  })
})
