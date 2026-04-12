import { Metadata } from 'next';
import { SeoPage } from '@/src/components/SeoPage';

export const metadata: Metadata = {
  title: 'SEO-Optimierung | Rankprofit – Bessere Google Rankings',
  description: 'Professionelle SEO-Agentur. Wir übernehmen Ihre Suchmaschinenoptimierung vollständig – datengetrieben, nachhaltig und für jeden Tech-Stack. Jetzt SEO-Paket buchen.',
  openGraph: {
    title: 'SEO-Optimierung | Rankprofit',
    description: 'Datengetriebene Suchmaschinenoptimierung für nachhaltige Top-Rankings und organisches Wachstum. SEO-Pakete ab 499 €/Monat.',
    url: 'https://rankprofit.de/leistungen/seo',
    siteName: 'Rankprofit',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rankprofit.de/leistungen/seo',
  },
};

export default function SeoPageRoute() {
  return <SeoPage />;
}
