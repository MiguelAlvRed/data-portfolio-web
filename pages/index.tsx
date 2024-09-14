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
        <title>John Doe - Data Science & ML Engineer</title>
        <meta name="description" content="Portfolio of John Doe, Data Science & ML Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-24">
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