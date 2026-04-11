'use client'
import { useState, useEffect, useRef } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-800/50 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 origin-left"
        style={{ transform: `scaleX(${progress})`, transition: 'transform 80ms linear' }}
      />
    </div>
  );
}
