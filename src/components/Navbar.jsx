import { Menu, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[var(--vh-primary-600)]" style={{boxShadow:'0 8px 24px rgba(0,0,0,0.08)'}}></div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">Valhal Connect</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <div className="relative" ref={menuRef}>
              <button
                className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors focus:outline-none"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <span>Solutions</span>
                <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className={`absolute left-0 mt-3 w-[320px] rounded-xl border border-gray-200 bg-white shadow-lg/50 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] overflow-hidden transition-all origin-top ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                role="menu"
              >
                <a
                  href="#solutions-moveon"
                  className="block px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                  role="menuitem"
                >
                  <div className="text-sm font-medium text-gray-900">MoveOn</div>
                  <div className="text-xs text-gray-600">Digital move-in/move-out inspections</div>
                </a>
              </div>
            </div>

            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          {/* Auth CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">Log in</a>
            <a href="#" className="px-4 py-2 rounded-lg text-white bg-[var(--vh-primary-600)] hover:bg-[var(--vh-primary-700)] transition-colors shadow-sm">Get started</a>
          </div>

          {/* Mobile trigger */}
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 text-gray-700" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
