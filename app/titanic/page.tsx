import { AfterSection } from '@/components/case-study/titanic/after-section'
import { BeforeSection } from '@/components/case-study/titanic/before-section'
import { BriefSection } from '@/components/case-study/titanic/brief-section'
import { ComparisonSection } from '@/components/case-study/titanic/comparison-section'
import { CtaFooter } from '@/components/case-study/titanic/cta-footer'
import { Hero } from '@/components/case-study/titanic/hero'
import { ResultsSection } from '@/components/case-study/titanic/results-section'
import { SiteHeader } from '@/components/case-study/titanic/site-header'

export default function TitanicCasePage() {
  return (
    <div className="theme-titanic min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <BeforeSection />
        <BriefSection />
        <AfterSection />
        <ComparisonSection />
        <ResultsSection />
        <CtaFooter />
      </main>
    </div>
  )
}
