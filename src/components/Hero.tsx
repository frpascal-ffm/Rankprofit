'use client'

import { ArrowRight, TrendingUp } from 'lucide-react';
import { Magnetic } from './Magnetic';
import { useFormModal } from '@/src/contexts/FormModalContext';

export function Hero() {
  const { openModal } = useFormModal();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 text-white blend-section">
      {/* Background Elements Container with Bottom Fade Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
        {/* Static Spotlight Background */}
        <div
          className="absolute w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        />

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        {/* Chart Lines in Background */}
        <div className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]">
          <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
            <path
              className="hero-line-1"
              d="M0,800 Q200,700 400,800 T800,600 T1000,400"
              fill="none"
              stroke="url(#emerald-gradient)"
              strokeWidth="4"
            />
            <path
              className="hero-line-2"
              d="M0,900 Q300,850 500,700 T900,500 T1000,200"
              fill="none"
              stroke="url(#emerald-gradient-2)"
              strokeWidth="2"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="emerald-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
                <stop offset="100%" stopColor="#059669" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-emerald-400 mb-8 shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-xl group cursor-default">
          <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          <span className="tracking-wide uppercase">Performance Marketing Agentur</span>
        </div>

        <div className="mb-8">
          <h1 className="font-display font-bold tracking-tight leading-[1.1] flex flex-col items-center justify-center text-[clamp(2.2rem,8vw,9rem)]">
            <span className="whitespace-nowrap text-white">
              Wir ranken.
            </span>
            <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Sie profitieren.
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Datengetriebene SEO- und SEA-Strategien, die Ihren Umsatz messbar skalieren.
          Keine leeren Versprechungen, nur harte KPIs und echtes Wachstum.
        </p>

        <div className="flex items-center justify-center">
          <Magnetic strength={0.4}>
            <button
              type="button"
              onClick={openModal}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-emerald-500 text-slate-950 rounded-full font-bold flex items-center justify-center gap-2 overflow-hidden transition-transform hover:scale-105 duration-300 text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-emerald-400 scale-0 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out origin-center" />
              <span className="relative z-10 flex items-center gap-2">
                Kostenlosen Entwurf sichern
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Magnetic>
        </div>
      </div>

    </section>
  );
}
