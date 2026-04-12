'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight, ArrowLeft, Check, ChevronDown,
  Search, FileText, Link2, BarChart2, MapPin, PenTool,
  ExternalLink,
} from 'lucide-react';
import { SectionReveal, SectionTitle } from './SectionReveal';
import { Magnetic } from './Magnetic';
import { useFormModal } from '@/src/contexts/FormModalContext';

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const { openModal } = useFormModal();

  useEffect(() => {
    const els = [badgeRef.current, headlineRef.current, subtitleRef.current, statsRef.current, actionsRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.filter = 'blur(6px)';
      const delay = i * 0.12;
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.transition = `opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease`;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.filter = 'blur(0)';
        }, delay * 1000);
      });
    });
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(248,250,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div ref={badgeRef}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8">
            SEO-Optimierung
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-8"
        >
          Mehr organischer Traffic.{' '}
          <span className="text-gradient-accent">Mehr Umsatz.</span>
        </h1>

        <p ref={subtitleRef} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Wir übernehmen Ihre Suchmaschinenoptimierung vollständig – datengetrieben, nachhaltig und technologieunabhängig. Sie konzentrieren sich auf Ihr Geschäft, wir kümmern uns um Ihre Rankings.
        </p>

        <div ref={statsRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { value: '100+ Keywords', label: 'pro Kunde optimiert' },
            { value: 'Jeder Tech-Stack', label: 'WordPress, Shopify & mehr' },
            { value: 'ab 60 Tagen', label: 'erste messbare Ergebnisse' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-sm"
            >
              <span className="font-semibold text-white">{stat.value}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>

        <div ref={actionsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Magnetic strength={0.2}>
            <button
              type="button"
              onClick={() => openModal('seo')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
            >
              Jetzt Paket anfragen
              <ArrowRight className="w-4 h-4" />
            </button>
          </Magnetic>
          <Link
            href="/#services"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 text-slate-300 font-medium text-sm hover:border-slate-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Alle Leistungen
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Was ist SEO ──────────────────────────────────────────────────────────────

const seoComponents = [
  { icon: <Search className="w-4 h-4" />, label: 'Keyword-Strategie & Recherche' },
  { icon: <FileText className="w-4 h-4" />, label: 'On-Page-Optimierung' },
  { icon: <Link2 className="w-4 h-4" />, label: 'Off-Page & Linkbuilding' },
  { icon: <BarChart2 className="w-4 h-4" />, label: 'Technisches SEO' },
  { icon: <MapPin className="w-4 h-4" />, label: 'Local SEO & Google Maps' },
  { icon: <PenTool className="w-4 h-4" />, label: 'Content-Optimierung' },
];

function WhatIsSeoSection() {
  return (
    <section className="py-24 relative blend-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionReveal direction="left">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6">
              Mehr als nur{' '}
              <span className="text-gradient-accent">Keywords</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              Suchmaschinenoptimierung ist das Zusammenspiel aus technischer Exzellenz, relevanten Inhalten und Autorität. Wer bei Google oben steht, gewinnt – wer nicht, existiert für den Großteil der Nutzer schlicht nicht.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Wir analysieren Ihre Website von Grund auf, entwickeln eine Strategie mit konkreten Maßnahmen und setzen diese systematisch um. Transparent, messbar und ohne kurzlebige Tricks.
            </p>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {seoComponents.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

// ─── Warum SEO ────────────────────────────────────────────────────────────────

const benefits = [
  {
    stat: '68 %',
    title: 'Klicks gehen an Top-3',
    description: 'Mehr als zwei Drittel aller Klicks landen bei den ersten drei organischen Ergebnissen. Wer nicht vorne ist, wird kaum gefunden.',
  },
  {
    stat: '1.000 %',
    title: 'Mehr Traffic als Paid',
    description: 'SEO generiert im Vergleich zu bezahlter Werbung rund zehnmal so viel organischen Traffic – dauerhaft und ohne laufende Werbekosten.',
  },
  {
    stat: '14,6 %',
    title: 'Conversion organischer Leads',
    description: 'Organische Suchbesucher konvertieren im Schnitt deutlich besser als Nutzer aus Paid-Kanälen – sie suchen aktiv nach Ihrer Lösung.',
  },
  {
    stat: '53 %',
    title: 'Aller Traffic ist organisch',
    description: 'Mehr als die Hälfte des gesamten Website-Traffics weltweit kommt aus der organischen Suche – der größte und nachhaltigste Kanal.',
  },
  {
    stat: '3,8×',
    title: 'Durchschnittlicher ROI',
    description: 'SEO gehört zu den Marketingkanälen mit dem besten Return on Investment – besonders bei konsequenter Umsetzung über 12+ Monate.',
  },
  {
    stat: '0 €',
    title: 'Kosten pro Klick',
    description: 'Im Gegensatz zu Google Ads zahlen Sie keinen Cent pro Klick. Einmal gut platziert – dauerhaft kostenloser Traffic auf Ihre Website.',
  },
];

function BenefitsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle title="Warum SEO unverzichtbar ist" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <SectionReveal key={i} delay={i * 0.08} direction="up">
              <div className="group h-full bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-slate-800 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500" />
                <p className="text-4xl font-display font-bold text-emerald-400 mb-4 relative z-10">
                  {benefit.stat}
                </p>
                <h3 className="text-base font-display font-semibold text-white mb-3 relative z-10 group-hover:text-emerald-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm relative z-10">
                  {benefit.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pakete / Preise ──────────────────────────────────────────────────────────

const packages = [
  {
    name: 'Starter',
    price: '499',
    tagline: 'Ideal für lokale Unternehmen & Einsteiger',
    highlight: false,
    features: [
      'Einmaliger SEO-Audit',
      'On-Page-Optimierung (bis 10 Seiten)',
      'Keyword-Recherche & Monitoring',
      'Google Search Console Setup',
      'Monatlicher Report',
      'Support per E-Mail',
    ],
    cta: 'Starter anfragen',
  },
  {
    name: 'Growth',
    price: '999',
    tagline: 'Für wachsende Online-Shops & Dienstleister',
    highlight: true,
    features: [
      'Alles aus Starter',
      'Linkbuilding (5 Backlinks/Monat)',
      'Content-Optimierung (bis 30 Seiten)',
      'Technisches SEO (Core Web Vitals, Schema)',
      'Lokales SEO & Google Maps',
      'Wöchentliches Reporting + monatl. Call',
    ],
    cta: 'Growth anfragen',
  },
  {
    name: 'Enterprise',
    price: null,
    tagline: 'Für große Portale, Shops & Konzerne',
    highlight: false,
    features: [
      'Alles aus Growth',
      'Dedizierter SEO-Manager',
      'Contentproduktion (Texte, Blogartikel)',
      'Individuelle KPIs & SLA',
      'Quartalsweise Strategiemeetings',
      'Wettbewerbsanalyse & Marktbeobachtung',
    ],
    cta: 'Anfrage stellen',
  },
];

function PricingSection() {
  const { openModal } = useFormModal();

  return (
    <section className="py-24 relative blend-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle title="SEO-Pakete" subtitle="Transparente Preise. Keine versteckten Kosten. Kündbar mit 30 Tagen Frist nach Mindestlaufzeit." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg, i) => (
            <SectionReveal key={i} delay={i * 0.1} direction="up">
              <div
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-slate-900 border-2 border-emerald-500/50 shadow-[0_0_60px_rgba(16,185,129,0.12)]'
                    : 'bg-slate-900 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 shadow-[0_4px_20px_rgba(16,185,129,0.4)]">
                      Empfohlen
                    </span>
                  </div>
                )}

                {/* Background glow for highlighted */}
                {pkg.highlight && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  <p className={`text-sm font-semibold tracking-wide uppercase mb-4 ${pkg.highlight ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {pkg.name}
                  </p>

                  <div className="mb-3">
                    {pkg.price ? (
                      <div className="flex items-end gap-1">
                        <span className="text-5xl font-display font-bold text-white">{pkg.price}</span>
                        <span className="text-xl font-medium text-slate-300 mb-1">€</span>
                        <span className="text-slate-400 mb-1 text-sm">/ Monat</span>
                      </div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="text-5xl font-display font-bold text-white">Individuell</span>
                      </div>
                    )}
                  </div>

                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <ul className="space-y-3 mb-10 flex-grow">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.highlight ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-emerald-400'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openModal('seo', { package: pkg.name })}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-colors ${
                      pkg.highlight
                        ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_8px_30px_rgba(16,185,129,0.3)]'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <p className="text-center text-slate-500 text-sm mt-8">
            Mindestlaufzeit 3 Monate · Alle Preise zzgl. MwSt. · Kostenlose Erstberatung inklusive
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

// ─── Prozess ──────────────────────────────────────────────────────────────────

const processSteps = [
  {
    title: 'SEO-Audit',
    description: 'Vollständige Analyse Ihrer Website: technische Fehler, Content-Gaps, Backlink-Profil, Seitengeschwindigkeit und Konkurrenzvergleich.',
  },
  {
    title: 'Keyword-Strategie',
    description: 'Wir identifizieren die wertvollsten Keywords mit dem besten Verhältnis aus Suchvolumen, Wettbewerb und Kaufabsicht.',
  },
  {
    title: 'Technische Optimierung',
    description: 'Core Web Vitals, strukturierte Daten, Crawlbarkeit, interne Verlinkung und Indexierbarkeit – das Fundament für alles Weitere.',
  },
  {
    title: 'On-Page & Content',
    description: 'Titles, Meta-Tags, Headings, Texte und Medien werden optimiert – für Suchmaschinen und vor allem für Ihre Nutzer.',
  },
  {
    title: 'Linkbuilding',
    description: 'Qualitativ hochwertige Backlinks aus themenrelevanten, vertrauenswürdigen Domains stärken Ihre Domain Authority dauerhaft.',
  },
  {
    title: 'Monitoring & Reporting',
    description: 'Rankings, Traffic und Conversions werden kontinuierlich überwacht. Sie erhalten regelmäßige Reports mit klaren Handlungsempfehlungen.',
  },
];

function ProcessSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle title="Unser SEO-Prozess" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {processSteps.map((step, i) => (
            <SectionReveal key={i} delay={i * 0.1} direction="up">
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 font-display font-bold text-base flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex-shrink-0">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tech-Stack-Kompatibilität ────────────────────────────────────────────────

const platforms = [
  'WordPress', 'Shopify', 'Next.js', 'Webflow',
  'TYPO3', 'Wix', 'Squarespace', 'Magento',
  'WooCommerce', 'Drupal', 'Joomla', 'Custom CMS',
];

function TechStackSection() {
  return (
    <section className="py-24 relative blend-section">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-10 md:p-16 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-4 text-center">
                SEO funktioniert mit{' '}
                <span className="text-gradient-accent">jedem Tech-Stack</span>
              </h2>
              <p className="text-slate-400 text-center mb-10 text-lg max-w-2xl mx-auto">
                Egal ob WordPress-Blog, Shopify-Shop oder maßgeschneiderte Next.js-App – wir optimieren technologieunabhängig und kennen die Besonderheiten jeder Plattform.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {platforms.map((platform, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:border-emerald-500/30 hover:text-white transition-colors duration-200"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {/* External tool banner */}
              <div className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-emerald-500/8 border border-emerald-500/20">
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <p className="text-slate-300 text-sm">
                  <span className="font-semibold text-white">Tipp:</span> Wir betreiben auch ein eigenes SEO-Analyse-Tool.{' '}
                  {/* TODO: URL einfügen */}
                  <a
                    href="#"
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                  >
                    Jetzt kostenlos testen →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: 'Wie lange dauert es, bis ich erste SEO-Ergebnisse sehe?',
    answer: 'Erste Bewegungen bei Rankings und Traffic sind in der Regel nach 4–8 Wochen sichtbar. Signifikante, nachhaltige Ergebnisse entstehen typischerweise nach 3–6 Monaten. SEO ist eine Investition, die sich langfristig auszahlt – keine Werbeanzeige mit sofortiger Wirkung.',
  },
  {
    question: 'Was ist im monatlichen Paketpreis enthalten?',
    answer: 'Je nach Paket beinhaltet das laufende Keyword-Monitoring, On-Page-Optimierungen, Linkbuilding, technische SEO-Maßnahmen und regelmäßige Reports. Den genauen Leistungsumfang sehen Sie in der Paketübersicht – bei Fragen sprechen wir das im kostenlosen Erstgespräch durch.',
  },
  {
    question: 'Brauche ich für gutes SEO auch eine neue Website?',
    answer: 'Nicht zwingend. Wir optimieren Ihre bestehende Website, solange die technische Basis es erlaubt. Wenn Ihre Seite jedoch grundlegende Probleme hat (sehr langsam, nicht responsiv, veraltete Technik), kann ein Relaunch die schnellere Lösung sein. Das klären wir im Audit.',
  },
  {
    question: 'Gibt es eine Mindestlaufzeit?',
    answer: 'Ja, wir arbeiten mit einer Mindestlaufzeit von 3 Monaten. Der Grund ist einfach: SEO braucht Zeit, um Wirkung zu zeigen. Kurzfristige Maßnahmen sind selten sinnvoll. Danach ist monatliche Kündigung mit 30 Tagen Frist möglich.',
  },
  {
    question: 'Macht ihr auch lokales SEO?',
    answer: 'Ja, Local SEO ist ein eigener Schwerpunkt – besonders für Unternehmen mit lokalem Kundenstamm. Das umfasst Google My Business Optimierung, lokale Keyword-Strategie, Einträge in relevanten Verzeichnissen und Reviews-Management.',
  },
  {
    question: 'Was macht Rankprofit anders als andere SEO-Agenturen?',
    answer: 'Wir kombinieren SEO mit tiefem technischem Know-how (wir entwickeln selbst Websites und Tools), arbeiten vollständig transparent und liefern keine Berichte voller Buzzwords, sondern klare Zahlen und Handlungsempfehlungen. Kein Outsourcing, kein Copy-Paste – jede Strategie ist individuell.',
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <SectionTitle title="Häufige Fragen" />

        <div className="divide-y divide-slate-800 border border-slate-800 rounded-3xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left hover:bg-slate-900/60 transition-colors duration-200"
              >
                <span className="font-medium text-slate-200 text-sm md:text-base leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className="w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '400px' : '0px' }}
              >
                <p className="px-7 pb-6 text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CtaSection() {
  const { openModal } = useFormModal();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/8 blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-teal-500/10 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-emerald-500/10 blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <SectionReveal>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            Bereit für{' '}
            <span className="text-gradient-accent">Top-Rankings?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Lassen Sie uns Ihre SEO-Potenziale in einem kostenlosen Erstgespräch analysieren – unverbindlich, konkret und ohne Verkaufsdruck.
          </p>
          <Magnetic strength={0.2}>
            <button
              type="button"
              onClick={() => openModal('seo')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-slate-950 font-semibold text-base hover:bg-emerald-400 transition-colors shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="w-5 h-5" />
            </button>
          </Magnetic>
          <p className="text-slate-500 text-sm mt-5">
            Keine Mindestlaufzeit im Erstgespräch · 100 % unverbindlich
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function SeoPage() {
  return (
    <main>
      <HeroSection />
      <WhatIsSeoSection />
      <BenefitsSection />
      <PricingSection />
      <ProcessSection />
      <TechStackSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
