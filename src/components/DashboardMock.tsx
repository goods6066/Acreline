import { motion } from 'motion/react'
import { Building2, Calculator, FileSignature, Map, Send, Sparkles, TrendingUp, Users } from 'lucide-react'

import { LogoMark } from './Logo'
import { cx } from '../lib/cx'

const navItems = [
  { icon: TrendingUp, label: 'Deal feed', count: 128, active: true },
  { icon: Map, label: 'Map' },
  { icon: Calculator, label: 'Underwriting' },
  { icon: Send, label: 'Outreach', count: 12 },
  { icon: FileSignature, label: 'Offers' },
  { icon: Users, label: 'Buyers' },
]

const rows = [
  { address: '1420 Marigold St', city: 'Cleveland, OH', tag: 'Tax deed', price: '$4,800', flow: '$1,212', tone: 'accent' },
  { address: '318 Gulfstream Pkwy', city: 'Cape Coral, FL', tag: 'Gov seized', price: '$46,000', flow: '$1,408', tone: 'violet' },
  { address: '905 Kestrel Ave', city: 'Kansas City, KS', tag: 'Probate', price: '$18,500', flow: '$964', tone: 'teal' },
  { address: '77 Beacon Row', city: 'Memphis, TN', tag: 'Bank REO', price: '$62,000', flow: '$797', tone: 'muted' },
  { address: '640 Whitlock Dr', city: 'Homestead, FL', tag: 'Section 8', price: '$88,000', flow: '$1,043', tone: 'accent' },
  { address: '2120 Quarry Ln', city: 'Birmingham, AL', tag: 'Seller finance', price: '$34,500', flow: '$886', tone: 'teal' },
  { address: '11 Sycamore Ct', city: 'Toledo, OH', tag: 'Probate', price: '$12,900', flow: '$932', tone: 'violet' },
  { address: '486 Larkspur Way', city: 'Little Rock, AR', tag: 'Tax deed', price: '$7,400', flow: '$704', tone: 'muted' },
  { address: '2305 Rennick St', city: 'Dayton, OH', tag: 'Bank REO', price: '$54,000', flow: '$1,116', tone: 'accent' },
]

const markets = [
  { label: 'Cleveland, OH', hue: 250 },
  { label: 'Memphis, TN', hue: 170 },
  { label: 'Cape Coral, FL', hue: 20 },
  { label: 'Kansas City, KS', hue: 300 },
]

const toneClass: Record<string, string> = {
  accent: 'bg-accent/15 text-accent',
  violet: 'bg-accent-3/15 text-accent-3',
  teal: 'bg-accent-2/15 text-accent-2',
  muted: 'bg-white/[0.06] text-muted',
}

