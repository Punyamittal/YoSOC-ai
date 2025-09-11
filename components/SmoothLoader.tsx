"use client"

import { motion } from 'framer-motion'

interface SmoothLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export function SmoothLoader({ size = 'md', color = '#3b82f6' }: SmoothLoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center`}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.span
          className="text-lg font-mono font-bold text-primary"
          animate={{
            textShadow: [
              "0 0 0px rgba(59, 130, 246, 0.3)",
              "0 0 6px rgba(59, 130, 246, 0.6)",
              "0 0 0px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;/&gt;
        </motion.span>
      </motion.div>
    </div>
  )
}
