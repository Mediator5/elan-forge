'use client';

import { ReactNode, useRef } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------------------------- Reveal --------------------------------- */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- Stagger -------------------------------- */

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export function Stagger({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* ------------------------------- Split words ------------------------------- */

export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${wordClassName ?? ''}`}
            initial={{ y: '105%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: EASE }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/* -------------------------------- Parallax -------------------------------- */

export function Parallax({
  children,
  distance = 70,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smooth = useSpring(y, { stiffness: 80, damping: 22, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: smooth }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* --------------------------------- Counter -------------------------------- */

export function Counter({
  to,
  duration = 1.8,
  prefix = '',
  suffix = '',
  className,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.2 }}
      >
        {inView ? <Tally to={to} duration={duration} /> : 0}
      </motion.span>
      {suffix}
    </span>
  );
}

function Tally({ to, duration }: { to: number; duration: number }) {
  const progress = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(progress, (v) => Math.round(v).toLocaleString('en-US'));
  progress.set(to);
  return <motion.span>{rounded}</motion.span>;
}

/* ----------------------------- Scroll progress ---------------------------- */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500"
      aria-hidden
    />
  );
}
