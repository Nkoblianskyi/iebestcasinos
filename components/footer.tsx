"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const supportOrganizations = [
  {
    name: "GambleAware",
    logo: "/gamble.webp",
    url: "https://www.gambleaware.org/",
  },
  {
    name: "GamCare",
    logo: "/gamecare.svg",
    url: "https://www.gamcare.org.uk/",
  },
  {
    name: "GamblingTherapy",
    logo: "/gordon.png",
    url: "https://www.gamblingtherapy.org/",
  },
]

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div
            className={`mb-8 md:mb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link href="/" className="text-xl font-bold logo-text focus-outline">
              <div className="flex items-center gap-2">
                <Image src="/ireland.png" alt="logo" width={40} height={40} />
                <span className="text-[#007845]">IEBestCasinos</span>
              </div>
            </Link>

            <div className="mt-4 flex items-center">
              <span className="text-black text-sm font-semibold px-2 py-1 rounded mr-2 hover-scale bg-orange-700">18+</span>
              <span>Play Responsibly</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div
              className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors footer-link focus-outline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/top-casino-bonuses"
                    className="text-gray-300 hover:text-white transition-colors footer-link focus-outline"
                  >
                    Top Casino Bonuses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/safe-gambling"
                    className="text-gray-300 hover:text-white transition-colors footer-link focus-outline"
                  >
                    Safe Gambling
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-300 hover:text-white transition-colors footer-link focus-outline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors footer-link focus-outline"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="text-gray-300 hover:text-white transition-colors footer-link focus-outline"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-white transition-colors footer-link focus-outline"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`col-span-2 md:col-span-1 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h3 className="text-lg font-semibold mb-4">Support Organizations</h3>
              <div className="flex flex-wrap gap-4">
                {supportOrganizations.map((org) => (
                  <Link
                    key={org.name}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block safe-gambling-logo focus-outline"
                  >
                    <div className="relative w-28 h-14 bg-white rounded overflow-hidden p-2">
                      <Image src={org.logo || "/placeholder.svg"} alt={org.name} fill className="object-contain p-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <p
            className={`text-sm text-gray-400 text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Gambling can be addictive. Please play responsibly. If you have any issues, contact one of the support
            organizations listed above.
          </p>

          <p
            className={`text-sm text-gray-400 text-center mt-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            &copy; {new Date().getFullYear()} IEBestCasinos.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
