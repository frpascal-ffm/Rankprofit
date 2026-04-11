'use client'

import { useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { SectionReveal, SectionTitle } from './SectionReveal';
import { Magnetic } from './Magnetic';

export interface ServiceFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServicePageData {
  badge: string;
  headlinePre: string;
  headlineAccent: string;
  headlinePost?: string;
  subtitle: string;
  features: ServiceFeature[];
  steps: ServiceStep[];
  ctaHeadline: string;
  ctaSubtitle: string;
}

function HeroSection({ data }: { data: ServicePageData }) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [badgeRef.current, headlineRef.current, subtitleRef.current, actionsRef.current];
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
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/8 blur-3xl" />
        {/* Grid */}
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
            {data.badge}
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-8"
        >
          {data.headlinePre}{' '}
          <span className="text-gradient-accent">{data.headlineAccent}</span>
          {data.headlinePost ? ` ${data.headlinePost}` : ''}
        </h1>

        <p ref={subtitleRef} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          {data.subtitle}
        </p>

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

function FeaturesSection({ features }: { features: ServiceFeature[] }) {
  return (
    <section className="py-24 relative blend-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle title="Was wir bieten" />

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${features.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
          {features.map((feature, i) => (
            <SectionReveal key={i} delay={i * 0.1} direction="up">
              <div className="group h-full bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-slate-800 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500" />
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-emerald-500 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-3 relative z-10 group-hover:text-emerald-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm relative z-10">
                  {feature.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ steps }: { steps: ServiceStep[] }) {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle title="So gehen wir vor" />

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[calc(1/6*100%)] right-[calc(1/6*100%)] h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <SectionReveal key={i} delay={i * 0.15} direction="up">
                <div className="flex flex-col items-center text-center lg:items-center">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 font-display font-bold text-lg flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection({ headline, subtitle }: { headline: string; subtitle: string }) {
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
            {headline.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient-accent">{headline.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
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

export function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <main>
      <HeroSection data={data} />
      <FeaturesSection features={data.features} />
      <ProcessSection steps={data.steps} />
      <CtaSection headline={data.ctaHeadline} subtitle={data.ctaSubtitle} />
    </main>
  );
}
