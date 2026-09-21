import type { Metadata } from 'next';
import Image from 'next/image';
import { Art, Button, Marquee, PageHero, SectionHeading } from '@/components/UI';
import { Counter, Parallax, Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { CTABand } from '@/components/CTABand';
import { IMG, ux } from '@/lib/images';
import { LEGACY_FLOW, LEGACY_SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Rep For A Reason',
  description:
    'Training that creates an impact beyond the gym. Collective effort turned into meaningful support for families navigating difficult beginnings.',
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Rep For A Reason"
        title="Training that creates an impact beyond the gym."
        lede="As our community trains, we track collective effort and turn milestones into meaningful impact. We build ourselves while helping build something for others."
        image={IMG.impact}
      />

      <Marquee words={['100,000 Reps', '1,000 Hours Of Work', '$5,000 Contributed To The Mission']} />

      <section className="bg-cream-200 py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Concept"
            title="Collective effort, converted into contribution."
            lede="Every rep logged by the community moves a shared counter. When the community hits a milestone, a portion of company proceeds is directed to the mission."
            align="center"
          />

          <div className="mt-16 grid gap-px overflow-hidden border border-forest-700/10 bg-forest-700/10 md:grid-cols-3">
            {[
              { v: 100000, p: '', s: '', l: 'Reps' },
              { v: 1000, p: '', s: '', l: 'Hours Of Work' },
              { v: 5000, p: '$', s: '', l: 'Contributed To The Mission' },
            ].map((stat) => (
              <Reveal key={stat.l}>
                <div className="bg-cream-100 p-10 text-center md:p-14">
                  <p className="font-display text-4xl text-forest-800 md:text-6xl">
                    <Counter to={stat.v} prefix={stat.p} suffix={stat.s} />
                  </p>
                  <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold-600">
                    {stat.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-14 max-w-2xl text-center body-lg">
              Through future charitable initiatives, a portion of company proceeds can support
              families navigating difficult beginnings — including families experiencing the
              NICU journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Legacy vision */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-24 md:py-36 grain">
        <div className="absolute inset-0 -z-10">
          <Image
            src={ux(IMG.legacy, 1920)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/90 to-forest-950" />
        </div>

        <div className="container-x">
          <SectionHeading
            eyebrow="The Legacy Vision"
            title="More than a fitness company. An ecosystem."
            lede="The training company creates the economic engine. The story creates the mission. The content spreads the mission. The nonprofit eventually institutionalizes the mission."
            dark
          />

          <Stagger className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {LEGACY_FLOW.map((step, i) => (
              <StaggerItem key={step}>
                <div className="border-t border-cream-200/15 pt-5">
                  <span className="font-display text-sm text-gold-400">0{i + 1}</span>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest2 text-cream-100">
                    {step}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-20 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Parallax distance={36}>
              <Art id={IMG.belong} alt="Community members training together" ratio="aspect-[4/5]" />
            </Parallax>

            <div>
              <Reveal>
                <h3 className="h-display text-3xl text-cream-100 md:text-4xl">
                  What this can eventually include
                </h3>
              </Reveal>
              <Stagger className="mt-9 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {LEGACY_SERVICES.map((s) => (
                  <StaggerItem key={s}>
                    <div className="flex items-start gap-3 border-b border-cream-200/10 pb-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                      <span className="text-sm text-cream-200/70">{s}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.2}>
                <div className="mt-11">
                  <Button href="/join" variant="gold">
                    Join The Mission
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream-100 py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The Story Behind The Mission"
              title="A foundation underneath the brand."
              lede="The origin of Élan Forge comes from an understanding of what it means to fight for something bigger than yourself. The personal story doesn't need to dominate the brand — instead, it becomes the foundation underneath it."
            />
            <Reveal delay={0.2}>
              <blockquote className="mt-9 border-l-2 border-gold-400 pl-6 font-display text-xl italic text-forest-800 md:text-2xl">
                “I know what it&apos;s like to have something worth fighting for. I bring that
                mentality into training.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-8 body-lg">
                That philosophy becomes bigger than one person&apos;s story. It becomes an
                invitation: find what you&apos;re fighting for, build toward it, and become
                stronger because of it.
              </p>
            </Reveal>
          </div>

          <Parallax distance={40}>
            <Art id={IMG.purpose} alt="Sunrise training session" ratio="aspect-[5/6]" />
          </Parallax>
        </div>
      </section>

      <CTABand
        eyebrow="Rep For A Reason"
        title="Build yourself. Help build something for others."
        lede="Every rep counts toward something bigger than a single session."
        image={IMG.impact}
      />
    </>
  );
}
