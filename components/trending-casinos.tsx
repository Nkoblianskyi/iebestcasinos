"use client"

import Image from "next/image"
import { Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BonusCounter from "@/components/bonus-counter"
import type { Casino } from "@/lib/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface TrendingCasinosProps {
  casinos: Casino[]
}

export default function TrendingCasinos({ casinos }: TrendingCasinosProps) {
  // Ensure we have at least 3 casinos to display
  const displayCasinos = casinos.length >= 3 ? casinos : [...casinos, ...casinos].slice(0, 3)
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
          Player's Choice: Ireland's Top Trending Casinos This Month
        </h2>
        <p
          className={`text-lg text-[#a0aec0] text-center max-w-3xl mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          These casinos are gaining popularity among Irish players right now. See what everyone's talking about!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {displayCasinos.map((casino, index) => (
            <Card
              key={casino.name}
              className={`casino-card overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block flex-grow">
                  <div className="flex flex-col items-center h-full">
                    <div className="relative w-full h-24 mb-4 animate-float">
                      <Image
                        src={casino.logo || `/placeholder.svg?height=96&width=96&query=casino logo for ${casino.name}`}
                        alt={casino.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="bg-[#FFD700] text-black text-xs font-bold px-2 py-1 rounded-full flex items-center animate-pulse-slow">
                        <TrendingUp size={14} className="mr-1" />
                        Trending Now
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-[#e2e8f0]">{casino.name}</h3>
                    <p className="text-xl font-bold text-[#007845] mb-3 card-bonus">{casino.bonus}</p>

                    <div className="flex items-center justify-center mb-4 star-rating">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`star ${
                              i < Math.floor(casino.rating)
                                ? "text-[#FFD700] fill-[#FFD700]"
                                : "text-gray-500 fill-gray-500"
                            }`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-[#a0aec0]">{casino.rating}</span>
                    </div>
                  </div>
                </Link>

                {/* Fixed position footer for buttons and counter */}
                <div className="mt-auto">
                  <Button className="w-full bg-[#007845] hover:bg-[#006035] text-white glow-button claim-button focus-outline">
                    Claim Bonus
                  </Button>
                  <div className="bonus-counter mt-2">
                    <BonusCounter initialCount={casino.usersCount} casinoName={casino.name} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
