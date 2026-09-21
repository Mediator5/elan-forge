import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/Motion';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: {
    default: 'Élan Forge — Strength With Purpose',
    template: '%s · Élan Forge',
  },
  description: SITE.description,
  keywords: [
    'Élan Forge',
    'fitness mentorship',
    'small group training',
    'The Pressure Method',
    'strength with purpose',
    'community fitness',
  ],
  openGraph: {
    title: 'Élan Forge — Strength With Purpose',
    description: SITE.description,
    type: 'website',
    siteName: 'Élan Forge',
  },
  twitter: { card: 'summary_large_image' },
  metadataBase: new URL(SITE.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
