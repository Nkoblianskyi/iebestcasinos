"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqSectionProps {
  extended?: boolean
}

const faqs = [
  {
    question: "Are online casinos legal in Ireland?",
    answer:
      "Yes, online gambling is legal in Ireland. The country operates under the Gaming and Lotteries Act of 1956 and the Betting Act of 1931, as amended by the Betting (Amendment) Act 2015. While Ireland doesn't issue licenses to online casinos directly, Irish players can legally access casinos licensed by reputable international authorities such as the UK Gambling Commission, Malta Gaming Authority, and Gibraltar Regulatory Authority.",
  },
  {
    question: "How do I know if a casino is safe?",
    answer:
      "A safe online casino should have a valid license from a reputable regulatory body (such as UKGC, MGA, or Gibraltar), use SSL encryption to protect your data, offer secure payment methods, have a clear privacy policy, and implement responsible gambling tools. All casinos recommended on IEBestCasinos.com meet these safety criteria and have been thoroughly vetted by our team.",
  },
  {
    question: "What is the best Irish casino bonus?",
    answer:
      "The best casino bonus depends on your preferences as a player. Some players prefer large match deposit bonuses, while others value free spins or no-deposit bonuses. At IEBestCasinos.com, we currently rate Midnite's 'Bet €20 Get 100 Free Spins' as our top bonus due to its generous value and fair terms and conditions. However, we recommend checking our updated list regularly as offers change frequently.",
  },
  {
    question: "How often is your list updated?",
    answer:
      "We update our casino list and bonus offers monthly to ensure all information is current and accurate. Our team continuously monitors changes in bonus terms, new casino launches, and any issues with existing recommendations. If there are significant industry changes or major new bonus offers, we may update more frequently.",
  },
  {
    question: "Why trust IEBestCasinos.com?",
    answer:
      "IEBestCasinos.com is run by a team of experienced gambling industry experts who thoroughly test each casino we recommend. We only list licensed and regulated casinos, and we're transparent about our review methodology. While we may earn commissions from casinos, our reviews remain independent and honest, focusing on the actual player experience rather than commercial relationships.",
  },
  {
    question: "What payment methods can I use at Irish online casinos?",
    answer:
      "Most Irish online casinos accept a variety of payment methods including credit/debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, prepaid cards (Paysafecard), and increasingly, cryptocurrencies. The availability of specific methods varies by casino, and we include payment information in our detailed reviews.",
  },
  {
    question: "How do I claim a casino bonus?",
    answer:
      "To claim a casino bonus, click the 'Claim Bonus' or 'Play Now' button on our site, which will take you to the casino's registration page. Complete the sign-up process, verify your account if required, and make a qualifying deposit if it's a deposit bonus. Some bonuses may require a bonus code, which will be clearly indicated in our review. Always read the terms and conditions before claiming any bonus.",
  },
  {
    question: "What are wagering requirements?",
    answer:
      "Wagering requirements (also called playthrough requirements) specify how many times you need to bet the bonus amount before you can withdraw any winnings. For example, a €10 bonus with a 35x wagering requirement means you need to place bets totaling €350 before withdrawing. Lower wagering requirements are more favorable to players, and we highlight this factor in our bonus reviews.",
  },
  {
    question: "Can I play casino games on my mobile device?",
    answer:
      "Yes, all casinos we recommend offer mobile-compatible platforms. Most modern online casinos provide either dedicated mobile apps or responsive websites that work seamlessly on smartphones and tablets. Mobile casinos offer the same games, bonuses, and features as their desktop counterparts, allowing you to play anywhere with an internet connection.",
  },
  {
    question: "What types of casino games are available?",
    answer:
      "Irish online casinos typically offer a wide variety of games including slot machines (the most popular), table games like blackjack, roulette, and baccarat, live dealer games with real dealers via video stream, video poker, and specialty games like bingo and scratch cards. The exact selection varies by casino, but most offer hundreds or even thousands of different games.",
  },
  {
    question: "How long do withdrawals take at Irish online casinos?",
    answer:
      "Withdrawal times vary depending on the casino and payment method chosen. E-wallets like PayPal, Skrill, and Neteller are typically the fastest (within 24 hours), while bank transfers and card withdrawals can take 3-5 business days. Some casinos offer instant withdrawals for verified accounts. We include withdrawal timeframes in our casino reviews to help you choose accordingly.",
  },
  {
    question: "Do I need to pay taxes on casino winnings in Ireland?",
    answer:
      "In Ireland, gambling winnings are generally not subject to income tax for recreational players. However, if gambling is considered your profession or primary source of income, winnings may be taxable. We recommend consulting with a tax professional for advice specific to your situation. Additionally, some countries may have different tax obligations for their residents gambling online.",
  },
  {
    question: "What should I do if I have a problem with an online casino?",
    answer:
      "If you encounter issues with an online casino, first try to resolve the matter directly with the casino's customer support team. Keep records of all communications. If the issue remains unresolved, you can contact the casino's licensing authority to file a complaint. Additionally, organizations like eCOGRA provide dispute resolution services for players. We only recommend casinos with good customer service records and proper licensing.",
  },
  {
    question: "Are casino games fair and random?",
    answer:
      "Yes, reputable online casinos use Random Number Generators (RNGs) to ensure fair and random game outcomes. These RNGs are regularly tested and certified by independent auditing companies like eCOGRA, iTech Labs, and GLI. Licensed casinos are required to maintain fair gaming standards and publish their payout percentages. We only recommend casinos that have been independently audited for fairness.",
  },
  {
    question: "What is responsible gambling and why is it important?",
    answer:
      "Responsible gambling means enjoying casino games as entertainment while maintaining control over your time and money spent. It's important because gambling should never negatively impact your finances, relationships, or mental health. Set limits before you play, never chase losses, take regular breaks, and seek help if gambling becomes problematic. All our recommended casinos provide responsible gambling tools and resources.",
  },
  {
    question: "Can I set limits on my gambling activity?",
    answer:
      "Yes, all reputable online casinos offer various responsible gambling tools including deposit limits (daily, weekly, monthly), loss limits, session time limits, cooling-off periods, and self-exclusion options. These tools help you maintain control over your gambling activity. You can usually find these options in your account settings or by contacting customer support.",
  },
  {
    question: "What makes a casino bonus good or bad?",
    answer:
      "A good casino bonus has reasonable wagering requirements (typically 35x or lower), a fair time limit to use the bonus (at least 30 days), includes your favorite games in the wagering contribution, has a reasonable maximum bet limit while playing with bonus funds, and comes from a reputable casino. Avoid bonuses with extremely high wagering requirements, very short time limits, or restrictive terms that make it nearly impossible to withdraw winnings.",
  },
  {
    question: "Do you recommend any specific strategies for casino games?",
    answer:
      "While casino games are primarily based on luck, some games like blackjack and video poker have optimal strategies that can improve your odds. For slots and roulette, there are no strategies that can overcome the house edge. The most important 'strategy' is to set a budget, stick to it, understand the games you're playing, and never gamble more than you can afford to lose. Remember, the house always has an edge in the long run.",
  },
]

export default function FaqSection({ extended = false }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const displayFaqs = extended ? faqs : faqs.slice(0, 5)

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        {!extended && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get quick answers to common questions about online casinos in Ireland
            </p>
          </div>
        )}

        <div className="space-y-4">
          {displayFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg pr-4 text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-[#007845] w-5 h-5" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-400 w-5 h-5" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {!extended && (
          <div className="text-center mt-8">
            <a
              href="/faq"
              className="inline-flex items-center text-[#007845] hover:text-[#006035] font-medium text-lg transition-colors"
            >
              View all FAQs
              <ChevronDown className="ml-1 rotate-270 w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
