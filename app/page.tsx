import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { PainPointsSection } from "@/components/pain-points-section"
import { ServiceSection } from "@/components/service-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <PainPointsSection />
        <ServiceSection />
        <div className="h-15 bg-foreground lg:h-20" aria-hidden="true" />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
