"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface SafeGamblingSectionProps {
  extended?: boolean
}

const supportOrganizations = [
  {
    name: "GambleAware",
    logo: "/placeholder.svg?height=60&width=180",
    url: "https://www.gambleaware.org/",
  },
  {
    name: "GamCare",
    logo: "/placeholder.svg?height=60&width=180",
    url: "https://www.gamcare.org.uk/",
  },
  {
    name: "GamblingTherapy",
    logo: "/placeholder.svg?height=60&width=180",
    url: "https://www.gamblingtherapy.org/",
  },
  {
    name: "Gamblers Anonymous IE",
    logo: "/placeholder.svg?height=60&width=180",
    url: "https://www.gamblersanonymous.ie/",
  },
  {
    name: "EGBA",
    logo: "/placeholder.svg?height=60&width=180",
    url: "https://www.egba.eu/",
  },
]

export default function SafeGamblingSection({ extended = false }: SafeGamblingSectionProps) {
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
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#e2e8f0]">
            Ireland's Rich Gaming Heritage & Casino Culture
          </h2>

          <p className="text-lg text-center text-[#a0aec0] mb-12 max-w-3xl mx-auto">
            Discover the fascinating world of Irish gaming culture, from ancient Celtic games of chance to modern online
            casino entertainment that captures the spirit of the Emerald Isle.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="dark-card border-[#007845]/30 hover:border-[#FFD700]/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-[#007845]/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🍀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#e2e8f0] text-center">Celtic Luck Traditions</h3>
                <p className="text-[#a0aec0] text-sm">
                  The Irish have long believed in the power of luck and fortune. From ancient druids casting lots to
                  modern players seeking the luck of the Irish, gaming has deep cultural roots in Ireland's mystical
                  heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#007845]/30 hover:border-[#FFD700]/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-[#007845]/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🎰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#e2e8f0] text-center">Modern Irish Gaming</h3>
                <p className="text-[#a0aec0] text-sm">
                  Today's Irish players embrace both traditional pub games and cutting-edge online casinos. The blend of
                  old-world charm with modern technology creates a unique gaming experience that's distinctly Irish.
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card border-[#007845]/30 hover:border-[#FFD700]/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-[#007845]/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#e2e8f0] text-center">Championship Spirit</h3>
                <p className="text-[#a0aec0] text-sm">
                  Irish players are known for their competitive spirit and love of a good challenge. Whether it's poker
                  tournaments or slot competitions, the Irish bring passion and skill to every game they play.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="dark-card border-[#FFD700]/30 bg-gradient-to-r from-[#007845]/10 to-[#FFD700]/10">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">Did You Know?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-[#e2e8f0] mb-2">🎲 Ancient Origins</h4>
                    <p className="text-[#a0aec0] text-sm mb-4">
                      Archaeological evidence shows that dice games were played in Ireland over 2,000 years ago, with
                      bone dice found in ancient Celtic settlements.
                    </p>

                    <h4 className="font-semibold text-[#e2e8f0] mb-2">🃏 Card Game Masters</h4>
                    <p className="text-[#a0aec0] text-sm">
                      Ireland has produced some of the world's best poker players, with Irish professionals winning
                      millions in international tournaments and bringing pride to the nation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#e2e8f0] mb-2">🎯 Pub Gaming Culture</h4>
                    <p className="text-[#a0aec0] text-sm mb-4">
                      Traditional Irish pubs have been centers of gaming culture for centuries, hosting everything from
                      card games to modern slot machines, creating a social gaming atmosphere.
                    </p>

                    <h4 className="font-semibold text-[#e2e8f0] mb-2">💰 Lucky Symbols</h4>
                    <p className="text-[#a0aec0] text-sm">
                      Four-leaf clovers, horseshoes, and leprechauns aren't just folklore - they're integral parts of
                      Irish gaming culture, appearing in countless slot games and casino themes worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
