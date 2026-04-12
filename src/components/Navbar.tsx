'use client'

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Hexagon, ChevronUp, ChevronDown } from 'lucide-react';
import { Magnetic } from './Magnetic';
import Link from 'next/link';
import { useFormModal } from '@/src/contexts/FormModalContext';

const leistungen = [
  { name: 'Webdesign & UI/UX', desc: 'Conversion-optimierte Websites', href: '/leistungen/webdesign' },
  { name: 'SEO-Optimierung', desc: 'Bessere Google Rankings', href: '/leistungen/seo' },
  { name: 'Google Ads & SEA', desc: 'Anzeigen mit maximalem ROI', href: '/leistungen/google-ads' },
  { name: 'KI-Automatisierungen', desc: 'Prozesse intelligent automatisieren', href: '/leistungen/ki-automatisierung' },
  { name: 'Webanwendungen', desc: 'Individuelle Software im Browser', href: '/leistungen/webanwendungen' },
  { name: 'Mobile Apps', desc: 'Apps für iOS & Android', href: '/leistungen/mobile-apps' },
];

export function Navbar() {
  const { openModal } = useFormModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setLeistungenOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setLeistungenOpen(false), 150);
  };

  const navLinks = [
    { name: 'Vorteile', href: '/#benefits' },
    { name: 'Prozess', href: '/#workflow' },
    { name: 'Referenzen', href: '/#portfolio' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-panel border-b border-slate-800 bg-slate-950/80' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Hexagon className={`w-8 h-8 transition-transform duration-500 group-hover:rotate-90 ${scrolled ? 'text-emerald-500' : 'text-emerald-400'}`} />
          <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 text-white`}>
            Rankprofit<span className={scrolled ? 'text-emerald-500' : 'text-emerald-400'}>.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {/* Leistungen Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium transition-colors px-2 py-1 text-slate-300 hover:text-white"
            >
              Leistungen
              {leistungenOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {leistungenOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl py-3 px-2">
                {leistungen.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setLeistungenOpen(false)}
                    className="flex flex-col px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">{item.name}</span>
                    <span className="text-xs text-slate-400 mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <div key={link.name}>
              <Magnetic strength={0.1}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors px-2 py-1 text-slate-300 hover:text-white`}
                >
                  {link.name}
                </a>
              </Magnetic>
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Magnetic strength={0.2}>
            <button
              type="button"
              onClick={openModal}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-colors bg-emerald-500 text-slate-950 hover:bg-emerald-400`}
            >
              Kostenlosen Entwurf sichern
            </button>
          </Magnetic>
        </div>

        <button
          className={`md:hidden transition-colors text-slate-300 hover:text-white`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-slate-800 py-4 px-6 flex flex-col gap-4 md:hidden bg-slate-950/98 backdrop-blur-xl shadow-2xl">
          {/* Leistungen mobile */}
          <div>
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white w-full"
              onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
            >
              Leistungen
              {mobileLeistungenOpen ? <ChevronUp className="w-3.5 h-3.5 ml-1" /> : <ChevronDown className="w-3.5 h-3.5 ml-1" />}
            </button>
            {mobileLeistungenOpen && (
              <div className="mt-2 ml-2 flex flex-col gap-1 border-l border-slate-800 pl-3">
                {leistungen.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex flex-col py-2 group"
                    onClick={() => { setMobileMenuOpen(false); setMobileLeistungenOpen(false); }}
                  >
                    <span className="text-sm font-medium text-slate-300 group-hover:text-emerald-400 transition-colors">{item.name}</span>
                    <span className="text-xs text-slate-500">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { openModal(); setMobileMenuOpen(false); }}
            className="px-5 py-2.5 text-sm font-medium bg-emerald-500 text-slate-950 hover:bg-emerald-400 rounded-full text-center mt-2 w-full"
          >
            Kostenlosen Entwurf sichern
          </button>
        </div>
      )}
    </header>
  );
}
