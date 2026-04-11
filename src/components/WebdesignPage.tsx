'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight, ArrowLeft, Check, ChevronDown,
  Layout, Zap, BarChart2, Smartphone, Palette, Code2,
  Grid, Navigation, MousePointer, Eye,
} from 'lucide-react';
import { SectionReveal, SectionTitle } from './SectionReveal';
import { Magnetic } from './Magnetic';

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

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
            Webdesign & UI/UX
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-8"
        >
          Websites, die{' '}
          <span className="text-gradient-accent">konvertieren.</span>
        </h1>

        <p ref={subtitleRef} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Wir entwerfen und entwickeln hochperformante Websites, die nicht nur gut aussehen – sondern Besucher systematisch in Kunden verwandeln.
        </p>

        <div ref={statsRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { value: '50+', label: 'Projekte umgesetzt' },
            { value: 'Next.js & React', label: 'Modernster Tech-Stack' },
            { value: '4.9 / 5', label: 'Kundenbewertung' },
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
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
            >
              Jetzt Projekt starten
              <ArrowRight className="w-4 h-4" />
            </Link>
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

// ─── Was ist Webdesign ────────────────────────────────────────────────────────

const designComponents = [
  { icon: <Grid className="w-4 h-4" />, label: 'Layout & Seitenstruktur' },
  { icon: <Palette className="w-4 h-4" />, label: 'Farbpsychologie & Typografie' },
  { icon: <Smartphone className="w-4 h-4" />, label: 'Responsive Design' },
  { icon: <Navigation className="w-4 h-4" />, label: 'Intuitive Navigation' },
  { icon: <Eye className="w-4 h-4" />, label: 'Visuelle Hierarchie' },
  { icon: <MousePointer className="w-4 h-4" />, label: 'CTA-Gestaltung & Nutzerführung' },
];

function WhatIsWebdesignSection() {
  return (
    <section className="py-24 relative blend-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionReveal direction="left">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6">
              Mehr als nur{' '}
              <span className="text-gradient-accent">Ästhetik</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              Webdesign ist die strategische Gestaltung digitaler Erlebnisse – weit über reine Optik hinaus. Es geht darum, wie Nutzer eine Website wahrnehmen, navigieren und letztlich handeln.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Ein durchdachtes Design schafft Vertrauen, lenkt die Aufmerksamkeit gezielt und führt Besucher Schritt für Schritt zur gewünschten Aktion – ob Kauf, Anfrage oder Kontakt.
            </p>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {designComponents.map((item, i) => (
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

// ─── Warum professionelles Webdesign ─────────────────────────────────────────

const benefits = [
  {
    stat: '75 %',
    title: 'Glaubwürdigkeit durch Design',
    description: 'Drei Viertel aller Nutzer beurteilen die Seriosität eines Unternehmens allein anhand des ersten visuellen Eindrucks seiner Website.',
  },
  {
    stat: '53 %',
    title: 'Verlassen bei langer Ladezeit',
    description: 'Mehr als die Hälfte aller Besucher springt ab, wenn eine Seite länger als drei Sekunden braucht – professionelles Webdesign schließt Performance ein.',
  },
  {
    stat: '200 %',
    title: 'Mehr Conversions möglich',
    description: 'Gezielt optimierte Nutzerführung, klare CTAs und ein stimmiges Layout können die Abschlussrate gegenüber Standardlösungen verdoppeln – oder mehr.',
  },
  {
    stat: '63 %',
    title: 'Mobile Suchen weltweit',
    description: 'Die Mehrheit aller Suchanfragen kommt vom Smartphone. Wer hier schlecht aussieht oder langsam lädt, verliert Kunden noch vor dem ersten Klick.',
  },
  {
    stat: '88 %',
    title: 'Kehren nach schlechter UX nie zurück',
    description: 'Fast neun von zehn Nutzern besuchen eine Website nicht ein zweites Mal, wenn die erste Erfahrung frustrierend oder verwirrend war.',
  },
  {
    stat: '↑ SEO',
    title: 'Design beeinflusst Rankings',
    description: 'Google bewertet Ladegeschwindigkeit, mobile Nutzbarkeit und Verweildauer. Gutes Webdesign verbessert damit direkt Ihre Sichtbarkeit in den Suchergebnissen.',
  },
];

function BenefitsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle title="Warum professionelles Webdesign?" />

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

// ─── Prozess ──────────────────────────────────────────────────────────────────

const processSteps = [
  {
    title: 'Analyse & Briefing',
    description: 'Wir lernen Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele kennen. Marktanalyse, Wettbewerbsvergleich und ein strukturiertes Briefing bilden die Grundlage.',
  },
  {
    title: 'Konzept & Wireframes',
    description: 'Wir entwickeln die Informationsarchitektur, erstellen eine Sitemap und skizzieren die wichtigsten Seiten als Wireframes – schnell, iterativ und greifbar.',
  },
  {
    title: 'Design & Prototyp',
    description: 'Das finale Design entsteht im Detail – Farben, Typografie, Icons, Animationen. Sie sehen und fühlen Ihre neue Website, bevor eine Zeile Code geschrieben wird.',
  },
  {
    title: 'Entwicklung',
    description: 'Unser Entwicklungsteam setzt das Design pixelgenau um – mit Next.js, React und einem Fokus auf Performance, Barrierefreiheit und sauberen Code.',
  },
  {
    title: 'Testing & Launch',
    description: 'Vor dem Go-live testen wir auf allen Geräten und Browsern, prüfen Ladezeiten und nehmen letzte Feinanpassungen vor. Der Launch läuft kontrolliert und reibungslos.',
  },
  {
    title: 'Support & Weiterentwicklung',
    description: 'Nach dem Launch stehen wir weiterhin an Ihrer Seite – für Inhaltsänderungen, neue Features, Performance-Monitoring und strategische Weiterentwicklung.',
  },
];

function ProcessSection() {
  return (
    <section className="py-24 relative blend-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle title="Unser Prozess" />

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

// ─── Was Sie erhalten ─────────────────────────────────────────────────────────

const deliverables = [
  'Individuelles Design – kein Template',
  'Vollständig responsiv auf allen Geräten',
  'SEO-technisch sauber aufgebaut',
  'Ladezeit unter 2 Sekunden',
  'DSGVO-konform & barrierefrei',
  'CMS-Integration auf Wunsch',
  'Unbegrenzte Revisionsrunden im Prozess',
  '12 Monate Support nach Launch',
];

function DeliverablesSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="relative rounded-3xl bg-slate-900 border border-emerald-500/20 p-10 md:p-16 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-3 text-center">
                Was Sie{' '}
                <span className="text-gradient-accent">erhalten</span>
              </h2>
              <p className="text-slate-400 text-center mb-12 text-lg">
                Jedes Webdesign-Projekt bei Rankprofit beinhaltet standardmäßig:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
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
    question: 'Was kostet eine professionelle Website?',
    answer: 'Der Preis hängt vom Umfang, der Komplexität und den gewünschten Funktionen ab. Eine einfache Unternehmenswebsite beginnt bei ca. 2.500 €, umfangreichere Projekte mit individuellen Funktionen entsprechend mehr. In einem kostenlosen Erstgespräch erstellen wir Ihnen ein transparentes Angebot.',
  },
  {
    question: 'Wie lange dauert die Umsetzung?',
    answer: 'Ein typisches Webdesign-Projekt dauert vier bis acht Wochen – abhängig von Umfang und wie schnell Feedback und Inhalte geliefert werden. Wir kommunizieren von Anfang an klare Meilensteine, damit Sie immer wissen, wo wir stehen.',
  },
  {
    question: 'Welche Technologien nutzen Sie?',
    answer: 'Wir entwickeln hauptsächlich mit Next.js und React – dem führenden Stack für performante, skalierbare Webanwendungen. Für Content-Verwaltung setzen wir auf CMS-Lösungen wie Sanity oder Contentful, je nach Bedarf. Kein Page Builder, kein Baukastensystem.',
  },
  {
    question: 'Wie viele Überarbeitungen sind inbegriffen?',
    answer: 'Revisionen sind kein knappes Gut – wir arbeiten iterativ und stimmen Schritt für Schritt mit Ihnen ab. Im Design-Prozess gibt es keine starre Limite. Änderungen nach Final-Freigabe werden transparent kommuniziert.',
  },
  {
    question: 'Können Sie meine bestehende Website überarbeiten?',
    answer: 'Ja. Ob Redesign, Relaunch oder gezielte Optimierung einzelner Bereiche – wir analysieren zunächst den Status quo und empfehlen dann den sinnvollsten Weg. Manchmal reicht ein strategisches Lift, manchmal ist ein Neustart der effizientere Schritt.',
  },
  {
    question: 'Was passiert nach dem Launch?',
    answer: 'Wir lassen Sie nicht allein. Nach dem Launch stehen wir für Fragen, Inhaltsänderungen und Weiterentwicklungen zur Verfügung. Auf Wunsch übernehmen wir auch laufendes Hosting, Monitoring und regelmäßige Performance-Optimierungen.',
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
            Ihr neues Webdesign{' '}
            <span className="text-gradient-accent">wartet.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre Besucher begeistert und Ihren Umsatz steigert.
          </p>
          <Magnetic strength={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-slate-950 font-semibold text-base hover:bg-emerald-400 transition-colors shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
            >
              Kostenlosen Entwurf sichern
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Magnetic>
        </SectionReveal>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function WebdesignPage() {
  return (
    <main>
      <HeroSection />
      <WhatIsWebdesignSection />
      <BenefitsSection />
      <ProcessSection />
      <DeliverablesSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
