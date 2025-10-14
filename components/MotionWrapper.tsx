'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function MotionWrapper({ children, direction = 'left' }: { children: ReactNode; direction?: 'left' | 'right' }) {
  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: direction === 'left' ? 50 : -50, transition: { duration: 0.3 } }
  }

  return (
    <motion.div initial="hidden" animate="visible" exit="exit" variants={variants}>
      {children}
    </motion.div>
  )
}