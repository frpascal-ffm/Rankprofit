'use client'
import { ReactNode, useRef, useEffect } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function SectionReveal({ children, className = "", delay = 0, direction = 'up' }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const offsets = { up: [0, 40], down: [0, -40], left: [40, 0], right: [-40, 0] };
    const [ox, oy] = offsets[direction];

    el.style.opacity = '0';
    el.style.transform = `translate(${ox}px, ${oy}px)`;
    el.style.filter = 'blur(8px)';

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transition = `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s, filter 0.9s ease ${delay}s`;
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0)';
        el.style.filter = 'blur(0px)';
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '-80px' });

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function SectionTitle({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const words = title.split(" ");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wordSpans = Array.from(container.querySelectorAll<HTMLSpanElement>('[data-word]'));
    const line = lineRef.current;

    // Initial hidden states
    wordSpans.forEach(span => {
      span.style.transform = 'translateY(100%)';
      span.style.opacity = '0';
    });
    if (line) {
      line.style.transform = 'scaleX(0)';
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        wordSpans.forEach((span, i) => {
          span.style.transition = `transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, opacity 0.6s ease ${i * 0.1}s`;
          span.style.transform = 'translateY(0)';
          span.style.opacity = '1';
        });
        if (line) {
          line.style.transition = 'transform 1.4s cubic-bezier(0.22,1,0.36,1) 0.4s';
          line.style.transform = 'scaleX(1)';
        }
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(container);
    return () => observer.disconnect();
  }, [title]);

  return (
    <div className={`mb-20 md:mb-32 ${centered ? 'text-center' : 'text-left'}`}>
      <div ref={containerRef} className="inline-block relative">
        <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tighter flex flex-wrap justify-center gap-x-[0.2em]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden py-1">
              <span data-word className="inline-block">{word}</span>
            </span>
          ))}
        </h2>

        <div
          ref={lineRef}
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent absolute -bottom-2 left-0 origin-center"
          style={{ transform: 'scaleX(0)' }}
        />
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
