"use client"

import { useEffect, useRef } from 'react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Performance monitoring
    let frameCount = 0
    let lastTime = performance.now()
    let fps = 0

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        frameCount = 0
        lastTime = currentTime
        
        // Adjust animation quality based on FPS
        if (fps < 30 && containerRef.current) {
          containerRef.current.style.setProperty('--animation-quality', '0.5')
        } else if (fps < 45 && containerRef.current) {
          containerRef.current.style.setProperty('--animation-quality', '0.75')
        } else if (containerRef.current) {
          containerRef.current.style.setProperty('--animation-quality', '1')
        }
      }
      
      requestAnimationFrame(measureFPS)
    }

    // Start FPS monitoring
    requestAnimationFrame(measureFPS)

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          } else {
            entry.target.classList.remove('animate-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    // Observe all animated elements
    const animatedElements = containerRef.current?.querySelectorAll('[data-animate]')
    animatedElements?.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className="performance-optimized">
      {children}
    </div>
  )
}
