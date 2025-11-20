import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AppWindow, Users, Wrench, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    id: "solutions-moveon",
    title: "MoveOn",
    desc: "Digital move-in/move-out inspections with photo evidence and signatures.",
    icon: AppWindow,
    gradient: "from-[var(--vh-primary-600)] via-[var(--vh-primary-700)] to-[var(--vh-primary-800)]",
    tint: "bg-[var(--vh-primary-300)]/30",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "solutions-community",
    title: "Community app",
    desc: "Announcements, chats, bookings, and feedback that feel human.",
    icon: Users,
    gradient: "from-[#6dd5fa] via-[#60a5fa] to-[#5b7cf3]",
    tint: "bg-[#60a5fa]/30",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "solutions-custom",
    title: "Custom solutions",
    desc: "Tailored workflows and integrations for your portfolio and partners.",
    icon: Wrench,
    gradient: "from-[#a18cd1] via-[#7c8ad3] to-[#5b6abf]",
    tint: "bg-[#a18cd1]/30",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
  },
]

function Solutions() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".solution-card", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      })
      gsap.to(".solution-orb", {
        y: -18,
        x: 10,
        repeat: -1,
        yoyo: true,
        duration: 4.5,
        ease: "sine.inOut",
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="solutions" ref={root} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Soft background gradient field */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl" style={{background:"radial-gradient( circle at 30% 30%, var(--vh-primary-300), transparent 60%)"}} />
        <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-[520px] w-[520px] rounded-full blur-3xl" style={{background:"radial-gradient( circle at 70% 70%, var(--vh-secondary-300), transparent 60%)"}} />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--vh-secondary-50)] text-[var(--vh-primary-700)] ring-1 ring-[var(--vh-secondary-200)] text-xs font-medium mb-4">
            Our solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
            Purpose-built modules that feel alive
          </h2>
          <p className="text-gray-600">Vivid previews that hint at the experience — open, human, and fast. Dive deeper when you’re curious.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-7">
          {items.map(({ id, title, desc, icon: Icon, gradient, tint, image }, i) => (
            <a key={id} href={`#${id}`} id={id}
               className={`solution-card group relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 bg-gradient-to-br ${gradient} md:col-span-4 flex min-h-[260px]`}
            >
              {/* Content layer */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between w-full">
                <div>
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/15 ring-1 ring-white/20 text-white mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white text-xl font-semibold tracking-tight mb-1">{title}</h3>
                  <p className="text-white/85 text-sm max-w-sm">{desc}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>

              {/* Visual layer */}
              <div className="absolute inset-0">
                <div className={`solution-orb absolute -right-6 -top-6 h-40 w-40 rounded-full ${tint} blur-xl`} />
                <div className="absolute inset-0 mix-blend-overlay opacity-60">
                  <img src={image} alt="preview" className="h-full w-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/0 to-black/30" />
              </div>

              {/* Hover lift */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
