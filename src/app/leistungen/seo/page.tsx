import { Metadata } from 'next';
import { ServicePageLayout, ServicePageData } from '@/src/components/ServicePageLayout';
import { Search, TrendingUp, FileText, Link2, BarChart2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO-Optimierung | Rankprofit – Bessere Google Rankings',
  description: 'Professionelle SEO-Agentur aus Aachen. Wir verbessern Ihre Google Rankings durch datengetriebene On-Page-, Off-Page- und technische SEO-Strategien. Nachhaltig. Messbar. Ohne Tricks.',
  openGraph: {
    title: 'SEO-Optimierung | Rankprofit',
    description: 'Datengetriebene Suchmaschinenoptimierung für nachhaltige Top-Rankings und organisches Wachstum.',
    url: 'https://rankprofit.de/leistungen/seo',
    siteName: 'Rankprofit',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rankprofit.de/leistungen/seo',
  },
};

const data: ServicePageData = {
  badge: 'SEO-Optimierung',
  headlinePre: 'Besser',
  headlineAccent: 'ranken.',
  headlinePost: 'Mehr verkaufen.',
  subtitle: 'Datengetriebene Suchmaschinenoptimierung, die Ihre Website nachhaltig in den Top-Ergebnissen verankert – und echte Umsätze generiert.',
  features: [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Keyword-Strategie',
      description: 'Tiefgehende Keyword-Recherche mit Fokus auf Suchintention und kommerziellem Potenzial – keine Blindflüge.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'On-Page Optimierung',
      description: 'Titles, Meta-Descriptions, Headings, interne Verlinkung und Content – vollständig optimiert für Mensch und Suchmaschine.',
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: 'Linkbuilding',
      description: 'Qualitativ hochwertige Backlinks aus relevanten Domains stärken Ihre Domain Authority dauerhaft.',
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Technisches SEO',
      description: 'Core Web Vitals, strukturierte Daten, Crawlbarkeit und Indexierbarkeit – alles auf höchstem Niveau.',
    },
  ],
  steps: [
    {
      title: 'SEO-Audit',
      description: 'Vollständige Analyse Ihrer Website: technische Fehler, Content-Gaps, Backlink-Profil und Konkurrenzanalyse.',
    },
    {
      title: 'Strategie & Umsetzung',
      description: 'Wir erstellen einen klaren Maßnahmenplan und setzen ihn Schritt für Schritt um – transparent und nachvollziehbar.',
    },
    {
      title: 'Monitoring & Optimierung',
      description: 'Rankings, Traffic und Conversions werden laufend überwacht. Wir optimieren kontinuierlich auf Basis echter Daten.',
    },
  ],
  ctaHeadline: 'Bereit für Top-Rankings?',
  ctaSubtitle: 'Lassen Sie uns Ihre SEO-Potenziale in einem kostenlosen Erstgespräch analysieren.',
};

export default function SeoPage() {
  return <ServicePageLayout data={data} />;
}
