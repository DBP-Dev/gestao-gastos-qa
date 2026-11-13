import { useId, useState, type ReactNode } from 'react'
import type { Bill, BillSeries, Member, Today } from '../types'
import { effectiveDueDay, getBillStatus } from '../utils/dates'
import { isProjectedBill, seriesLabelFor } from '../utils/series'
import { BillCard } from './BillCard'
import { countByFilter, filterBills, STATUS_FILTERS, type StatusFilter } from '../utils/billFilters'

interface BillListProps {
  /** Contas do mês: as gravadas e as previstas das séries. */
  bills: Bill[]
  /** Séries da área, para os rótulos "Recorrente" e "Parcela 3/10". */
  series?: BillSeries[]
  members: Member[]
  today: Today
  monthName: string
  previousMonthName: string
  /** O mês anterior tem contas comuns para copiar. */
  canCopyPreviousMonth: boolean
  onAdd: () => void
  onCopyPreviousMonth: () => void
  onTogglePaid: (bill: Bill) => void
  onEdit: (bill: Bill) => void
  onDelete: (bill: Bill) => void
  /** Aviso opcional exibido logo abaixo do cabeçalho da lista. */
  notice?: ReactNode
  /** Ações extras exibidas à esquerda de "Adicionar conta" (ex.: "Excluir área"). */
  actions?: ReactNode
}

export function BillList({
  bills,
  series = [],
  members,
  today,
  monthName,
  previousMonthName,
  canCopyPreviousMonth,
  onAdd,
  onCopyPreviousMonth,
  onTogglePaid,
  onEdit,
  onDelete,
  notice,
  actions,
}: BillListProps) {
  // Id único: pode haver uma lista por área na mesma página.
  const titleId = useId()
  const searchId = useId()
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const sortedBills = [...bills].sort(
    (a, b) => effectiveDueDay(a) - effectiveDueDay(b) || a.name.localeCompare(b.name),
  )
  const addButton = (
    <button type="button" className="button button--primary add-button" onClick={onAdd}>
      ＋ Adicionar conta
    </button>
  )
  // Copiar o mês anterior traz só contas comuns: o botão aparece quando o mês ainda não
  // tem nenhuma, mesmo que já existam contas de séries (gravadas ou previstas).
  const hasCommonBills = bills.some((bill) => bill.seriesId === undefined)
  const copyButton = (
    <button type="button" className="button button--ghost" onClick={onCopyPreviousMonth}>
      Copiar contas de {previousMonthName}
    </button>
  )
  const visibleBills = filterBills(sortedBills, query, statusFilter, today)
  const counts = countByFilter(sortedBills, query, today)
  const hasActiveFilter = query.trim() !== '' || statusFilter !== 'all'
  function clearFilters() {
    setQuery('')
    setStatusFilter('all')
  }
  const showCopyInHeader = canCopyPreviousMonth && !hasCommonBills && sortedBills.length > 0

  return (
    <section className="section" aria-labelledby={titleId}>
      <div className="section__header section__header--with-action">
        <div>
          <h4 id={titleId} className="section__title">
            Contas de {monthName}
          </h4>
          <p className="section__hint">Organizadas pela data de vencimento</p>
        </div>
        {actions || showCopyInHeader ? (
          <div className="section__actions">
            {actions}
            {showCopyInHeader && copyButton}
            {addButton}
          </div>
        ) : (
          addButton
        )}
      </div>

      {notice}

      {sortedBills.length === 0 ? (
        <div className="empty-state">
          <span className="empty-state__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
              <path d="M9 8h6M9 12h6" />
            </svg>
          </span>
          <h5>Nenhuma conta em {monthName} ainda</h5>
          <p>Adicione a primeira conta do mês para começar a organizar.</p>
          <div className="empty-state__actions">
            <button type="button" className="button button--primary" onClick={onAdd}>
              ＋ Adicionar conta
            </button>
            {canCopyPreviousMonth && copyButton}
          </div>
        </div>
      ) : (
        <>
          <div className="bill-toolbar">
            <div className="bill-toolbar__search">
              <label htmlFor={searchId} className="visually-hidden">
                Buscar conta pelo nome
              </label>
              <input
                id={searchId}
                type="search"
                className="input"
                placeholder="Buscar conta pelo nome"
                value={query}
                maxLength={50}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <div className="bill-toolbar__filters" role="group" aria-label="Filtrar por situação">
              {STATUS_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={`filter-chip${statusFilter === filter.value ? ' filter-chip--active' : ''}`}
                  aria-pressed={statusFilter === filter.value}
                  onClick={() => setStatusFilter(filter.value)}
                >
                  {filter.label} ({counts[filter.value]})
                </button>
              ))}
            </div>
          </div>
          {visibleBills.length === 0 ? (
            <div className="empty-state empty-state--compact">
              <h5>Nenhuma conta encontrada</h5>
              <p>
                {query.trim()
                  ? `Nenhuma conta de ${monthName} corresponde a “${query.trim()}” neste filtro.`
                  : `Nenhuma conta de ${monthName} neste filtro.`}
              </p>
              {hasActiveFilter && (
                <div className="empty-state__actions">
                  <button type="button" className="button button--ghost" onClick={clearFilters}>
                    Limpar busca e filtro
                  </button>
                </div>
              )}
            </div>
          ) : (
        <ul className="bill-list">
          {visibleBills.map((bill) => (
            <li key={bill.id}>
              <BillCard
                bill={bill}
                status={getBillStatus(bill, today)}
                members={members}
                projected={isProjectedBill(bill)}
                seriesLabel={seriesLabelFor(bill, series)}
                onTogglePaid={() => onTogglePaid(bill)}
                onEdit={() => onEdit(bill)}
                onDelete={() => onDelete(bill)}
              />
            </li>
          ))}
        </ul>
          )}
        </>
      )}
    </section>
  )
}
