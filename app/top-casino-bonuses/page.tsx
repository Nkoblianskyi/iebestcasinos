import type { Metadata } from "next"
import CasinoList from "@/components/casino-list"
import { getCasinos } from "@/lib/data"

export const metadata: Metadata = {
  title: "Top Casino Bonuses in Ireland - IEBestCasinos.com",
  description: "Discover the best casino bonuses available to Irish players in 2025, reviewed and updated monthly.",
}

export default function TopCasinoBonusesPage() {
  const casinos = getCasinos()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#007845] to-[#006035] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <span className="text-3xl">🎁</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Top Casino Bonuses in Ireland</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Discover the best casino bonuses available to Irish players in 2025, reviewed and updated monthly.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Our Recommended Bonuses?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Looking for the best casino bonuses in Ireland? You've come to the right place! Our team of experts
              constantly reviews and updates our list of the top casino bonuses available to Irish players.
            </p>

            <p className="text-gray-600 mb-8">
              We evaluate each bonus based on its value, wagering requirements, time limits, and overall terms and
              conditions to ensure we only recommend bonuses that offer real value to players.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#007845] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fair Terms</h3>
                <p className="text-gray-600 text-sm">
                  All bonuses have reasonable wagering requirements and clear terms
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#007845] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Licensed Casinos</h3>
                <p className="text-gray-600 text-sm">Only from fully licensed and regulated casino operators</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#007845] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📅</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Updated Monthly</h3>
                <p className="text-gray-600 text-sm">Fresh offers reviewed and updated every month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casino List Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <CasinoList casinos={casinos} extended={true} />
        </div>
      </section>
    </div>
  )
}
