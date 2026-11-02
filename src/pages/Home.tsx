import { SEO } from '@/seo/SEO';
import HeroSection from './home/HeroSection'
import TrustSection from './home/TrustSection'
import WorkflowSection from './home/WorkflowSection'
import PlatformSection from './home/PlatformSection'
import LedgerSection from './home/LedgerSection'
import ReconciliationSection from './home/ReconciliationSection'
import IntelligenceSection from './home/IntelligenceSection'
import AutomationSection from './home/AutomationSection'
import SecuritySection from './home/SecuritySection'
import IndustriesSection from './home/IndustriesSection'
import IntegrationsSection from './home/IntegrationsSection'
import ExecutiveSection from './home/ExecutiveSection'
import WhySection from './home/WhySection'
import { EcosystemSection } from '@/components/sections/home/EcosystemSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main>
      <SEO />
      <HeroSection />
      <TrustSection />
      <WorkflowSection />
      <PlatformSection />
      <LedgerSection />
      <ReconciliationSection />
      <IntelligenceSection />
      <AutomationSection />
      <SecuritySection />
      <IndustriesSection />
      <IntegrationsSection />
      <ExecutiveSection />
      <WhySection />
      <EcosystemSection />
      <CTASection
        title="Your Financial Data Deserves a Better System."
        description="Bring structure, visibility, and intelligence to your financial operations with MetaLedger."
      />
    </main>
  )
}
