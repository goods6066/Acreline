import { motion } from 'motion/react'
import { Banknote, Building2, Check, MessageSquare, Sparkles } from 'lucide-react'
import type { ReactElement } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../content'
import { cx } from '../lib/cx'

const visuals: Record<string, () => ReactElement> = {
  scanner: ScannerVisual,
  underwrite: UnderwriteVisual,
  outreach: OutreachVisual,
  funding: FundingVisual,
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={features.eyebrow} title={features.title} description={features.description} />
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.items.map((item, i) => {
            const Visual = visuals[item.key]
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.08} className={cx(item.span === 2 && 'md:col-span-2')}>
                <article className="depth group relative flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-glow transition-colors duration-300 hover:[--depth-edge:rgb(255_236_224/0.22)]">
                  {/* Fixed visual height keeps the dividers aligned across a row; copy determines the rest. */}
                  <div className="relative h-[220px] overflow-hidden">
                    <Visual />
                  </div>
                  <div className="relative border-t border-line px-6 pb-5 pt-4">
                    <h3 className="text-[16px] font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-[14px] leading-snug text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

const dealRows = [
  { address: '1420 Marigold St', tag: 'Tax deed', price: '$4,800', tone: 'text-accent' },
  { address: '318 Gulfstream Pkwy', tag: 'Gov seized', price: '$46,000', tone: 'text-accent-3' },
  { address: '905 Kestrel Ave', tag: 'Probate', price: '$18,500', tone: 'text-accent-2' },
]

function ScannerVisual() {
  return (
    <div className="absolute inset-0 p-6 pb-0">
      <div className="depth relative h-[calc(100%+2px)] overflow-hidden rounded-t-[16px] bg-bg/50 p-3.5">
        <div className="flex items-center gap-2 text-[11px] text-faint">
          <Sparkles className="size-3.5 shrink-0 text-accent" />
          <span className="min-w-0 truncate">Scanning 18 sources</span>
          <span className="ml-auto shrink-0 whitespace-nowrap rounded-[6px] bg-accent/15 px-1.5 py-0.5 text-accent">
            128 matched
          </span>
        </div>
        <ul className="mt-2 flex flex-col gap-1.5">
          {dealRows.map((row, i) => (
            <motion.li
              key={row.address}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="depth relative flex items-center gap-3 rounded-[12px] bg-surface-2/70 px-3 py-1.5"
            >
              <Building2 className="size-3.5 shrink-0 text-faint" />
              <span className="min-w-0 flex-1 truncate text-[12px] text-fg/90">{row.address}</span>
              <span className={cx('shrink-0 text-[10px] max-[379px]:hidden', row.tone)}>{row.tag}</span>
              <span className="w-14 shrink-0 text-right text-[11px] tabular-nums text-muted">{row.price}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-2 flex items-center gap-2 text-[10px] text-faint">
          <span className="size-1.5 shrink-0 rounded-full bg-accent-2" />
          <span className="min-w-0 truncate">New source connected: county probate index</span>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px animate-dash bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
    </div>
  )
}

const underwriting = [
  ['DSCR', '1.84', 'text-accent-2'],
  ['Cash flow', '$1,212/mo', 'text-accent'],
  ['Cap rate', '9.7%', 'text-accent-2'],
  ['Cash-on-cash', '38%', 'text-accent-3'],
]

function UnderwriteVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6">
      {underwriting.map(([label, value, tone], i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="depth relative flex items-center justify-between rounded-[12px] bg-bg/50 px-3 py-2 text-[12px]"
        >
          <span className="text-muted">{label}</span>
          <span className={cx('font-medium tabular-nums', tone)}>{value}</span>
        </motion.div>
      ))}
      <div className="mt-1 flex items-center justify-between text-[10px] text-faint">
        <span>14s analysis</span>
        <span className="text-accent-2">High margin</span>
      </div>
    </div>
  )
}

function OutreachVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6">
      <div className="depth relative max-w-[85%] rounded-[12px] rounded-bl-[4px] bg-surface-2 px-3 py-2 text-[11px] leading-snug text-fg/85">
        Hi Doris — I saw the house on Marigold. Would you consider an as-is cash offer this month?
      </div>
      <div className="depth relative ml-auto max-w-[80%] rounded-[12px] rounded-br-[4px] bg-accent/15 px-3 py-2 text-[11px] leading-snug text-accent">
        Maybe. What were you thinking?
      </div>
      <div className="mt-1 flex items-center gap-2 text-[10px] text-faint">
        <MessageSquare className="size-3" />
        Reply triaged · call booked Thu 10:30
      </div>
    </div>
  )
}

const funding = ['DSCR loan', 'Hard money', 'Seller finance', 'Private money']

function FundingVisual() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
      <div className="grid w-full max-w-[360px] grid-cols-2 gap-2">
        {funding.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="depth relative flex items-center gap-2 rounded-[12px] bg-bg/50 px-3 py-2 text-[11px] text-fg/85"
          >
            <Banknote className="size-3.5 text-accent" />
            {label}
          </motion.div>
        ))}
      </div>
      <div className="depth relative flex items-center gap-2 rounded-[10px] bg-accent-2/10 px-3 py-1.5 text-[11px] text-accent-2 [--depth-edge:rgb(255_181_71/0.3)]">
        <Check className="size-3.5" />
        Offer drafted · 3% seller credit
      </div>
    </div>
  )
}
