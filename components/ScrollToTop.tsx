import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors focus:outline-none"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </motion.button>
  )
}