import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Download } from 'lucide-react'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Interested in collaborating on innovative data analytics projects or need expert consultation? 
          Let's connect and explore how we can leverage data to drive insights and solve complex business challenges.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link href="mailto:miguelalvarezredondo@gmail.com" className="flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
            <Mail className="h-5 w-5 mr-2" />
            Email
          </Link>
          <Link href="https://github.com/miguelalvarezredondo" className="flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/miguelalvarezredondo/" className="flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </Link>
        </div>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors flex items-center mx-auto">
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </motion.section>
  )
}