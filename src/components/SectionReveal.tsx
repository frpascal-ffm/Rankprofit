import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function SectionReveal({ children, className = "", delay = 0, direction = 'up' }: SectionRevealProps) {
  const initialPos = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: initialPos[direction].y, 
        x: initialPos[direction].x,
        filter: 'blur(10px)'
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1, 
        delay, 
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) {
  const words = title.split(" ");
  
  return (
    <div className={`mb-20 md:mb-32 ${centered ? 'text-center' : 'text-left'}`}>
      <div className="inline-block relative">
        <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tighter flex flex-wrap justify-center gap-x-[0.2em]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>
        
        {/* The "Red Thread" - a consistent animated line under titles */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent absolute -bottom-2 left-0 origin-center`}
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
