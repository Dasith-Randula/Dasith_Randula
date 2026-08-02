'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    name: 'Languages',
    color: '#2563EB',
    skills: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
      { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
      { name: 'C#', icon: 'https://cdn.simpleicons.org/csharp/239120' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0175C2' },
    ],
  },
  {
    name: 'Mobile',
    color: '#7C3AED',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/54C5F8' },
      { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
      { name: 'SQLite', icon: 'https://cdn.simpleicons.org/sqlite/003B57' },
      { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
    ],
  },
  {
    name: 'Web Dev',
    color: '#06B6D4',
    skills: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/000000' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
    ],
  },
  {
    name: 'AI / ML',
    color: '#EC4899',
    skills: [
      { name: 'Machine Learning', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
      { name: 'Deep Learning', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
      { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
      { name: 'Generative AI', icon: 'https://cdn.simpleicons.org/openai/412991' },
      { name: 'XGBoost', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    ],
  },
  {
    name: 'Cloud',
    color: '#F59E0B',
    skills: [
      { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
      { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    ],
  },
  {
    name: 'IoT',
    color: '#10B981',
    skills: [
      { name: 'Arduino', icon: 'https://cdn.simpleicons.org/arduino/00979D' },
      { name: 'ESP32', icon: 'https://cdn.simpleicons.org/espressif/E7352C' },
      { name: 'Embedded C', icon: 'https://cdn.simpleicons.org/c/A8B9CC' },
      { name: 'MQTT', icon: 'https://cdn.simpleicons.org/mqtt/660066' },
    ],
  },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What I know</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === i
                  ? 'text-white scale-105'
                  : 'glass text-muted-foreground hover:text-foreground hover:scale-105'
              }`}
              style={activeCategory === i ? { background: cat.color } : {}}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {categories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="glass rounded-2xl p-4 flex flex-col items-center gap-2 group transition-all"
                data-cursor-card
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  boxShadow: `0 0 0 0 ${categories[activeCategory].color}00`,
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: `0 0 24px ${categories[activeCategory].color}30`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 ring-1 ring-border/40 bg-background/70"
                  style={{ background: `${categories[activeCategory].color}15` }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
