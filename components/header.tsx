"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    // Animation on mount
    setIsVisible(true)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCasinoList = () => {
    const element = document.getElementById("casino-list")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-500 sticky-header ${isScrolled ? "scrolled shadow-md" : ""}`}
    >
      {/* Main header */}
      <div
        className={`bg-[#1a1f2e] py-3 px-4 transition-all duration-500 ${isVisible ? "animate-fade-in stagger-1" : "opacity-0"}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold logo-text focus-outline">
              <div className="flex items-center gap-2">
                <Image src="/ireland.png" alt="logo" width={40} height={40} />
                <span className="text-[#007845]">IEBestCasinos</span>
              </div>
            </Link>

            <nav className="hidden md:flex ml-10 space-x-6">
              <Link href="/" className="text-[#e2e8f0] hover:text-[#007845] font-medium nav-link focus-outline">
                Home
              </Link>
              <Link
                href="/top-casino-bonuses"
                className="text-[#e2e8f0] hover:text-[#007845] font-medium nav-link focus-outline"
              >
                Top Casino Bonuses
              </Link>
              <Link
                href="/safe-gambling"
                className="text-[#e2e8f0] hover:text-[#007845] font-medium nav-link focus-outline"
              >
                Safe Gambling
              </Link>
              <Link href="/faq" className="text-[#e2e8f0] hover:text-[#007845] font-medium nav-link focus-outline">
                FAQ
              </Link>
              <Link href="/about-us" className="text-[#e2e8f0] hover:text-[#007845] font-medium nav-link focus-outline">
                About Us
              </Link>
            </nav>
          </div>

          <div className="flex items-center">
            <button
              className="md:hidden ml-4 text-[#e2e8f0] animated-icon focus-outline"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a1f2e] border-t border-[#2d3748] animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#e2e8f0] hover:text-[#007845] font-medium py-2 nav-link focus-outline animate-slide-in-right stagger-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/top-casino-bonuses"
              className="text-[#e2e8f0] hover:text-[#007845] font-medium py-2 nav-link focus-outline animate-slide-in-right stagger-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Top Casino Bonuses
            </Link>
            <Link
              href="/safe-gambling"
              className="text-[#e2e8f0] hover:text-[#007845] font-medium py-2 nav-link focus-outline animate-slide-in-right stagger-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Safe Gambling
            </Link>
            <Link
              href="/faq"
              className="text-[#e2e8f0] hover:text-[#007845] font-medium py-2 nav-link focus-outline animate-slide-in-right stagger-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/about-us"
              className="text-[#e2e8f0] hover:text-[#007845] font-medium py-2 nav-link focus-outline animate-slide-in-right stagger-5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Button
              onClick={() => {
                scrollToCasinoList()
                setIsMobileMenuOpen(false)
              }}
              className="w-full bg-[#007845] hover:bg-[#006035] text-white animated-button glow-button focus-outline animate-fade-in stagger-5"
            >
              View Casino List
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
