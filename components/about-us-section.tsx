"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section ref={ref} className="py-16 dark-section">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 text-[#e2e8f0] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          About Us
        </h2>

        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg text-[#a0aec0] mb-6">
            IEBestCasinos.com is your trusted guide to the best online casinos in Ireland. Our team of experienced
            reviewers thoroughly tests each casino to ensure we only recommend safe, reliable, and enjoyable gaming
            experiences.
          </p>

          <p className="text-[#a0aec0] mb-10">
            iebestcasinos.com may receive compensation when you click on links and sign up with our partners. Our
            reviews are based on in-depth testing and are fully independent.
          </p>

          <Link
            href="/about-us"
            className="inline-block bg-[#007845] hover:bg-[#006035] text-white font-medium py-2 px-6 rounded-md transition-colors animated-button glow-button focus-outline"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
