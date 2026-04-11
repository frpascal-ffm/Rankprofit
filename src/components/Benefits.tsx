'use client'
import { useRef, useEffect, useState } from 'react';
import { Check, TrendingUp, Award, PieChart, Users, Monitor } from 'lucide-react';

export function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: '100px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-[120px] top-[-20%] left-[-10%]" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[100px] bottom-[-10%] right-[-5%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 font-medium text-xs md:text-sm tracking-wide">
              Ihre Vorteile
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            Ihr Wachstum ist unser <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Antrieb.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Wir definieren digitales Marketing neu: Datengetrieben, transparent und mit höchstem Anspruch an Performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Messbare Ergebnisse */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 group hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-500 overflow-hidden relative">
            <div className="flex-1 z-10">
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-white">Messbare Ergebnisse.</h3>
              <p className="text-slate-400 leading-relaxed">
                Ihr Budget ist kostbar. Unsere datengetriebenen Kampagnen garantieren, dass Sie Ihre Zielgruppe effizient und streuverlustfrei erreichen.
              </p>
            </div>
            <div className="flex-1 w-full h-[200px] relative flex items-center justify-center">
              <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                {/* Background dashed line */}
                <path
                  d="M 20 120 C 80 120, 100 30, 180 30 C 240 30, 260 80, 280 80"
                  fill="transparent"
                  stroke="#334155"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                {/* Animated solid line */}
                <path
                  d="M 20 120 C 80 120, 100 30, 180 30 C 240 30, 260 80, 280 80"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="600"
                  style={isInView ? {
                    animation: 'benefits-draw-path 4s ease-in-out infinite'
                  } : {
                    strokeDashoffset: 600
                  }}
                />
                {/* Start Point */}
                <circle cx="20" cy="120" r="6" fill="#0f172a" stroke="#475569" strokeWidth="3" />
                {/* End Point Pulse */}
                <circle
                  cx="280" cy="80" r="6" fill="#10b981"
                  style={isInView ? {
                    animation: 'benefits-pulse-dot 2s ease-in-out infinite'
                  } : {}}
                />
              </svg>
            </div>
          </div>

          {/* Card 2: Premium Qualität */}
          <div className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col group hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-500 overflow-hidden relative">
            <div className="z-10 mb-8">
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Award className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">Premium Qualität</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Profitieren Sie von High-End Webdesign und modernsten Technologien für Ihren digitalen Auftritt.
              </p>
            </div>
            <div className="mt-auto relative h-32 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner">
              <Monitor className="w-16 h-16 text-slate-600" strokeWidth={1.5} />
              {/* Sweeping Light Reflection */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-90"
                style={{
                  width: '50%',
                  ...(isInView ? {
                    animation: 'benefits-sweep 5s ease-in-out infinite'
                  } : {
                    transform: 'translateX(-200%) skewX(-20deg)'
                  })
                }}
              />
            </div>
          </div>

          {/* Card 3: Transparenz */}
          <div className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col group hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-500 overflow-hidden relative">
            <div className="z-10 mb-8">
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <PieChart className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">Transparenz</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Keine versteckten Kosten. Sie erhalten detaillierte Reportings und volle Kontrolle über Ihr Budget.
              </p>
            </div>
            <div className="mt-auto relative h-32 flex items-center justify-center">
              {/* Floating Receipt */}
              <div
                className="w-4/5 bg-slate-800 border border-slate-700 shadow-md rounded-xl p-4 relative"
                style={isInView ? {
                  animation: 'benefits-float 4s ease-in-out infinite'
                } : {
                  transform: 'translateY(5px)'
                }}
              >
                <div className="h-2 bg-slate-700 rounded-full w-1/2 mb-3" />
                <div className="h-2 bg-slate-700 rounded-full w-3/4 mb-4" />
                <div className="border-t border-slate-700 pt-3 flex justify-between items-center">
                  <div className="h-2 bg-slate-700 rounded-full w-1/4" />
                  <div className="h-3 bg-emerald-500 rounded-full w-1/3" />
                </div>
                {/* Success Stamp */}
                <div
                  className="absolute -right-2 -top-2 w-8 h-8 bg-emerald-500 rounded-full border-2 border-slate-800 flex items-center justify-center shadow-sm"
                  style={isInView ? {
                    animation: 'benefits-stamp 4s ease infinite'
                  } : {
                    transform: 'scale(0)', opacity: 0
                  }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Persönliche Betreuung */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row-reverse items-center gap-8 group hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-500 overflow-hidden relative">
            <div className="flex-1 z-10">
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Users className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-white">Persönliche Betreuung.</h3>
              <p className="text-slate-400 leading-relaxed">
                Wir sind Ihr strategischer Partner. Ob kurzfristige Kampagnenanpassung oder langfristige Planung – wir sind für Sie da.
              </p>
            </div>
            <div className="flex-1 w-full h-[200px] relative flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Pulsing rings */}
                <div
                  className="absolute w-32 h-32 border border-emerald-500/50 rounded-full"
                  style={isInView ? {
                    animation: 'benefits-ring 2.5s ease-out infinite'
                  } : {}}
                />
                <div
                  className="absolute w-32 h-32 border border-emerald-500/50 rounded-full"
                  style={isInView ? {
                    animation: 'benefits-ring 2.5s ease-out 1.25s infinite'
                  } : {}}
                />
                <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center z-10 shadow-lg relative">
                  <div className="absolute inset-2 bg-emerald-500/10 rounded-full" />
                  <Users className="w-8 h-8 text-emerald-500 relative z-10" />
                  <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-800 rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
