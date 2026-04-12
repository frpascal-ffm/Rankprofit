'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  Globe,
  Mail,
  MapPin,
  ShoppingCart,
  Star,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'
import { useFormModal } from '@/src/contexts/FormModalContext'

// ─── WhatsApp config ──────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '491749900043'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  paket: string
  ziel: string
  websiteUrl: string
  hatteSeo: 'ja' | 'nein' | ''
  vorname: string
  nachname: string
  email: string
  telefon: string
  terminChoice: 'whatsapp' | 'email'
}

const defaultData: FormData = {
  paket: '',
  ziel: '',
  websiteUrl: '',
  hatteSeo: '',
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  terminChoice: 'whatsapp',
}

// ─── Step card data ───────────────────────────────────────────────────────────

const pakete = [
  { id: 'Starter', label: 'Starter', subtitle: 'ab 499 €/Monat · Für lokale Unternehmen & Einsteiger', icon: Zap },
  { id: 'Growth', label: 'Growth', subtitle: 'ab 999 €/Monat · Für wachsende Online-Shops & Dienstleister', icon: TrendingUp },
  { id: 'Enterprise', label: 'Enterprise', subtitle: 'Individuell · Für große Portale, Shops & Konzerne', icon: Award },
]

const ziele = [
  { id: 'Mehr organischer Traffic', label: 'Mehr organischer Traffic', subtitle: 'Mehr Besucher aus der Google-Suche', icon: TrendingUp },
  { id: 'Bessere Rankings', label: 'Bessere Rankings', subtitle: 'Top-Positionen für Ihre Keywords', icon: Star },
  { id: 'Lokale Sichtbarkeit', label: 'Lokale Sichtbarkeit', subtitle: 'Gefunden werden in Ihrer Region', icon: MapPin },
  { id: 'Online-Shop stärken', label: 'Online-Shop stärken', subtitle: 'Mehr Umsatz durch organischen Traffic', icon: ShoppingCart },
]

// ─── Shared card style ────────────────────────────────────────────────────────

