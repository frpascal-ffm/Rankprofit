'use client'

import { motion, AnimatePresence } from 'motion/react';
import { Send, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export function ContactPage() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    hasWebsite: '',
    needs: [] as string[],
    industry: '',
    pages: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      handleNext();
      return;
    }
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (need: string) => {
    setFormState(prev => {
      const needs = prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need];
      return { ...prev, needs };
    });
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">Kontaktdaten</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formState.name}
                onChange={handleChange}
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="Max Mustermann"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">E-Mail Adresse *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formState.email}
                onChange={handleChange}
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="max@beispiel.de"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-300">Telefonnummer *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required
                value={formState.phone}
                onChange={handleChange}
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="+49 123 456789"
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">Projekt Details</h3>
            
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-slate-300">Haben Sie bereits eine Website?</label>
              <div className="flex gap-4">
                {['Ja', 'Nein'].map(option => (
                  <label key={option} className={`flex-1 cursor-pointer border rounded-xl p-4 text-center transition-all ${formState.hasWebsite === option ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'}`}>
                    <input type="radio" name="hasWebsite" value={option} checked={formState.hasWebsite === option} onChange={handleChange} className="hidden" />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-slate-300">Was benötigen Sie? (Mehrfachauswahl)</label>
              <div className="grid grid-cols-2 gap-3">
                {['Website', 'SEO', 'Ads', 'Wartung'].map(option => (
                  <label key={option} className={`cursor-pointer border rounded-xl p-3 text-center transition-all ${formState.needs.includes(option) ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'}`}>
                    <input type="checkbox" checked={formState.needs.includes(option)} onChange={() => handleCheckboxChange(option)} className="hidden" />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="industry" className="text-sm font-medium text-slate-300">In welcher Branche sind Sie tätig?</label>
              <input 
                type="text" 
                id="industry" 
                name="industry" 
                value={formState.industry}
                onChange={handleChange}
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="z.B. Handwerk, E-Commerce, Beratung..."
              />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">Umfang & Budget</h3>
            
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-slate-300">Wie viele Seiten soll die Website ungefähr haben?</label>
              <div className="grid grid-cols-3 gap-3">
                {['1–5', '5–15', '15+'].map(option => (
                  <label key={option} className={`cursor-pointer border rounded-xl p-3 text-center transition-all ${formState.pages === option ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'}`}>
                    <input type="radio" name="pages" value={option} checked={formState.pages === option} onChange={handleChange} className="hidden" />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-slate-300">Was ist Ihr Budget?</label>
              <div className="grid grid-cols-2 gap-3">
                {['unter 1.000€', '1.000–2.500€', '2.500€+', 'noch unklar'].map(option => (
                  <label key={option} className={`cursor-pointer border rounded-xl p-3 text-center transition-all ${formState.budget === option ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'}`}>
                    <input type="radio" name="budget" value={option} checked={formState.budget === option} onChange={handleChange} className="hidden" />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-slate-300">Wann soll das Projekt starten?</label>
              <div className="grid grid-cols-3 gap-3">
                {['Sofort', 'in 1–3 Monaten', 'noch offen'].map(option => (
                  <label key={option} className={`cursor-pointer border rounded-xl p-3 text-center transition-all ${formState.timeline === option ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'}`}>
                    <input type="radio" name="timeline" value={option} checked={formState.timeline === option} onChange={handleChange} className="hidden" />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">Zusätzliche Informationen</h3>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Beschreiben Sie kurz Ihr Projekt oder Ihre Ziele (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                rows={6}
                value={formState.message}
                onChange={handleChange}
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                placeholder="Ihre Nachricht..."
              />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Hinterlassen Sie uns Ihre Daten und wir melden uns umgehend bei Ihnen für ein unverbindliches Erstgespräch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Subtle background glow for the form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">Vielen Dank!</h3>
              <p className="text-slate-400 text-lg">
                Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
              </p>
            </div>
          ) : (
            <div className="relative z-10">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors ${step >= i ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                      {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <AnimatePresence mode="wait">
                  {renderStepContent()}
                </AnimatePresence>

                <div className="flex justify-between mt-4 pt-6 border-t border-slate-800">
                  {step > 1 ? (
                    <button 
                      type="button"
                      onClick={handlePrev}
                      className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Zurück
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  <button 
                    type="submit"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div className="absolute inset-0 bg-emerald-400 scale-0 rounded-xl group-hover:scale-150 transition-transform duration-500 ease-out origin-center" />
                    <span className="relative z-10 flex items-center gap-2">
                      {step === totalSteps ? 'Anfrage senden' : 'Weiter'}
                      {step === totalSteps ? <Send className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
