'use client'
import { useRef, useEffect } from 'react';
import { SectionTitle } from './SectionReveal';

const steps = [
  {
    number: "01",
    title: "Wir hören wirklich zu",
    description: "Kein Copy-Paste. Wir analysieren dein Business und liefern eine Strategie, die zu dir passt — nicht zur nächsten Agentur.",
    badge: "Maßgeschneidert, nicht von der Stange"
  },
  {
    number: "02",
    title: "Du siehst es, bevor wir bauen",
    description: "Prototypen und Designs werden gemeinsam abgestimmt — damit keine bösen Überraschungen entstehen.",
    badge: "Kein Risiko, kein Rätselraten"
  },
  {
    number: "03",
    title: "Wir bauen, du arbeitest weiter",
    description: "Während wir umsetzen, musst du nichts tun. Kurze Updates, klare Meilensteine.",
    badge: "Zeit gespart, Ergebnis gesichert"
  },
  {
    number: "04",
    title: "Wir bleiben dabei",
    description: "Nach dem Start analysieren wir gemeinsam die Ergebnisse und optimieren kontinuierlich.",
    badge: "Investition, die sich auszahlt"
  }
];

export function Workflow() {
  const containerRef = useRef<HTMLElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Apply transition to number nodes once on mount
    numberNodeRefs.current.forEach((el) => {
      if (el) el.style.transition = 'border-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease';
    });

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current || !lineFillRef.current || !lineTrackRef.current) {
          rafRef.current = null;
          return;
        }

        // Line fill
        const rect = containerRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = rect.top - vh * 0.5;
        const end = rect.bottom - vh * 0.5;
        const progress = Math.min(1, Math.max(0, -start / (end - start)));
        lineFillRef.current.style.transform = `scaleY(${progress})`;

        // Number node coloring
        const trackRect = lineTrackRef.current.getBoundingClientRect();
        const fillBottom = trackRect.top + progress * trackRect.height;

        numberNodeRefs.current.forEach((nodeEl) => {
          if (!nodeEl) return;
          const nodeRect = nodeEl.getBoundingClientRect();
          const nodeCenter = nodeRect.top + nodeRect.height / 2;
          if (fillBottom >= nodeCenter) {
            nodeEl.style.borderColor = 'rgba(16,185,129,0.5)';
            nodeEl.style.color = '#10b981';
            nodeEl.style.boxShadow = '0 8px 30px rgba(16,185,129,0.15)';
            nodeEl.style.backgroundColor = 'rgba(16,185,129,0.08)';
          } else {
            nodeEl.style.borderColor = 'rgb(30,41,59)';
            nodeEl.style.color = 'rgb(100,116,139)';
            nodeEl.style.boxShadow = '';
            nodeEl.style.backgroundColor = 'rgb(15,23,42)';
          }
        });

        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Step slide-in on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateX(-32px)';
      el.style.transition = `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateX(0)';
          observer.disconnect();
        }
      }, { threshold: 0.3 });
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section id="workflow" ref={containerRef} className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-50" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionTitle
          title="So arbeiten wir zusammen"
          subtitle="Von der ersten Idee bis zum fertigen Ergebnis — transparent und planbar."
        />

        <div className="relative mt-20">
          {/* Line track */}
          <div
            ref={lineTrackRef}
            className="absolute top-8 left-[31px] md:left-[39px] bottom-8 w-[2px] bg-slate-800 z-0"
          >
            <div
              ref={lineFillRef}
              className="w-full h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { stepRefs.current[index] = el; }}
                className="relative z-10 flex flex-row gap-6 md:gap-12 items-start group"
              >
                {/* Number Node */}
                <div className="flex-shrink-0 relative">
                  <div
                    ref={el => { numberNodeRefs.current[index] = el; }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center font-display font-bold text-xl md:text-2xl text-slate-500 shadow-sm relative overflow-hidden z-10"
                  >
                    <span className="relative z-10">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col pt-1 md:pt-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4 w-fit">
                    {step.badge}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
