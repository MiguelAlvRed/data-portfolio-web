import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

type EducationItem = {
  degree: string
  institution: string
  year: string
  description: string
}

const educationList: EducationItem[] = [
  {
    degree: "MSc in Big Data & Business Intelligence",
    institution: "EAE Business School",
    year: "2022 - 2023",
    description: "Focusing on advanced data analytics, machine learning, and business intelligence applications. Developing skills in Python, R, and various BI tools."
  },
  {
    degree: "Bachelor of Science in Industrial Engineering",
    institution: "University of Vigo",
    year: "2017 - 2022",
    description: "Specialized in process optimization, data analysis, and project management. Completed a thesis on 'Analysis, diagnosis, and implementation of improvements in the commercial area of a metal products manufacturer'."
  }
]

export default function Studies() {
  return (
    <motion.section
      id="studies"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-gray-200">
            <BookOpen className="mr-2" /> Academic Background
          </h3>
          {educationList.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.degree}</h4>
              <p className="text-gray-600 dark:text-gray-300">{item.institution} | {item.year}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}