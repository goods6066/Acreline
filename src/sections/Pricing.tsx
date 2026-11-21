import { motion } from 'motion/react'
import { Check } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { pricing } from '../content'
import { cx } from '../lib/cx'

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />

        <Reveal className="mt-8 flex justify-center">
          <p className="depth relative inline-flex items-center gap-2 rounded-control bg-accent-2/10 px-4 py-2 text-[13px] text-accent-2 [--depth-edge:rgb(255_181_71/0.3)]">
            <Check className="size-3.5" />
            {pricing.note}
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid w-full max-w-2xl gap-4 lg:max-w-none lg:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <article
                className={cx(
                  'depth relative flex flex-col rounded-card bg-surface p-7',
                  tier.popular
                    ? '[--depth-edge:rgb(255_122_69/0.45)] [--depth-highlight:rgb(255_181_71/0.25)] shadow-[0_40px_80px_-40px_rgb(255_122_69/0.35)]'
                    : 'shadow-glow',
                )}
              >
                {tier.badge && (
                  <motion.span
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-6 top-6 rounded-[8px] bg-accent/15 px-2 py-1 text-[12px] font-medium text-accent"
                  >
                    {tier.badge}
                  </motion.span>
                )}
                <h3 className="text-[16px] font-semibold">{tier.name}</h3>
                <p className="mt-1 min-h-[44px] text-[14px] leading-snug text-muted">{tier.description}</p>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-[44px] font-semibold leading-none tracking-[-0.03em] tabular-nums">{tier.price}</span>
                  {tier.popular && (
                    <span className="text-[15px] text-faint line-through decoration-accent/60">$97/mo</span>
                  )}
                  <span className="text-[14px] text-muted">{tier.priceNote}</span>
                </div>
                <Button variant={tier.popular ? 'primary' : 'secondary'} className="mt-7 w-full">
                  {tier.cta}
                </Button>
                <ul className="mt-7 flex flex-col gap-3 border-t border-line pt-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-fg/90">
                      <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-[6px] bg-white/[0.08]">
                        <Check className="size-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
