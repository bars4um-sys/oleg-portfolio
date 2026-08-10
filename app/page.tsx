import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Cases } from "@/components/cases"
import { Author } from "@/components/author"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Cases />
        <Author />
        <Services />
        <Process />
      </main>
      <SiteFooter />
    </div>
  )
}
