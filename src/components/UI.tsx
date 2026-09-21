'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ux } from '@/lib/images';
import { Reveal } from './Motion';

/* --------------------------------- Button --------------------------------- */

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: 'gold' | 'outline' | 'cream';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  'group relative inline-flex items-center justify-center gap-3 overflow-hidden px-8 py-4 text-[11px] font-semibold uppercase tracking-widest2 transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  gold: 'bg-gold-400 text-forest-900 hover:bg-gold-300',
  outline:
    'border border-cream-200/40 text-cream-100 hover:border-gold-400 hover:text-gold-300',
  cream: 'bg-forest-700 text-cream-100 hover:bg-forest-600',
};

export function Button({
  href,
  children,
  variant = 'gold',
  className = '',
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 block h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

/* ----------------------------- Section heading ---------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <Reveal>
          <div
            className={`mb-5 flex items-center gap-4 ${
              align === 'center' ? 'justify-center' : ''
            }`}
          >
            <span className="h-px w-8 bg-gold-400" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`h-display text-balance text-[2rem] md:text-[3.1rem] ${
            dark ? 'text-cream-100' : 'text-forest-800'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 text-balance text-base leading-relaxed md:text-lg ${
              dark ? 'text-cream-200/70' : 'text-forest-700/75'
            }`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* -------------------------------- Art frame ------------------------------- */

export function Art({
  id,
  alt,
  className = '',
  ratio = 'aspect-[4/5]',
  width = 1200,
  priority = false,
  zoom = true,
}: {
  id: string;
  alt: string;
  className?: string;
  ratio?: string;
  width?: number;
  priority?: boolean;
  zoom?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-forest-900 ${ratio} ${className}`}>
      <Image
        src={ux(id, width)}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className={`object-cover transition-transform duration-[1400ms] ease-out ${
          zoom ? 'hover:scale-[1.06]' : ''
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent" />
    </div>
  );
}

/* --------------------------------- Marquee -------------------------------- */

export function Marquee({ words }: { words: string[] }) {
  const line = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-cream-200/10 bg-forest-900 py-6">
      <div className="flex w-[200%] animate-marquee gap-12 whitespace-nowrap">
        {line.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-[11px] font-semibold uppercase tracking-widest2 text-cream-200/45"
          >
            {w}
            <span className="h-1 w-1 rounded-full bg-gold-400" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- Chain / flow ----------------------------- */

export function Chain({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <span
            className={`text-[11px] font-semibold uppercase tracking-widest2 ${
              dark ? 'text-cream-100' : 'text-forest-800'
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && <span className="h-px w-8 bg-gold-400/70" />}
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------------- Page header ------------------------------ */

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  align?: 'left' | 'center';
}) {
  return (
    <header className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-forest-950 pb-16 pt-40 grain">
      <div className="absolute inset-0 -z-10">
        <Image
          src={ux(image, 1920)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/50" />
      </div>

      <div className="container-x">
        <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-6 flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}
          >
            <span className="h-px w-10 bg-gold-400" />
            <span className="eyebrow">{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="h-display text-balance text-[2.6rem] text-cream-100 md:text-[4.4rem]"
          >
            {title}
          </motion.h1>

          {lede && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`mt-7 text-balance text-base leading-relaxed text-cream-200/75 md:text-lg ${
                align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
              }`}
            >
              {lede}
            </motion.p>
          )}
        </div>
      </div>
    </header>
  );
}
