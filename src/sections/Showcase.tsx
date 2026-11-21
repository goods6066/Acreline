import { ArrowUpRight, BedDouble, Bath, Ruler } from 'lucide-react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { deals } from '../content'
import { cx } from '../lib/cx'

const toneClass: Record<string, string> = {
  accent: 'bg-accent/15 text-accent',
  violet: 'bg-accent-3/15 text-accent-3',
  teal: 'bg-accent-2/15 text-accent-2',
}

export function Showcase() {
  return (
    <section id="deals" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={deals.eyebrow} title={deals.title} description={deals.description} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deals.items.map((deal, i) => (
            <Reveal key={deal.address} delay={(i % 3) * 0.07} className="h-full">
              <article className="depth relative flex h-full flex-col rounded-card bg-surface p-5 shadow-glow transition-colors duration-300 hover:[--depth-edge:rgb(255_122_69/0.35)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className={cx('inline-flex rounded-[7px] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide', toneClass[deal.tone])}>
                      {deal.tag}
                    </span>
                    <h3 className="mt-3 truncate text-[16px] font-semibold tracking-tight">{deal.address}</h3>
                    <p className="truncate text-[13px] text-muted">{deal.city}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[20px] font-semibold leading-none tracking-[-0.02em] tabular-nums">${deal.price.toLocaleString()}</p>
                    <p className="mt-1 text-[11px] text-faint">asking</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 border-y border-line py-3 text-[12px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="size-3.5" />
                    {deal.beds} bd
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Bath className="size-3.5" />
                    {deal.baths} ba
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="size-3.5" />
                    {deal.sqft.toLocaleString()} sqft
                  </span>
                </div>

                <dl className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ['Est. rent', `$${deal.rent.toLocaleString()}`],
                    ['Cash flow', `$${deal.cashFlow.toLocaleString()}`],
                    ['DSCR', deal.dscr.toFixed(2)],
                  ].map(([label, value], index) => (
                    <div key={label}>
                      <dt className="text-[11px] text-faint">{label}</dt>
                      <dd className={cx('mt-0.5 text-[14px] font-medium tabular-nums', index === 1 ? 'text-accent-2' : 'text-fg')}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <span className="text-[11px] text-faint">Est. value ${deal.value.toLocaleString()}</span>
                  <span className="inline-flex items-center gap-1 text-[12px] font-medium text-fg">
                    View deal
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <p className="text-center text-[12px] text-faint">{deals.note}</p>
        </Reveal>
      </Container>
    </section>
  )
}
