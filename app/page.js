import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SocialProofBar from '@/components/SocialProofBar'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import FeaturesSection from '@/components/FeaturesSection'
import FAQSection from '@/components/FAQSection'
import PricingSection from '@/components/PricingSection'
import FounderSection from '@/components/FounderSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <FAQSection />
      <PricingSection />
      <FounderSection />
      <Footer />
    </main>
  )
}
