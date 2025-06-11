import type { Metadata } from "next"
import { Shield, Award, Clock, CheckCircle, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - IEBestCasinos.com",
  description: "Learn about our team of casino experts and how we review and rate the best online casinos in Ireland.",
}

const teamValues = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize player safety and only recommend licensed, regulated casinos.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Our review process is open and honest, with clear disclosure of partnerships.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Our team has years of experience in the gambling industry and knows what players need.",
  },
  {
    icon: Clock,
    title: "Up-to-Date",
    description: "We continuously monitor and update our recommendations to ensure accuracy.",
  },
]

const reviewProcess = [
  {
    step: "01",
    title: "Account Creation",
    description: "We create real accounts and deposit our own money to test the casino experience.",
  },
  {
    step: "02",
    title: "Game Testing",
    description: "We play various games to test functionality, fairness, and overall user experience.",
  },
  {
    step: "03",
    title: "Support Evaluation",
    description: "We test customer support response times and quality across multiple channels.",
  },
  {
    step: "04",
    title: "Withdrawal Testing",
    description: "We process real withdrawals to verify payout times and procedures.",
  },
  {
    step: "05",
    title: "Final Review",
    description: "We compile our findings into comprehensive reviews with honest ratings.",
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#007845] to-[#006035] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About IEBestCasinos.com</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Your trusted guide to the best online casinos in Ireland, backed by expert reviews and honest
            recommendations.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is simple: to help Irish players find safe, reliable, and enjoyable online casinos. We
              understand that with so many options available, it can be overwhelming to choose where to play. That's why
              we've done the hard work for you, thoroughly testing and reviewing each casino to ensure they meet our
              strict standards.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamValues.map((value) => (
                <Card key={value.title} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#007845]/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-[#007845]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Review Process</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviewProcess.map((process, index) => (
                <Card key={process.step} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#007845] text-white flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{process.title}</h3>
                        <p className="text-gray-600 text-sm">{process.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rating Criteria Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">What We Evaluate</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#007845] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Safety and Licensing</h3>
                    <p className="text-gray-600 text-sm">
                      Valid licenses from reputable authorities and strong security measures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#007845] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Bonus Value and Terms</h3>
                    <p className="text-gray-600 text-sm">Fair wagering requirements and genuine value for players.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#007845] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Game Selection and Quality</h3>
                    <p className="text-gray-600 text-sm">Variety of games from top providers and smooth gameplay.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#007845] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Payment Options</h3>
                    <p className="text-gray-600 text-sm">Secure payment methods with reasonable processing times.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#007845] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Mobile Compatibility</h3>
                    <p className="text-gray-600 text-sm">Seamless experience across all devices and platforms.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#007845] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Customer Support</h3>
                    <p className="text-gray-600 text-sm">Responsive and helpful customer service when you need it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#007845]/20 shadow-lg bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Affiliate Disclosure</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    IEBestCasinos.com may receive compensation when you click on links and sign up with our partners.
                    However, this does not influence our reviews or ratings in any way. Our opinions are based on
                    thorough testing and are completely independent.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We only recommend casinos that we would play at ourselves, and we maintain strict editorial
                    standards regardless of commercial relationships. Our primary goal is to provide honest, helpful
                    information to Irish players.
                  </p>
                  <p className="text-gray-700">
                    Transparency is important to us, and we believe in being upfront about how our site operates while
                    maintaining our commitment to providing unbiased casino reviews.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Have questions, suggestions, or feedback? We'd love to hear from you! Our team is always ready to help Irish
            players find the best casino experience.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto shadow-sm">
            <p className="text-gray-600 mb-2">Contact us at:</p>
            <p className="text-xl font-semibold text-[#007845]">info@iebestcasinos.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
