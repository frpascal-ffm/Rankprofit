import { Metadata } from 'next';
import { WebdesignPage } from '@/src/components/WebdesignPage';

export const metadata: Metadata = {
  title: 'Webdesign & UI/UX | Rankprofit – Conversion-optimierte Websites',
  description: 'Professionelles Webdesign und UI/UX-Design aus Aachen. Wir entwickeln conversion-optimierte, schnelle Websites, die Besucher in Kunden verwandeln. Jetzt kostenlose Beratung sichern.',
  openGraph: {
    title: 'Webdesign & UI/UX | Rankprofit',
    description: 'Conversion-optimierte Websites und modernes UI/UX-Design – von der ersten Skizze bis zum Launch.',
    url: 'https://rankprofit.de/leistungen/webdesign',
    siteName: 'Rankprofit',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rankprofit.de/leistungen/webdesign',
  },
};

export default function WebdesignPageRoute() {
  return <WebdesignPage />;
}
