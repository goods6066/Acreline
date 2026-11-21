import { Building2, FileText, Gavel, Home, Landmark, MapPin, ScrollText, Search } from 'lucide-react'
import type { ComponentType } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { dataSources } from '../content'

// One icon per source family. These are generic marks, not partner logos.
const icons: ComponentType<{ className?: string }>[] = [FileText, Gavel, Landmark, ScrollText, Building2, Search, Home, MapPin]

export function LogoCloud() {
  const doubled = [...dataSources, ...dataSources]
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] text-faint">Scans the sources investors check by hand</p>
        </Reveal>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
            {doubled.map((name, i) => {
              const Icon = icons[i % icons.length]
              return (
                <li key={`${name}-${i}`} className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-fg/45">
                  <Icon className="size-5" />
                  {name}
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
