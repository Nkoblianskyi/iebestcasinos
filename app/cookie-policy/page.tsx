import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Shield, Settings, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy - IEBestCasinos.com",
  description: "Learn about how we use cookies on IEBestCasinos.com and how you can manage your cookie preferences.",
}

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description:
      "These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.",
    examples: ["Session management", "Security features", "Basic functionality"],
  },
  {
    icon: Settings,
    title: "Performance & Functionality Cookies",
    description:
      "These cookies are used to enhance the performance and functionality of our website but are non-essential to their use.",
    examples: ["Site performance", "User preferences", "Enhanced features"],
  },
  {
    icon: Info,
    title: "Analytics & Customization Cookies",
    description:
      "These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.",
    examples: ["Usage analytics", "Site optimization", "Content customization"],
  },
  {
    icon: Cookie,
    title: "Advertising Cookies",
    description:
      "These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing.",
    examples: ["Targeted advertising", "Ad frequency control", "Marketing effectiveness"],
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#007845] to-[#006035] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Cookie className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Learn how we use cookies to enhance your experience on IEBestCasinos.com
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">What are cookies?</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Cookies are small data files that are placed on your computer or mobile device when you visit a
                  website. Cookies are widely used by website owners in order to make their websites work, or to work
                  more efficiently, as well as to provide reporting information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Cookie Policy explains how IEBestCasinos.com ("we", "us", or "our") uses cookies and similar
                  technologies to recognize you when you visit our website. It explains what these technologies are and
                  why we use them, as well as your rights to control our use of them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Types of Cookies We Use</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((type) => (
                <Card key={type.title} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#007845]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <type.icon className="w-6 h-6 text-[#007845]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{type.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {type.examples.map((example, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-[#007845] rounded-full mr-2"></div>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Use Cookies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Do We Use Cookies?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Essential Functions</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Enable basic website functionality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Remember your preferences and settings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Provide security features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Enhanced Experience</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Analyze website performance and usage</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Personalize content and recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#007845] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>Improve our services based on user behavior</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Control */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#007845]/20 shadow-lg bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">How to Control Cookies</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Browser Settings</h3>
                    <p className="text-gray-700 mb-4">
                      You can set or amend your web browser controls to accept or refuse cookies. If you choose to
                      reject cookies, you may still use our website though your access to some functionality and areas
                      of our website may be restricted.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Cookie Preferences</h3>
                    <p className="text-gray-700 mb-4">
                      You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in
                      the cookie banner when you first visit our site, or by accessing the cookie settings in your
                      browser.
                    </p>
                  </div>

                  <div className="bg-[#007845]/5 rounded-lg p-6">
                    <h4 className="font-semibold text-[#007845] mb-2">Important Note</h4>
                    <p className="text-gray-700 text-sm">
                      Please note that if you disable cookies, some features of our website may not function properly,
                      and your user experience may be limited.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
