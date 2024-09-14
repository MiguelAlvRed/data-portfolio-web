import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, ArrowUp } from 'lucide-react'

const projects = [
  {
    title: 'Advanced E-commerce Analytics Platform',
    description: 'Developed a comprehensive analytics platform using Python, Pandas, and Dash to provide real-time insights into e-commerce performance, resulting in a 25% increase in conversion rates.',
    tools: ['Python', 'Pandas', 'Dash', 'SQL', 'Machine Learning'],
    link: 'https://github.com/johndoe/ecommerce-analytics-platform',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Predictive Customer Churn Model',
    description: 'Implemented an advanced machine learning model using scikit-learn and TensorFlow to predict customer churn with 92% accuracy, enabling proactive retention strategies.',
    tools: ['Python', 'scikit-learn', 'TensorFlow', 'Keras', 'Feature Engineering'],
    link: 'https://github.com/johndoe/predictive-churn-model',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Real-time Supply Chain Optimization',
    description: 'Created a real-time supply chain optimization system using Apache Kafka and PySpark, resulting in a 15% reduction in inventory costs and improved delivery times.',
    tools: ['Apache Kafka', 'PySpark', 'Scala', 'Optimization Algorithms'],
    link: 'https://github.com/johndoe/supply-chain-optimization',
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    title: 'Natural Language Processing for Customer Feedback',
    description: 'Developed an NLP pipeline using BERT and spaCy to analyze customer feedback, extracting key insights and sentiment with 88% accuracy.',
    tools: ['Python', 'BERT', 'spaCy', 'Transformers', 'Sentiment Analysis'],
    link: 'https://github.com/johndoe/nlp-customer-feedback',
    image: '/placeholder.svg?height=300&width=400'
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
      className="py-20"
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
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-blue-600 dark:border-blue-500">
                <Image
                  src={projects[currentProjectIndex].image}
                  alt={projects[currentProjectIndex].title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">
                  <a href={projects[currentProjectIndex].link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                    {projects[currentProjectIndex].title}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </h3>
                <p className="mb-4">{projects[currentProjectIndex].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[currentProjectIndex].tools.map((tool, i) => (
                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
                <Link href={projects[currentProjectIndex].link} className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
                  View Project
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