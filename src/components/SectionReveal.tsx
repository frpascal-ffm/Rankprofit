'use client'
import { ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function SectionReveal({ children, className = "" }: SectionRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function SectionTitle({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={`mb-20 md:mb-32 ${centered ? 'text-center' : 'text-left'}`}>
      <div className="inline-block relative">
        <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tighter flex flex-wrap justify-center gap-x-[0.2em]">
          {title.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden py-1">
              <span className="inline-block">{word}</span>
            </span>
          ))}
        </h2>

        {/* The "Red Thread" - consistent line under titles */}
        <div className={`h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent absolute -bottom-2 left-0`} />
      </div>

      {subtitle && (
        <SectionReveal delay={0.3}>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mt-10">
            {subtitle}
          </p>
        </SectionReveal>
      )}
    </div>
  );
}
