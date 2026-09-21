import type { Metadata } from 'next';
import { Art, Button, Marquee, PageHero, SectionHeading } from '@/components/UI';
import { Parallax, Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { CTABand } from '@/components/CTABand';
import { IMG } from '@/lib/images';
import { MENTOR_VALUES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Mentorship',
  description:
    "Don't grow alone. Élan Forge mentorship circles create space for guidance, accountability, honest conversations, leadership and shared experience.",
};

export default function MentorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Mentorship"
        title="Don't grow alone."
        lede="At Élan Forge, fitness is only part of the journey. Our mentorship circles connect people who are looking to grow with people who have experience, perspective, and wisdom to share."
        image={IMG.mentorshipHero}
      />

      <Marquee words={['Accountability', 'Courage', 'Growth', 'Purpose', 'Mentor Circle · Tuesdays 7:00 PM']} />

      <section className="bg-cream-200 py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Culture"
            title="Together, we create a culture built around four things."
            align="center"
          />

          <Stagger className="mt-16 grid gap-px overflow-hidden border border-forest-700/10 bg-forest-700/10 md:grid-cols-2 lg:grid-cols-4">
            {MENTOR_VALUES.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="group h-full bg-cream-100 p-9 transition-colors duration-500 hover:bg-white">
                  <span className="font-display text-sm tracking-widest2 text-gold-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 h-display text-2xl uppercase tracking-[0.12em] text-forest-800">
                    {v.title}
                  </h3>
                  <span className="mt-5 block h-px w-8 bg-gold-400 transition-all duration-500 group-hover:w-16" />
                  <p className="mt-5 text-sm leading-relaxed text-forest-700/75">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-forest-950 py-24 md:py-36 grain relative">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Parallax distance={40}>
            <Art id={IMG.mentor} alt="Mentor circle conversation" ratio="aspect-[5/6]" />
          </Parallax>

          <div>
            <SectionHeading
              eyebrow="The Mentor Circle"
              title="Conversation, accountability, personal development, and leadership."
              lede="Every Tuesday evening, members gather for an hour of honest conversation. No performance. No posturing. Just people committed to becoming better — and willing to help each other get there."
              dark
            />

            <Stagger className="mt-10 space-y-4">
              {[
                'Guided discussion led by members and invited mentors',
                'Quarterly personal-development goals, reviewed openly',
                'One-to-one mentor pairings for members who want them',
                'A standing invitation to bring your real questions',
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-4 border-b border-cream-200/10 pb-4">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                    <span className="text-sm leading-relaxed text-cream-200/70">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.25}>
              <div className="mt-11">
                <Button href="/join" variant="gold">
                  Request An Invitation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="mx-auto max-w-4xl text-center font-display text-2xl leading-snug text-forest-800 md:text-4xl">
              Growth happens faster when we learn from others.{' '}
              <span className="text-gold-500">
                You don&apos;t have to grow alone.
              </span>
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[IMG.portrait1, IMG.portrait2, IMG.portrait3].map((id, i) => (
              <Reveal key={id} delay={i * 0.08}>
                <Art id={id} alt="Élan Forge community member" ratio="aspect-[4/5]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Mentorship"
        title="Have the conversations that move you forward."
        lede="Show up for yourself and for others. Keep learning, adapting, and becoming."
        image={IMG.belong}
      />
    </>
  );
}
