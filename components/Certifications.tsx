'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const MICROSOFT_LOGO = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lykUmgExHLdGT4oum5MHqfey7E9hzH.png'
const IBM_LOGO = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LloHFlCr17zbBEzpBF96VuWjixx9Pt.png'
const UOM_LOGO = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3sQ4PS46c1NTiDKSHYL1MoDosJD4MT.png'

const certs = [
  {
    issuer: 'Microsoft',
    title: 'Applied Skills: Get started with classes, properties, and methods in C#',
    link: 'https://learn.microsoft.com/en-us/users/dasithrandula-2302/credentials/applied-skill/get-started-with-classes-properties-and-methods-in-c-sharp',
    color: '#0078D4',
    bgColor: 'rgba(0,120,212,0.08)',
    logo: MICROSOFT_LOGO,
  },
  {
    issuer: 'Microsoft',
    title: 'Applied Skills: Streamline business workflows with AI chat',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/DasithRandula-2302/57C6C464D86B3E10?sharingId=3A32AFB524CDCB0C',
    color: '#0078D4',
    bgColor: 'rgba(0,120,212,0.08)',
    logo: MICROSOFT_LOGO,
  },
  {
    issuer: 'Microsoft',
    title: 'Work with generative AI models in Azure Machine Learning',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/DasithRandula-2302/XPBMWTRY?sharingId=3A32AFB524CDCB0C',
    color: '#0078D4',
    bgColor: 'rgba(0,120,212,0.08)',
    logo: MICROSOFT_LOGO,
  },
  {
    issuer: 'IBM',
    title: 'Building AI Solutions Using Advanced Algorithms and Open Source Frameworks',
    link: '#',
    color: '#1F70C1',
    bgColor: 'rgba(31,112,193,0.08)',
    logo: IBM_LOGO,
  },
  {
    issuer: 'IBM',
    title: 'Enterprise Design Thinking Practitioner',
    link: 'https://www.credly.com/go/WYu1sEps',
    color: '#1F70C1',
    bgColor: 'rgba(31,112,193,0.08)',
    logo: IBM_LOGO,
  },
  {
    issuer: 'University of Moratuwa',
    title: 'Python for Beginners',
    link: 'https://open.uom.lk/verify',
    color: '#8B5E3C',
    bgColor: 'rgba(139,94,60,0.08)',
    logo: UOM_LOGO,
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Verified credentials</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-5 group hover:scale-[1.03] transition-all relative overflow-hidden flex flex-col"
              data-cursor-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ boxShadow: `0 8px 40px ${cert.color}25` }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />

              {/* Logo + org */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: cert.bgColor, border: `1px solid ${cert.color}20` }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-10 h-10 object-contain"
                  />
                </motion.div>
                <div>
                  <p className="text-sm font-bold leading-tight" style={{ color: cert.color }}>
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Award size={11} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Certified</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <p className="text-sm font-medium text-foreground leading-snug mb-4 flex-1 line-clamp-3">
                {cert.title}
              </p>

              {/* View credential */}
              {cert.link !== '#' ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold mt-auto transition-all hover:gap-2.5"
                  style={{ color: cert.color }}
                >
                  View Credential
                  <ExternalLink size={11} />
                </a>
              ) : (
                <span className="text-xs text-muted-foreground/50 mt-auto">Credential pending</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
