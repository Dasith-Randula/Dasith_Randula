'use client'

import { motion } from 'framer-motion'
import { Mail, Heart, Download } from 'lucide-react'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient line */}
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #2563EB, #7C3AED, #06B6D4, transparent)' }}
      />

      <div
        className="py-12 px-4 md:px-8 lg:px-16"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(2,8,23,0.5))' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                >
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>DR</span>
                </div>
                <span
                  className="font-bold text-lg text-foreground"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Dasith Randula
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Software Engineering Undergraduate building intelligent digital solutions.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Quick Links
              </p>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Connect
              </p>
              <div className="flex gap-3">
                {[
                  { icon: LinkedInIcon, href: 'https://linkedin.com/in/dasith-randula', label: 'LinkedIn' },
                  { icon: GithubIcon, href: 'https://github.com/Dasith-Randula', label: 'GitHub' },
                  { icon: Mail, href: 'mailto:dasithrandula1234@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="w-9 h-9 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <a
                href="/DASITH_RANDULA_CV.pdf"
                download="Dasith_Randula_CV.pdf"
                className="mt-5 inline-flex items-center gap-2 px-4 py-3 rounded-xl glass border border-border/50 text-sm font-semibold text-foreground hover:scale-105 hover:shadow-lg transition-all"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(148,163,184,0.1)' }}
          >
            <p className="text-xs text-muted-foreground">
              © 2026 Dasith Randula. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              Built with <Heart size={11} className="text-red-400 fill-red-400" /> using Next.js & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
