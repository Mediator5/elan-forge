import type { Metadata } from 'next';
import Image from 'next/image';
import { Art, Button, Chain, Marquee, PageHero, SectionHeading } from '@/components/UI';
import { Parallax, Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { CTABand } from '@/components/CTABand';
import { IMG, ux } from '@/lib/images';
import { PILLARS, PURPOSE_CHAIN, SERVE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Philosophy',
  description:
    'Strength means more when it stands for something. Move, Mentor, Belong, Build — the four commitments behind Élan Forge.',
};

const PALETTE = [
  { name: 'Forest Green', hex: '#1B3A2B', note: 'strength, growth, grounding', cls: 'bg-forest-700' },
  { name: 'Warm Cream', hex: '#F5EFE3', note: 'warmth, humanity, balance', cls: 'bg-cream-200' },
  { name: 'Muted Gold', hex: '#C2A15A', note: 'excellence, legacy, purpose', cls: 'bg-gold-400' },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Direction"
        title="Strength means more when it stands for something."
        lede="We train with intensity, but we coach with intelligence. We believe physical transformation can create confidence, discipline, resilience, and momentum that extends far beyond the gym."
        image={IMG.philosophyHero}
      />

      <Marquee words={['Move', 'Mentor', 'Belong', 'Build', 'Strength With Purpose']} />

      {/* Pillars */}
      <section className="bg-cream-200 py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Élan Forge Philosophy"
            title="Four commitments. One direction."
            align="center"
          />

          <div className="mt-20 space-y-24 md:space-y-32">
            {PILLARS.map((p, i) => (
              <div
                key={p.key}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <Parallax distance={32}>
                  <Art id={p.image} alt={p.key} ratio="aspect-[4/5]" />
                </Parallax>

                <div>
                  <Reveal>
                    <span className="font-display text-sm tracking-widest2 text-gold-500">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 h-display text-4xl tracking-[0.14em] text-forest-800 md:text-5xl">
                      {p.key}
                    </h3>
                    <span className="mt-6 block h-px w-16 bg-gold-400" />
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mt-8 font-display text-2xl text-forest-800 md:text-3xl">
                      {p.lede}
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="mt-5 max-w-xl body-lg">{p.body}</p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose chain */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-24 md:py-32 grain">
        <div className="absolute inset-0 -z-10">
          <Image
            src={ux(IMG.purpose, 1920)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/85 to-forest-950/70" />
        </div>
        <div className="container-x">
          <SectionHeading
            eyebrow="Train With Purpose"
            title="Find what you're fighting for. Build toward it. Become stronger because of it."
            dark
          />
          <Reveal delay={0.2}>
            <div className="mt-12">
              <Chain steps={PURPOSE_CHAIN} dark />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <blockquote className="mt-16 max-w-3xl border-l-2 border-gold-400 pl-7 font-display text-2xl italic leading-snug text-cream-100 md:text-3xl">
              “I know what it&apos;s like to have something worth fighting for. I bring that
              mentality into training.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Brand direction */}
      <section className="bg-cream-100 py-24 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Brand Direction"
              title="A palette built on grounding, warmth, and legacy."
            />
            <Reveal delay={0.16}>
              <p className="mt-6 body-lg">
                ÉLAN in large capital letters, with FORGE underneath in smaller, widely spaced
                lettering. A tagline that never changes: Strength With Purpose.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-6 sm:grid-cols-3">
            {PALETTE.map((c) => (
              <StaggerItem key={c.name}>
                <div className="group border border-forest-700/10 bg-white/50 p-6">
                  <div
                    className={`h-28 w-full ${c.cls} transition-transform duration-700 group-hover:scale-[1.03]`}
                  />
                  <p className="mt-5 font-display text-lg text-forest-800">{c.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest2 text-gold-600">{c.hex}</p>
                  <p className="mt-3 text-sm text-forest-700/70">{c.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-cream-200 py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who We Serve"
              title="For the person who knows they're capable of more."
              lede="People who feel like they've lost time, lost momentum, or lost connection with themselves."
            />
            <Stagger className="mt-10 space-y-3">
              {SERVE.map((s) => (
                <StaggerItem key={s}>
                  <div className="flex items-start gap-3 border-b border-forest-700/10 pb-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-sm leading-relaxed text-forest-700/85">{s}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <Button href="/join" variant="cream">
                  Start Your Next Chapter
                </Button>
              </div>
            </Reveal>
          </div>

          <Parallax distance={36}>
            <Art id={IMG.grit} alt="Member training with intent" ratio="aspect-[4/5]" />
          </Parallax>
        </div>
      </section>

      <CTABand
        eyebrow="The Story Behind The Mission"
        title="It becomes an invitation."
        lede="Find what you're fighting for. Build toward it. Become stronger because of it."
        image={IMG.heroTertiary}
      />
    </>
  );
}