function SelectCard({
  selected,
  onClick,
  children,
  className = '',
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative w-full text-left rounded-2xl border p-4 transition-all duration-200 cursor-pointer
        ${selected
          ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_0_1px_rgb(16,185,129,0.4)]'
          : 'border-slate-800 bg-slate-900 hover:border-slate-600 hover:bg-slate-800/60'}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

// ─── Steps ────────────────────────────────────────────────────────────────────

function Step1({ data, onChange }: { data: FormData; onChange: (field: string, val: string) => void }) {
  return (
    <div>
      <h3 className="text-xl font-display font-bold text-white mb-1">Welches SEO-Paket interessiert Sie?</h3>
      <p className="text-slate-400 text-sm mb-6">Wählen Sie das passende Paket für Ihr Unternehmen.</p>
      <div className="flex flex-col gap-3">
        {pakete.map(({ id, label, subtitle, icon: Icon }) => (
          <SelectCard key={id} selected={data.paket === id} onClick={() => onChange('paket', id)}>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${data.paket === id ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className={`font-semibold text-sm ${data.paket === id ? 'text-white' : 'text-slate-200'}`}>{label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
              </div>
            </div>
          </SelectCard>
        ))}
      </div>
    </div>
  )
}

function Step2({ data, onChange }: { data: FormData; onChange: (field: string, val: string) => void }) {
  return (
    <div>
      <h3 className="text-xl font-display font-bold text-white mb-1">Was ist Ihr Hauptziel?</h3>
      <p className="text-slate-400 text-sm mb-6">Damit wir die richtige Strategie für Sie entwickeln können.</p>
      <div className="grid grid-cols-2 gap-3">
        {ziele.map(({ id, label, subtitle, icon: Icon }) => (
          <SelectCard key={id} selected={data.ziel === id} onClick={() => onChange('ziel', id)}>
            <Icon className={`w-5 h-5 mb-2 ${data.ziel === id ? 'text-emerald-400' : 'text-slate-400'}`} />
            <p className={`font-semibold text-sm ${data.ziel === id ? 'text-white' : 'text-slate-200'}`}>{label}</p>
            <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
          </SelectCard>
        ))}
      </div>
    </div>
  )
}

function Step3({
  data,
  onChange,
  onNext,
}: {
  data: FormData
  onChange: (field: string, val: string) => void
  onNext: () => void
}) {
  const canNext = data.websiteUrl.trim() && data.hatteSeo !== ''

  return (
    <div>
      <h3 className="text-xl font-display font-bold text-white mb-1">Ihre Website</h3>
      <p className="text-slate-400 text-sm mb-6">Damit wir Ihre Ausgangssituation einschätzen können.</p>

      <div className="space-y-5">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            <Globe className="w-3.5 h-3.5 inline mr-1.5 align-middle" />
            Website-URL *
          </label>
          <input
            type="url"
            value={data.websiteUrl}
            onChange={(e) => onChange('websiteUrl', e.target.value)}
            placeholder="https://ihre-website.de"
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-3">Haben Sie bisher SEO gemacht? *</label>
          <div className="flex gap-3">
            {(['ja', 'nein'] as const).map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onChange('hatteSeo', val)}
                className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  data.hatteSeo === val
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_0_1px_rgb(16,185,129,0.4)]'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600'
                }`}
              >
                {val === 'ja' ? 'Ja' : 'Nein'}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base transition-all duration-300 ${
            canNext
              ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:scale-[1.02] shadow-[0_8px_30px_rgba(16,185,129,0.3)]'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Weiter
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function Step4({
  data,
  onChange,
  onNext,
}: {
  data: FormData
  onChange: (field: string, val: string) => void
  onNext: () => void
}) {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  const canNext = data.vorname.trim() && data.nachname.trim() && emailValid && data.telefon.trim()

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {['✓ Kostenlos & unverbindlich', '✓ Kein Spam', '✓ Antwort in 24h'].map((b) => (
          <span key={b} className="text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-3 py-1">
            {b}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-display font-bold text-white mb-1">Ihre Kontaktdaten</h3>
      <p className="text-slate-400 text-sm mb-6">Damit wir Ihr individuelles SEO-Angebot zusenden können.</p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Vorname *</label>
            <input
              type="text"
              value={data.vorname}
              onChange={(e) => onChange('vorname', e.target.value)}
              placeholder="Max"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Nachname *</label>
            <input
              type="text"
              value={data.nachname}
              onChange={(e) => onChange('nachname', e.target.value)}
              placeholder="Mustermann"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">E-Mail *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="max@beispiel.de"
            className={`w-full bg-slate-900 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
              data.email && !emailValid
                ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/40'
                : 'border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40'
            }`}
          />
          {data.email && !emailValid && (
            <p className="text-xs text-red-400 mt-1">Bitte eine gültige E-Mail-Adresse eingeben.</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Telefon / WhatsApp *</label>
          <input
            type="tel"
            value={data.telefon}
            onChange={(e) => onChange('telefon', e.target.value)}
            placeholder="+49 123 456789"
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 transition-colors"
          />
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base transition-all duration-300 ${
            canNext
              ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:scale-[1.02] shadow-[0_8px_30px_rgba(16,185,129,0.3)]'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Weiter
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function buildWhatsAppMessage(data: FormData): string {
  const ico = { list: '\u{1F4CB}', phone: '\u{1F4DE}', rocket: '\u{1F680}' }

  return [
    'Hallo Rankprofit! Ich interessiere mich f\u00fcr eine SEO-Zusammenarbeit.',
    '',
    `${ico.list} Meine Angaben:`,
    `\u2022 SEO-Paket: ${data.paket}`,
    `\u2022 Hauptziel: ${data.ziel}`,
    `\u2022 Website: ${data.websiteUrl}`,
    `\u2022 Bisherige SEO-Erfahrung: ${data.hatteSeo === 'ja' ? 'Ja' : 'Nein'}`,
    '',
    `${ico.phone} Meine Kontaktdaten:`,
    `\u2022 Name: ${data.vorname} ${data.nachname}`,
    `\u2022 E-Mail: ${data.email}`,
    `\u2022 Telefon: ${data.telefon}`,
    '',
    `Ich freue mich auf Ihre R\u00fcckmeldung! ${ico.rocket}`,
  ].join('\n')
}

function Step5({
  data,
  onChange,
  onSubmit,
}: {
  data: FormData
  onChange: (field: string, val: string) => void
  onSubmit: () => void
}) {
  const channels: { id: 'whatsapp' | 'email'; label: string; subtitle: string }[] = [
    { id: 'whatsapp', label: 'WhatsApp', subtitle: 'Sofortige Antwort · Direkt & persönlich' },
    { id: 'email', label: 'E-Mail', subtitle: 'Antwort innerhalb von 24h' },
  ]

  function handleSubmit() {
    if (data.terminChoice === 'whatsapp') {
      const message = buildWhatsAppMessage(data)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
    }
    onSubmit()
  }

  return (
    <div>
      <h3 className="text-xl font-display font-bold text-white mb-1">Wie sollen wir Sie kontaktieren?</h3>
      <p className="text-slate-400 text-sm mb-6">Wählen Sie Ihren bevorzugten Kanal – wir melden uns schnellstmöglich.</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {channels.map(({ id, label, subtitle }) => {
          const selected = data.terminChoice === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange('terminChoice', id)}
              className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-200 ${
                selected
                  ? id === 'whatsapp'
                    ? 'border-[#25D366] bg-[#25D366]/10 shadow-[0_0_0_1px_rgba(37,211,102,0.4)]'
                    : 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_0_1px_rgba(16,185,129,0.4)]'
                  : 'border-slate-800 bg-slate-900 hover:border-slate-600'
              }`}
            >
              {id === 'whatsapp' ? (
                <WhatsAppIcon className={`w-8 h-8 ${selected ? 'text-[#25D366]' : 'text-slate-400'}`} />
              ) : (
                <Mail className={`w-8 h-8 ${selected ? 'text-emerald-400' : 'text-slate-400'}`} />
              )}
              <div className="text-center">
                <p className={`font-bold text-sm ${selected ? 'text-white' : 'text-slate-200'}`}>{label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{subtitle}</p>
              </div>
              {id === 'whatsapp' && (
                <span className="absolute top-2 right-2 text-[9px] font-bold bg-[#25D366]/20 text-[#25D366] px-1.5 py-0.5 rounded-full">
                  Empfohlen
                </span>
              )}
            </button>
          )
        })}
      </div>

      {data.terminChoice === 'whatsapp' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#25D366]/5 border border-[#25D366]/20 rounded-xl px-4 py-3 mb-6 flex items-start gap-3"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-slate-400">
            Nach dem Klick öffnet sich WhatsApp mit einer vorgefüllten Nachricht – direkt an uns.
          </p>
        </motion.div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-[1.02] ${
          data.terminChoice === 'whatsapp'
            ? 'bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:bg-[#22c55e]'
            : 'bg-emerald-500 text-slate-950 shadow-[0_8px_30px_rgba(16,185,129,0.3)] hover:bg-emerald-400'
        }`}
      >
        {data.terminChoice === 'whatsapp' ? (
          <>
            <WhatsAppIcon className="w-5 h-5" />
            In WhatsApp öffnen
          </>
        ) : (
          <>
            Absenden
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  )
}

function Step6({ data, onClose }: { data: FormData; onClose: () => void }) {
  const summaryItems = [
    { label: 'SEO-Paket', value: data.paket },
    { label: 'Hauptziel', value: data.ziel },
    { label: 'Website', value: data.websiteUrl },
    { label: 'Bisherige SEO', value: data.hatteSeo === 'ja' ? 'Ja' : 'Nein' },
    { label: 'E-Mail', value: data.email },
    { label: 'Telefon', value: data.telefon },
    { label: 'Kontaktweg', value: data.terminChoice === 'whatsapp' ? 'WhatsApp' : 'E-Mail' },
  ]

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="flex justify-center mb-6"
      >
        <CheckCircle2 className="w-20 h-20 text-emerald-400" />
      </motion.div>

      <h3 className="text-3xl font-display font-bold text-white mb-2">Vielen Dank!</h3>
      <p className="text-slate-400 mb-8">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-left space-y-3 mb-6">
        {summaryItems.map(({ label, value }) => (
          <div key={label} className="flex justify-between gap-4">
            <span className="text-xs text-slate-500 whitespace-nowrap">{label}</span>
            <span className="text-xs text-slate-200 text-right font-medium">{value || '–'}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="px-8 py-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 text-sm font-medium transition-colors"
      >
        Schließen
      </button>
    </div>
  )
}

// ─── Main modal ───────────────────────────────────────────────────────────────

const TOTAL_STEPS = 6

export function SEOAnfrageModal() {
  const { isOpen, closeModal, modalType, selectedPackage } = useFormModal()
  const isVisible = isOpen && modalType === 'seo'
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(defaultData)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Pre-select package and skip step 1 when package is passed
  useEffect(() => {
    if (isVisible && selectedPackage) {
      setData((prev) => ({ ...prev, paket: selectedPackage }))
      setStep(2)
    }
  }, [isVisible, selectedPackage])

  // Lock body scroll
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isVisible])

  // ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible && step < TOTAL_STEPS) handleClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isVisible, step])

  // Scroll to top on step change
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  function handleClose() {
    closeModal()
    setTimeout(() => {
      setStep(1)
      setData(defaultData)
    }, 300)
  }

  function handleChange(field: string, val: string) {
    setData((prev) => ({ ...prev, [field]: val }))
  }

  function autoAdvance(field: string, val: string, nextStep: number) {
    setData((prev) => ({ ...prev, [field]: val }))
    setTimeout(() => setStep(nextStep), 300)
  }

  const progress = (step / TOTAL_STEPS) * 100

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="seo-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-sm"
            onClick={step < TOTAL_STEPS ? handleClose : undefined}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[201] flex items-end sm:items-center justify-center pointer-events-none px-0 sm:px-4">
            <motion.div
              key="seo-modal"
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="pointer-events-auto w-full sm:max-w-2xl bg-slate-950 border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[95svh] sm:max-h-[90vh] overflow-hidden"
              style={{ background: 'rgba(2, 6, 23, 0.97)', backdropFilter: 'blur(20px)' }}
            >
              {/* Progress bar */}
              <div className="h-1 bg-slate-800 flex-shrink-0">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => step > 1 && step < TOTAL_STEPS ? setStep(step - 1) : handleClose()}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="text-xs text-slate-500 font-medium">
                  {step < TOTAL_STEPS ? `Schritt ${step} von ${TOTAL_STEPS - 1}` : 'Abgeschlossen'}
                </span>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable content */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 pb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                  >
                    {step === 1 && (
                      <Step1 data={data} onChange={(f, v) => autoAdvance(f, v, 2)} />
                    )}
                    {step === 2 && (
                      <Step2 data={data} onChange={(f, v) => autoAdvance(f, v, 3)} />
                    )}
                    {step === 3 && (
                      <Step3 data={data} onChange={handleChange} onNext={() => setStep(4)} />
                    )}
                    {step === 4 && (
                      <Step4 data={data} onChange={handleChange} onNext={() => setStep(5)} />
                    )}
                    {step === 5 && (
                      <Step5 data={data} onChange={handleChange} onSubmit={() => setStep(6)} />
                    )}
                    {step === 6 && (
                      <Step6 data={data} onClose={handleClose} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
