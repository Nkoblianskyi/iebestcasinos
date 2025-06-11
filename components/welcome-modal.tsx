"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BonusCounter from "@/components/bonus-counter"
import type { Casino } from "@/lib/types"
import Link from "next/link"

interface WelcomeModalProps {
  casinos: Casino[]
}

export default function WelcomeModal({ casinos }: WelcomeModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  // Use only the first 3 casinos for the modal
  const displayCasinos = casinos.slice(0, 3)

  useEffect(() => {
    // Check if user has already seen the modal
    const modalSeen = sessionStorage.getItem("welcomeModalSeen")

    if (!modalSeen) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    sessionStorage.setItem("welcomeModalSeen", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto clover-bg-dense">
        <div className="p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Top Irish Casino Bonuses</h2>

          <div className="grid gap-6">
            {displayCasinos.map((casino) => (
              <Card key={casino.name} className="overflow-hidden">
                <CardContent className="p-6">
                  <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-32 h-32">
                          <Image
                            src={
                              casino.logo ||
                              `/placeholder.svg?height=128&width=128&query=casino logo for ${casino.name || "/placeholder.svg"}`
                            }
                            alt={casino.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="w-full md:w-2/3 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">{casino.name}</h3>
                        <p className="text-2xl font-bold text-[#007845] mb-4">{casino.bonus}</p>

                        <Button className="w-full md:w-auto bg-[#007845] hover:bg-[#006035] text-white">
                          Claim Bonus
                        </Button>

                        <BonusCounter initialCount={casino.usersCount} casinoName={casino.name} />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
