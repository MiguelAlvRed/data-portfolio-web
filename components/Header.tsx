import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Database, Sun, Moon, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Miguel Alvarez</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item}
            </Link>
          ))}
          <button onClick={toggleTheme} className="focus:outline-none text-gray-600 dark:text-gray-300">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none text-gray-600 dark:text-gray-300">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          >
            {navItems.map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={toggleMenu}>
                {item}
              </Link>
            ))}
            <button onClick={toggleTheme} className="block w-full text-left py-2 px-4 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}