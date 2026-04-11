import { Metadata } from 'next';
import { ServicePageLayout, ServicePageData } from '@/src/components/ServicePageLayout';
import { Bot, Workflow, Zap, BrainCircuit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'KI-Automatisierungen | Rankprofit – Intelligente Workflows & Agenten',
  description: 'KI-Automatisierung für Unternehmen. Wir entwickeln intelligente Workflows und KI-Agenten, die manuelle Prozesse eliminieren, Kosten senken und Ihr Team für wichtigere Aufgaben freimachen.',
  openGraph: {
    title: 'KI-Automatisierungen | Rankprofit',
    description: 'Intelligente Workflows und KI-Agenten, die manuelle Prozesse reduzieren und die Effizienz steigern.',
    url: 'https://rankprofit.de/leistungen/ki-automatisierung',
    siteName: 'Rankprofit',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rankprofit.de/leistungen/ki-automatisierung',
  },
};

const data: ServicePageData = {
  badge: 'KI-Automatisierungen',
  headlinePre: 'Arbeiten Sie',
  headlineAccent: 'smarter.',
  subtitle: 'Wir automatisieren repetitive Prozesse mit KI und intelligenten Workflows – damit Ihr Team Zeit für das gewinnt, was wirklich zählt.',
  features: [
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'KI-Agenten',
      description: 'Autonome Agenten, die Aufgaben selbstständig erledigen – von der E-Mail-Beantwortung bis zur Lead-Qualifizierung.',
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Workflow-Automatisierung',
      description: 'Wiederkehrende Prozesse werden vollständig automatisiert – zuverlässig, rund um die Uhr und ohne menschliche Fehler.',
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: 'LLM-Integration',
      description: 'Wir integrieren leistungsstarke Sprachmodelle wie GPT-4 oder Claude in Ihre bestehenden Tools und Systeme.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'API & Tool-Vernetzung',
      description: 'CRM, E-Mail, Slack, Datenbanken – wir verbinden alle Ihre Systeme zu einem reibungslos funktionierenden Ökosystem.',
    },
  ],
  steps: [
    {
      title: 'Prozessanalyse',
      description: 'Wir identifizieren gemeinsam mit Ihnen, welche Prozesse das größte Automatisierungspotenzial haben.',
    },
    {
      title: 'Entwicklung & Test',
      description: 'Wir bauen und testen die Automatisierungen in einer sicheren Umgebung – ohne Risiko für Ihren laufenden Betrieb.',
    },
    {
      title: 'Rollout & Support',
      description: 'Nach dem Launch begleiten wir Sie – mit Schulungen, Monitoring und kontinuierlicher Optimierung.',
    },
  ],
  ctaHeadline: 'Prozesse, die sich selbst erledigen.',
  ctaSubtitle: 'Entdecken Sie in einem kostenlosen Gespräch, wie viel Zeit und Geld Automatisierung Ihrem Unternehmen spart.',
};

export default function KiAutomatisierungPage() {
  return <ServicePageLayout data={data} />;
}
