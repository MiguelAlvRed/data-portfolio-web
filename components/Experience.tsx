import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Product Data Analyst',
    company: 'Leadtech Group',
    companyUrl: 'https://www.leadtech.com',
    period: '2024 - Present',
    description: 'Analyzing data to provide insights and support decision-making processes in the tech industry.',
    achievements: [
      'Developed and maintained dashboards using Power BI for real-time performance monitoring.',
      'Conducted in-depth analysis of user behavior and market trends to drive product improvements.',
      'Collaborated with cross-functional teams to implement data-driven strategies.',
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Cabify',
    companyUrl: 'https://wwww.cabify.com',
    period: '2023 - 2024',
    description: 'Focused on developing and implementing business intelligence solutions to support strategic decision-making.',
    achievements: [
      'Created and maintained Power BI dashboards for sales and operations performance monitoring.',
      'Developed VBA macros to automate data processing and reporting tasks, improving efficiency by 30%.',
      'Conducted market analysis and competitor benchmarking to identify growth opportunities.',
    ]
  },
  {
    title: 'Business Analyst',
    company: 'Amazon',
    companyUrl: 'https://wwww.amazon.com',
    period: '2022 - 2023',
    description: 'Focused on developing and implementing business intelligence solutions to support strategic decision-making.',
    achievements: [
      'Created and maintained Power BI dashboards for sales and operations performance monitoring.',
      'Developed VBA macros to automate data processing and reporting tasks, improving efficiency by 30%.',
      'Conducted market analysis and competitor benchmarking to identify growth opportunities.',
    ]
  },
  {
    title: 'Intern, General Management',
    company: 'Dinak',
    companyUrl: 'https://dinak.com',
    period: '2021 - 2022',
    description: 'Gained hands-on experience in various aspects of business management and data analysis.',
    achievements: [
      'Assisted in the development of a new ERP system, focusing on data integration and reporting.',
      'Conducted data analysis to support decision-making in sales and operations planning.',
      'Contributed to process improvement initiatives, resulting in increased operational efficiency.',
    ]
  }
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600 dark:border-blue-500"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {job.company}
                </a> | {job.period}
              </p>
              <p className="mb-4">{job.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}