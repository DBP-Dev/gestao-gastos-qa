import type { Bill, BillStatus, Today } from '../types'
import { getBillStatus } from './dates'

/** Filtro de situação da lista de contas (US-102). */
export type StatusFilter = 'all' | 'pending' | 'paid' | 'late'

export const STATUS_FILTERS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendentes' },
  { value: 'paid', label: 'Pagas' },
  { value: 'late', label: 'Atrasadas' },
]

/** Prepara um texto para comparação na busca (US-101). */
export function normalizeSearchText(text: string): string {
  return text.toLowerCase().trim()
}

/** A conta aparece na busca quando o nome contém o texto digitado. */
export function matchesSearch(bill: Bill, query: string): boolean {
  const normalizedQuery = normalizeSearchText(query)
  if (!normalizedQuery) return true
  return normalizeSearchText(bill.name).includes(normalizedQuery)
}

export function matchesStatus(status: BillStatus, filter: StatusFilter): boolean {
  if (filter === 'all') return true
  return status === filter
}

/** Contas que passam pela busca e pelo filtro de situação, na ordem recebida. */
export function filterBills(
  bills: Bill[],
  query: string,
  filter: StatusFilter,
  today: Today,
): Bill[] {
  return bills.filter(
    (bill) => matchesSearch(bill, query) && matchesStatus(getBillStatus(bill, today), filter),
  )
}

/** Quantidade de contas em cada filtro, já considerando a busca digitada. */
export function countByFilter(
  bills: Bill[],
  query: string,
  today: Today,
): Record<StatusFilter, number> {
  const counts: Record<StatusFilter, number> = { all: 0, pending: 0, paid: 0, late: 0 }
  for (const filter of STATUS_FILTERS) {
    counts[filter.value] = filterBills(bills, query, filter.value, today).length
  }
  return counts
}
