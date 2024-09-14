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
    degree: "Master of Science in Data Science",
    institution: "Tech University",
    year: "2018",
    description: "Focused on machine learning, statistical analysis, and big data technologies. Completed a thesis on 'Optimizing Neural Networks for Time Series Forecasting in Financial Markets'."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    year: "2016",
    description: "Specialized in algorithms, data structures, and software engineering principles. Participated in multiple hackathons and led a team project on developing a predictive maintenance system for IoT devices."
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