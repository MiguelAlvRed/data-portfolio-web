import { useState, useEffect, Suspense, lazy } from 'react'
import { useTheme } from 'next-themes'
import Header from './Header'
import Footer from './Footer'

const ScrollToTop = lazy(() => import('./ScrollToTop'))

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${resolvedTheme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300" aria-label="Contenido principal">
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </div>
  )
}