import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: 'Python', logo: '/placeholder.svg?height=32&width=32' },
  { name: 'R', logo: '/placeholder.svg?height=32&width=32' },
  { name: 'SQL', logo: '/placeholder.svg?height=32&width=32' },
  { name: 'Tableau', logo: '/placeholder.svg?height=32&width=32' },
  { name: 'Power BI', logo: '/placeholder.svg?height=32&width=32' },
  { name: 'Excel', logo: '/placeholder.svg?height=32&width=32' },
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image src={skill.logo} alt={`${skill.name} logo`} width={48} height={48} className="mb-4" />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}