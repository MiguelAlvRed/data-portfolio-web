import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="text-center py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=128&width=128"
          alt="John Doe"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Data Science & ML Engineer</h1>
      <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8">
        Transforming complex data into actionable insights and intelligent systems. 
        Specializing in advanced analytics, machine learning, and scalable data solutions.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
          Get in Touch
        </Link>
        <Link href="#projects" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full transition-colors">
          View Projects
        </Link>
      </div>
    </motion.section>
  )
}