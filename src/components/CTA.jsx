function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--vh-primary-600)] to-[var(--vh-primary-700)] p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Bring order and clarity to your portfolio</h3>
              <p className="text-white/80 max-w-2xl">Get a calm, reliable workspace for teams and tenants. No fluff, just the tooling you need — aligned with how buildings and people actually operate.</p>
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