export function Monogram({ initials, hue, className }: { initials: string; hue: number; className?: string }) {
  return (
    <span
      className={cx('round grid size-6 shrink-0 place-items-center text-[10px] font-semibold text-white', className)}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 70% 62%), hsl(${hue + 40} 70% 48%))`,
      }}
    >
      {initials}
    </span>
  )
}

export function DashboardMock() {
  const kpis = [
    { label: 'Deals matched', value: '128', delta: '+12 today', tone: 'text-accent-2' },
    { label: 'High margin', value: '36', delta: '≥ 25% spread', tone: 'text-accent' },
    { label: 'Avg cash flow', value: '$1,208', delta: 'per month', tone: 'text-accent-3' },
  ]

  return (
    <div className="depth relative flex aspect-[4/5] w-full overflow-hidden rounded-window bg-surface text-left shadow-glow sm:aspect-[16/10] lg:aspect-[16/9]">
      {/* Sidebar */}
      <aside className="hidden w-[200px] shrink-0 flex-col border-r border-line bg-bg/60 p-3 lg:flex">
        <div className="flex items-center gap-2 px-1.5 py-1">
          <LogoMark className="size-6 rounded-[8px]" />
          <span className="text-[12px] font-semibold">Acreline AI</span>
        </div>
        <ul className="mt-4 flex flex-col gap-0.5">
          {navItems.map(({ icon: Icon, label, count, active }) => (
            <li
              key={label}
              className={cx(
                'flex h-8 items-center gap-2 rounded-[10px] px-2 text-[12px]',
                active ? 'bg-white/[0.07] text-fg' : 'text-muted',
              )}
            >
              <Icon className="size-3.5" />
              <span className="flex-1">{label}</span>
              {count && <span className="rounded-[6px] bg-accent/20 px-1.5 text-[10px] text-accent">{count}</span>}
            </li>
          ))}
        </ul>
        <p className="mt-5 px-2 text-[11px] text-faint">Markets</p>
        <ul className="mt-1 flex flex-col gap-0.5">
          {markets.map((m) => (
            <li key={m.label} className="flex h-7 items-center gap-2 rounded-[10px] px-2 text-[12px] text-muted">
              <span className="size-2 rounded-[3px]" style={{ background: `hsl(${m.hue} 70% 65%)` }} />
              {m.label}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-1.5 px-1.5">
          <span className="round relative grid size-5 place-items-center bg-accent/20 text-accent">
            <Sparkles className="size-3" />
          </span>
          <span className="text-[11px] text-faint">44 agents scanning</span>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between gap-2 border-b border-line px-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="text-[13px] font-medium">Deal feed</span>
            <span className="hidden items-center gap-1.5 text-[11px] text-faint sm:inline-flex">
              <span className="size-1.5 rounded-full bg-accent-2" /> live · updated 2m ago
            </span>
          </div>
          <div className="depth relative hidden items-center gap-1 rounded-[10px] bg-white/[0.04] p-0.5 text-[11px] sm:flex">
            <span className="rounded-[8px] bg-white/[0.08] px-2 py-1 text-fg">Off-market</span>
            <span className="px-2 py-1 text-muted">On-market</span>
          </div>
        </div>

        {/* Compact layout for phones: the dense three-column desk does not fit. */}
        <div className="flex min-h-0 flex-1 flex-col gap-3 p-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {kpis.map((kpi, index) => (
              <div
                key={kpi.label}
                className={cx('depth relative rounded-[12px] bg-white/[0.02] px-3 py-2', index === 2 && 'hidden sm:block')}
              >
                <p className="text-[10px] text-muted">{kpi.label}</p>
                <p className="mt-0.5 text-[18px] font-semibold tracking-tight">{kpi.value}</p>
              </div>
            ))}
          </div>
          <ul className="flex min-h-0 flex-1 flex-col justify-between gap-1.5">
            {rows.slice(0, 6).map((row, i) => (
              <motion.li
                key={row.address}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2 border-b border-line/60 pb-1.5 last:border-0"
              >
                <Building2 className="size-3.5 shrink-0 text-faint" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[11px] text-fg/90">{row.address}</span>
                  <span className="block truncate text-[10px] text-faint">
                    {row.tag} · {row.city}
                  </span>
                </span>
                <span className="shrink-0 text-[11px] tabular-nums text-muted">{row.price}</span>
                <span className="w-11 shrink-0 text-right text-[10px] tabular-nums text-accent-2">{row.flow}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between border-t border-line pt-2 text-[10px] text-faint">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-accent-2" />
              44 agents scanning
            </span>
            <span>18 sources</span>
          </div>
        </div>

        {/* Full desk layout for desktop; the compact feed above covers everything below. */}
        <div className="hidden min-h-0 flex-1 grid-cols-3 grid-rows-[auto_1fr] gap-3 p-4 lg:grid">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              className="depth relative rounded-[14px] bg-white/[0.02] p-3"
            >
              <p className="text-[11px] text-muted">{kpi.label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-[20px] font-semibold tracking-tight">{kpi.value}</span>
              </div>
              <p className={cx('mt-0.5 text-[10px]', kpi.tone)}>{kpi.delta}</p>
            </motion.div>
          ))}

          <div className="depth relative flex min-h-0 flex-col rounded-[14px] bg-white/[0.02] p-3 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-medium">Scored opportunities</p>
              <span className="text-[11px] text-faint">By spread to value</span>
            </div>
            <ul className="mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1">
              {rows.map((row, i) => (
                <motion.li
                  key={row.address}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-2 border-b border-line/60 pb-1 last:border-0"
                >
                  <Building2 className="size-3.5 shrink-0 text-faint" />
                  <span className="min-w-0 flex-1 truncate text-[11px] text-fg/90">
                    {row.address}
                    <span className="ml-1.5 text-faint">{row.city}</span>
                  </span>
                  <span className={cx('shrink-0 rounded-[6px] px-1.5 py-0.5 text-[10px]', toneClass[row.tone])}>
                    {row.tag}
                  </span>
                  <span className="w-14 shrink-0 text-right text-[10px] tabular-nums text-muted">{row.price}</span>
                  <span className="block w-12 shrink-0 text-right text-[10px] tabular-nums text-accent-2">{row.flow}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-2 border-t border-line pt-2 text-[10px] text-faint">
              <span className="size-1.5 rounded-full bg-accent-2" />
              Agent activity: reply received on Marigold St · offer drafted on Gulfstream Pkwy
            </div>
          </div>

          <div className="depth relative hidden min-h-0 flex-col rounded-[14px] bg-white/[0.02] p-3 lg:col-span-1 lg:flex">
            <div className="flex items-center justify-between gap-1">
              <p className="text-[12px] font-medium">Underwriting</p>
              <span className="whitespace-nowrap rounded-[6px] bg-accent-2/15 px-1.5 py-0.5 text-[10px] text-accent-2">High margin</span>
            </div>
            <p className="mt-1 truncate text-[10px] text-faint">1420 Marigold St, Cleveland</p>
            <ul className="mt-2 flex flex-col gap-1.5 text-[11px]">
              {[
                ['Est. value', '$128,000'],
                ['All-in', '$31,400'],
                ['Est. rent', '$1,650'],
                ['Cash flow', '$1,212'],
                ['Rehab est.', '$18,400'],
                ['DSCR', '1.84'],
                ['Cap rate', '9.7%'],
                ['Spread to value', '75%'],
              ].map(([label, value]) => (
                <li key={label} className="flex items-center justify-between gap-2 border-b border-line/60 pb-1 last:border-0">
                  <span className="text-faint">{label}</span>
                  <span className="tabular-nums text-fg/90">{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="flex items-center justify-between text-[10px] text-faint">
                <span>Confidence</span>
                <span className="text-accent-2">86%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  initial={{ width: 0 }}
                  animate={{ width: '86%' }}
                  transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
