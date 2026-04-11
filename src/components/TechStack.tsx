'use client'
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SectionTitle } from './SectionReveal';

const techRow1 = [
  "Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "Shopify", 
  "WordPress", "Webflow", "React", "Next.js", "Tailwind CSS"
];

const techRow2 = [
  "Google Analytics", "HubSpot", "Klaviyo", "Make", "Zapier", 
  "Figma", "OpenAI", "Anthropic", "Midjourney", "Vercel"
];

export function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "100px" });

  return (
    <section id="tech" className="py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Technologien & Tools"
          subtitle="Wir setzen auf den modernsten Tech-Stack für maximale Performance und intelligente Automatisierung."
        />
      </div>

      <div className="relative flex flex-col gap-6 overflow-x-hidden group">
        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Moves Left */}
        <motion.div
          animate={isInView ? { x: [0, -1500] } : false}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
          className="flex gap-6 px-4 whitespace-nowrap w-max"
        >
          {[...techRow1, ...techRow1, ...techRow1].map((tech, index) => (
            <motion.div
              key={`r1-${index}`}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                borderColor: "rgba(16, 185, 129, 0.3)",
                y: -5
              }}
              className="glass-panel px-8 py-4 rounded-2xl text-lg font-medium text-slate-300 border-slate-800 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 - Moves Right */}
        <motion.div
          animate={isInView ? { x: [-1500, 0] } : false}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35
          }}
          className="flex gap-6 px-4 whitespace-nowrap w-max"
        >
          {[...techRow2, ...techRow2, ...techRow2].map((tech, index) => (
            <motion.div
              key={`r2-${index}`}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(20, 184, 166, 0.1)",
                borderColor: "rgba(20, 184, 166, 0.3)",
                y: -5
              }}
              className="glass-panel px-8 py-4 rounded-2xl text-lg font-medium text-slate-300 border-slate-800 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
