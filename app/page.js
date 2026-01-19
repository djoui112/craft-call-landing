import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import FeaturesSection from '@/components/FeaturesSection'
// import SocialProofSection from '@/components/SocialProofSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      {/* <SocialProofSection /> */}
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
