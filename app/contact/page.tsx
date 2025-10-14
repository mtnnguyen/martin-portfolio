'use client'

import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <MotionWrapper direction="right">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">Contact</h1>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-2xl">
          <p className="text-gray-400 mb-8 text-lg">
            Feel free to reach out! I'm always open to collaborating on projects, discussing tech, or just grabbing a coffee.
          </p>

          <div className="space-y-4">
            <a href="mailto:martin@example.com" className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">martin@example.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/martinguyen/" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <span className="text-2xl">💼</span>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-400">linkedin.com/in/martinguyen</p>
              </div>
            </a>

            <a href="https://github.com/mtnnguyen" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <span className="text-2xl">🐙</span>
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-gray-400">github.com/mtnnguyen</p>
              </div>
            </a>

            <a href="https://x.com/jasontheween" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
              <span className="text-2xl">𝕏</span>
              <div>
                <p className="font-semibold">Twitter</p>
                <p className="text-gray-400">@jasontheween</p>
              </div>
            </a>
          </div>

          <form className="mt-12 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-400 outline-none transition-colors" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-400 outline-none transition-colors" />
            <textarea placeholder="Message" rows={6} className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-400 outline-none transition-colors resize-none"></textarea>
            <button className="w-full px-4 py-3 bg-blue-500 rounded hover:bg-blue-600 font-semibold transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </MotionWrapper>
  )
}