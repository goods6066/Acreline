import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { proStrip } from '../content'

export function ProStrip() {
  return (
    <section className="pb-4">
      <Container>
        <Reveal>
          <div className="depth relative flex flex-col items-start justify-between gap-4 rounded-card bg-surface px-6 py-5 shadow-glow sm:flex-row sm:items-center [--depth-edge:rgb(255_122_69/0.3)]">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-[10px] bg-accent/15 text-[11px] font-semibold text-accent">
                $0
              </span>
              <p className="text-[14px] leading-relaxed text-fg/90">
                <span className="font-semibold">{proStrip.label}.</span> {proStrip.text}
              </p>
            </div>
            <a
              href={proStrip.cta.href}
              className="shrink-0 text-[13px] font-medium text-accent transition-colors hover:text-accent-2"
            >
              {proStrip.cta.label} →
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
