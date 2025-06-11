import HeroSection from "@/components/hero-section"
import CasinoList from "@/components/casino-list"
import CasinoFeatures from "@/components/casino-features"
import TrendingCasinos from "@/components/trending-casinos"
import SafeGamblingSection from "@/components/safe-gambling-section"
import RatingMethodology from "@/components/rating-methodology"
import AboutUsSection from "@/components/about-us-section"
import { getCasinos } from "@/lib/data"

export default function Home() {
  // Get casino data once for the entire page
  const casinos = getCasinos()

  // Filter trending casinos
  const trendingCasinos = casinos.filter((casino) => casino.trending)

  return (
    <>
      <HeroSection topCasino={casinos[0]} />
      <CasinoList casinos={casinos} />
      <CasinoFeatures />
      <TrendingCasinos casinos={trendingCasinos} />
      <SafeGamblingSection />
      <RatingMethodology />
      <AboutUsSection />
    </>
  )
}
