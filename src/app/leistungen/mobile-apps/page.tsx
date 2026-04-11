import { Metadata } from 'next';
import { ServicePageLayout, ServicePageData } from '@/src/components/ServicePageLayout';
import { Smartphone, Apple, Layers, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile Apps | Rankprofit – Apps für iOS & Android',
  description: 'Native und plattformübergreifende Mobile Apps für iOS und Android. Wir entwickeln benutzerfreundliche App-Lösungen mit exzellenter UX und Performance – von der Idee bis zum App Store.',
  openGraph: {
    title: 'Mobile Apps | Rankprofit',
    description: 'Native und plattformübergreifende mobile Anwendungen für iOS und Android mit exzellenter UX.',
    url: 'https://rankprofit.de/leistungen/mobile-apps',
    siteName: 'Rankprofit',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rankprofit.de/leistungen/mobile-apps',
  },
};

const data: ServicePageData = {
  badge: 'Mobile Apps',
  headlinePre: 'Ihre App.',
  headlineAccent: 'Zwei Plattformen.',
  headlinePost: 'Ein Budget.',
  subtitle: 'Wir entwickeln leistungsstarke mobile Apps für iOS und Android – nativ oder plattformübergreifend mit React Native, immer mit exzellenter Nutzererfahrung.',
  features: [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'iOS & Android',
      description: 'Eine Codebasis, zwei Plattformen. Mit React Native erreichen wir beide App-Stores ohne doppelten Entwicklungsaufwand.',
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: 'Native Performance',
      description: 'Flüssige 60fps-Animationen, native Gesten und Komponenten – Ihre App fühlt sich an wie eine echte native Anwendung.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Backend & API',
      description: 'Wir entwickeln die passende Backend-Infrastruktur mit Authentifizierung, Push-Notifications und Cloud-Speicher.',
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'App Store Deployment',
      description: 'Wir begleiten Sie durch den gesamten Review-Prozess bei Apple und Google und sorgen für einen reibungslosen Launch.',
    },
  ],
  steps: [
    {
      title: 'Konzept & UX-Design',
      description: 'Wireframes, User Flows und klickbare Prototypen – Sie sehen und testen die App, bevor die Entwicklung startet.',
    },
    {
      title: 'Entwicklung & Testing',
      description: 'Agile Entwicklung mit regelmäßigen Testbuilds. Wir testen auf echten Geräten für iOS und Android.',
    },
    {
      title: 'Launch & Updates',
      description: 'Veröffentlichung in App Store und Google Play, gefolgt von regelmäßigen Updates und Feature-Erweiterungen.',
    },
  ],
  ctaHeadline: 'Ihre App-Idee wird Realität.',
  ctaSubtitle: 'Lassen Sie uns in einem kostenlosen Gespräch klären, welche App-Lösung am besten zu Ihrem Business passt.',
};

export default function MobileAppsPage() {
  return <ServicePageLayout data={data} />;
}
