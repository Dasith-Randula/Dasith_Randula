'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, Smartphone, Brain, Cpu, FlaskConical } from 'lucide-react'

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

// LankaSmartMart phone screenshots
const lsmScreenshots = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JNm479qUCkTDmxBLSAgu33Q5Uu6eQn.png',
    label: 'Splash Screen',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fG84xU59ZXtoGWl7TGsnZ4DbanM7wk.png',
    label: 'Login',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rfMvg7tUtNKz2iw3snsCZJaMxOr0V5.png',
    label: 'Register',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p39MTy3QordQsy8l0QnjgA4W6KiMuI.png',
    label: 'Home',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3bKWR3Yc5uSFQsqrbIZPnUde7thKtR.png',
    label: 'Products',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fTdvmsXY1PawtqVmaV7xgH54ZvvDE9.png',
    label: 'Product Detail',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o5THtXyZ8V9tOb9Z6HaOxf8KQTtrgZ.png',
    label: 'Cart',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hD2imeQBUOxNJGCijXx9aKlCPyH6kp.png',
    label: 'Checkout',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zhVLaR9y27TgLDyd34bFY186N7n9e4.png',
    label: 'Orders',
  },
]

function PhoneMockup({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative flex-shrink-0 w-40 sm:w-44 md:w-48">
      {/* Phone frame */}
      <div
        className="relative rounded-[2.5rem] overflow-hidden border-[3px] shadow-2xl"
        style={{
          borderColor: '#1a1a2e',
          background: '#000',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)',
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full z-10"
          style={{ background: '#000' }}
        />
        <img
          src={src}
          alt={label}
          className="w-full aspect-[9/19.5] object-cover object-top"
        />
      </div>
      <p className="text-center text-xs text-muted-foreground mt-2 font-medium">{label}</p>
    </div>
  )
}

function LankaSmartMartProject() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const visibleCount = 3

  const prev = () => setCurrentIdx((p) => Math.max(0, p - 1))
  const next = () =>
    setCurrentIdx((p) => Math.min(lsmScreenshots.length - visibleCount, p + 1))

  return (
    <motion.div
      className="glass rounded-3xl overflow-hidden"
      data-cursor-card
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Screenshots */}
        <div
          className="relative flex items-center justify-center p-8 min-h-[420px]"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))' }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, #22c55e40, transparent 70%)',
            }}
          />

          <div className="relative flex gap-3 items-end overflow-hidden">
            {lsmScreenshots.slice(currentIdx, currentIdx + visibleCount).map((s, i) => (
              <motion.div
                key={`${currentIdx}-${i}`}
                className={i === 1 ? 'scale-110 z-10' : 'scale-95 opacity-80'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: i === 1 ? 1 : 0.8, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <PhoneMockup src={s.src} label={s.label} />
              </motion.div>
            ))}
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            disabled={currentIdx === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 glass w-8 h-8 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={currentIdx >= lsmScreenshots.length - visibleCount}
            className="absolute right-3 top-1/2 -translate-y-1/2 glass w-8 h-8 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {Array.from({ length: lsmScreenshots.length - visibleCount + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ background: i === currentIdx ? '#22c55e' : 'rgba(148,163,184,0.4)' }}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Smartphone size={16} className="text-green-500" />
            <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">Flutter App</span>
          </div>

          <h3
            className="text-2xl md:text-3xl font-bold text-foreground mb-2"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            LankaSmartMart
          </h3>
          <p className="text-xs text-muted-foreground mb-4">Sep 2025 – Feb 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            A full-featured Flutter grocery delivery mobile application for Sri Lanka. Features
            real-time product browsing, smart cart management, multi-payment checkout, and Firebase-powered
            backend — delivering freshness to your doorstep.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'SQLite', 'FCM'].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e' }}
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/Dasith-Randula/lanka-smart-mart.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white self-start transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #16a34a, #22c55e)' }}
          >
                <GithubIcon size={15} />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function DevInsightProject() {
  return (
    <motion.div
      className="glass rounded-3xl overflow-hidden"
      data-cursor-card
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Dashboard visual */}
        <div
          className="relative p-8 min-h-[380px] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #020817, #0d1117)' }}
        >
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative w-full max-w-xs space-y-3 z-10">
            {/* Header */}
            <div className="rounded-xl p-3 flex items-center gap-3" style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}>
              <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'rgba(96,165,250,0.2)' }}>
                <Brain size={12} style={{ color: '#60A5FA' }} />
              </div>
              <span className="text-xs font-semibold" style={{ color: '#60A5FA' }}>DevInsight AI Dashboard</span>
            </div>

            {/* Score card */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Productivity', value: '94', color: '#60A5FA' },
                { label: 'Commits', value: '127', color: '#A78BFA' },
                { label: 'Score', value: '9.2', color: '#22D3EE' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-2.5 text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <p className="text-lg font-bold" style={{ color: m.color }}>{m.value}</p>
                  <p className="text-[10px]" style={{ color: '#64748B' }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Chart bars */}
            <div
              className="rounded-xl p-3"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-[10px] mb-2" style={{ color: '#64748B' }}>Weekly Activity</p>
              <div className="flex items-end gap-1.5 h-12">
                {[40, 70, 55, 90, 60, 85, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      background: i === 3 || i === 5
                        ? 'linear-gradient(180deg, #A78BFA, #60A5FA)'
                        : 'rgba(96,165,250,0.3)',
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                  />
                ))}
              </div>
            </div>

            {/* AI insight */}
            <div
              className="rounded-xl p-3"
              style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}
            >
              <p className="text-[10px] font-semibold mb-1" style={{ color: '#A78BFA' }}>AI Insight</p>
              <p className="text-[10px]" style={{ color: '#94a3b8' }}>
                Peak productivity on Thursdays. Recommend scheduling complex tasks mid-week.
              </p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Brain size={16} style={{ color: '#A78BFA' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#A78BFA' }}>AI Analytics Platform</span>
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA' }}>
              In Dev
            </span>
          </div>

          <h3
            className="text-2xl md:text-3xl font-bold text-foreground mb-2"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            DevInsight
          </h3>
          <p className="text-xs text-muted-foreground mb-4">Currently Developing</p>

          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            An AI-powered GitHub analytics platform that measures developer productivity using
            machine learning models. Provides intelligent insights, activity scoring, and predictive
            analytics for software engineers and teams.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Python', 'Scikit-learn', 'XGBoost', 'GitHub API', 'Flutter Web', 'Supabase'].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{ background: 'rgba(167,139,250,0.12)', color: '#A78BFA' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MIMORobotProject() {
  return (
    <motion.div
      className="glass rounded-3xl overflow-hidden"
      data-cursor-card
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Robot visual */}
        <div
          className="relative flex items-center justify-center p-8 min-h-[380px] overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.05), rgba(37,99,235,0.08))' }}
        >
          {/* Sensor wave rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-cyan-500/20"
              style={{ width: `${i * 80 + 120}px`, height: `${i * 80 + 120}px` }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}

          {/* Robot image */}
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mimo-robot-5D3IkLbwr4k8NhwlprK5jhduK16M8h.png"
            alt="MIMO AI Robot"
            className="relative z-10 w-56 h-56 object-contain drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* AI particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: ['#22D3EE', '#60A5FA', '#A78BFA'][i % 3],
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Info */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Cpu size={16} style={{ color: '#22D3EE' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#22D3EE' }}>IoT & Embedded AI</span>
          </div>

          <h3
            className="text-2xl md:text-3xl font-bold text-foreground mb-2"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            MIMO AI Robot
          </h3>
          <p className="text-xs text-muted-foreground mb-4">Jun 2025 – Nov 2025</p>

          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            An AI companion robot powered by ESP32 with emotion recognition, voice interaction,
            and real-time environmental sensing. MIMO combines embedded systems with AI to
            create an intelligent, responsive personal robot companion.
          </p>

          <div className="flex flex-wrap gap-2">
            {['ESP32', 'Arduino', 'IoT', 'Embedded C', 'AI', 'Sensors'].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{ background: 'rgba(34,211,238,0.12)', color: '#22D3EE' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function XAIFashionProject() {
  return (
    <motion.div
      className="glass rounded-3xl p-8"
      data-cursor-card
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Visual */}
        <div
          className="rounded-2xl p-6 flex items-center justify-center min-h-[200px] relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(124,58,237,0.08))' }}
        >
          <div className="text-center relative z-10">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'linear-gradient(135deg, #EC4899, #7C3AED)' }}
            >
              <FlaskConical size={28} className="text-white" />
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {['XAI', 'GAN', 'CNN', 'SHAP', 'LIME'].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-md font-mono"
                  style={{ background: 'rgba(236,72,153,0.15)', color: '#EC4899' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Decorative dots */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-40"
              style={{
                background: ['#EC4899', '#7C3AED'][i % 2],
                left: `${10 + i * 11}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FlaskConical size={16} style={{ color: '#EC4899' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EC4899' }}>Research Project</span>
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA' }}>
              In Dev
            </span>
          </div>

          <h3
            className="text-2xl font-bold text-foreground mb-2"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            XAI Fashion Design
          </h3>
          <p className="text-xs text-muted-foreground mb-4">Currently Developing</p>

          <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
            A deep learning research project focused on explainable AI-driven fashion design and
            demand-aware optimization. Uses generative models with interpretability layers to
            understand design decisions.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Python', 'Deep Learning', 'Generative AI', 'XAI', 'ML'].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{ background: 'rgba(236,72,153,0.12)', color: '#EC4899' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What I&apos;ve built</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          <LankaSmartMartProject />
          <DevInsightProject />
          <MIMORobotProject />
          <XAIFashionProject />
        </div>
      </div>
    </section>
  )
}
