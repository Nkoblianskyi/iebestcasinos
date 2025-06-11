import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import WelcomeModal from "@/components/welcome-modal"
import { getCasinos } from "@/lib/data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IEBestCasinos.com - Best Online Casinos in Ireland 2025",
  description: "Explore our expert-picked list of Ireland's top online casino bonuses, reviewed and updated monthly.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Get casino data once at the layout level
  const casinos = getCasinos()

  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
          <WelcomeModal casinos={casinos} />
      </body>
    </html>
  )
}
