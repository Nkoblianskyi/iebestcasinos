import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, FileText, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - IEBestCasinos.com",
  description: "Learn about how we collect, use, and protect your personal information on IEBestCasinos.com.",
}

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "We implement strong security measures to protect your personal information from unauthorized access.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We are clear about what information we collect and how we use it for your benefit.",
  },
  {
    icon: Lock,
    title: "Secure Processing",
    description: "All data processing is done securely and in compliance with applicable privacy laws.",
  },
  {
    icon: Users,
    title: "User Control",
    description: "You have control over your personal information and can request changes or deletion at any time.",
  },
]

const dataTypes = [
  {
    title: "Personal Information",
    description: "Information you voluntarily provide such as name, email address, and contact details.",
    examples: ["Name and email address", "Phone number", "Communication preferences"],
  },
  {
    title: "Technical Data",
    description: "Information automatically collected when you visit our website.",
    examples: ["IP address and browser type", "Device information", "Website usage patterns"],
  },
  {
    title: "Interaction Data",
    description: "Information about how you interact with our website and services.",
    examples: ["Pages visited", "Time spent on site", "Click patterns and preferences"],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#007845] to-[#006035] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Your privacy is important to us. Learn how we protect and handle your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Privacy Principles</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle) => (
                <Card
                  key={principle.title}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#007845]/10 flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="w-8 h-8 text-[#007845]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{principle.title}</h3>
                    <p className="text-gray-600 text-sm">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Information We Collect</h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {dataTypes.map((type, index) => (
                <Card key={type.title} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#007845] text-white flex items-center justify-center font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{type.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-[#007845] rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How We Use Your Information</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 text-[#007845] mb-4" />
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Service Provision</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Provide and maintain our website services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Personalize your experience on our site</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Process and respond to your inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Send you relevant updates and information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-[#007845] mb-4" />
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Improvement & Analytics</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Analyze website usage and performance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Improve our content and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Develop new features and services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Ensure website security and prevent fraud</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#007845]/20 shadow-lg bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                  Information Sharing and Disclosure
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Third-Party Service Providers</h3>
                    <p className="text-gray-700 mb-4">
                      We may share your information with trusted third-party service providers who assist us in
                      operating our website, conducting our business, or serving our users. These parties are obligated
                      to keep your information confidential.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Legal Requirements</h3>
                    <p className="text-gray-700 mb-4">
                      We may disclose your information if required to do so by law or in response to valid requests by
                      public authorities (e.g., a court or government agency).
                    </p>
                  </div>

                  <div className="bg-[#007845]/5 rounded-lg p-6">
                    <h4 className="font-semibold text-[#007845] mb-2">Important Note</h4>
                    <p className="text-gray-700 text-sm">
                      We do not sell, trade, or otherwise transfer your personal information to third parties for
                      marketing purposes without your explicit consent.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Your Privacy Rights</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-gray-900">Access & Portability</h3>
                <p className="text-gray-600 text-sm">
                  Request access to your personal data and receive a copy in a portable format.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-gray-900">Correction</h3>
                <p className="text-gray-600 text-sm">
                  Request correction of inaccurate or incomplete personal information.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-gray-900">Deletion</h3>
                <p className="text-gray-600 text-sm">
                  Request deletion of your personal data under certain circumstances.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-gray-900">Objection</h3>
                <p className="text-gray-600 text-sm">
                  Object to the processing of your personal data for certain purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
