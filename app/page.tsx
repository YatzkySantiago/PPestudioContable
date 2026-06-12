import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { PainPointsSection } from "@/components/pain-points-section"
import { ServiceSection } from "@/components/service-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <PainPointsSection />
        <ServiceSection />
      </main>
      <SiteFooter />
    </div>
  )
}
