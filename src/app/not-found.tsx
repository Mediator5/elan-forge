import Link from 'next/link';
import Image from 'next/image';
import { IMG, ux } from '@/lib/images';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-forest-950 grain">
      <div className="absolute inset-0 -z-10">
        <Image
          src={ux(IMG.heroTertiary, 1600)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-forest-950/80" />
      </div>

      <div className="container-x text-center">
        <p className="eyebrow">Off The Program</p>
        <h1 className="mt-6 h-display text-4xl text-cream-100 md:text-6xl">
          This page isn&apos;t part of the rhythm.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream-200/65">
          Let&apos;s get you back to something worth building.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block bg-gold-400 px-8 py-4 text-[11px] font-semibold uppercase tracking-widest2 text-forest-900 transition-colors hover:bg-gold-300"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}
