'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHoveringButton, setIsHoveringButton] = useState(false)
  const [isHoveringCard, setIsHoveringCard] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const trailElementsRef = useRef<Array<HTMLDivElement | null>>([])
  const isVisibleRef = useRef(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness: 500, damping: 40, mass: 0.5 })
  const y = useSpring(rawY, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px), (pointer: coarse)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const trail: Array<{ x: number; y: number }> = []

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }

      trail.push({ x: e.clientX, y: e.clientY })
      if (trail.length > 6) trail.shift()

      trail.forEach((pos, i) => {
        const element = trailElementsRef.current[i]
        if (!element) return
        element.style.left = `${pos.x - 3}px`
        element.style.top = `${pos.y - 3}px`
        element.style.opacity = `${((i + 1) / trail.length) * 0.35}`
      })
      for (let i = trail.length; i < 6; i++) {
        const element = trailElementsRef.current[i]
        if (element) element.style.opacity = '0'
      }
    }

    const onLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }
    const onEnter = () => {
      isVisibleRef.current = true
      setIsVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isBtn = target.closest('button, a, [data-cursor-button]') !== null
      const isCard = target.closest('[data-cursor-card]') !== null
      setIsHoveringButton(isBtn)
      setIsHoveringCard(isCard)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onOver)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
    }
  }, [isMobile, rawX, rawY])

  if (isMobile) return null

  const dotSize = isHoveringButton ? 16 : isHoveringCard ? 14 : 9

  return (
    <>
      {/* Particle trail */}
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          ref={(element) => { trailElementsRef.current[index] = element }}
          className="pointer-events-none fixed rounded-full z-[9998]"
          style={{
            left: 0,
            top: 0,
            width: 6,
            height: 6,
            opacity: 0,
            background: 'radial-gradient(circle, #60A5FA, #A78BFA)',
            transform: 'translate(0, 0)',
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}

      {/* Main dot cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x,
          y,
          translateX: `-${dotSize / 2}px`,
          translateY: `-${dotSize / 2}px`,
          opacity: isVisible ? 1 : 0,
          width: dotSize,
          height: dotSize,
          background: isHoveringButton
            ? 'radial-gradient(circle, #A78BFA, #2563EB)'
            : 'radial-gradient(circle, #60A5FA, #2563EB)',
          boxShadow: isHoveringButton
            ? '0 0 12px rgba(167,139,250,0.8), 0 0 24px rgba(37,99,235,0.4)'
            : '0 0 8px rgba(96,165,250,0.7), 0 0 16px rgba(37,99,235,0.3)',
          filter: 'blur(0.5px)',
          transition: 'width 0.2s ease, height 0.2s ease, box-shadow 0.2s ease',
        }}
      />
    </>
  )
}
