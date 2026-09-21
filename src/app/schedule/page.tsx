import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, Marquee, PageHero } from '@/components/UI';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { CTABand } from '@/components/CTABand';
import { IMG, ux } from '@/lib/images';
import { SCHEDULE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'The Weekly Rhythm',
  description:
    'An intentional weekly schedule for movement, growth, recovery, and connection at Élan Forge.',
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="The Weekly Rhythm"
        title="An intentional schedule for movement, growth, recovery, and connection."
        lede="Six touchpoints a week. Train hard, recover well, talk honestly, and reset with intention."
        image={IMG.schedule}
      />

      <Marquee
        words={SCHEDULE.map((s) => `${s.day} ${s.time} — ${s.title}`)}
      />

      <section className="bg-cream-200 py-24 md:py-32">
        <div className="container-x">
          <Stagger className="space-y-5">
            {SCHEDULE.map((s) => (
              <StaggerItem key={s.day}>
                <article className="group grid items-center gap-6 border border-forest-700/10 bg-cream-100 p-6 transition-colors duration-500 hover:bg-white md:grid-cols-[200px_1fr_220px] md:p-8">
                  <div>
                    <p className="h-display text-3xl text-forest-800">{s.day}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-widest2 text-gold-600">
                      {s.time}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl text-forest-800">{s.title}</h3>
                    <span className="mt-4 block h-px w-8 bg-gold-400 transition-all duration-500 group-hover:w-20" />
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-forest-700/75">
                      {s.body}
                    </p>
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3]">
                    <Image
                      src={ux(s.image, 700)}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-col items-center gap-5 text-center">
              <p className="max-w-xl body-lg">
                Sessions are small by design. Reserve your place and we&apos;ll confirm your
                first week by email.
              </p>
              <Button href="/join" variant="cream">
                Reserve Your Spot
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Élan Community Meetup"
        title="Train together. Build relationships."
        lede="Saturdays at 9:00 AM — connect over coffee, a smoothie, or simply a glass of water."
        image={IMG.meetup}
      />
    </>
  );
}
