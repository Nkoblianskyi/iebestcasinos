"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BonusCounter from "@/components/bonus-counter"
import type { Casino } from "@/lib/types"
import Link from "next/link"
import { useEffect, useState } from "react"

interface CasinoListProps {
  casinos: Casino[]
  extended?: boolean
}

// Sample review texts
const reviewTexts = [
  "Excellent game variety with generous welcome bonus and fast payouts. Perfect for Irish players seeking a premium experience.",
  "Outstanding mobile compatibility with 24/7 customer support. Offers a wide range of payment methods for Irish players.",
  "Impressive selection of slots and live dealer games. Quick registration process and hassle-free withdrawals.",
  "Great loyalty program with regular promotions. User-friendly interface and excellent game filtering options.",
  "Fantastic welcome package with reasonable wagering requirements. Responsive customer service and secure gaming environment.",
]

export default function CasinoList({ casinos, extended = false }: CasinoListProps) {
  const [coins, setCoins] = useState<{ id: number; left: string; delay: string; duration: string }[]>([])

  useEffect(() => {
    // Create floating coins
    const newCoins = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 4}s`,
    }))
    setCoins(newCoins)
  }, [])

  return (
    <section id="casino-list" className="py-16 casino-bg relative">
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

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Top Casino Bonuses in Ireland
        </h2>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {casinos.map((casino, index) => (
            <Card
              key={casino.name}
              className={`casino-card overflow-hidden bg-white/95 backdrop-blur-sm ${
                index === 0 ? "bg-gradient-to-r from-[#007845]/5 to-[#FFD700]/5 border-[#FFD700]" : ""
              }`}
            >
              <CardContent className="p-6">
                <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/5 flex justify-center">
                      <div className="relative w-32 h-32 md:w-full md:h-24">
                        <Image
                          src={
                            casino.logo || `/placeholder.svg?height=96&width=96&query=casino logo for ${casino.name}`
                          }
                          alt={casino.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="hidden md:flex flex-col items-center mt-2 star-rating">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={`star ${
                                i < Math.floor(casino.rating)
                                  ? "text-[#FFD700] fill-[#FFD700]"
                                  : "text-gray-300 fill-gray-300"
                              }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                        <span className="text-xs mt-1 text-slate-300">{casino.rating}</span>
                      </div>
                    </div>

                    <div className="w-full md:w-3/5 text-center md:text-left">
                      <h3 className="text-lg font-bold mb-1 text-white">{casino.name}</h3>
                      <p className="text-xl font-bold text-[#007845] mb-2 card-bonus">{casino.bonus}</p>

                      <div className="flex md:hidden items-center justify-center mb-2 star-rating">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={`star ${
                                i < Math.floor(casino.rating)
                                  ? "text-[#FFD700] fill-[#FFD700]"
                                  : "text-gray-300 fill-gray-300"
                              }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600">{casino.rating}</span>
                      </div>

                      <p className="text-sm text-slate-200">{reviewTexts[index % reviewTexts.length]}</p>
                    </div>

                    <div className="w-full md:w-1/5 flex flex-col items-center mt-4 md:mt-0">
                      <Button className="w-full bg-[#007845] hover:bg-[#006035] text-white glow-button claim-button">
                        Claim Bonus
                      </Button>

                      <p className="text-xs mt-2 text-center text-green-600">18+ | T&Cs Apply</p>

                      <div className="bonus-counter">
                        <BonusCounter initialCount={casino.usersCount} casinoName={casino.name} />
                      </div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
