import type { Metadata } from "next"
import FaqSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - IEBestCasinos.com",
  description:
    "Find answers to common questions about online casinos in Ireland, bonuses, safe gambling practices, and more.",
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#007845] rounded-full mb-6">
              <span className="text-3xl text-white">❓</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about online casinos in Ireland, bonuses, safety, and responsible
              gambling practices.
            </p>
          </div>

          <FaqSection extended={true} />
        </div>
      </div>
    </div>
  )
}
