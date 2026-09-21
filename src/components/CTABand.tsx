import Image from 'next/image';
import { ux, IMG } from '@/lib/images';
import { Button, SectionHeading } from './UI';
import { Reveal } from './Motion';

export function CTABand({
  eyebrow = 'Your Next Chapter',
  title = 'Come build something stronger.',
  lede = 'Your body. Your character. Your confidence. Your community. Your purpose. One workout, one conversation, one connection at a time.',
  image = IMG.join,
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 py-28 md:py-36 grain">
      <div className="absolute inset-0 -z-10">
        <Image
          src={ux(image, 1920)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-950/85 to-forest-900/70" />
      </div>

      <div className="container-x text-center">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} align="center" dark />
        <Reveal delay={0.24}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/join" variant="gold">
              Become A Member
            </Button>
            <Button href="/schedule" variant="outline">
              See The Weekly Rhythm
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="mt-9 text-[11px] uppercase tracking-widest2 text-cream-200/40">
            Move with intention · Grow with others · Live with momentum
          </p>
        </Reveal>
      </div>
    </section>
  );
}
