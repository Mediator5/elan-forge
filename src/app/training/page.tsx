import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, Chain, Marquee, PageHero, SectionHeading } from '@/components/UI';
import { Counter, Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { CTABand } from '@/components/CTABand';
import { IMG, ux } from '@/lib/images';
import { METHOD, PROOF_METRICS, PURPOSE_CHAIN } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Training · The Pressure Method™',
  description:
    'High volume. Controlled intensity. Relentless consistency. Volume Blocks, Pressure Sets, Strength Sets, Conditioning Finishers and Proof Sets.',
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="The Élan Forge Training System"
        title="The Pressure Method™"
        lede="High volume. Controlled intensity. Relentless consistency. The goal isn't simply to make people tired — the goal is measurable transformation."
        image={IMG.trainingHero}
      />

      <Marquee
        words={[
          'Volume Blocks',
          'Pressure Sets',
          'Strength Sets',
          'Conditioning Finishers',
          'Proof Sets',
        ]}
      />

      {/* Method cards */}
      <section className="bg-cream-200 py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Five Components"
            title="Designed around a methodology, not a mood."
            lede="Élan Forge training is built on repeatable structure. Every session has a purpose, and every block has a measurable outcome."
          />

          <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {METHOD.map((m) => (
              <StaggerItem key={m.n}>
                <article className="group flex h-full flex-col overflow-hidden border border-forest-700/10 bg-cream-100">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={ux(m.image, 800)}
                      alt={m.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
                    <span className="absolute left-6 top-6 font-display text-2xl text-gold-300">
                      {m.n}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="h-display text-2xl text-forest-800">{m.name}</h3>
                    <span className="mt-4 block h-px w-8 bg-gold-400 transition-all duration-500 group-hover:w-16" />
                    <p className="mt-5 text-sm leading-relaxed text-forest-700/75">{m.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <p className="mt-16 text-center font-display text-2xl text-forest-800 md:text-4xl">
              Relentless in effort.{' '}
              <span className="text-gold-500">Intelligent in execution.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-24 md:py-32 grain">
        <div className="absolute inset-0 -z-10">
          <Image
            src={ux(IMG.pressure, 1920)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-forest-950/80" />
        </div>
        <div className="container-x">
          <SectionHeading
            eyebrow="A Typical Training Block"
            title="Structure you can measure yourself against."
            align="center"
            dark
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-cream-200/10 bg-cream-200/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: 12, l: 'Week Progressive Blocks', s: '' },
              { v: 4, l: 'Sessions Per Week', s: '' },
              { v: 6, l: 'Proof Set Benchmarks', s: '' },
              { v: 100, l: 'Coach-Reviewed Technique', s: '%' },
            ].map((stat) => (
              <Reveal key={stat.l}>
                <div className="bg-forest-950 p-9 text-center">
                  <p className="font-display text-4xl text-gold-300 md:text-5xl">
                    <Counter to={stat.v} suffix={stat.s} />
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-widest2 text-cream-200/55">
                    {stat.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-cream-100 py-24 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Client Proof"
              title="We don't just talk about transformation. We measure it."
              lede="Transformation should be visible, measurable, and earned. Progress is documented from your first session onward."
            />
            <Reveal delay={0.2}>
              <div className="mt-10">
                <Chain steps={PURPOSE_CHAIN} />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <Button href="/join" variant="cream">
                  Book Your Assessment
                </Button>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid gap-px overflow-hidden border border-forest-700/10 bg-forest-700/10 sm:grid-cols-2">
            {PROOF_METRICS.map((m) => (
              <StaggerItem key={m}>
                <div className="h-full bg-cream-100 p-7 transition-colors duration-500 hover:bg-cream-200">
                  <span className="block h-px w-6 bg-gold-400" />
                  <p className="mt-4 text-sm uppercase tracking-widest2 text-forest-800/85">{m}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand
        eyebrow="Train With Purpose"
        title="One workout. One conversation. One connection at a time."
        lede="Come build something stronger — your body, your character, your confidence, your community, your purpose."
        image={IMG.heroSecondary}
      />
    </>
  );
}
