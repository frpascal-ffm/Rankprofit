'use client'
import { Layout, Palette, Bot, Cpu, Search, Target, ArrowRight, Smartphone } from 'lucide-react';
import { SectionTitle } from './SectionReveal';
import Link from 'next/link';
import React from 'react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Webdesign",
    description: "Hochperformante, conversion-optimierte Webseiten und Applikationen mit modernsten Frameworks.",
    className: "lg:col-span-1",
    price: "ab 1.499 €*",
    href: "/leistungen/webdesign"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Sichtbarkeit",
    description: "Datengetriebene Suchmaschinenoptimierung für nachhaltiges organisches Wachstum und Top-Rankings.",
    className: "lg:col-span-1",
    href: "/leistungen/seo"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Google Ads & SEA",
    description: "Hochprofitable Performance-Marketing-Kampagnen zur gezielten und messbaren Neukundengewinnung.",
    className: "lg:col-span-1",
    href: "/leistungen/google-ads"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "KI-Automatisierung",
    description: "Intelligente Workflows und Agenten, die manuelle Prozesse reduzieren und Effizienz steigern.",
    className: "lg:col-span-1",
    href: "/leistungen/ki-automatisierung"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Webanwendungen",
    description: "Maßgeschneiderte, skalierbare Web-Applikationen und Portale für komplexe Business-Prozesse.",
    className: "lg:col-span-1",
    href: "/leistungen/webanwendungen"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Native und plattformübergreifende mobile Anwendungen für iOS und Android mit exzellenter UX.",
    className: "lg:col-span-1",
    href: "/leistungen/mobile-apps"
  }
];

function ServiceCard({ service, index }: { service: any, index: number, key?: React.Key }) {
  return (
    <div className={`relative group h-full ${service.className || ''}`}>
      {service.price && (
        <div className="absolute -top-3 right-8 px-4 py-1.5 rounded-full bg-emerald-500 text-slate-950 text-sm font-bold shadow-[0_10px_20px_rgba(16,185,129,0.3)] z-30 group-hover:scale-110 transition-transform duration-300">
          {service.price}
        </div>
      )}
      <Link href={service.href} className="block relative h-full bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
        {/* Decorative background element */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-slate-800 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500 z-0" />

        <div className="w-14 h-14 rounded-2xl bg-slate-800 text-emerald-500 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
          {service.icon}
        </div>

        <h3 className="text-2xl font-display font-semibold mb-4 relative z-10 text-white group-hover:text-emerald-400 transition-colors duration-300">{service.title}</h3>
        <p className="text-slate-400 leading-relaxed text-lg relative z-10 flex-grow">
          {service.description}
        </p>

        <div className="mt-8 flex items-center text-emerald-500 font-medium relative z-10 overflow-hidden">
          <span className="group-hover:translate-x-1 transition-transform duration-300">Mehr erfahren</span>
          <ArrowRight className="ml-2 w-5 h-5 opacity-0 -translate-x-4 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
        </div>
      </Link>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 relative blend-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Leistungen"
          subtitle="Ganzheitliche digitale Lösungen aus einer Hand. Von der ersten Skizze bis zur automatisierten Skalierung und Vermarktung."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
