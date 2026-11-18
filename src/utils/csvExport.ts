import type { Bill, BillStatus, MonthKey, Today } from '../types'
import { effectiveDueDay, getBillStatus } from './dates'
import { centsToInput } from './money'

const STATUS_LABEL: Record<BillStatus, string> = {
  paid: 'Paga',
  pending: 'Pendente',
  late: 'Atrasada',
}

const HEADER = ['Nome', 'Vencimento', 'Valor', 'Situação']

/** Coloca o campo entre aspas quando ele tem ponto e vírgula, aspas ou quebra de linha. */
function escapeField(value: string): string {
  if (/[;"\r\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`
  return value
}

/**
 * "2026-11" e dia 5 → "05/11/2026". Recebe o dia já ajustado ao tamanho do mês
 * (effectiveDueDay), o mesmo que a tela mostra: dia 31 em novembro vira 30/11.
 */
function formatDueDate(month: MonthKey, day: number): string {
  const [year, monthNumber] = month.split('-')
  return `${String(day).padStart(2, '0')}/${monthNumber}/${year}`
}

/** Conteúdo do CSV das contas do mês (US-103), com separador ";" para o Excel em português. */
export function buildBillsCsv(bills: Bill[], today: Today): string {
  const lines = [HEADER.join(';')]
  for (const bill of bills) {
    lines.push(
      [
        escapeField(bill.name),
        formatDueDate(bill.month, effectiveDueDay(bill)),
        centsToInput(bill.totalCents),
        STATUS_LABEL[getBillStatus(bill, today)],
      ].join(';'),
    )
  }
  return lines.join('\r\n')
}

/** "Gastos da casa" → "gastos-da-casa" */
export function slugify(text: string): string {
  return (
    text
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'area'
  )
}

export function csvFileName(areaName: string, month: MonthKey): string {
  return `gastos-${slugify(areaName)}-${month}.csv`
}

/** Baixa o CSV no navegador. */
export function downloadCsv(fileName: string, content: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
