'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { NAV } from '@/lib/content';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-cream-200/10 bg-forest-950/90 py-3 backdrop-blur-xl'
            : 'border-b border-transparent py-6'
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <Logo dark size="md" />

          <div className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-[11px] font-semibold uppercase tracking-widest2 transition-colors duration-300 ${
                    active ? 'text-gold-300' : 'text-cream-100/75 hover:text-cream-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/join"
              className="hidden bg-gold-400 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest2 text-forest-900 transition-colors duration-300 hover:bg-gold-300 md:inline-block"
            >
              Join The Community
            </Link>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
            >
              <span
                className={`h-px w-6 bg-cream-100 transition-transform duration-300 ${
                  open ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-px w-6 bg-cream-100 transition-transform duration-300 ${
                  open ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-forest-950/98 px-6 pb-12 pt-32 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {[...NAV, { label: 'Join', href: '/join' }].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-cream-200/10 py-5 font-display text-3xl text-cream-100"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="mt-10 text-[11px] uppercase tracking-widest2 text-gold-300">
              Strength With Purpose.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
