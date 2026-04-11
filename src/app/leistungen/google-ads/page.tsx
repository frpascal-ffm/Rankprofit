import { Metadata } from 'next';
import { ServicePageLayout, ServicePageData } from '@/src/components/ServicePageLayout';
import { Target, TrendingUp, PieChart, Megaphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google Ads & SEA | Rankprofit – Anzeigen mit maximalem ROI',
  description: 'Google Ads Agentur aus Aachen. Wir erstellen und optimieren hochprofitable Google Ads Kampagnen (Search, Display, Shopping) für messbare Neukundengewinnung und maximalen ROI.',
  openGraph: {
    title: 'Google Ads & SEA | Rankprofit',
    description: 'Hochprofitable Performance-Marketing-Kampagnen für gezielte und messbare Neukundengewinnung.',
    url: 'https://rankprofit.de/leistungen/google-ads',
    siteName: 'Rankprofit',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rankprofit.de/leistungen/google-ads',
  },
};

const data: ServicePageData = {
  badge: 'Google Ads & SEA',
  headlinePre: 'Anzeigen mit',
  headlineAccent: 'maximalem ROI.',
  subtitle: 'Wir schalten Google Ads Kampagnen, die Ihr Budget effizient einsetzen und planbar neue Kunden gewinnen – messbar, skalierbar und profitabel.',
  features: [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Search Ads',
      description: 'Textanzeigen, die genau dann erscheinen, wenn potenzielle Kunden aktiv nach Ihren Leistungen suchen.',
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Display & YouTube',
      description: 'Visuelle Kampagnen für Markenbekanntheit und Remarketing – Ihre Botschaft zur richtigen Zeit am richtigen Ort.',
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Präzises Targeting',
      description: 'Keywords, Zielgruppen, Standorte und Gerätekategorien – wir treffen Ihre Wunschkunden gezielt und effizient.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Conversion-Tracking',
      description: 'Lückenlose Erfassung aller Conversions – von Anrufen über Formulare bis zu Käufen. Kein Euro geht verloren.',
    },
  ],
  steps: [
    {
      title: 'Kampagnen-Setup',
      description: 'Keyword-Recherche, Anzeigentexte, Zielgruppenstruktur und Conversion-Tracking – wir bauen alles sauber auf.',
    },
    {
      title: 'Launch & Lernphase',
      description: 'Nach dem Start sammeln wir Daten und optimieren Gebote, Anzeigen und Keywords kontinuierlich.',
    },
    {
      title: 'Skalierung',
      description: 'Was funktioniert, wird skaliert. Wir erhöhen Budget gezielt dort, wo der ROI am stärksten ist.',
    },
  ],
  ctaHeadline: 'Mehr Kunden ab morgen.',
  ctaSubtitle: 'Wir zeigen Ihnen in einem kostenlosen Gespräch, wie viel Potenzial in Google Ads für Ihr Business steckt.',
};

export default function GoogleAdsPage() {
  return <ServicePageLayout data={data} />;
}
