import type { ReactNode } from 'react'
import { Header } from '../components/sections/shared/Header'
import { Footer } from '../components/sections/shared/Footer'
import { SkipLink } from '../components/ui/skip-link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
