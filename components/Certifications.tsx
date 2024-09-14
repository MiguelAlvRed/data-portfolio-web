import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

type CertificationItem = {
  name: string
  issuer: string
  year: string
  description: string
}

const certificationsList: CertificationItem[] = [
  {
    name: "Certified Data Scientist",
    issuer: "Data Science Association",
    year: "2020",
    description: "Professional certification demonstrating expertise in data analysis, machine learning, and statistical modeling. Completed a rigorous exam and practical project showcasing advanced data science skills."
  },
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    year: "2019",
    description: "Validates expertise in designing, implementing, and maintaining machine learning solutions on AWS. Demonstrates proficiency in data engineering, exploratory data analysis, modeling, and operations."
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2021",
    description: "Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Showcases ability to build and train neural networks for both computer vision and natural language processing tasks."
  }
]

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Professional Certifications</h2>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-gray-200">
            <Award className="mr-2" /> Industry Recognized Certifications
          </h3>
          {certificationsList.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{item.issuer} | {item.year}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}