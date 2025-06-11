"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")

    if (!cookiesAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 md:pr-8">
          We use cookies to enhance your experience on our site. Please read our{" "}
          <Link href="/cookie-policy" className="text-[#007845] hover:underline">
            Cookie Policy
          </Link>{" "}
          for more details.
        </div>

        <div className="flex gap-3">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white" variant="outline" size="sm" asChild>
            <Link href="/cookie-policy">Decline</Link>
          </Button>

          <Button className="bg-[#007845] hover:bg-[#006035] text-white" size="sm" onClick={acceptCookies}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
