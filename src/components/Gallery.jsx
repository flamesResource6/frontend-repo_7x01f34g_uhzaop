import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const IMAGES = [
  "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2000&auto=format&fit=crop",
]

function Gallery() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gallery-col").forEach((col, i) => {
        const direction = i % 2 === 0 ? -1 : 1
        gsap.to(col, {
          yPercent: 12 * direction,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "+=120%",
            scrub: 0.8,
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-3">Spaces where people thrive</h2>
          <p className="text-gray-600">Big, human imagery from real environments — not UI chrome. The platform fades into the background so people and outcomes take center stage.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {IMAGES.concat(IMAGES).map((src, i) => (
            <div key={i} className="gallery-col relative aspect-[3/4] overflow-hidden rounded-3xl shadow-md">
              <img src={src} className="h-full w-full object-cover" alt="Valhal spaces" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
