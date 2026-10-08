'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, Smartphone, Brain, Cpu, FlaskConical, Server, Network } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function GithubButton({ href, color }: { href: string; color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit h-10 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
      style={{ background: color }}
    >
      <GithubIcon size={16} />
      View on GitHub
    </a>
  )
}

type GalleryImage = {
  src: string
  alt: string
  caption: string
}

function ProjectImageGallery({
  images,
  accent,
  variant = 'default',
}: {
  images: GalleryImage[]
  accent: string
  variant?: 'default' | 'threadwise'
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = images[currentIndex]

  const move = (direction: -1 | 1) => {
    setCurrentIndex((index) => (index + direction + images.length) % images.length)
  }

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden bg-transparent ${
        variant === 'threadwise' ? 'aspect-[4/3]' : 'aspect-video'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          className="relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className={`inline-flex max-h-full max-w-full overflow-hidden rounded-[12px] ${
              variant === 'threadwise' ? 'w-[97%]' : ''
            }`}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.src.includes('/Threadwise/') ? 1448 : 1917}
              height={current.src.includes('/Threadwise/') ? 1086 : 916}
              className={`block h-auto max-h-full max-w-full rounded-[12px] object-contain ${
                variant === 'threadwise' ? 'w-full' : 'w-auto'
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority={currentIndex === 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous project screenshot"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl bg-slate-950/45 text-slate-200 transition hover:bg-slate-950/70"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next project screenshot"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl bg-slate-950/45 text-slate-200 transition hover:bg-slate-950/70"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, index) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show ${image.caption} screenshot`}
                className="h-1.5 w-1.5 rounded-full transition"
                style={{ background: index === currentIndex ? accent : 'rgba(148,163,184,0.45)' }}
              />
            ))}
          </div>
        </>
      )}
      <span className="absolute bottom-2 left-3 rounded-md bg-slate-950/45 px-2 py-1 text-[10px] text-slate-200">
        {current.caption}
      </span>
    </div>
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

const threadwiseScreenshots: GalleryImage[] = [
  { src: '/images/Threadwise/home.png', alt: 'Threadwise home page', caption: 'Home' },
  { src: '/images/Threadwise/explore.png', alt: 'Threadwise fashion exploration page', caption: 'Fashion Exploration' },
  { src: '/images/Threadwise/design studio.png', alt: 'Threadwise design studio', caption: 'Design Studio' },
  { src: '/images/Threadwise/forecast.png', alt: 'Threadwise demand forecasting page', caption: 'Demand Forecasting' },
  { src: '/images/Threadwise/my design.png', alt: 'Threadwise saved designs page', caption: 'My Designs' },
  { src: '/images/Threadwise/about us.png', alt: 'About Threadwise page', caption: 'About Threadwise' },
  { src: '/images/Threadwise/contacts.png', alt: 'Threadwise contact page', caption: 'Contact' },
]

const smartCareRiskScreenshots: GalleryImage[] = [
  { src: '/images/smartcare-disease-risk-ai/Home.png', alt: 'SmartCare Disease Risk AI home page', caption: 'Home' },
  { src: '/images/smartcare-disease-risk-ai/Prediction.png', alt: 'SmartCare disease risk prediction page', caption: 'Disease Risk Prediction' },
]

const ogbnScreenshot: GalleryImage[] = [
  {
    src: '/images/OGBN-Arxiv Graph Intelligence/OGBN-Arxiv Graph Intelligence.png',
    alt: 'OGBN-Arxiv Graph Intelligence dashboard',
    caption: 'Graph Intelligence Dashboard',
  },
]

function BackendArchitectureVisual() {
  const nodes = [
    { label: 'REST API', className: 'left-4 top-8' },
    { label: 'Service Layer', className: 'right-4 top-8' },
    { label: 'JPA / Hibernate', className: 'left-4 bottom-8' },
    { label: 'MySQL', className: 'right-4 bottom-8' },
  ]

  return (
    <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-[#020817] p-5">
      <div className="backend-architecture-glow absolute inset-1/4 rounded-full bg-emerald-400/15 blur-2xl" />
      <div className="backend-architecture-lines absolute inset-0" aria-hidden="true">
        <span className="absolute left-[28%] top-[36%] h-px w-[20%] rotate-[16deg] bg-emerald-400/50" />
        <span className="absolute right-[28%] top-[36%] h-px w-[20%] -rotate-[16deg] bg-teal-300/50" />
        <span className="absolute bottom-[36%] left-[28%] h-px w-[20%] -rotate-[16deg] bg-emerald-400/50" />
        <span className="absolute bottom-[36%] right-[28%] h-px w-[20%] rotate-[16deg] bg-teal-300/50" />
      </div>
      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute ${node.className} rounded-xl border border-emerald-300/25 bg-slate-900/85 px-2.5 py-2 text-center text-[10px] font-medium text-emerald-100`}
        >
          {node.label}
        </div>
      ))}
      <div className="backend-architecture-server relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-emerald-300/40 bg-emerald-950/80 text-emerald-100 shadow-[0_0_35px_rgba(16,185,129,0.25)]">
        <Server size={30} />
        <span className="mt-1 text-[10px] font-semibold">Spring Boot</span>
      </div>
    </div>
  )
}

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
            Developed a Flutter-based grocery shopping application with user authentication, product browsing,
            cart management, and order-related features. Integrated Firebase services for cloud data
            synchronization and notifications, with SQLite supporting local data storage.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Flutter', 'Dart', 'Firebase Authentication', 'Cloud Firestore', 'SQLite', 'Firebase Cloud Messaging'].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e' }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex w-full flex-wrap items-center gap-3">
            <GithubButton href="https://github.com/Dasith-Randula/lanka-smart-mart.git" color="#16A34A" />
          </div>
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
            Leading the development of a software engineering analytics platform that uses GitHub repository
            and development activity data to support project risk analysis. Working on data processing and
            machine learning pipelines alongside a Flutter Web dashboard for presenting project insights.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
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
          <div className="flex w-full flex-wrap items-center gap-3">
            <GithubButton href="https://github.com/Dasith-Randula/DevInsight-AI" color="#7C3AED" />
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
            Developed an ESP32 and Arduino-based embedded AI robot for interactive sensing and automation,
            combining sensors, embedded C, and IoT components while preserving its verified project functionality.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
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
        <ProjectImageGallery images={threadwiseScreenshots} accent="#DB2777" variant="threadwise" />

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
            Threadwise – Explainable AI Fashion Decision-Support Platform
          </h3>
          <p className="text-xs text-muted-foreground mb-4">          Completed Research Work</p>

          <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
            Developed a React and FastAPI-based platform integrating machine learning into fashion analysis.
            Processed 42,755 DeepFashion images and generated 512-dimensional CLIP embeddings for visual
            similarity analysis, while incorporating XGBoost and SHAP for demand-related predictions and
            explainable insights.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {['React', 'TypeScript', 'FastAPI', 'Python', 'CLIP', 'XGBoost', 'SHAP'].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{ background: 'rgba(236,72,153,0.12)', color: '#EC4899' }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex w-full flex-wrap items-center gap-3">
            <GithubButton href="https://github.com/Dasith-Randula/Explainable-Fashion-Design-AI" color="#DB2777" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function AdditionalProject({
  title,
  category,
  year,
  description,
  technologies,
  color,
  icon: Icon,
  github,
  demo,
  media,
}: {
  title: string
  category: string
  year: string
  description: string
  technologies: string[]
  color: string
  icon: LucideIcon
  github?: string
  demo?: string
  media?: ReactNode
}) {
  return (
    <motion.div
      className="glass rounded-3xl p-8"
      data-cursor-card
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
        {media ?? (
          <div
            className="rounded-2xl p-8 flex items-center justify-center min-h-[190px]"
            style={{ background: `linear-gradient(135deg, ${color}12, rgba(124,58,237,0.08))` }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${color}, #7C3AED)` }}
            >
              <Icon size={34} className="text-white" />
            </div>
          </div>
        )}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Icon size={16} style={{ color }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>
              {category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mb-4">{year}</p>
          <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{ background: `${color}18`, color }}
              >
                {technology}
              </span>
            ))}
          </div>
          <div className="flex w-full flex-wrap items-center gap-3 mt-5">
            {github && <GithubButton href={github} color={color} />}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit h-10 items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-white/5"
                style={{ borderColor: `${color}80`, color }}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
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
          <AdditionalProject
            title="SmartCare Hospital Management System"
            category="Java Backend Development"
            year="2026"
            description="Developed a hospital management backend using Java and Spring Boot to manage healthcare operations through structured REST APIs. Implemented database persistence, CRUD operations, validation, business logic, and exception handling using a layered architecture, with API testing performed through Postman."
            technologies={['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Maven', 'REST APIs', 'Postman']}
            color="#059669"
            icon={Server}
            github="https://github.com/Dasith-Randula/SmartCare-Hospital-Management-System"
            media={<BackendArchitectureVisual />}
          />
          <AdditionalProject
            title="OGBN-Arxiv Graph Intelligence"
            category="Graph Neural Networks / Deep Learning"
            year="2026"
            description="Developed and evaluated GCN and GraphSAGE models for research paper classification using the OGBN-Arxiv citation network. Applied graph preprocessing, hyperparameter tuning, and performance evaluation, and built a Streamlit dashboard to visualize model results, graph statistics, node predictions, and embeddings."
            technologies={['Python', 'PyTorch', 'PyTorch Geometric', 'GCN', 'GraphSAGE', 'Scikit-learn', 'Streamlit']}
            color="#EA580C"
            icon={Network}
            github="https://github.com/Dasith-Randula/ogbn-arxiv-graph-intelligence"
            demo="https://arxivgraph-ai.streamlit.app/"
            media={<ProjectImageGallery images={ogbnScreenshot} accent="#EA580C" />}
          />
          <AdditionalProject
            title="SmartCare Disease Risk AI"
            category="Machine Learning / Healthcare"
            year="2026"
            description="Developed a machine learning system for classifying hospital patients into Low, Medium, and High disease-risk categories. Applied data preprocessing and model evaluation techniques, with a Streamlit interface for presenting predictions and supporting model interpretation."
            technologies={['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'SHAP', 'Streamlit']}
            color="#DB2777"
            icon={Brain}
            github="https://github.com/Dasith-Randula/smartcare-disease-risk-ai"
            media={<ProjectImageGallery images={smartCareRiskScreenshots} accent="#DB2777" />}
          />
        </div>
      </div>
    </section>
  )
}
