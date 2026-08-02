'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className={`mx-4 mt-3 md:mx-8 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'glass py-3 px-4 md:px-6 shadow-lg'
              : 'bg-transparent py-4 px-4 md:px-6'
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2.5 group"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold transition-transform group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
              >
                <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>DR</span>
              </div>
              <span
                className="font-semibold text-foreground hidden sm:block"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Dasith Randula
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      layoutId="activeNavDot"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="glass w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-105"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden glass w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
            <motion.div
              className="absolute right-4 top-20 glass rounded-2xl p-6 min-w-[220px]"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
