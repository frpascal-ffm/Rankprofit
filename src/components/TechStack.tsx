'use client'
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
  return (
    <section id="tech" className="py-32 relative">
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

        {/* Row 1 */}
        <div className="flex gap-6 px-4 whitespace-nowrap w-max">
          {techRow1.map((tech, index) => (
            <div
              key={`r1-${index}`}
              className="glass-panel px-8 py-4 rounded-2xl text-lg font-medium text-slate-300 border-slate-800 transition-all cursor-default hover:scale-110 hover:border-emerald-500/30"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-6 px-4 whitespace-nowrap w-max">
          {techRow2.map((tech, index) => (
            <div
              key={`r2-${index}`}
              className="glass-panel px-8 py-4 rounded-2xl text-lg font-medium text-slate-300 border-slate-800 transition-all cursor-default hover:scale-110 hover:border-teal-500/30"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
