import Link from 'next/link';

export function Logo({
  dark = false,
  size = 'md',
  href = '/',
}: {
  dark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  href?: string | null;
}) {
  const sizes = {
    sm: { elan: 'text-lg', forge: 'text-[8px]' },
    md: { elan: 'text-2xl', forge: 'text-[9px]' },
    lg: { elan: 'text-5xl md:text-7xl', forge: 'text-[11px] md:text-[13px]' },
  }[size];

  const content = (
    <span className="inline-flex flex-col items-start leading-none">
      <span
        className={`h-display ${sizes.elan} tracking-[0.12em] ${
          dark ? 'text-cream-100' : 'text-forest-800'
        }`}
      >
        ÉLAN
      </span>
      <span
        className={`mt-1 ${sizes.forge} font-semibold uppercase tracking-forge ${
          dark ? 'text-gold-300' : 'text-gold-500'
        }`}
      >
        FORGE
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Élan Forge — home" className="group">
      {content}
    </Link>
  );
}
