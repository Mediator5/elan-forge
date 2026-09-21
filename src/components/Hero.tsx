'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IMG, ux } from '@/lib/images';
import { Button } from './UI';
import { SplitWords } from './Motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-950 pb-14 pt-36 grain"
    >
      <motion.div style={{ y: bgY, scale }} className="absolute inset-0 -z-10">
        <Image
          src={ux(IMG.heroPrimary, 2000)}
          alt="Athlete training with focus and intensity"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/75 to-forest-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(194,161,90,0.16),transparent_55%)]" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold-400" />
          <span className="eyebrow">Fitness · Mentorship · Community</span>
        </motion.div>

        <div className="max-w-5xl">
          <h1 className="h-display text-[3.4rem] leading-[0.88] text-cream-100 sm:text-[5rem] lg:text-[7.2rem]">
            <SplitWords text="Strength" className="block" />
            <span className="block text-gold-400">
              <SplitWords text="With Purpose." delay={0.12} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: EASE }}
            className="mt-9 max-w-xl text-base leading-relaxed text-cream-200/75 md:text-lg"
          >
            Build a stronger body. Develop a clearer purpose. Become part of a community
            that helps you keep moving forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/join" variant="gold">
              Join The Élan Community
            </Button>
            <Button href="/training" variant="outline">
              The Pressure Method™
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid gap-6 border-t border-cream-200/10 pt-8 sm:grid-cols-3"
        >
          {[
            ['Train The Body', 'Intelligent programming, relentless consistency.'],
            ['Shape The Mind', 'Mentorship, accountability, honest conversation.'],
            ['Strengthen The Community', 'Show up for yourself and for others.'],
          ].map(([title, body], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 + i * 0.12, ease: EASE }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-300">
                {title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream-200/55">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-8 right-6 hidden items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-widest2 text-cream-200/40">Scroll</span>
        <span className="relative block h-16 w-px overflow-hidden bg-cream-200/20">
          <motion.span
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-x-0 h-8 bg-gold-400"
          />
        </span>
      </motion.div>
    </section>
  );
}
