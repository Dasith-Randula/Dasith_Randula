'use client'

import { motion } from 'framer-motion'

const row1 = [
  { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/54C5F8' },
  { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0175C2' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
  { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/000000' },
]

const row2 = [
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Arduino', icon: 'https://cdn.simpleicons.org/arduino/00979D' },
  { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
  { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
  { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
]

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      className="glass flex flex-col items-center gap-2 px-5 py-3 rounded-xl mx-2 min-w-[90px] cursor-default"
      initial={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
      whileHover={{ scale: 1.08, boxShadow: '0 0 24px rgba(37,99,235,0.18)' }}
      transition={{ duration: 0.25 }}
      data-cursor-card
    >
      <img
        src={icon}
        alt={name}
        className="w-8 h-8 object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none'
        }}
      />
      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{name}</span>
    </motion.div>
  )
}

export function TechCarousel() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-2xl font-bold text-foreground mb-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Technologies I Work With
        </h2>
        <div className="w-12 h-0.5 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED)' }} />
      </motion.div>

      {/* Row 1 — left scroll */}
      <div className="overflow-hidden mb-4">
        <div className="animate-scroll-left flex" style={{ width: 'max-content' }}>
          {[...row1, ...row1].map((tech, i) => (
            <TechCard key={`r1-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Row 2 — right scroll */}
      <div className="overflow-hidden">
        <div className="animate-scroll-right flex" style={{ width: 'max-content' }}>
          {[...row2, ...row2].map((tech, i) => (
            <TechCard key={`r2-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  )
}
