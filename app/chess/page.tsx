'use client'

import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'

export default function Chess() {
  return (
    <MotionWrapper direction="left">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">Chess</h1>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
          <div className="p-8 rounded-lg border border-gray-700 bg-gray-900/30">
            <h2 className="text-2xl font-bold mb-4">From 800 → 1600 ELO</h2>
            <p className="text-gray-400 mb-6">Actively studying chess strategy and tactics to improve my game.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-800 rounded">
                <p className="text-gray-400 text-sm">Current Rating</p>
                <p className="text-2xl font-bold">1600</p>
              </div>
              <div className="p-4 bg-gray-800 rounded">
                <p className="text-gray-400 text-sm">Games Played</p>
                <p className="text-2xl font-bold">250+</p>
              </div>
              <div className="p-4 bg-gray-800 rounded">
                <p className="text-gray-400 text-sm">Win Rate</p>
                <p className="text-2xl font-bold">62%</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Focus Areas</h3>
              {[
                { area: 'Opening Theory', level: 'Advanced' },
                { area: 'Tactical Puzzles', level: 'Intermediate' },
                { area: 'Endgame Study', level: 'Beginner' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                  <span className="font-semibold">{item.area}</span>
                  <span className="text-gray-400">{item.level}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 mt-6 text-sm">
              Playing regularly on chess.com and studying with ChessTempo. Interested in joining campus chess club.
            </p>
          </div>
        </motion.div>
      </div>
    </MotionWrapper>
  )
}