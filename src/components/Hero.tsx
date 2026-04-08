import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Magnetic } from './Magnetic';
import { Link } from 'react-router-dom';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, type: "spring", bounce: 0.4 } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 text-white">
      {/* Background Elements Container with Bottom Fade Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
        {/* Interactive Spotlight Background */}
        <motion.div 
          className="absolute w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.05,
            y: (mousePosition.y - window.innerHeight / 2) * 0.05,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 2 }}
        />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        {/* Animated Chart Lines in Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
            <motion.path
              fill="none"
              stroke="url(#emerald-gradient)"
              strokeWidth="4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                d: [
                  "M0,800 Q200,700 400,800 T800,600 T1000,400",
                  "M0,800 Q200,850 400,750 T800,700 T1000,400",
                  "M0,800 Q200,700 400,800 T800,600 T1000,400"
                ]
              }}
              transition={{ 
                pathLength: { duration: 3, ease: "easeInOut", delay: 0.5 },
                opacity: { duration: 3, ease: "easeInOut", delay: 0.5 },
                d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.path
              fill="none"
              stroke="url(#emerald-gradient-2)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.5,
                d: [
                  "M0,900 Q300,850 500,700 T900,500 T1000,200",
                  "M0,900 Q300,750 500,800 T900,600 T1000,200",
                  "M0,900 Q300,850 500,700 T900,500 T1000,200"
                ]
              }}
              transition={{ 
                pathLength: { duration: 4, ease: "easeInOut", delay: 1 },
                opacity: { duration: 4, ease: "easeInOut", delay: 1 },
                d: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-emerald-400 mb-8 shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-xl group cursor-default"
        >
          <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          <span className="tracking-wide uppercase">Performance Marketing Agentur</span>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[1.1] flex flex-col items-center justify-center">
            <motion.span variants={itemVariants} className="block text-white">
              Wir ranken.
            </motion.span>
            <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Sie profitieren.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Datengetriebene SEO- und SEA-Strategien, die Ihren Umsatz messbar skalieren. 
          Keine leeren Versprechungen, nur harte KPIs und echtes Wachstum.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Magnetic strength={0.4}>
            <Link 
              to="/contact" 
              className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-500 text-slate-950 rounded-full font-bold flex items-center justify-center gap-2 overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="absolute inset-0 bg-emerald-400 scale-0 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out origin-center" />
              <span className="relative z-10 flex items-center gap-2">
                Jetzt Projekt starten
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </Magnetic>
        </motion.div>
      </div>

    </section>
  );
}
