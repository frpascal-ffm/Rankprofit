'use client'

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Hexagon } from 'lucide-react';
import { Magnetic } from './Magnetic';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '/#services' },
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
            <Link 
              href="/contact" 
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-colors bg-emerald-500 text-slate-950 hover:bg-emerald-400`}
            >
              Kontakt
            </Link>
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full border-b border-slate-800 py-4 px-6 flex flex-col gap-4 md:hidden bg-slate-950/98 backdrop-blur-xl shadow-2xl"
        >
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
          <Link 
            href="/contact" 
            className="px-5 py-2.5 text-sm font-medium bg-emerald-500 text-slate-950 hover:bg-emerald-400 rounded-full text-center mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontakt
          </Link>
        </motion.div>
      )}
    </header>
  );
}
