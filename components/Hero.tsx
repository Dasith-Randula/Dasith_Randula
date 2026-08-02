'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Download, Rocket, Mail } from 'lucide-react'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const roles = ['Flutter Developer', 'Full-Stack Developer', 'AI Enthusiast', 'IoT Explorer']

function ProfileImage() {
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [6, -6]), { stiffness: 120, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-6, 6]), { stiffness: 120, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    mouseX.set(e.clientX - cx)
    mouseY.set(e.clientY - cy)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      {/* Ambient glow layers — no solid filled circles */}
      <div
        className="absolute rounded-full"
        style={{
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.10) 50%, rgba(6,182,212,0.06) 75%, transparent 100%)',
          filter: 'blur(24px)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '340px',
          height: '340px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(16px)',
        }}
      />

      {/* Floating frame with parallax */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Gradient border ring — conic */}
        <div
          className="absolute -inset-[3px] rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(37,99,235,0.55), rgba(124,58,237,0.45), rgba(6,182,212,0.55), rgba(37,99,235,0.55))',
            borderRadius: '50%',
          }}
        />

        {/* Soft outer shadow glow */}
        <div
          className="absolute -inset-[3px] rounded-full"
          style={{
            boxShadow: '0 0 40px rgba(37,99,235,0.18), 0 0 80px rgba(124,58,237,0.10), 0 0 120px rgba(6,182,212,0.06)',
            borderRadius: '50%',
          }}
        />

        {/* Glass inner ring */}
        <div
          className="absolute inset-0 rounded-full z-20"
          style={{
            backdropFilter: 'blur(0px)',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '50%',
          }}
        />

        {/* Profile image — no filters, no colour grading */}
        <div
          className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-tgRP3m5KBi4uWOlpgpmdVdZSB45t6S.png"
            alt="Dasith Randula — Software Engineering Undergraduate"
            className="w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 8%',
              filter: 'none',
              imageRendering: 'auto',
            }}
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Floating badge — Flutter */}
      <motion.div
        className="absolute left-0 top-1/4 glass rounded-xl px-3 py-2 text-xs font-semibold text-foreground z-30"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ color: '#2563EB' }}>Flutter</span> Dev
      </motion.div>

      {/* Floating badge — AI */}
      <motion.div
        className="absolute right-0 bottom-1/4 glass rounded-xl px-3 py-2 text-xs font-semibold text-foreground z-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        AI & <span style={{ color: '#7C3AED' }}>IoT</span>
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="order-2 lg:order-1">
            {/* Hello badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>👋</span>
              <span>Hello, I&apos;m</span>
            </motion.div>

            {/* Name */}
            <div className="mb-4">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Dasith
              </motion.h1>
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight gradient-text"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Randula
              </motion.h1>
            </div>

            {/* Title */}
            <motion.p
              className="text-lg font-semibold text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Software Engineering Undergraduate
            </motion.p>

            {/* Roles */}
            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {roles.map((role, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{
                      background: ['#2563EB', '#7C3AED', '#06B6D4', '#10B981'][i],
                    }}
                  />
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              I build intelligent, scalable and user-friendly digital solutions combining modern
              technologies with creative problem solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
              >
                <Rocket size={16} />
                View My Projects
              </button>
              <a
                href="/DASITH_RANDULA_CV.pdf"
                download="Dasith_Randula_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-foreground glass border border-border/50 hover:scale-105 hover:shadow-lg transition-all"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: LinkedInIcon, href: 'https://linkedin.com/in/dasith-randula', label: 'LinkedIn' },
                { icon: GithubIcon, href: 'https://github.com/Dasith-Randula', label: 'GitHub' },
                { icon: Mail, href: 'mailto:dasithrandula1234@gmail.com', label: 'Email' },
                { icon: XIcon, href: '#', label: 'Twitter / X' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — profile image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
