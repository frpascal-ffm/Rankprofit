import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Benefits } from '../components/Benefits';
import { Workflow } from '../components/Workflow';
import { Portfolio } from '../components/Portfolio';
import { CTA } from '../components/CTA';

export function HomePage() {
  useEffect(() => {
    document.title = 'Rankprofit | Performance Marketing Agentur';
  }, []);

  return (
    <main className="relative z-10">
      <Hero />
      <Services />
      <Benefits />
      <Workflow />
      <Portfolio />
      <CTA />
    </main>
  );
}
