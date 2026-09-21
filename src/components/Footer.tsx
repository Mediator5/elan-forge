import Link from 'next/link';
import { NAV, SITE } from '@/lib/content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-cream-200/10 bg-forest-950 pb-10 pt-20">
      <div className="container-x">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo dark size="lg" href={null} />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream-200/60">
              {SITE.tagline} Move with intention. Grow with others. Live with momentum.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-widest2 text-gold-300">
              Train the body. Shape the mind. Strengthen the community.
            </p>
          </div>

          <div>
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-6 space-y-3">
              {[...NAV, { label: 'Join', href: '/join' }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-cream-200/70 transition-colors hover:text-cream-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Connect</h3>
            <ul className="mt-6 space-y-3 text-sm text-cream-200/70">
              <li>
                <a href={`mailto:${SITE.email}`} className="link-underline hover:text-cream-100">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`} className="link-underline hover:text-cream-100">
                  {SITE.phone}
                </a>
              </li>
              <li className="pt-2 text-cream-200/50">{SITE.location}</li>
            </ul>
            <div className="mt-7 flex gap-5">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[11px] uppercase tracking-widest2 text-cream-200/55 transition-colors hover:text-gold-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream-200/10 pt-8 text-[11px] uppercase tracking-widest2 text-cream-200/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Élan Forge</p>
          <p>The Pressure Method™ · Rep For A Reason</p>
        </div>
      </div>
    </footer>
  );
}
