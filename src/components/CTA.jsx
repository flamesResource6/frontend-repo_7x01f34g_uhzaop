import { useEffect, useRef } from "react"
import { gsap } from "gsap"

function CTA() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(root.current, { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--vh-primary-600)] to-[var(--vh-primary-700)] p-8 sm:p-12 text-white shadow-xl overflow-hidden relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
            <div className="md:col-span-8">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Bring order and clarity to your portfolio</h3>
              <p className="text-white/85 max-w-2xl">Get a calm, reliable workspace for teams and tenants. No fluff, just the tooling you need — aligned with how buildings and people actually operate.</p>
            </div>
            <div className="md:col-span-4 flex md:justify-end items-center gap-3">
              <a href="#" className="px-5 py-3 rounded-xl bg-white text-[var(--vh-primary-700)] font-medium hover:bg-white/90 transition">Start free</a>
              <a href="#" className="px-5 py-3 rounded-xl bg-[var(--vh-primary-800)] text-white font-medium hover:bg-[var(--vh-primary-900)] transition ring-1 ring-white/10">Talk to us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
