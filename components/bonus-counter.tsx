"use client"

import { useState, useEffect } from "react"

interface BonusCounterProps {
  initialCount: number
  casinoName: string
}

export default function BonusCounter({ initialCount, casinoName }: BonusCounterProps) {
  const [count, setCount] = useState(initialCount)
  const [isIncrementing, setIsIncrementing] = useState(false)

  useEffect(() => {
    // Створюємо унікальний інтервал для кожного казино
    const getRandomInterval = () => {
      // Різні інтервали для різних казино (від 15 до 45 секунд)
      const baseInterval = 15000 + casinoName.length * 1000
      return baseInterval + Math.random() * 30000
    }

    const getRandomIncrement = () => {
      // Різні прирости для різних казино (від 1 до 4)
      return Math.floor(Math.random() * 4) + 1
    }

    const interval = setInterval(() => {
      setIsIncrementing(true)
      setTimeout(() => {
        setCount((prevCount) => prevCount + getRandomIncrement())
        setIsIncrementing(false)
      }, 500)
    }, getRandomInterval())

    return () => clearInterval(interval)
  }, [casinoName])

  // Форматування числа з комами
  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US")
  }

  return (
    <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
      <div
        className={`flex items-center bg-green-50 px-3 py-1 rounded-full border border-green-200 transition-all duration-300 ${
          isIncrementing ? "pulse bg-green-100" : ""
        }`}
      >
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        <span className="font-medium text-green-700">{formatNumber(count)} people claimed this bonus</span>
      </div>
    </div>
  )
}
