import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { CTABand } from '@/components/CTABand';
import { Art, Button, Chain, Marquee, SectionHeading } from '@/components/UI';
import { Counter, Parallax, Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { IMG, ux } from '@/lib/images';
import { METHOD, PILLARS, PROOF_METRICS, PURPOSE_CHAIN, SCHEDULE, SERVE } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee
        words={[
          'Strength With Purpose',
          'The Pressure Method™',
          'Move · Mentor · Belong · Build',
          'Rep For A Reason',
          'Relentless In Effort · Intelligent In Execution',
        ]}
      />

      {/* ------------------------------- MISSION ------------------------------- */}
      <section className="relative overflow-hidden bg-cream-200 py-24 md:py-36">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our Mission"
              title={
                <>
                  Train the body.
                  <br />
                  Shape the mind.
                  <br />
                  <span className="text-gold-500">Strengthen the community.</span>
                </>
              }
              lede="Élan Forge exists to help people become stronger in body, clearer in purpose, and richer in community."
            />

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl body-lg">
                Through intentional fitness, meaningful mentorship, intelligent programming,
                and consistent connection, we create an environment where people challenge
                themselves, support one another, and build a life of lasting momentum.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-8 border-l-2 border-gold-400 pl-6 font-display text-xl italic text-forest-800 md:text-2xl">
                This isn&apos;t about simply working harder. It&apos;s about knowing what
                you&apos;re working toward.
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-10">
                <Button href="/philosophy" variant="cream">
                  Our Philosophy
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Parallax distance={40}>
              <Art
                id={IMG.heroSecondary}
                alt="Weights racked on the Élan Forge training floor"
                ratio="aspect-[4/5]"
              />
            </Parallax>
            <Reveal delay={0.3} className="absolute -bottom-10 -left-6 hidden w-56 md:block">
              <div className="bg-forest-800 p-7">
                <p className="font-display text-4xl text-gold-300">
                  <Counter to={100} suffix="%" />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-widest2 text-cream-200/60">
                  Effort. Measured, coached, and accounted for.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ PHILOSOPHY ----------------------------- */}
      <section className="bg-forest-950 py-24 md:py-36 grain relative">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Élan Forge Philosophy"
            title={<>Four commitments that shape everything we do.</>}
            lede="Strength means more when it stands for something. We train with intensity, but we coach with intelligence."
            dark
          />

          <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <StaggerItem key={p.key}>
                <Link href="/philosophy" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-forest-900">
                    <Image
                      src={ux(p.image, 800)}
                      alt={p.key}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover opacity-70 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="h-display text-2xl tracking-[0.14em] text-cream-100">
                        {p.key}
                      </h3>
                      <span className="mt-3 block h-px w-8 bg-gold-400 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                  <p className="mt-5 font-display text-lg text-cream-100">{p.lede}</p>
                  <p className="mt-3 text-sm leading-relaxed text-cream-200/60">{p.body}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* -------------------------------- METHOD ------------------------------- */}
      <section className="bg-cream-100 py-24 md:py-36">
        <div className="container-x">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="The Élan Forge Training System"
              title={
                <>
                  The Pressure <span className="text-gold-500">Method™</span>
                </>
              }
              lede="High volume. Controlled intensity. Relentless consistency. Training built around a recognizable methodology — not random workouts or intensity for intensity's sake."
            />
            <Reveal delay={0.2}>
              <Button href="/training" variant="cream">
                Explore The System
              </Button>
            </Reveal>
          </div>

          <div className="mt-16 divide-y divide-forest-700/10 border-y border-forest-700/10">
            {METHOD.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.05}>
                <div className="group grid items-center gap-6 py-8 md:grid-cols-[80px_1fr_1.1fr_100px]">
                  <span className="font-display text-2xl text-gold-500">{m.n}</span>
                  <h3 className="h-display text-2xl text-forest-800 md:text-3xl">{m.name}</h3>
                  <p className="text-sm leading-relaxed text-forest-700/75 md:text-base">
                    {m.body}
                  </p>
                  <div className="relative hidden h-20 w-full overflow-hidden md:block">
                    <Image
                      src={ux(m.image, 400)}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 text-center font-display text-2xl text-forest-800 md:text-3xl">
              Relentless in effort. <span className="text-gold-500">Intelligent in execution.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- PURPOSE ------------------------------- */}
      <section className="relative isolate overflow-hidden bg-forest-900 py-24 md:py-36">
        <div className="absolute inset-0 -z-10">
          <Image
            src={ux(IMG.purpose, 1920)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/85 to-transparent" />
        </div>

        <div className="container-x">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Train With Purpose"
              title="We train with a reason."
              lede="There are plenty of places to get a hard workout. Élan Forge is about something different."
              dark
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-cream-200/70 md:text-lg">
                Our philosophy was shaped by the understanding that life can change in an
                instant — and that having something worth fighting for can change the way you
                approach everything. We don&apos;t train simply to look better. We train to
                become stronger, more disciplined, more capable, and more prepared for whatever
                life asks of us.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12">
                <Chain steps={PURPOSE_CHAIN} dark />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------- WHO WE SERVE ---------------------------- */}
      <section className="bg-cream-200 py-24 md:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Parallax distance={36}>
            <Art
              id={IMG.serve}
              alt="Members training together in a small group session"
              ratio="aspect-[4/5]"
            />
          </Parallax>

          <div>
            <SectionHeading
              eyebrow="Who We Serve"
              title="For the person who knows they're capable of more."
              lede="Élan Forge is especially built for people who feel like they've lost time, lost momentum, or lost connection with themselves."
            />

            <Stagger className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {SERVE.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 border-b border-forest-700/10 pb-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-sm leading-relaxed text-forest-700/85">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.25}>
              <p className="mt-10 font-display text-xl text-forest-800 md:text-2xl">
                You don&apos;t need another temporary burst of motivation.{' '}
                <span className="text-gold-500">You need something worth building.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------- PROOF -------------------------------- */}
      <section className="bg-forest-950 py-24 md:py-36 grain relative">
        <div className="container-x">
          <SectionHeading
            eyebrow="Client Proof"
            title="Don't just take our word for it."
            lede="Transformation should be visible, measurable, and earned. We don't just talk about transformation — we measure it."
            align="center"
            dark
          />

          <Stagger className="mt-16 grid gap-px overflow-hidden border border-cream-200/10 bg-cream-200/10 sm:grid-cols-2 lg:grid-cols-4">
            {PROOF_METRICS.map((metric) => (
              <StaggerItem key={metric}>
                <div className="h-full bg-forest-950 p-8 transition-colors duration-500 hover:bg-forest-900">
                  <span className="block h-px w-6 bg-gold-400" />
                  <p className="mt-5 text-sm uppercase tracking-widest2 text-cream-100/85">
                    {metric}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <p className="max-w-xl text-sm leading-relaxed text-cream-200/55">
                Member stories, progress photos and performance milestones will be published
                here as our founding cohort completes their first twelve weeks.
              </p>
              <Button href="/join" variant="outline">
                Be Part Of The Founding Cohort
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- RHYTHM -------------------------------- */}
      <section className="bg-cream-100 py-24 md:py-36">
        <div className="container-x">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="The Weekly Rhythm"
              title="An intentional schedule for movement, growth, recovery, and connection."
            />
            <Reveal delay={0.15}>
              <Button href="/schedule" variant="cream">
                Full Schedule
              </Button>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SCHEDULE.slice(0, 3).map((s) => (
              <StaggerItem key={s.day}>
                <div className="group relative overflow-hidden bg-forest-900">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={ux(s.image, 800)}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-65 transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[11px] uppercase tracking-widest2 text-gold-300">
                      {s.day} — {s.time}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-cream-100">{s.title}</h3>
                    <p className="mt-2 text-sm text-cream-200/65">{s.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ------------------------------ MENTORSHIP ----------------------------- */}
      <section className="relative isolate overflow-hidden bg-forest-900 py-24 md:py-36">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Mentorship"
              title="Don't grow alone."
              lede="At Élan Forge, fitness is only part of the journey. Our mentorship circles connect people who are looking to grow with people who have experience, perspective, and wisdom to share."
              dark
            />
            <Reveal delay={0.24}>
              <div className="mt-10">
                <Button href="/mentorship" variant="gold">
                  Inside The Mentor Circle
                </Button>
              </div>
            </Reveal>
          </div>

          <Parallax distance={40}>
            <Art
              id={IMG.mentorshipHero}
              alt="Two members in an honest, open mentorship conversation"
              ratio="aspect-[5/4]"
            />
          </Parallax>
        </div>
      </section>

      {/* -------------------------------- IMPACT ------------------------------- */}
      <section className="bg-cream-200 py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Rep For A Reason"
            title="Training that creates an impact beyond the gym."
            lede="As our community trains, we track collective effort and turn milestones into meaningful impact."
            align="center"
          />

          <div className="mt-16 grid gap-px overflow-hidden border border-forest-700/10 bg-forest-700/10 md:grid-cols-3">
            {[
              { value: 100000, label: 'Reps', prefix: '', suffix: '' },
              { value: 1000, label: 'Hours Of Work', prefix: '', suffix: '' },
              { value: 5000, label: 'Contributed To The Mission', prefix: '$', suffix: '' },
            ].map((stat) => (
              <Reveal key={stat.label}>
                <div className="bg-cream-100 p-10 text-center">
                  <p className="font-display text-4xl text-forest-800 md:text-5xl">
                    <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-widest2 text-gold-600">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-center gap-5 text-center">
              <p className="max-w-2xl body-lg">
                Through future charitable initiatives, a portion of company proceeds can
                support families navigating difficult beginnings — including families
                experiencing the NICU journey. We build ourselves while helping build
                something for others.
              </p>
              <Button href="/impact" variant="cream">
                The Mission Behind The Reps
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
