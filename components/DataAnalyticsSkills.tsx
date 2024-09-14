import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the skills array
const skills = [
  { name: 'Python', logo: '/api/placeholder/32/32?text=Python' },
  { name: 'R', logo: '/api/placeholder/32/32?text=R' },
  { name: 'SQL', logo: '/api/placeholder/32/32?text=SQL' },
  { name: 'Tableau', logo: '/api/placeholder/32/32?text=Tableau' },
  { name: 'Power BI', logo: '/api/placeholder/32/32?text=PowerBI' },
  { name: 'Excel', logo: '/api/placeholder/32/32?text=Excel' },
];

// Define the type for a skill
interface Skill {
  name: string;
  logo: string;
}

const DataAnalyticsSkills: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Data Analytics Stack
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Proficient in a wide range of data analytics tools and technologies
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {skills.map((skill: Skill) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Image src={skill.logo} alt={`${skill.name} logo`} width={32} height={32} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  Expert in {skill.name} for data analysis, visualization, and insights generation.
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsSkills;