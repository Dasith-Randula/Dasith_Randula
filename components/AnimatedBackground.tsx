'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const isDark = () => document.documentElement.classList.contains('dark')

    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string
    }> = []

    const colors = ['#2563EB', '#7C3AED', '#06B6D4', '#10B981']

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const dark = isDark()

      // Gradient blobs
      const blobs = [
        { x: w * 0.15, y: h * 0.2, r: 350, c1: dark ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.07)', c2: 'transparent' },
        { x: w * 0.85, y: h * 0.3, r: 300, c1: dark ? 'rgba(124,58,237,0.1)' : 'rgba(124,58,237,0.06)', c2: 'transparent' },
        { x: w * 0.5, y: h * 0.7, r: 400, c1: dark ? 'rgba(6,182,212,0.08)' : 'rgba(6,182,212,0.04)', c2: 'transparent' },
      ]

      for (const blob of blobs) {
        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r)
        grad.addColorStop(0, blob.c1)
        grad.addColorStop(1, blob.c2)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = dark ? p.alpha * 1.5 : p.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = dark ? `rgba(96,165,250,${0.05 * (1 - dist / 120)})` : `rgba(37,99,235,${0.04 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
