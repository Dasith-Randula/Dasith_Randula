'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin, MessageSquare } from 'lucide-react'

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

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{"Let's talk"}</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Open to internship opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.15)' }}>
                  <Mail size={18} style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a
                    href="mailto:dasithrandula1234@gmail.com"
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    dasithrandula1234@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.15)' }}>
                  <MapPin size={18} style={{ color: '#7C3AED' }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground">Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-sm font-semibold text-foreground mb-3">Connect with me</p>
              <div className="flex gap-3">
                {[
                  { icon: LinkedInIcon, href: 'https://linkedin.com/in/dasith-randula', label: 'LinkedIn', color: '#0A66C2' },
                  { icon: GithubIcon, href: 'https://github.com/Dasith-Randula', label: 'GitHub', color: '#333' },
                  { icon: Mail, href: 'mailto:dasithrandula1234@gmail.com', label: 'Email', color: '#EA4335' },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:scale-110 transition-all"
                    style={{ '--hover-color': color } as React.CSSProperties}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 flex flex-col gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..."
                  required
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
              >
                {sent ? (
                  <>
                    <MessageSquare size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
