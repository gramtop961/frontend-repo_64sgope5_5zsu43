import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTASection from './components/CTASection'
import { Rocket } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">
              <Rocket className="h-4 w-4" />
            </span>
            WPLaunch
          </a>
          <nav className="hidden gap-6 text-sm text-gray-600 sm:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm font-semibold text-gray-700 hover:text-gray-900 sm:inline">Sign in</a>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">Get started</a>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} WPLaunch — WordPress PaaS on AWS</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900">Status</a>
              <a href="#" className="hover:text-gray-900">Docs</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
