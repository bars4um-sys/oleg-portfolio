import { BriefSection } from '@/components/case-study/scenario/brief-section'
import { CtaFooter } from '@/components/case-study/scenario/cta-footer'
import { Hero } from '@/components/case-study/scenario/hero'
import { MetricsSection } from '@/components/case-study/scenario/metrics-section'
import { ProcessSection } from '@/components/case-study/scenario/process-section'
import { ProgramSection } from '@/components/case-study/scenario/program-section'
import { AuthorSection } from '@/components/case-study/scenario/author-section'
import { ResultSection } from '@/components/case-study/scenario/result-section'
import { SiteHeader } from '@/components/case-study/scenario/site-header'

export default function ScenarioCasePage() {
  return (
    <div className="theme-scenario min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <BriefSection />
        <ProcessSection />
        <ProgramSection />
        <AuthorSection />
        <ResultSection />
        <MetricsSection />
        <CtaFooter />
      </main>
    </div>
  )
}
