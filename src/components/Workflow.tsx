'use client'
import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useInView, useMotionValueEvent } from 'motion/react';
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

interface StepItemProps {
  step: typeof steps[0];
  index: number;
  active: boolean;
}

function StepItem({ step, index, active }: StepItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -48, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 flex flex-row gap-6 md:gap-12 items-start group"
    >
      {/* Number Node */}
      <div className="flex-shrink-0 relative z-10">
        <motion.div
          animate={active ? {
            borderColor: 'rgba(16,185,129,0.5)',
            color: '#10b981',
            boxShadow: '0 0 28px rgba(16,185,129,0.25), 0 0 8px rgba(16,185,129,0.15)',
            backgroundColor: 'rgb(15,23,42)',
          } : {
            borderColor: 'rgb(30,41,59)',
            color: 'rgb(100,116,139)',
            boxShadow: '0 0 0px rgba(16,185,129,0)',
            backgroundColor: 'rgb(15,23,42)',
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 flex items-center justify-center font-display font-bold text-xl md:text-2xl shadow-sm"
        >
          {step.number}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col pt-1 md:pt-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: index * 0.12 + 0.22, ease: 'easeOut' }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4 w-fit"
        >
          {step.badge}
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Workflow() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeNodes, setActiveNodes] = useState<boolean[]>([false, false, false, false]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 65%'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(springProgress, 'change', (v) => {
    setActiveNodes(steps.map((_, i) => v >= (i + 0.5) / steps.length));
  });

  return (
    <section id="workflow" ref={containerRef} className="py-32 relative blend-section">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionTitle
          title="So arbeiten wir zusammen"
          subtitle="Von der ersten Idee bis zum fertigen Ergebnis — transparent und planbar."
        />

        <div className="relative mt-20 isolate">
          {/* Line track */}
          <div className="absolute top-8 left-[31px] md:left-[39px] bottom-8 w-[2px] bg-slate-800 -z-10">
            <motion.div
              style={{ scaleY: springProgress, transformOrigin: 'top' }}
              className="w-full h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            />
          </div>

          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                step={step}
                index={index}
                active={activeNodes[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
