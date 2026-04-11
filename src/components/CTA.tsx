'use client'

import { ArrowRight, Sparkles } from 'lucide-react';
import { Magnetic } from './Magnetic';
import Link from 'next/link';

export function CTA() {
  return (
    <section id="contact" className="py-40 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen" />

        <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full flex items-center justify-center mb-8 border border-slate-800 shadow-sm relative group">
          <div className="absolute inset-0 rounded-full border border-emerald-500/30 border-dashed group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight text-white">
          Bereit für das <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">nächste Level?</span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Unternehmen durch exzellentes Design und intelligente Automatisierung voranbringen können.
        </p>

        <div className="flex justify-center">
          <Magnetic strength={0.5}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-10 py-6 bg-emerald-500 text-slate-950 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="absolute inset-0 bg-emerald-400 scale-0 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out origin-center" />
              <span className="relative z-10 flex items-center gap-3">
                Projekt starten
                <div className="w-8 h-8 bg-slate-950/10 text-slate-950 rounded-full flex items-center justify-center group-hover:bg-slate-950 group-hover:text-emerald-500 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </span>
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
