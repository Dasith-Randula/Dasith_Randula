'use client'

import { motion } from 'framer-motion'
import { MapPin, Target, Lightbulb, Code2 } from 'lucide-react'

const infoCards = [
  { icon: MapPin, label: 'Location', value: 'Sri Lanka', color: '#2563EB' },
  { icon: Target, label: 'Focus', value: 'Software Engineering', color: '#7C3AED' },
  { icon: Lightbulb, label: 'Interests', value: 'AI | Cloud | IoT', color: '#06B6D4' },
  { icon: Code2, label: 'Status', value: 'Open to Internships', color: '#10B981' },
]

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Get to know me</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8">
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Software Engineering undergraduate at SLTC Research University, passionate about building
                innovative software solutions that combine modern technologies with real-world applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Experienced in mobile development, full-stack systems, AI solutions, cloud technologies,
                and IoT projects. I thrive at the intersection of creativity and engineering, turning
                complex problems into elegant digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                My goal is to build intelligent, scalable solutions that make a real difference —
                from Flutter mobile apps to AI-powered platforms and embedded systems.
              </p>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {infoCards.map(({ icon: Icon, label, value, color }, i) => (
              <motion.div
                key={label}
                className="glass rounded-2xl p-5 group hover:scale-105 transition-transform"
                data-cursor-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${color}20` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="text-sm font-semibold text-foreground">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
