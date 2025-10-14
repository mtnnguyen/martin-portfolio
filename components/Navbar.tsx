'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/running', label: 'Running' },
  { href: '/chess', label: 'Chess' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400">
          MN
        </Link>
        <div className="flex gap-8">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="relative text-gray-300 hover:text-white transition-colors">
              {link.label}
              {pathname === link.href && (
                <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}