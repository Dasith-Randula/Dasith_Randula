'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const educationData = [
  {
    institution: 'SLTC Research University',
    degree: 'BSc (Hons) Software Engineering',
    duration: '2023 – 2027',
    focus: ['Software Engineering', 'Artificial Intelligence', 'Cloud Computing', 'Mobile Development'],
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sltc-logo-KN8I0NgTWEyjlmjar5up9Q8VzNAdRD.png',
    color: '#2563EB',
    current: true,
  },
  {
    institution: 'Anuradhapura Central College',
    degree: 'Secondary Education',
    duration: '2012 – 2020',
    focus: ['Science Stream', 'Mathematics', 'Information Technology'],
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/central-college-logo-Vguij5RAm2aulNCcwVpQiMctuLZBFZ.png',
    color: '#10B981',
    current: false,
  },
]

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Academic Background</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.institution}
                className={`relative flex gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full border-2 border-background -translate-x-1.5 md:-translate-x-1.5 z-10"
                  style={{ background: edu.color }}
                />

                {/* Spacer for desktop alternating layout */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="ml-14 md:ml-0 flex-1 md:max-w-[calc(50%-2rem)]">
                  <div
                    className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform"
                    data-cursor-card
                  >
                    {/* Logo + title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden glass flex items-center justify-center flex-shrink-0 p-2">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-foreground text-lg leading-tight"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {edu.institution}
                        </h3>
                        <p className="text-sm font-semibold mt-1" style={{ color: edu.color }}>
                          {edu.degree}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <Calendar size={13} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{edu.duration}</span>
                          {edu.current && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-semibold"
                              style={{ background: `${edu.color}20`, color: edu.color }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Focus areas */}
                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-2.5 py-1 rounded-lg font-medium"
                          style={{ background: `${edu.color}15`, color: edu.color }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
