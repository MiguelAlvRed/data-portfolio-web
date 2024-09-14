import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, ArrowUp, Database, FileSpreadsheet } from 'lucide-react'

export const projects = [
  {
    id: 'etl-pipeline',
    title: 'Automated ETL Pipeline for BigQuery Data Warehouse',
    summary: 'Developed a robust ETL pipeline to process and load daily financial data from multiple sources into Google BigQuery, enabling comprehensive analytics for a fintech startup.',
    image: '/images/bigquery-etl-architecture.png',
    icon: <Database className="ml-2 h-6 w-6 text-blue-500" />,
  },
  {
    id: 'interactive-dashboard',
    title: 'Interactive Dashboard System with Google Sheets and Apps Script',
    summary: 'Created a dynamic reporting system that pulls data from BigQuery into Google Sheets, providing interactive dashboards for executive decision-making.',
    image: '/images/sheets-dashboard-architecture.png',
    icon: <FileSpreadsheet className="ml-2 h-6 w-6 text-blue-500" />,
  }
]

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProjectIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full px-4"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-600 dark:border-blue-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  {projects[currentProjectIndex].title}
                  {projects[currentProjectIndex].icon}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">{projects[currentProjectIndex].summary}</p>
                <Image
                  src={projects[currentProjectIndex].image}
                  alt={`Architecture diagram for ${projects[currentProjectIndex].title}`}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover mb-6 rounded-lg shadow-md"
                />
                <Link href={`/projects/${projects[currentProjectIndex].id}`} className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  View Project Details
                  <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md"
            aria-label="Previous project"
          >
            <ChevronDown className="h-6 w-6 rotate-90" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md"
            aria-label="Next project"
          >
            <ChevronDown className="h-6 w-6 -rotate-90" />
          </button>
        </div>
      </div>
    </motion.section>
  )
}