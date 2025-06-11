"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Casino } from "@/lib/types"
import Link from "next/link"

interface WelcomeModalProps {
  casinos: Casino[]
}

export default function WelcomeModal({ casinos }: WelcomeModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  // Use up to 3 casinos for the modal
  const displayCasinos = casinos.slice(0, 3)

  useEffect(() => {
    // Check if user has already seen the modal
    const modalSeen = sessionStorage.getItem("welcomeModalSeen")

    if (!modalSeen) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    sessionStorage.setItem("welcomeModalSeen", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg clover-bg-dense">
        <div className="p-4 sm:p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Close modal"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 pr-8">Top Irish Casino Bonuses</h2>

          <div className="grid gap-4">
            {displayCasinos.map((casino) => (
              <Card key={casino.name} className="overflow-hidden">
                <CardContent className="p-4">
                  <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                        <Image
                          src={
                            casino.logo ||
                            `/placeholder.svg?height=80&width=80&query=casino logo for ${casino.name || "/placeholder.svg"}`
                          }
                          alt={casino.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-grow text-left">
                        <h3 className="text-lg font-bold mb-1">{casino.name}</h3>
                        <p className="text-sm sm:text-base font-bold text-[#007845] mb-2">{casino.bonus}</p>

                        <Button className="w-full bg-[#007845] hover:bg-[#006035] text-white text-sm">
                          Claim Bonus
                        </Button>
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
