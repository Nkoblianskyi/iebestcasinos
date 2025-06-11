"use client"

import { Gift, Shield, Gamepad2, CreditCard, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: Gift,
    title: "Biggest Bonuses",
    description: "Unlock exclusive bonuses and free spins available only to Irish players.",
  },
  {
    icon: Shield,
    title: "Safe & Licensed",
    description: "All casinos listed are fully licensed and safe to play.",
  },
  {
    icon: Gamepad2,
    title: "Huge Game Selection",
    description: "Thousands of top games, slots, and live casino options.",
  },
  {
    icon: CreditCard,
    title: "Fast & Secure Payouts",
    description: "Enjoy fast withdrawals and trusted payment options for Ireland.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Play anytime on your mobile or tablet — fully optimized sites.",
  },
]

export default function CasinoFeatures() {
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
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-[#e2e8f0] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Why Play at These Irish Casinos?
        </h2>
        <p
          className={`text-lg text-[#a0aec0] text-center max-w-3xl mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Our recommended casinos offer the best experience for Irish players. Here's what you can expect:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`dark-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-700 animated-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-[#007845]/20 flex items-center justify-center mb-4 feature-icon-container">
                <feature.icon className="w-8 h-8 text-[#007845] feature-icon" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-[#e2e8f0]">{feature.title}</h3>
              <p className="text-[#a0aec0]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
