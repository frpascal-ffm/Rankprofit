import { Metadata } from 'next';
import { ServicePageLayout, ServicePageData } from '@/src/components/ServicePageLayout';
import { Cpu, Shield, Users, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Webanwendungen | Rankprofit – Individuelle Software im Browser',
  description: 'Maßgeschneiderte Webanwendungen und Portale aus Aachen. Wir entwickeln skalierbare Browser-Applikationen für komplexe Business-Prozesse – von der Konzeption bis zum Betrieb.',
  openGraph: {
    title: 'Webanwendungen | Rankprofit',
    description: 'Maßgeschneiderte, skalierbare Web-Applikationen und Portale für komplexe Business-Prozesse.',
    url: 'https://rankprofit.de/leistungen/webanwendungen',
    siteName: 'Rankprofit',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rankprofit.de/leistungen/webanwendungen',
  },
};

const data: ServicePageData = {
  badge: 'Webanwendungen',
  headlinePre: 'Software, die',
  headlineAccent: 'skaliert.',
  subtitle: 'Individuelle Webanwendungen, die exakt auf Ihre Geschäftsprozesse zugeschnitten sind – robust, sicher und für Tausende von Nutzern ausgelegt.',
  features: [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Maßgeschneiderte Entwicklung',
      description: 'Keine Kompromisse durch Standard-Software. Wir entwickeln genau das, was Ihr Business braucht – nicht mehr, nicht weniger.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sicherheit & Performance',
      description: 'Authentifizierung, Autorisierung, Datenverschlüsselung und optimierte Datenbankabfragen – alles nach Best Practices.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-User & Rollen',
      description: 'Von einfachen Login-Bereichen bis zu komplexen Berechtigungssystemen mit mehreren Nutzerrollen und Teams.',
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'API-Integrationen',
      description: 'Anbindung an ERP, CRM, Zahlungsanbieter oder externe Dienste – nahtlos und zuverlässig.',
    },
  ],
  steps: [
    {
      title: 'Anforderungsanalyse',
      description: 'Wir erfassen alle Anforderungen, definieren User Stories und erstellen ein technisches Konzept, das keine Fragen offen lässt.',
    },
    {
      title: 'Agile Entwicklung',
      description: 'In Sprints entwickeln wir schrittweise und zeigen Ihnen regelmäßig Fortschritte – Sie behalten stets die Kontrolle.',
    },
    {
      title: 'Deploy & Betrieb',
      description: 'Nach dem Launch übernehmen wir Hosting, Monitoring und Updates – damit Sie sich um Ihr Kerngeschäft kümmern können.',
    },
  ],
  ctaHeadline: 'Ihre Idee als Software.',
  ctaSubtitle: 'Teilen Sie uns Ihre Anforderungen mit – wir zeigen Ihnen, wie wir sie in eine leistungsstarke Webanwendung umsetzen.',
};

export default function WebanwendungenPage() {
  return <ServicePageLayout data={data} />;
}
