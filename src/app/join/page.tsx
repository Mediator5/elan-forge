import type { Metadata } from 'next';
import Image from 'next/image';
import { Marquee, SectionHeading } from '@/components/UI';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { JoinForm } from '@/components/JoinForm';
import { IMG, ux } from '@/lib/images';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Join The Community',
  description:
    'Become a member of Élan Forge. Fitness, mentorship and community built on strength with purpose.',
};

const INCLUDED = [
  'Four coached sessions each week, built on The Pressure Method™',
  'Tuesday Mentor Circle — conversation, accountability and leadership',
  'Baseline assessment plus quarterly Proof Set benchmarks',
  'Progress documentation: photos, PRs, measurements and streaks',
  'Saturday Élan Community Meetup',
  'Sunday Weekly Reset — reflect, recover, set intentions',
];

export default function JoinPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-950 pb-20 pt-40 grain">
        <div className="absolute inset-0 -z-10">
          <Image
            src={ux(IMG.join, 1920)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-slow-zoom object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/85 via-forest-950/90 to-forest-950" />
        </div>

        <div className="container-x">
          <SectionHeading
            eyebrow="Your Next Chapter"
            title="Come build something stronger."
            lede="Your body. Your character. Your confidence. Your community. Your purpose. Tell us where you are, and we'll show you the first step."
            dark
          />
        </div>
      </section>

      <Marquee words={['Become A Member', 'Strength With Purpose', 'Move · Mentor · Belong · Build']} />

      <section className="bg-cream-200 py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <h2 className="h-display text-3xl text-forest-800 md:text-4xl">
                Request your membership
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-forest-700/70">
                Fill this out and we&apos;ll be in touch with session times, pricing and your
                first assessment.
              </p>
            </Reveal>

            <div className="mt-12">
              <JoinForm />
            </div>
          </div>

          <div>
            <Reveal>
              <div className="border border-forest-700/10 bg-cream-100 p-9">
                <h3 className="eyebrow">What Membership Includes</h3>
                <Stagger className="mt-7 space-y-4">
                  {INCLUDED.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3 border-b border-forest-700/10 pb-4">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                        <span className="text-sm leading-relaxed text-forest-700/85">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <div className="mt-9 space-y-2 text-sm text-forest-700/75">
                  <p className="eyebrow">Direct</p>
                  <p>
                    <a href={`mailto:${SITE.email}`} className="link-underline">
                      {SITE.email}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
                      className="link-underline"
                    >
                      {SITE.phone}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden">
                <Image
                  src={ux(IMG.meetup, 900)}
                  alt="Élan Forge community meetup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
                <p className="absolute bottom-6 left-6 max-w-[16rem] font-display text-lg text-cream-100">
                  You don&apos;t have to grow alone.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
