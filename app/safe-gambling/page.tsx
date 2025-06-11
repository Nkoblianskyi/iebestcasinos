import type { Metadata } from "next"
import SafeGamblingSection from "@/components/safe-gambling-section"

export const metadata: Metadata = {
  title: "Safe Gambling - IEBestCasinos.com",
  description: "Learn about responsible gambling practices and find resources for support in Ireland.",
}

export default function SafeGamblingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Safe and Responsible Gambling</h1>

      <div className="prose max-w-none mb-12">
        <p className="text-lg mb-6 text-white">
          At IEBestCasinos.com, we are committed to promoting safe and responsible gambling practices. We believe that
          gambling should be an enjoyable form of entertainment, not a way to make money or escape from problems.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Signs of Problem Gambling</h2>
        <ul className="list-disc pl-6 mb-6 text-white">
          <li>Spending more money and time on gambling than you can afford</li>
          <li>Finding it difficult to manage or stop your gambling</li>
          <li>Having arguments with family or friends about money and gambling</li>
          <li>Losing interest in usual activities or hobbies</li>
          <li>Always thinking or talking about gambling</li>
          <li>Lying about your gambling or hiding it from others</li>
          <li>Chasing losses or gambling to get out of financial trouble</li>
          <li>Gambling until all your money is gone</li>
          <li>Borrowing money, selling possessions or not paying bills in order to fund gambling</li>
          <li>
            Gambling to escape from problems or to cope with feelings of helplessness, guilt, anxiety or depression
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Responsible Gambling Tools</h2>
        <p className="mb-6 text-white">
          Most reputable online casinos offer tools to help you stay in control of your gambling:
        </p>
        <ul className="list-disc pl-6 mb-6 text-white">
          <li>
            <strong className="text-white">Deposit limits</strong> - Set daily, weekly or monthly deposit limits
          </li>
          <li>
            <strong className="text-white">Time limits</strong> - Set reminders for how long you've been playing
          </li>
          <li>
            <strong className="text-white">Self-exclusion</strong> - Take a break from gambling for a set period
          </li>
          <li>
            <strong className="text-white">Reality checks</strong> - Regular notifications about time spent gambling
          </li>
          <li>
            <strong className="text-white">Account history</strong> - Review your gambling activity and spending
          </li>
        </ul>
      </div>

      <SafeGamblingSection extended={true} />
    </div>
  )
}
