"use client"

import Image from "next/image"
import { ChevronDown, Star, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BonusCounter from "@/components/bonus-counter"
import type { Casino } from "@/lib/types"
import Link from "next/link"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  topCasino: Casino
}

export default function HeroSection({ topCasino }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [coins, setCoins] = useState<{ id: number; left: string; delay: string; duration: string }[]>([])

  useEffect(() => {
    // Animation on mount
    setIsVisible(true)

    // Create floating coins
    const newCoins = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 4}s`,
    }))
    setCoins(newCoins)
  }, [])

  const scrollToTopList = () => {
    const element = document.getElementById("casino-list")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center irish-flag-bg">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1419]/90"></div>

      {/* Floating coins */}
      <div className="floating-coins">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="coin"
            style={{
              left: coin.left,
              animationDelay: coin.delay,
              animationDuration: coin.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Irish flag and license info */}
        <div className={`flex items-center justify-center mb-6 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            <Image src="/ireland.png" alt="logo" width={40} height={40} />
            <span className="text-white font-medium ml-2">Irish License</span>
            <span className="mx-3 text-gray-400">|</span>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-[#007845] mr-1" />
              <span className="text-white font-medium">Safe Gambling</span>
            </div>
            <span className="mx-3 text-gray-400">|</span>
            <span className="bg-white text-black text-sm font-bold px-2 py-1 rounded">18+</span>
          </div>
        </div>

        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e2e8f0] hero-title ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          Find the Best Online Casinos in Ireland 2025
        </h1>

        <p
          className={`text-xl md:text-2xl text-[#a0aec0] max-w-3xl mx-auto mb-10 hero-subtitle ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          Explore our expert-picked list of Ireland's top online casino bonuses, reviewed and updated monthly.
        </p>

        <div className={`max-w-md mx-auto mb-10 hero-cta ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Link href={topCasino.url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="editors-choice dark-card border-[#FFD700] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer animated-card z-10 ">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-40 h-40 mb-4 animate-float">
                    <Image
                      src={
                        topCasino.logo ||
                        `/placeholder.svg?height=160&width=160&query=casino logo for ${topCasino.name || "/placeholder.svg"}`
                      }
                      alt={topCasino.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-[#e2e8f0]">{topCasino.name}</h3>
                  <p className="text-2xl font-bold text-[#007845] mb-3 card-bonus">{topCasino.bonus}</p>

                  <div className="flex items-center justify-center mb-4 star-rating">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`star ${i < Math.floor(topCasino.rating)
                              ? "text-[#FFD700] fill-[#FFD700]"
                              : "text-gray-500 fill-gray-500"
                            }`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-[#a0aec0]">
                      {topCasino.rating} ({topCasino.votes} votes)
                    </span>
                  </div>

                  <Button
                    className="w-full bg-[#007845] hover:bg-[#006035] text-white glow-button claim-button focus-outline"
                    asChild
                  >
                    <span>Claim Bonus</span>
                  </Button>

                  <p className="text-xs text-[#a0aec0] mt-2 text-center">
                    18+ | Terms & Conditions Apply | GambleAware.org
                  </p>

                  <div className="bonus-counter">
                    <BonusCounter initialCount={topCasino.usersCount} casinoName={topCasino.name} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <Button
          onClick={scrollToTopList}
          className="bg-[#007845] hover:bg-[#006035] text-white text-lg px-8 py-6 rounded-md animated-button glow-button focus-outline hero-cta"
          size="lg"
        >
          See Full Casino List
        </Button>

        <div className={`mt-10 animate-bounce hero-cta ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={scrollToTopList}
            className="text-[#a0aec0] hover:text-[#007845] transition-colors focus-outline"
            aria-label="Scroll to casino list"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </section>
  )
}
