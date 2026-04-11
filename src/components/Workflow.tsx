'use client'
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
  return (
    <section id="workflow" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-50" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionTitle
          title="So arbeiten wir zusammen"
          subtitle="Von der ersten Idee bis zum fertigen Ergebnis — transparent und planbar."
        />

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute top-8 left-[31px] md:left-[39px] bottom-8 w-[2px] bg-slate-800 z-0">
            <div className="w-full h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
          </div>

          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-row gap-6 md:gap-12 items-start group"
              >
                {/* Number Node */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center font-display font-bold text-xl md:text-2xl text-slate-500 shadow-sm group-hover:border-emerald-500/30 group-hover:text-emerald-500 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] transition-all duration-500 relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500" />
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
