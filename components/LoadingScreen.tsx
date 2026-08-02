'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const letters = ['D', 'a', 's', 'i', 't', 'h', ' ', 'R', 'a', 'n', 'd', 'u', 'l', 'a']

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #020817, #0F172A)' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* DR monogram */}
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
            >
              <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>DR</span>
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
                  animation: 'shimmer 2s infinite',
                }}
              />
            </div>
          </motion.div>

          {/* Name letter by letter */}
          <div className="flex items-center gap-0 overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-white text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + i * 0.06,
                  ease: 'easeOut',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-sm"
            style={{ color: '#64748B' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            Software Engineering Undergraduate
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-12 w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(148,163,184,0.2)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.6, duration: 0.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
