import { Hexagon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-emerald-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Hexagon className="w-6 h-6 text-emerald-500 group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-display font-bold text-lg tracking-tight text-white">
              Rankprofit
              <span className="text-emerald-500">.</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>

          <div className="text-sm text-slate-500 flex flex-col items-center md:items-end gap-1">
            <span>&copy; {new Date().getFullYear()} Rankprofit. Alle Rechte vorbehalten.</span>
            <span className="text-xs text-slate-600">* Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
