/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-emerald-500/30 overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />
        
        {/* Noise Overlay */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-glow opacity-60" />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
