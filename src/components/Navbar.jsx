import { Menu } from "lucide-react"

function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[var(--vh-primary-600)]" style={{boxShadow:'0 8px 24px rgba(0,0,0,0.08)'}}></div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">Valhal Connect</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#solutions" className="hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">Log in</a>
            <a href="#" className="px-4 py-2 rounded-lg text-white bg-[var(--vh-primary-600)] hover:bg-[var(--vh-primary-700)] transition-colors shadow-sm">Get started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 text-gray-700">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
