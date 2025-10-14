'use client'

import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'

export default function Running() {
  return (
    <MotionWrapper direction="right">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">Running</h1>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
          <div className="p-8 rounded-lg border border-gray-700 bg-gray-900/30">
            <h2 className="text-2xl font-bold mb-4">Marathon Training</h2>
            <p className="text-gray-400 mb-6">Focused marathon preparation with a goal pace of 3:15.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 rounded">
                <p className="text-gray-400 text-sm">Weekly Mileage</p>
                <p className="text-2xl font-bold">45 km</p>
              </div>
              <div className="p-4 bg-gray-800 rounded">
                <p className="text-gray-400 text-sm">Goal Pace</p>
                <p className="text-2xl font-bold">3:15</p>
              </div>
              <div className="p-4 bg-gray-800 rounded">
                <p className="text-gray-400 text-sm">Long Run</p>
                <p className="text-2xl font-bold">32 km</p>
              </div>
              <div className="p-4 bg-gray-800 rounded">
                <p className="text-gray-400 text-sm">PRs</p>
                <p className="text-2xl font-bold">15</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Recent Runs</h3>
              {[
                { date: 'Oct 10', distance: '10 km', pace: '4:30' },
                { date: 'Oct 8', distance: '25 km', pace: '4:45' },
                { date: 'Oct 5', distance: '8 km', pace: '4:20' }
              ].map((run, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                  <span className="text-gray-400">{run.date}</span>
                  <span className="font-semibold">{run.distance}</span>
                  <span className="text-gray-400">{run.pace}/km</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </MotionWrapper>
  )
}