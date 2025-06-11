"use client"

import { Shield, Gift, Gamepad2, CreditCard, Smartphone, HeadphonesIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const ratingCriteria = [
  {
    title: "Safety & Licensing",
    description:
      "We verify that each casino holds valid licenses from reputable authorities and implements strong security measures.",
    icon: Shield,
  },
  {
    title: "Bonus Value",
    description:
      "We analyze welcome bonuses and promotions for their actual value, considering wagering requirements and terms.",
    icon: Gift,
  },
  {
    title: "Game Selection",
    description: "We evaluate the variety and quality of games, including slots, table games, and live dealer options.",
    icon: Gamepad2,
  },
  {
    title: "Payment Options",
    description:
      "We check for a wide range of secure payment methods with reasonable processing times for Irish players.",
    icon: CreditCard,
  },
  {
    title: "Mobile Compatibility",
    description: "We test how well the casino performs across different mobile devices and operating systems.",
    icon: Smartphone,
  },
  {
    title: "Customer Support",
    description: "We assess the availability, responsiveness, and helpfulness of customer service channels.",
    icon: HeadphonesIcon,
  },
]

export default function RatingMethodology() {
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
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-[#e2e8f0] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          How We Rate Casinos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ratingCriteria.map((criteria, index) => (
            <div
              key={criteria.title}
              className={`dark-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center rating-criteria-card transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-[#007845]/20 flex items-center justify-center mb-4">
                <criteria.icon className="w-8 h-8 text-[#007845] criteria-icon" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-[#e2e8f0]">{criteria.title}</h3>
              <p className="text-[#a0aec0]">{criteria.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
