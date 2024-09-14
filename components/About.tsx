import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          <div className="w-64 h-64 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Miguel Alvarez Redondo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I'm Miguel Alvarez Redondo, an Industrial Engineer with a passion for Data Analytics and Business Intelligence. I'm currently pursuing an MSc in Big Data & Business Intelligence to further enhance my skills in this rapidly evolving field.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in the world of data started with a fascination for turning raw information into actionable insights. Today, I specialize in data analysis, visualization, and developing data-driven strategies that drive business growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not working with data, you can find me exploring the latest developments in AI and machine learning, contributing to innovative projects, or sharing my knowledge through collaborative efforts.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}