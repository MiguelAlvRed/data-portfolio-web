import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Studies from '@/components/Studies'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Alvarez Redondo - Data Analyst & Business Intelligence Specialist</title>
        <meta name="description" content="Portfolio of Miguel Alvarez Redondo, Data Analyst & Business Intelligence Specialist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-16"> {/* Cambiado de space-y-24 a space-y-16 */}
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Studies />
        <Certifications />
        <Projects />
        <Contact />
      </div>
    </>
  )
}