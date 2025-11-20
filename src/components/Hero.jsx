function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-3xl" style={{background:"radial-gradient( circle at 30% 30%, var(--vh-primary-300), transparent 60%)"}}></div>
        <div className="absolute -bottom-24 left-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-3xl" style={{background:"radial-gradient( circle at 70% 70%, var(--vh-secondary-300), transparent 60%)"}}></div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center py-16 lg:py-24">
          <div className="md:col-span-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--vh-secondary-50)] text-[var(--vh-primary-700)] ring-1 ring-[var(--vh-secondary-200)] text-xs font-medium mb-6">Trusted by facility teams and tenants</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
              Connect people, buildings, and operations in one place
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              A calm, modern workspace for property managers and tenants to coordinate tasks, messages, and insights – without the noise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a className="px-6 py-3 rounded-xl text-white bg-[var(--vh-primary-600)] hover:bg-[var(--vh-primary-700)] shadow-sm" href="#">
                Start free trial
              </a>
              <a className="px-6 py-3 rounded-xl text-[var(--vh-primary-700)] bg-[var(--vh-secondary-50)] hover:bg-[var(--vh-secondary-100)] ring-1 ring-[var(--vh-secondary-200)]" href="#features">
                See how it works
              </a>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <img src="https://images.unsplash.com/photo-1617153817979-283ffdcd52f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZW9wbGUlMjBjb2xsYWJvcmF0aW5nJTIwaW4lMjBhfGVufDB8MHx8fDE3NjM2MjA4MTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="People collaborating in a modern building" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
