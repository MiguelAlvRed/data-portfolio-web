import { useRouter } from 'next/router'
import { projects } from '@/components/Projects'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const projectDetails = {
  'etl-pipeline': {
    technicalDetails: 'Utilized Python for data extraction and transformation, leveraging pandas for data manipulation. Implemented BigQuery\'s Python client library for efficient data loading. Automated the entire process using Google Cloud Functions and Cloud Scheduler.',
    architecture: [
      'Data Sources: RESTful APIs, CSV files from SFTP servers',
      'Extraction: Python scripts with requests library for API calls',
      'Transformation: Pandas for data cleaning and restructuring',
      'Loading: BigQuery Python client for bulk inserts',
      'Scheduling: Cloud Scheduler triggering Cloud Functions',
      'Monitoring: Cloud Logging and Cloud Monitoring',
    ],
    outcomes: [
      'Reduced manual data processing time by 90%',
      'Improved data accuracy to 99.9% through automated validation checks',
      'Enabled near real-time financial reporting, cutting down report generation time from days to hours',
    ],
    tools: ['Python', 'pandas', 'Google BigQuery', 'Google Cloud Functions', 'Cloud Scheduler'],
  },
  'interactive-dashboard': {
    technicalDetails: 'Developed Apps Script functions to query BigQuery and populate Google Sheets. Implemented custom formulas and pivot tables for data analysis. Used Apps Script to create a user interface for parameter inputs and report generation.',
    architecture: [
      'Data Source: Google BigQuery',
      'Interface: Google Sheets with custom Apps Script functions',
      'Data Retrieval: BigQuery API calls via Apps Script',
      'Data Presentation: Google Sheets charts and pivot tables',
      'User Interaction: Custom sidebar for parameter input and report generation',
      'Automation: Time-driven triggers for regular data refresh',
    ],
    outcomes: [
      'Provided real-time access to critical business metrics for leadership team',
      'Reduced report preparation time by 75%',
      'Increased data-driven decision making by providing easy-to-use, interactive dashboards',
    ],
    tools: ['Google Apps Script', 'Google Sheets', 'Google BigQuery', 'JavaScript'],
  }
}

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query
  const project = projects.find(p => p.id === id)
  const details = projectDetails[id as keyof typeof projectDetails]

  if (!project || !details) return <div>Project not found</div>

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/#projects" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <Image
        src={project.image}
        alt={`Architecture diagram for ${project.title}`}
        width={800}
        height={400}
        className="w-full h-auto object-cover mb-8 rounded-lg shadow-md"
      />
      <p className="text-xl mb-8">{project.summary}</p>
      <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
      <p className="mb-6">{details.technicalDetails}</p>
      <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
      <ul className="list-disc list-inside mb-6">
        {details.architecture.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Outcomes</h2>
      <ul className="list-disc list-inside mb-6">
        {details.outcomes.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Tools Used</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {details.tools.map((tool, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}