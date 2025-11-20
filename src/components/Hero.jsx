import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const root = useRef(null)
  const blobA = useRef(null)
  const blobB = useRef(null)
  const titleRef = useRef(null)
  const copyRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 })
        .from(copyRef.current, { opacity: 0, y: 24, duration: 0.7 }, "-=0.3")
        .from(ctaRef.current, { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(imageRef.current, { opacity: 0, scale: 1.08, duration: 1.0 }, "-=0.6")

      // Floating/parallax blobs
      gsap.to(blobA.current, { y: -30, x: 20, repeat: -1, yoyo: true, duration: 6, ease: "sine.inOut" })
      gsap.to(blobB.current, { y: 25, x: -20, repeat: -1, yoyo: true, duration: 7, ease: "sine.inOut" })

      // Gentle parallax on scroll
      gsap.to(imageRef.current, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=60%",
          scrub: 0.6,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div ref={blobA} className="absolute -top-24 right-[-10%] h-[620px] w-[620px] rounded-full opacity-20 blur-3xl" style={{background:"radial-gradient( circle at 30% 30%, var(--vh-primary-300), transparent 60%)"}}></div>
        <div ref={blobB} className="absolute -bottom-24 left-[-10%] h-[620px] w-[620px] rounded-full opacity-20 blur-3xl" style={{background:"radial-gradient( circle at 70% 70%, var(--vh-secondary-300), transparent 60%)"}}></div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center py-20 lg:py-28">
          <div className="md:col-span-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--vh-secondary-50)] text-[var(--vh-primary-700)] ring-1 ring-[var(--vh-secondary-200)] text-xs font-medium mb-6">Trusted by facility teams and tenants</div>
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
              Connect people, buildings, and operations in one place
            </h1>
            <p ref={copyRef} className="text-lg text-gray-600 mb-8 max-w-xl">
              A calm, modern workspace for property managers and tenants to coordinate tasks, messages, and insights – without the noise.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3">
              <a className="px-6 py-3 rounded-xl text-white bg-[var(--vh-primary-600)] hover:bg-[var(--vh-primary-700)] shadow-sm" href="#">
                Start free trial
              </a>
              <a className="px-6 py-3 rounded-xl text-[var(--vh-primary-700)] bg-[var(--vh-secondary-50)] hover:bg-[var(--vh-secondary-100)] ring-1 ring-[var(--vh-secondary-200)]" href="#features">
                See how it works
              </a>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-5">
            <div ref={imageRef} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop" alt="People collaborating in a modern building" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Big background image stripe for drama */}
      <div className="relative">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="relative h-[28vh] md:h-[36vh] lg:h-[42vh] rounded-3xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1499426600726-a950358acf16?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxhdHJpdW18ZW58MHwwfHx8MTc2MzYyMTE4NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Modern atrium" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
