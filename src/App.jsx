import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Solutions from './components/Solutions'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{
      ['--vh-primary-50']: '#e6f0ff',
      ['--vh-primary-300']: '#7fb0ff',
      ['--vh-primary-600']: '#2f6fe9',
      ['--vh-primary-700']: '#255dca',
      ['--vh-primary-800']: '#1e4aa3',
      ['--vh-primary-900']: '#173a80',
      ['--vh-secondary-50']: '#f5f7fb',
      ['--vh-secondary-100']: '#eaeef6',
      ['--vh-secondary-200']: '#d8dfec',
      ['--vh-secondary-300']: '#c2cfe0',
    }}>
      <Navbar />

      <main>
        <Hero />
        <Gallery />
        <Solutions />
        <Features />
        <CTA />
      </main>

      <footer className="border-t border-gray-200 py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-[var(--vh-primary-600)]"></div>
            <span className="text-gray-700">Valhal Connect</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Valhal Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
