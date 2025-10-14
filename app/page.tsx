'use client'

import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <MotionWrapper>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-12">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h1 className="text-6xl font-bold mb-4">Hi, I'm Martin Nguyen</h1>
            <p className="text-xl text-gray-400">
              Computer Science student, developer, and athlete at the University of Toronto.
            </p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm passionate about software design and love building projects that make an impact. I regularly participate in hackathons and work on innovative solutions.
            </p>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-semibold">PABLO</span> — AI-powered presentation coach helping students improve public speaking.
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Trash Map</span> — AI recycling application identifying recyclable items.
              </p>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="grid gap-6">
              {[
                { title: 'PABLO', desc: 'AI Presentation Coach' },
                { title: 'Trash Map', desc: 'AI Recycling Assistant' },
                { title: 'Portfolio Site', desc: 'Next.js + Framer Motion' }
              ].map((p, i) => (
                <motion.div key={i} className="p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-4">{p.desc}</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">GitHub</button>
                    <button className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500/10">Demo</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </MotionWrapper>
  )
}