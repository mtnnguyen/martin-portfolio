'use client'

import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'PABLO',
    desc: 'AI-powered presentation coach that analyzes speech, body language, and content to help students improve public speaking skills.',
    tech: ['Python', 'TensorFlow', 'React'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Trash Map',
    desc: 'AI application that identifies recyclable items using computer vision and provides recycling guidance.',
    tech: ['React', 'TensorFlow.js', 'Google Maps API'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Task Manager',
    desc: 'Collaborative task management tool with real-time updates and team collaboration features.',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Data Visualization Dashboard',
    desc: 'Interactive dashboard for visualizing complex datasets with multiple chart types.',
    tech: ['React', 'D3.js', 'Express'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Study Companion',
    desc: 'AI-powered study tool that generates practice problems and quizzes from lecture notes.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    links: { github: '#', demo: '#' }
  }
]

export default function Projects() {
  return (
    <MotionWrapper direction="left">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">Projects</h1>
        <div className="space-y-8">
          {projects.map((proj, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-8 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, j) => (
                  <span key={j} className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={proj.links.github} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors inline-block">GitHub</a>
                <a href={proj.links.demo} className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500/10 transition-colors inline-block">Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  )
}