'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar } from 'lucide-react'

const SLTC_LOGO = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sltc-logo-KN8I0NgTWEyjlmjar5up9Q8VzNAdRD.png'

const experiences = [
  {
    role: 'IT Faculty Representative',
    org: 'SLTC Research University',
    duration: 'Mar 2026 – Present',
    type: 'Faculty Leadership',
    color: '#2563EB',
    logo: SLTC_LOGO,
    description:
      'Representing the IT Faculty by supporting student communication, coordinating academic matters, and facilitating collaboration between students and faculty administration.',
    current: true,
    side: 'right' as const,
  },
  {
    role: 'IT Batch Representative – 2027A Batch',
    org: 'SLTC Research University',
    duration: '2023 – Present',
    type: 'Batch Representative',
    color: '#7C3AED',
    logo: SLTC_LOGO,
    description:
      'Serving as the IT Representative for the 2027A Batch, providing technical support, facilitating access to university IT resources, and coordinating technical communications.',
    current: true,
    side: 'left' as const,
  },
  {
    role: 'Research & Analytics Director',
    org: 'Get Sync Club',
    duration: '2024 – 2025',
    type: 'Club Leadership',
    color: '#06B6D4',
    logo: null,
    description:
      'Leading research activities and technology initiatives while supporting data-driven projects, technical discussions, and innovation within the organization.',
    current: false,
    side: 'right' as const,
  },
  {
    role: 'CodeMania V5.0 – Technical Team Member',
    org: 'IEEE Computer Society (IEEE CS) – SLTC',
    duration: '2024',
    type: 'Event Organizing',
    color: '#10B981',
    logo: null,
    description:
      'Contributed as a Technical Team Member by supporting technical requirements, event preparation, and successful execution of IEEE Computer Society activities.',
    current: false,
    side: 'left' as const,
  },
  {
    role: 'InshiHer V3.0 – Promotion Team Head',
    org: 'IEEE Women in Engineering (IEEE WIE) – SLTC',
    duration: '2024',
    type: 'Event Organizing',
    color: '#F59E0B',
    logo: null,
    description:
      'Led promotional activities and supported event visibility by coordinating promotional strategies, content distribution, and audience engagement for IEEE WIE initiatives.',
    current: false,
    side: 'right' as const,
  },
]

function IEEEIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
      <rect width="40" height="40" rx="8" fill={`${color}20`} />
      <text x="50%" y="56%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="700" fill={color} fontFamily="Space Grotesk, sans-serif">
        IEEE
      </text>
    </svg>
  )
}

function OrgIcon({ logo, org, color }: { logo: string | null; org: string; color: string }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={org}
        className="w-8 h-8 object-contain"
      />
    )
  }
  if (org.includes('IEEE')) {
    return <IEEEIcon color={color} />
  }
  // Generic initials badge
  const initials = org
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  return (
    <span
      className="text-sm font-bold"
      style={{ color }}
    >
      {initials}
    </span>
  )
}

function TimelineCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const isLeft = exp.side === 'left'
  return (
    <motion.div
      className={`relative flex ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} mb-10`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
    >
      {/* Mobile: full width. Desktop: half width with offset */}
      <div className="w-full lg:w-[calc(50%-2rem)]">
        <motion.div
          className="glass rounded-2xl p-5 relative overflow-hidden"
          data-cursor-card
          whileHover={{ scale: 1.02, boxShadow: `0 8px 40px ${exp.color}22` }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
          />

          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-start gap-3">
              {/* Org logo/icon */}
              <motion.div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}25` }}
                whileHover={{ scale: 1.1 }}
              >
                <OrgIcon logo={exp.logo} org={exp.org} color={exp.color} />
              </motion.div>

              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${exp.color}15`, color: exp.color }}
                  >
                    {exp.type}
                  </span>
                  {exp.current && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400">
                      Active
                    </span>
                  )}
                </div>
                <h3
                  className="text-base font-bold text-foreground leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {exp.role}
                </h3>
                <p className="text-xs font-medium text-muted-foreground mt-0.5">{exp.org}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-1 text-muted-foreground flex-shrink-0">
              <Calendar size={12} />
              <span className="text-xs whitespace-nowrap">{exp.duration}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.9', 'end 0.1'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What I&apos;ve done</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Experience &amp; <span className="gradient-text">Leadership</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated vertical timeline line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px overflow-hidden">
            <div className="absolute inset-0 bg-border/40" />
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                height: lineHeight,
                background: 'linear-gradient(180deg, #2563EB, #7C3AED, #06B6D4)',
              }}
            />
          </div>

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-px bg-border/40" />

          {/* Cards */}
          <div>
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Center dot on timeline — desktop */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-10 top-6"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}80` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
                />
                {/* Mobile dot */}
                <div
                  className="lg:hidden absolute left-3.5 w-3 h-3 rounded-full z-10 top-6 -translate-x-1/2"
                  style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}80` }}
                />

                {/* Card — mobile always full-width with left padding */}
                <div className="pl-10 lg:pl-0">
                  <TimelineCard exp={exp} index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
